---
layout: post
title: What Is Image Recognition? (And How It Differs From Image Classification)
date: 2023-11-09
author: george
stage: false
featured: true
headliner: false
description: Image recognition uses AI to identify patterns in images. But
  its means is vague, which causes confusion. Learn more about what image
  recognition really means.
image: /blog/images/what-is-image-recognition-header-image.webp
---
Image recognition is a term often used to describe using machine learning or computer vision to recognize and identify what’s in an image. Even though people use the term image recognition frequently, its meaning is vague, which can cause confusion and misunderstanding. For example, when someone says image recognition, they likely actually mean one of the following [types of computer vision](https://www.nyckel.com/blog/glossary-of-computer-vision-function-types/):

* **Image classification:** Assigns a *single* label to an entire image. For example, you can train an image classification function to [determine whether an image is AI-generated or not](https://www.nyckel.com/blog/ai-image-detector-can-you-use-image-classification-to-spot-the-fakes/). 
* **Image tagging:** Assigns *multiple* tags (i.e., labels) to an image. For example, you can train an image tagging model to identify all the colors in an article of clothing.
* **Object detection:** Locates and identifies instances of specific objects in images or videos. For example, you can train an object detector to [identify how many instances of weeds are in a plot of grass](https://www.nyckel.com/blog/are-bounding-boxes-necessary-for-object-detection/).

Technically speaking, these computer vision function types use either [Convolutional Neural Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network) (CNNs) or [vision transformers](https://medium.com/data-and-beyond/vision-transformers-vit-a-very-basic-introduction-6cd29a7e56f3#:~:text=What%20is%20a%20Vision%20Transformer,and%20other%20computer%20vision%20tasks.) (ViT) to identify patterns in the pixels or patches of an image. CNNs was widely accepted as the standard model architecture for image classification, but recent advancements have vision transformers emerging as superior.

## What do you really mean by image recognition?

If you’ve set out to solve an image recognition problem, your first task is to determine which computer vision function type you really mean. To do this, it’s helpful to think about what you’re doing as a “black box” function where your input is an image. Then, think about what you want your output to be. For example:

* **Do you want to label the image with one label out of two or more possible choices?** If so, you need to create an image classification function (also called multi-class classification).

  For example, if you’re a car dealership that wants to use AI to label its vehicle inventory with the brand name of each car, you could create an image classification function. The input image would be the photo of the vehicle and the output labels would be all of the brands that you stock in your dealership. For example: Ford, Honda, Toyota, Kia, Hyundai.

{% include figure.html
url="../images/image-recognition-honda-cars.webp"
alt="Image classification to identify car make"
description="Image classification to identify car make."
width=80 %}

* **Do you want to label the image with multiple labels or tags?** If so, you need to create an image tagging function (also called [multi-label classification](https://www.nyckel.com/blog/multi-class-classification-vs-multi-label-classification-key-differences-how-to-choose/)).

  For example, if you’re an online retailer that wants to speed the process of tagging product inventory with all of its colors, you could create an image tagging function. The input image would be the article of clothing, and the output labels would be all of the possible colors. For example: yellow, orange, red, pink, purple, blue, green, black, white, brown.

{% include figure.html url="../images/image-recognition-boy-blue.webp" alt="Image tagging to automatically identify colors on clothing" width=80 %}

* **Do you want to pinpoint the exact location of one or more specific objects in an image?** If so, you need to create an object detection function.

  For example, if you are a brand manager that wants to monitor how your product inventory is displayed on store shelves, you could use an object detector to identify all instances of your products, like Cheerios boxes.

{% include figure.html url="../images/function-example.webp" alt="Object detection to identify products on store shelves" description="Nyckel object detector identifies Maple Cheerios on a store shelf." %}

While any of these computer vision function types *could* be referred to as image recognition, it’s best to be more specific, so that you can identify the best approach for solving your challenge and which machine learning services are best designed to support you.

## Which image recognition service is best for you?

Once you have a better idea of the type of image recognition you need, you can start to look for machine learning services that can help you solve your problem. One distinction to be aware of as you search for an ML service is whether pretrained models will work for your use case or if you’ll need to build a custom model.

**Pretrained models** have already been trained on a large dataset, so you can use these models out of the box to make predictions about your own dataset. In other words, you don’t need to come up with your own training data to train the model. The downside of pretrained models is that, since they haven’t been trained on your unique data, they may not perform as well as you’d like them to when you test them on your own data. Plus, you are constrained to using the output labels that the model was trained on, which may or may not work for your use case. One example of where this can be problematic is when you need to [label your digital assets with industry-specific terminology.](https://www.nyckel.com/blog/custom-auto-tagging-for-digital-asset-management/)

Popular services that offer pretrained models include [Vision AI from Google](https://cloud.google.com/vision?hl=en), [Vision Studio from Microsoft Azure](https://portal.vision.cognitive.azure.com/gallery/featured), and [Amazon Rekognition Image from AWS](https://aws.amazon.com/rekognition/image-features/). While Nyckel’s core product helps customers build custom ML models, we also have a [library of pretrained models available](https://www.nyckel.com/public-functions).

**Custom ML models** allow you to train your model using your own training data and choose exactly what you’d like for your output labels. Contrary to popular belief, custom ML models do not usually need a ton of training data to perform exceptionally well. This is due largely in part to transfer learning, which allows you to fine-tune and adapt pretrained models when building a custom model. The best custom ML services also allow you to [easily retrain your model](https://www.nyckel.com/blog/introducing-invoke-capture-integrated-active-learning/) as you learn where your model is underperforming.

Popular services that allow you to build custom models include [Nyckel](https://www.nyckel.com/computer-vision-api) (👋), [Ximilar](https://www.ximilar.com/), [Roboflow](https://roboflow.com/), [Levity](https://levity.ai/), [Clarifai](https://www.clarifai.com/), [Google Vertex AI](https://cloud.google.com/vertex-ai?hl=en), [Azure Custom Vision](https://azure.microsoft.com/en-us/products/ai-services/ai-custom-vision), and [AWS Rekognition Custom Labels](https://aws.amazon.com/rekognition/custom-labels-features/?nc=sn&loc=3&dn=4). (We did a [comparison of all of these computer vision SaaS players](https://www.nyckel.com/blog/computer-vision-saas-landscape-comparison-of-the-top-9-players/) if you’re interested in seeing how they perform against each other.)

Interested in building a custom [image classification](https://www.nyckel.com/docs/image-classification-quickstart), [image tagging](https://www.nyckel.com/docs/image-tags-quickstart), or [object detection](https://www.nyckel.com/docs/detection-quickstart) function? [Give Nyckel a try for free](https://www.nyckel.com/console), and reach out to us at any time for support with your use case.