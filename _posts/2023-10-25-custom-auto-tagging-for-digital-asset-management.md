---
layout: post
title: Customized Auto-Tagging for Digital Asset Management
date: 2023-10-25
author: george
stage: false
featured: true
headliner: false
summary: AI-driven auto-tagging of digital assets (like images) enables search,
  discovery, and content-based workflows. Generic auto-tagging can be
  frustrating because it doesn't handle the specific tags you are interested in.
  Custom trained auto-tagging models can help, and these models can be trained
  in minutes, with minimal data, and without any AI expertise.
description: AI auto-tagging of digital assets enables search, discovery,
  and content-based workflows. Discover how custom models can be trained in
  minutes with no AI expertise.
image: /blog/images/image-classification-examples-datasets-to-build-functions.webp
---
## TL; DR:

* AI-driven auto-tagging of digital assets (like images) aids in search, discovery, and workflow routing.
* Generic auto-tagging is often frustrating because it adds noise and doesn't provide the tags you are looking for. 
* Custom models that are trained on a handful of manual tags can tag exactly what you are looking for.
* It is a common misconception that training custom models require tons of data, a team of AI experts, and a lot of time.
* Custom auto-tagging can be implemented in hours, not weeks, and without any AI expertise. I show you how you can do it in three minutes [in this short video.](https://www.loom.com/share/b71afe551eab40e3ab8baefd1f86a16a?sid=e54f559e-91c2-4f69-91c6-6c0e056e06f0)

## Auto-tagging in digital asset management

Digital asset management (DAM) platforms help curate and manage large amounts of assets like photos. Businesses use DAM platforms to manage images for e-commerce, marketing departments, product inventory, art, photography, and much more.

Tagging images with metadata is important in DAM for two reasons:

* **It allows search and discovery.** For example, if you want to find images of "yellow Jeep Wranglers on a beach," one way to do that is through [semantic search](https://www.nyckel.com/semantic-image-search), which allows you to search a database of images using text. However, tagging the images with metadata about the contents of the image is another common way to enable this.
* **It enables workflows based on the contents of the image.** For example, if you want to kick off a process to remove the background in all images tagged with "sneakers."

Even though tagging is important, it is infeasible to tag large numbers of images manually. As a result, DAM platforms and users have been turning to AI-based auto-tagging to tag their assets without much effort.

## The problem with generic auto-tagging

Several APIs provide generic auto-tagging of images. For example, [this one](https://cloud.google.com/vision/docs/drag-and-drop) from Google, [this one](https://aws.amazon.com/rekognition/image-features/) from AWS, and [this one](https://portal.vision.cognitive.azure.com/demo/generic-image-tagging) from Microsoft Azure. These APIs are easy to use and integrate into your DAM solution, but they have two big flaws:

* They don't always give you the tag(s) you care about.
* They add noise by adding tags that you don't care about.

Let's look at an illustrative example. Say you manage images of construction equipment, and you want to tag photos of [telehandlers](https://en.wikipedia.org/wiki/Telescopic_handler). Let's look at the tags that Google's API provides for an image of a telehandler:

{% include figure.html url="../images/generic_tagging_dam.webp" alt="Google's tagging AI's response to an image of a telehandler"%}

There are two things worth noting:

* Google doesn't tag the image as a telehandler (or anything close).
* It returns tags like "machine," which you don't care about because all your photos are of machines.

## The solution: custom-trained auto-tagging

Unlike generic auto-tagging, you can train custom AI models to tag the exact things you care about and nothing else. Let's look at some use cases we've seen from our customers:

* Tagging stock photography that matches a particular aesthetic
* Tagging content with [IAB taxonomy](https://www.nyckel.com/blog/iab-classification/)
* Make, model, and viewport tagging of car photos ([this public model](https://www.nyckel.com/public-functions/vehicle-models-image-classifier) does just that)[](https://www.nyckel.com/public-functions/vehicle-models-image-classifier)
* Detecting rooms and features in real estate photos. For example, detecting that a photo is of a kitchen and that it has an island and stainless steel appliances.
* [Custom logo detection](https://www.nyckel.com/blog/logo-identifier-how-to-detect-your-logo-with-a-custom-image-classifier/) for smaller brands that are not well-served by generic logo detectors

## Myths about custom-trained models

You might wonder why everyone doesn't use custom-trained auto-tagging if it's so effective. Unfortunately, there are a few common **misconceptions** about what it takes to implement it that hold people back:

* **Misconception 1: You need a lot of data to train a custom model**. Modern models can be fine-tuned to your use case, using just a tiny amount of data. In this [image classification benchmark](https://www.nyckel.com/blog/image-classification-benchmark-google-vs-aws-vs-hugging-face-vs-nyckel/), we saw ~75% accuracy from just *five* examples per tag. 
* **Misconception 2: You need a team of AI experts to implement it**. AutoML platforms like Nyckel do the work of an AI expert and hide the gory details behind a simple [API](https://www.nyckel.com/docs). Here is an example in python where we train a model to distinguish cats from dogs, and then invoke it:

```python
from nyckel import User, ImageClassificationFunction

user = User(client_id="...", client_secret="...")

func = ImageClassificationFunction.new("IsCatOrDog", user)

# provide a few examples of cats and dogs to train a model
func.create_samples([
    ("cat1.jpg", "cat"),
    ("cat2.jpg", "cat"),
    ("dog1.jpg", "dog"),
    ("dog2.jpg", "dog")])

# check if an image has a cat or dog
prediction = func.invoke("cat_or_dog.jpg")
```

* **Misconception 3: It takes a lot of time to implement custom auto-tagging**: Nyckel's models train in roughly 60 seconds. [Several of our customers](https://www.nyckel.com/customers) have gone from finding us to using their model in production within 24 hours. Some of our customers have trained 3,000+ models because it's so easy, fast, and inexpensive.

These myths were all true a few years ago, so they are not outright lies. But recent developments in AI research and [user-friendly AutoML platforms](https://www.nyckel.com/blog/automl-platform-9-features-your-solution-should-include/) mean they are not true anymore and should not hold you back. 

## It doesn't have to be that hard

Here is a short video showing me training, deploying, and using a custom trained model to detect telehandlers, all in under three minutes!

<p align="center"><iframe style="text-align:center" width="512" height="421" src="https://www.loom.com/embed/b71afe551eab40e3ab8baefd1f86a16a?sid=1fa7d442-c411-4f93-ab03-36112bbef114" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen loading="lazy"></iframe></p>

## Get in touch

[Try us out](https://www.nyckel.com/console) for free or [get in touch](mailto:feedback@nyckel.com) with our team to chat about your DAM use case.
