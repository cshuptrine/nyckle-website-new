---
layout: post
date: 2021-10-19
title: Local Development and Validation of Nuget Packages
author: george
description: Learnings from setting up a local development workflow for developing and validating nuget packages
---

*Why is an ML company talking about nuget instead of PyTorch or transformers? Because we are C# nerds and because production ML is a [whole lot more](https://www.nyckel.com/blog/ml-too-hard-for-software-developers/) than training a model. You shouldn't need to know anything about PyTorch, tensors, or GPUs to use ML. More on that in this [short video](https://www.youtube.com/watch?v=BzawKd_7WDY).*

___

At Nyckel, we use C# extensively for critical parts of our stack. We publish a set of internal .NET libraries that
are then used by our tools and services. Since nuget is the preferred .NET package manager, we publish and
consume these libraries as nuget packages hosted on a private nuget repo on
[AWS CodeArtifact](https://aws.amazon.com/codeartifact/).

## Motivation

We insist on having a local development workflow for our stack. This is for two reason:

* We want to detect problems with code changes as early as possible.
* We want to keep our change --> verify --> fix cycle time as short as possible.

Naturally, we wanted a local development experience for verifying changes to our nuget libraries against their
consumers. Setting this up took a surprising amount of research and effort. This post attempts to save you the
same effort by showing you where we ended up.

## Setup

For the rest of the post, let's assume we have the following:

* A `Nyckel.Common` C# library that doesn't depend on any other library we author.
* A `Nyckel.Http` C# library that depends on `Nyckel.Common`.
* Both libraries live in the same github repository called `dotnet-libraries`. The repository has a `.sln` solution file
that contains both projects.
* A CI/CD setup that automatically publishes the libraries on each commit to `main`. The libraries are published to AWS CodeArtifact and versioned as `1.0.<ci-build-number>`.
* A `Nyckel.Server` C# service in a separate github repository called `server`. It depends on a recent
`1.0.<ci-build-number>` version of `Nyckel.Http`.
* `dotnet` cli and [SDK 5.0](https://dotnet.microsoft.com/en-us/download/dotnet/5.0) installed on the local development
machine. Instructions below have only been tested on Mac and Linux, but I don't foresee any problems following along on
Windows.

## Local Development Requirements

We wanted the following the following local-development workflows to work in the above [setup](#setup):

1. Make a local, uncommitted breaking change to `Nyckel.Common` that affects `Nyckel.Http`. Detect the breaking change
when building the `dotnet-libraries` repo. Make the corresponding change to `Nyckel.Http` and verify that it fixes the
build locally.
1. Make enhancements to `Nyckel.Http`. Test `Nyckel.Server` locally using the enhanced `Nyckel.Http` before we
commit those changes. We want to do this even though we have comprehensive unit-tests for our libraries.
1. Achieve the above two with minimal cycle time and cognitive overhead. Existing local development workflows should
require minimal modifications.

## Solution

The solution requires setting up project dependencies for inter-library dependencies, and a local nuget repository for
quick testing of library-consumer dependencies. Below I walk through those, build and package steps, and some gotchas
like nuget package caching.

### Project Dependencies

`Nyckel.Http.csproj` has the following lines it it:

```xml
<ItemGroup>
  <ProjectReference Include="..\Common\Nyckel.Common.csproj" />
</ItemGroup>
```

You'll notice that there's nothing special here - it's just the usual project reference from `Nyckel.Http` to
`Nyckel.Common` (remember that they are in the same git repository, so the relative path reference works). We were
initially worried that it would result in `Nyckel.Common.dll` being copied over instead of creating a nuget reference.
But, as we shall see when we [test it out](#testing-the-workflows), it actually does the right thing.

This also ensures that `Nyckel.Common` is always built before `Nyckel.Http`. This fulfills requirement #1 above -
a breaking change to `Nyckel.Common` will be detected when building the `dotnet-libraries` repo. We can make the
corresponding change to `Nyckel.Http` and re-build to verify that it works.

### Local Nuget Source

For requirement #2, to minimize cycle time, we set up a local nuget repository. Run the following:

```shell
dotnet nuget add source ~/nuget --name local
```

This sets up a local nuget repository at `~/nuget` and names it `local`. We will soon be pushing to it when building
locally.

### Local Nuget Package Version and Nuget Caching

CI systems usually have a monotonically increasing build number that you can use to version your nuget packages and
publish them as immutable artifacts. We currently use a version number of the form `1.0.<build-number>`. For local
builds, however, we don't care about immutability and want to avoid the cognitive overhead of incrementing some version
number when publishing *and* consuming. Instead, we always use the version `1.0.0-local`.

This presents a challenge - nuget caches recently used packages so that they don't have to be
fetched from their (usually remote) repositories each time. Unfortunately, the cache is used even for locally
published packages. Given this, and given our fixed `1.0.0-local` version number, we could end up in a situation
where `Nyckel.Server` is using an older cached version of `Nyckel.Http`. To get around this, we add a step to the
library `.csproj` files that clears the local cache before creating a new nuget package. Let's look at this next.

### Csproj File Additions

In the `dotnet-libraries` repo, we have a `Nuget.targets` file that contains the following:

```xml
<Project>
  <PropertyGroup>
    <IsPackable>true</IsPackable>
    <NYCKEL_NUGET_VERSION Condition="'$(NYCKEL_NUGET_VERSION)' == ''">1.0.0-local</NYCKEL_NUGET_VERSION>
    <PackageVersion>$(NYCKEL_NUGET_VERSION)</PackageVersion>
  </PropertyGroup>

  <Target Name="DeleteLocalCache" BeforeTargets="Pack">
    <RemoveDir Directories="$(NugetPackageRoot)/$(PackageId.ToLower())/1.0.0-local"/>
  </Target>
</Project>
```

This does a few things:

* `IsPackable` indicates that the project is a type (library) that can be packaged into a nuget package. See
[dotnet pack](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-pack).
* A `NYCKEL_NUGET_VERSION` environment variable is used as the nuget package version. It is set by the
[CI build script](#ci-package-and-publish). If it's not set, we assume that this is a local build and default to
`1.0.0-local`.
* The `DeleteLocalCache` target runs before the `Pack` step (which creates a nuget package) and deletes the cache
for this package.

In each of our library `.csproj` files (like `Nyckel.Common.csproj` and `Nyckel.Proxy.csproj`), we add the following
snippet to include the above file:

```xml
<Import Project="../Nuget.targets" />
```

### Local Build

To build libraries locally, we run the following from the root of the `dotnet-libraries` project:

```shell
dotnet build
```

Nothing fancy - just the normal build command. It works because we have a `.sln` solution file in the repo root,
and because the project dependencies (and build order) are encoded in `.csproj` files. We followed instructions
[here](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-sln) to use the `dotnet sln` command to create a solution file and add projects to it.

### Local Package and Publish

To create nuget packages and publish to the local nuget repository, we run the following:

```shell
# Creates nuget packages (in .nupkg files) in ./nupkgs
dotnet pack -o nupkgs
# Publishes all nuget packages in ./nupkgs to the local nuget repository
dotnet nuget push 'nupkgs/*.nupkg' --source local
```

We can then modify `Nyckel.Server.csproj` to use version `1.0.0-local` of `Nyckel.Http`, test locally, then
commit changes to `dotnet-libraries`. We then change `Nyckel.Server.csproj` back to using a non-local version of
`Nyckel.Http`. If we forget to do this for some reason, the error will be caught as a build failure in the CI system.

### CI Package and Publish

On our CI system we set up `AWS CodeArtifact` as a nuget repo named `nyckel/libraries`. We run the following from
the root of the `dotnet-libraries` project:

```shell
export NYCKEL_NUGET_VERSION=1.0.$CI_BUILD_NUMBER
dotnet pack -c Release -o nupkgs
dotnet nuget push 'nupkgs/*.nupkg' --source nyckel/libraries
```

When we want `Nyckel.Server` to use the latest version of `Nyckel.Http`, we update the version in
`Nyckel.Server.csproj` to `1.0.$CI_BUILD_NUMBER` for the latest CI build of the `dotnet-libraries` repo.

## Testing the Workflows

To make sure that it all works as expected, we ran the following steps:

1. Make a change in `Nyckel.Common` that breaks `Nyckel.Http`.
1. Run [local build](#local-build). Verify that the build breaks.
1. Fix the build in `Nyckel.Http`.
1. Re-run [local build](#local-build). Verify that the build passes.
1. Run [local package and publish](#local-package-and-publish).
1. Use `Nuget Package Explorer` ([Web App](https://nuget.info/packages) or [Windows App](https://apps.microsoft.com/store/detail/nuget-package-explorer/9WZDNCRDMDM3?hl=en-us&gl=us)) to open up `dotnet-libraries/nupkgs/Nyckel.Http.1.0.0-local.nupkg`. This `.nupkg`
file would have been created in the previous local package step. Go to the `Dependencies` tab and make sure there is
a dependency on `Nyckel.Common`. Expand the folders in the `Contents` tab and make sure `Nyckel.Common.dll` is not
included.
1. Change `Nyckel.Server.csproj` locally to use version `1.0.0-local` of `Nyckel.Http`. Run `Nyckel.Server` locally.
This will ensure that the nuget cache is populated.
1. Make a change in `Nyckel.Http` that breaks `Nyckel.Server`.
1. Re-run [local package and publish](#local-package-and-publish).
1. Re-run `Nyckel.Server`. Verify that the build breaks.

## Conclusion

As you can see, getting everything to work is not trivial, even without all the research and trial-and-error it took
to get here. Despite the level of effort, we are happy with our setup. If you have similar requirements, I hope you
find this write-up helpful.
