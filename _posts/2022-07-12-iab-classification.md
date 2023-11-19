---
layout: post
date: 2022-07-12
title: IAB Classification of Text and Images Using Machine Learning
author: george
description: IAB is a content taxonomy that is used by content publishers to organize their content in a consistent way. In this post we show you how to classify text and image content into IAB categories without any labeled data.
image: /blog/images/2022/iab-hero.webp
image_alt: Chess pieces being categorized
---

If you are reading an article about vintage motorcycles, you are likely more interested in seeing ads for the latest
Triumph Thruxton cafe racer than about woodworking supplies. For this reason, content publishers are
interested in classifying content into some shared high-level categories. The Interactive Advertising Bureau
([IAB](https://www.iab.com/)) publishes a common set of [categories](https://www.iab.com/guidelines/content-taxonomy/) that is
used for this purpose. The categories are hierarchical and contain about 600 categories at the lowest level.
In this post, we look at how you can use Machine Learning (ML) to automatically categorize text and image data into IAB
categories without any labeled data or ML expertise.

## The Challenge

Manually categorizing online content is expensive and doesn't scale, leading folks to look for automated solutions that
use ML. When they do, they usually face a couple of challenges:

* Given the large number of categories, it's laborious to create labeled data for training a ML model
* Most ML systems and services require days or weeks of learning and setup time for non-experts

## The Solution

We are going to use Nyckel's [text search](..{% post_url 2022-05-26-a-quick-look-at-text-search-functions %}) functionality to classify image and text data into IAB categories in just minutes. Text search works in the following way:

* You upload a set of test samples that form your "search set". In this case, we will use IAB categories as the search
set.
* You query the search set with text or image data - referred to as "query data". Nyckel finds the closest semantic
matches to your query data among your search set.

## Demo

The clickable demo below shows how fast this is to set up using Nyckel without any ML or cloud infrastructure expertise.

{% include arcade.html url="https://demo.arcade.software/oFZ1Oq3hJbEjj1sqPzX9" caption="Create an IAB classification function" %}

Some things to keep in mind:

* The IAB taxonomy is a hierarchy of categories. This demo uses categories from the lowest level, with each level in the hierarchy combined in the form "Level 1, Level 2, Level 3". Depending on your use-case, you may only want to categorize at a higher
level of the hierarchy.
* Deep neural networks that process natural language usually have a limit of how long the text can be. We recommend you
keep your query text to about 128 words. If your document is larger than that we suggest categorizing it in chunks
and aggregating the resulting categories, or just categorizing the introductory paragraph, which usually provides an
meaningful overview of the content.

## How it Works

To delve a bit into the technical details, Nyckel uses deep neural networks to extract an "embedding" for
the search set and query data. These embeddings are high-dimensional vectors of floating point numbers that capture a
semantic understanding of the data. This means that two semantically similar pieces of data will produce embedding
vectors that are close to each other in the high-dimensional vector space. When querying the search set, we find the
embedding vectors in the search set that are closest to the embedding vector for the query data. Peter Gao, the CEO of
[Aquarium Learning](https://www.aquariumlearning.com/), has an [excellent blog post](https://medium.com/aquarium-learning/the-unreasonable-effectiveness-of-neural-network-embeddings-93891acad097) about embeddings if you'd like to learn more.

## Try it out

You can create a [free Nyckel account](https://www.nyckel.com/console) and use [this text file](../data/IABTaxonomy.tsv) of IAB
categories to create your own IAB classification function as shown in the demo above. The API tab on your function
will show you how invoke your function using an API, but here is one example of getting the top 2 matching categories
for an image:

```bash
curl -X POST \
  -H 'Authorization: Bearer <authToken>' \
  -H 'Content-Type: application/json' \
  -d '{"data":"http://url-for-image"}' \
  https://www.nyckel.com/v0.9/functions/<functionId>/search?sampleCount=2&includeData=true
```
