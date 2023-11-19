---
layout: post
title: "5 Image Classification Examples (+ Datasets To Build Functions With Nyckel) "
date: 2023-08-07
author: nyckel
stage: false
featured: false
headliner: false
summary: The sky is (almost) the limit when it comes to applications of image
  classification. We share 5 unique image classification examples to get you
  thinking about how you could classify images with machine learning in your own
  business.
description: Explore 5 practical use cases of image classification ranging
  from detecting AI-generated images to identifying diseases in bean plants.
  Learn to build each with Nyckel.
image: /blog/images/image-classification-examples-datasets-to-build-functions.webp
---
Image classification is a type of computer vision that categorizes images into one of several buckets. For example, you could classify images of cars for sale by the view of the car in each image: “front,” “back,” “side,” “dash,” and so on. Organizations can also use image classification for more obscure cases ranging from [an augmented reality Batman game](https://www.nyckel.com/blog/image-classification-for-augmented-reality-games-spyscape-case-study/) to [identifying the time-series signals of North Atlantic right whales](https://www.nyckel.com/blog/time-series-signal-classification-using-computer-vision/).

In this post, we look at 5 practical use cases of image classification. In each of these examples, we’re also including a dataset you could use to actually [create the image classifier with Nyckel](https://www.nyckel.com/docs/image-classification-quickstart).

*If you're looking for even more image classification examples, explore our [pre-trained functions](https://www.nyckel.com/public-functions), which can help you deploy a model without having to collect your own data.*

## 1. Detect whether an image is AI-generated

With the rapid rise of [generative AI](https://www.nyckel.com/blog/building-ai-into-your-product-understand-the-difference-between-discriminative-and-generative-ai/), many people are [concerned about AI-generated images](https://www.nytimes.com/2023/04/08/business/media/ai-generated-images.html). Concerns range from using generated images to fool people into thinking fake scenarios are real, plagiarizing an artist or brand’s work, and risking the careers of creatives. People also tend to prefer transparency and would like to know whether an image is human-made or AI-generated when choosing to use or purchase a photo or piece of artwork. 

Fortunately, we can use AI to detect AI by training an image classification function to [detect whether an image is AI-generated or not](https://www.nyckel.com/blog/ai-image-detector-can-you-use-image-classification-to-spot-the-fakes/). 

**Build it with Nyckel:** Use the [CIFAKE dataset](https://www.kaggle.com/datasets/birdy654/cifake-real-and-ai-generated-synthetic-images?resource=download) created by Dr. Jordan J. Bird and Professor Ahmad Lotfi to build an image classifier to detect whether or not an image is AI-generated.

{% include figure.html url="../images/detect-AI-generation-image-classification-example.webp" alt="Detect if image is AI-generated with image classification"%}

## 2. Streamline the collection of waste materials 

Waste management companies need to understand the various types and capacities of garbage cans on their routes in order to remove garbage quickly and efficiently.  An image classifier is an effective tool for this scenario since you can use it to analyze images of garbage cans in various states (empty, full, or scattered) to help determine optimal collection logistics.

This data empowers users to identify patterns, assess usage trends, and optimize garbage collection routes for a more efficient waste management process.

This example is a form of multi-label classification, sometimes called [image tagging](https://www.nyckel.com/blog/glossary-of-computer-vision-function-types/). In this example, each image of the garbage containers can be tagged with multiple labels (e.g., "full" and "scattered"). In the other use cases in this article, the images can only be tagged with one label (also called [multi-class classification](https://www.nyckel.com/blog/multi-class-classification-vs-multi-label-classification-key-differences-how-to-choose/)). For example, an image is either "AI-generated" or "not AI-generated." 

**Build it with Nyckel:** Use [Hugging Face’s outdoor garbage dataset](https://huggingface.co/datasets/TrainingDataPro/outdoor_garbage_dataset) to build an image classifier that optimizes your waste management system.

{% include figure.html url="../images/multi-label-classification-example.webp" alt="Streamline waste management operations with image classification"%}

## 3. Detect deadly diseases in bean plants

Millions of people around the world depend on beans for sustenance, particularly in Latin America, Africa, and parts of Asia.

Unfortunately, beans are vulnerable to several devastating diseases, including angular leaf spot and rust, that are capable of causing yield losses of up to 100%. Needless to say, the sooner we can detect these diseases, the sooner we can save a harvest. While we can spot angular leaf spot and rust with the naked eye, image classification can be a far superior approach to detecting whether a bean plant is afflicted.

**Build it with Nyckel:** Use [Hugging Face’s beans dataset](https://huggingface.co/datasets/beans) to build an image classifier to detect angular leaf spot and bean rust in photos of bean plants. 

*This use case is similar to how our customer [Gardyn uses an image classifier](https://www.nyckel.com/blog/gardyn-reduces-workload-by-70-while-growing-2x-after-implementing-computer-vision/) to monitor the health of its customers’ plants.*

{% include figure.html url="../images/detect-plant-disease-image-classification-example.webp" alt="Detect plant disease with image classification"%}

## 4. Classify marine animals

Some of the key responsibilities of marine researchers and conservationists are to keep tabs on the health, behavior, and environment of various marine species. In a landscape as vast as the sea, image classification can be instrumental in improving the efficiency and accuracy of these efforts.

For example, an image classifier trained on images of marine wildlife could help provide a visual inventory of marine species to aid in species monitoring, population estimates, and biodiversity research and provide insight that scientists could use to create habitat maps.

**Build it with Nyckel:** Use [Kaggle’s marine animals dataset](https://www.kaggle.com/datasets/mikoajfish99/marine-animal-images) to build an image classifier to identify different types of marine species, including jellyfish, starfish, lobster, and squid.

{% include figure.html url="../images/identify-marine-animals-image-classification-example.webp" alt="Identify marine animal with image classification"%}

## 5. Locate littered roads in a city 

Part of a city’s job in maintaining safe roadways is removing debris and litter from its streets and highways. A city could rely on its crews to remove trash as they come across it or wait for residents to report areas that need attention. 

A more efficient way to detect littered roads would be to use street cameras to take pictures of the streets and highways and then use an image classifier to spot whether an image contains litter or not. Using that data, the city could send a crew to the location of the littered road to clear it.

**Build it with Nyckel:** Use [Kaggle’s clean/littered roads dataset](https://www.kaggle.com/datasets/faizalkarim/cleandirty-road-classification) to build an image classifier to detect whether a road is clean or littered.

{% include figure.html url="../images/locate-littered-roads-image-classification-example.webp" alt="Identify littered roadways with image classification"%}

## Could image classification solve your challenge?

If you have a business challenge that involves categorizing visuals into different groups, there’s a good chance that image classification could not only speed the process but also improve accuracy. We’ve designed Nyckel to be easy, fast, and accurate (and, dare we say, fun?) for non-ML experts who need to use ML to solve business problems.

Curious if Nyckel could work for your use case? [Sign up for a free account](https://www.nyckel.com/console) to give it a try, and [check out our image classification quick start](https://www.nyckel.com/docs/image-classification-quickstart) if you need help getting started.

Not sure image classification is the right function type for your problem? Check out our other computer vision products: [object detection](https://www.nyckel.com/docs/detection-quickstart), [image tagging](https://www.nyckel.com/docs/image-tags-quickstart), [image search](https://www.nyckel.com/docs/image-search-quickstart), and [optical character recognition](https://www.nyckel.com/docs/ocr-quickstart).