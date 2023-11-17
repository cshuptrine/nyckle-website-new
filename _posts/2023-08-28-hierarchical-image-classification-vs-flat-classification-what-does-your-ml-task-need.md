---
layout: post
title: "Hierarchical Image Classification vs. Flat Classification: What Does
  Your ML Task Need?"
date: 2023-08-28
author: oscar
stage: false
featured: false
headliner: false
seo_title: Hierarchical Image Classification vs. Flat Classification
summary: In this article, we explain the differences between hierarchical and
  flat image classification and make the case for why a flat structure is often
  the better choice for many use cases.
seo_description: We explain the differences between hierarchical image
  classification and flat and make the case for why a flat structure is often
  the better choice.
og_image: /blog/images/hierarchical-image-classification-header-image.png
---
The objective of image classification is to categorize an image into one or more labels of your choosing. When building an image classifier, you can either use hierarchical image classification or flat image classification. 

In this article, we explain the differences between hierarchical and flat image classification and make the case for why a flat structure is often the better choice for many use cases.

## What is hierarchical image classification?

Hierarchical image classification organizes categories using a tree structure. At the top of the tree, you start by classifying an image into broad categories. As you can branch off from that initial category, the categories become more specific, ultimately working toward the level of granularity you’re aiming for in your desired output from the model. 

For example, let’s consider a use case where you are classifying a dataset of car images by their make and model, and your model is trying to classify a photo of a Toyota Camry. In a hierarchical classifier, your model would first predict the brand/make of the car (Toyota, Honda, Ford, etc.). Next, it predicts the vehicle type (sedan, SUV, truck, etc.). And then finally, it predicts the model of the car (e.g., Camry, Corolla, Prius, etc.). This means you end up with **a lot** of models. In the example below, you have 1 model in Level 1, N models in Level 2 (where N is the number of brands in Level 1), and so on.

{% include figure.html url="../images/hierarchical-classificationexample.png" description=" In a real example, you’d likely have many more brands, and thus, many more models to manage." alt="hierarchical image classification example"%}

## What is flat image classification?

Flat image classification bypasses the granular steps of the different levels used in hierarchical classification and goes directly from input image → desired output label. Using the same example above, the image classifier would immediately classify the image with the make & model (Toyota Camry), without making more granular decisions along the way (like whether the car is a sedan or SUV). If you really needed to know the vehicle type (sedan), you could work backward from the output label of “Toyota Camry” to infer what it is.

{% include figure.html url="../images/flat-classification-example3.png" description=" In a real example, you’d likely have many more output labels (as many labels are there are car types to classify)." alt="Flat image classification example"%}

## Are hierarchical classifiers more accurate?

The most significant benefit of a hierarchical classifier is that you can retrain the specific points at which the model isn’t performing well. For example, in the use case above, if the classifier is performing poorly when classifying Toyotas correctly, you could retrain just that node without changing the rest of the tree. Hierarchical classifiers are more modular in this way.

However, hierarchical classifiers are not inherently more accurate, even if intuitively it may seem easier for a model to make predictions when the task is broken down into smaller, “easier” decisions. For example, it may seem like it would be easier for the model to predict a car is a Camry if it first knows that it’s a sedan. But, in practice, hierarchical classifiers are not more accurate, primarily because if the classifier makes a mistake in one level, there’s no correcting that mistake. It’s going to mislabel the image. If the classifier above incorrectly classified the Toyota Camry as a Honda in the first level, the image is ultimately going to be mislabeled when classifying it by the make of the vehicle.

## How to choose between hierarchical image classification and flat classification

The decision about whether to use a hierarchical image classifier or a flat classifier shouldn’t be about accuracy. They can both be highly accurate with high-quality, well-annotated data and a [data engine](https://www.nyckel.com/blog/9-ways-to-use-a-data-engine-to-improve-your-ml-model/) to help you find and correct problem cases.

Instead, **choosing between hierarchical image classification and flat image classification should be about whether it’s easier for you to manage one large function (flat) or many small functions (hierarchical).** If you have a classifier with hundreds of possible labels, it’s often impractical and unwieldy to use a single classifier. In that case, it likely makes sense to break up the classifier into smaller functions with a hierarchical structure. For example, Nyckel’s image classifier can have up to 200 classes. If your ML task has more than that, you’ll need to create multiple functions.

However, if you are labeling images with a smaller set of labels, the benefit of only managing one function likely outweighs any benefits you could get from using a hierarchical structure. 

Do you have an image classification use case you’re trying to solve and not sure how to approach it? [Reach out to us](mailto:feedback@nyckel.com), and we’ll help you brainstorm how best to structure your classifier. Otherwise, [sign up for a free account](https://www.nyckel.com/console) to give it a spin for yourself and use our [image classification quick start](https://www.nyckel.com/docs/image-classification-quickstart) as a guide.