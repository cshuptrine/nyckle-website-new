---
layout: post
date: 2022-04-29
title: Introducing Nyckel Image Search Functions
author: oscar
summary: Nyckel Image Search functions enable cross-modal semantic search of images and text using the latest Deep Learning technology. Get started with a few simple API commands.
og_image: /blog/images/2022/nft-finder-screenshot.jpg
---

We just released a new function type: Search! Our Search functions complement our Classification functions and broaden the use-cases supported by Nyckel. In this blogpost I discuss what they are, why we released them, and how they work.

## What is a search function?

A search function lets you upload a “gallery” (set) of images and then run queries on that using either a new image or a text string. For example, if your gallery contains different types of vehicles, you can search for “blue sedans” to find, well, blue sedans. Or you can search by providing an image that looks similar to the images you are trying to retrieve.

Nyckel lets you define your own gallery and conduct searches with a few simple API calls. We support galleries up to 10s of millions of images while maintaining around 300-500ms query latency. And as usual, we abstract away the machine learning and infrastructure minutia.

{% include figure.html url="../images/2022/image-search-api-example.png" link="https://www.nyckel.com/docs" alt="Nyckel API documentation" width = 90 %}

## Some use-cases

We added Search due to popular demand from our customers. As it turns out, there are many situations where finding similar images is useful! Here are examples inspired by our beta customers.

- **Near duplicate detection.** Duplicate detection among images is tricky. Small changes in light conditions, resolutions or a few pixels can throw off measures based on the raw pixel content. In such situations Nyckel search can help because our deep learning based technology will match on the “semantic” content rather than raw pixel count.
- **Text based search for web stores.** Webstores and marketplaces typically have large amounts of image content. For such sites, allowing image search based on free-form text queries can be a powerful value-add. For example, a used-car site could allow searches like "blue sedan with gray interior" without having to ask sellers to manually enter every piece of metadata.
- **Extreme classification.** Nyckel Classification functions support up to 100s of classes and require at least 2 examples per class. This tends to cover most classification situations. However, in rare cases there is a need to classify across 1000s of classes, and you may only have 1 example for each class. This scenario is sometimes called “extreme classification” and can be solved using a Search function. Simply find the closest match in the gallery and assign the label of that match to the query. Voila!
- **Archive discovery.** Let’s say you are an engineer at a company that manufactures plastic containers. Your company has been around a long time and has 1000s of legacy CAD drawings in their database. Let’s now say you get a new order and you want to see if there is a previous similar design that you can start from. Nyckel image search enables you to do just that.
- **Photographic barcodes.** Barcodes and RFID tags are great ways to link a physical object to a database. But there are many situations where they are impractical or haven’t been applied yet, for example in manufacturing or in field work. There are also situations where they can be manipulated, for example in stores that sell expensive watches. In these situations image search is a great alternative. Instead of scanning a barcode you just take a picture of the object itself and instantly retrieve similar objects from the database. You can quickly verify that the search is correct and then retrieve the desired meta-data like product name & number.

## Under the hood

Our search functions are both "semantic" and “cross-modal”. They are “semantic” because they search the image content (in the sense that a human would describe it) rather than the raw pixels. And they are “cross-modal” because we allow both image and text queries. These features are enabled by two key innovations.

First, we use deep learning to transform the image and text into a “joint embedding space". This is a vector-space that is configured such that the order of euclidean distances in that space corresponds to the order of semantic distances between the actual objects. In other words: if two images show objects that are similar to the human eye, their vector embeddings are close to each other. This is an active area of research and the quality of the embeddings are improving rapidly. Breakthrough work includes for example [CLIP](https://openai.com/research/clip) from Open AI.

Second, we use modern vector search technology that enables searching huge vector spaces very quickly. I’m not going to go into all the details, but [this blogpost from Meta](https://www.pinecone.io/learn/vector-database/) provides some of the relevant background.

## A demo application

To demonstrate the power of our search functions, we created one for NFTs (Non Fungible Tokens). The function gallery contains over 3 Million NFTs and can be searched by both text and image queries. Go ahead and [give it a try](https://www.nyckel.com/nft-finder/)!

{% include figure.html url="../images/2022/nft-finder-screenshot.jpg" link= "https://www.nyckel.com/nft-finder/" alt="NFT finder" width=95 %}

## In conclusion

We created Search functions to complement our Classification functions and broaden the type of use-cases Nyckel supports. Access is open so go ahead and give it a try today!
