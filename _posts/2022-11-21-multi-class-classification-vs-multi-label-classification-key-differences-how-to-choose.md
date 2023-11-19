---
layout: post
title: "Multi-Class Classification vs. Multi-Label Classification: Key
  Differences & How to Choose"
date: 2022-11-21
author: oscar
stage: false
summary: One of the first steps before creating a new classification function is
  to decide whether to use multi-class classification or multi-label
  classification. In this article, we’ll cover the differences between the two
  types of classification and help you choose which approach makes the most
  sense for your problem.
description: Learn about the differences between multi-class classification
  and multi-label classification. Which should you use? Let’s explore.
image: /blog/images/nyckel-flowchart-v4-medium-background-hero.webp
image_alt: Multi-class classification vs. multi-label classification
---

One of the first steps before creating a new classification function is to decide whether to use multi-class classification or multi-label classification. In this article, we’ll cover the differences between the two types of classification and help you choose which approach makes the most sense for your problem.

*(At Nyckel, we support multi-class [classification](https://www.nyckel.com/product) through our classification function type and multi-label classification through our [tags](https://www.nyckel.com/product) function type.)*

## But first, what is classification in machine learning?

Machine learning classification assigns an output label to a piece of input data. Essentially, your function learns to detect whether your input data (e.g., image or text) includes any of the assigned labels. For example, the words in italics below could be output labels:

* Is the comment *spam* or *not spam*?
* Is the person in the image *smiling* or not *smiling*?
* Is the tree a *pine tree*, *maple tree*, *ash tree*, *birch tree*, or an *oak tree*?
* Is the genre of the book *comedy*, *romance*, *thriller*, *historical fiction*, *action*, or *science fiction*? (Or maybe some combination of these?)

Before determining whether to use multi-class or multi-label classification, you first need to know:

1. What are the different output labels you’d like to sort your data set into?
2. Can a single piece of data be tagged as only one of these labels? Or could it be tagged with multiple labels?

Once you answer these questions, you can think through what type of classification is best for your problem: multi-class or multi-label.

## What is multi-class classification?

Multi-class classification is a machine learning task that classifies — or categorizes — your data set into more than two output labels. With multi-class classification, each piece of data in your data set only belongs to one label.

Let’s consider a multi-class classification example:

You’re an online clothing retailer. Shoppers like to sort through products by clothing type, so each article of clothing gets labeled based on what it is (e.g., *shirt*, *pants*, *hat*, *dress*). You create a new multi-class classification function to automate the process.

Your input source is a data set that includes photos of the clothing items you sell.

Each clothing item is only one type of clothing. Because there’s only one “right” answer for each piece of data, you use multi-class classification. When annotating your training data set, you can select which type of clothing each item is:

* *Shirt*
* *Pants*
* *Dress*
* *Shoes*
* *Hat*

The labels are mutually exclusive from each other; one article of clothing cannot be multiple types of clothing.

## What is multi-label classification?

Multi-label classification categorizes your data set into more than one output label. The difference from multi-class classification is that multi-label classification can tag one piece of data with multiple labels. As as aside, multi-label classification is sometimes informally referred to as "tagging" since, intuitively, many "tags" can be applied to the same piece of data.

Thinking back to the online retailer again, let’s consider a multi-label classification example:

Shoppers on your website like to sort by the color of clothing. In fact, shoppers can sort by 20 different colors. Since a single shirt can have more than one color, you need to be able to label each shirt with all of the colors on it (e.g., *orange*, *blue*, *white*, and *brown*). There is no exclusivity between the labels; just because a shirt is red does not mean it can’t also have blue on it.

When annotating your training data set, select all the colors on the shirt and click “done.”

In theory, instead of using multi-label classification, you could create 20 binary classification functions to determine the colors on each shirt. You can use a binary classification function when a piece of data belongs to one of two output labels. (It’s *this* or *that*.) In the case of the online retailer, you would set up each binary function like this:

* *Red* or *Not red*
* *Blue* or *Not blue*
* *Yellow* or *Not yellow*
* ….etc. until you have 20 binary functions for all of the possible colors

One could argue that harvesting training data for 20 binary functions could be a little easier than one multi-label classification function. Let’s say a particular binary function struggles to identify its specific color (i.e., it has a low confidence score for identifying green). In that case, you could feed that function more training data tailored to that color to improve its confidence score.

With one multi-label classification function, you may have to add and annotate data that may not add much value. (e.g., The function can confidently detect *yellow*, but you still have to annotate data with yellow in it to improve the *green* confidence score.)

However, the overhead of managing 20 different binary functions at some point outweighs the benefits. The extra clicks required when annotating your training data set for a multi-label classification function (click *orange* + *green* + *yellow* + *brown* + DONE) are likely worth it to avoid the headache of managing 20 different functions.

## How to choose between multi-label classification and multi-class classification

{% include figure.html url="../images/nyckel-flowchart-v4-medium-background.webp" alt="Decision flowchart"%}

Choosing between the different types of classification isn’t always a straightforward answer and may require you to weigh the pros and cons. However, below are a few guidelines we like to follow.

### Choose multi-class classification when

* **There’s only one correct answer.** Use multi-class classification if the input data point can only belong to one output label. This is common any time there’s a taxonomy. For example, a tree cannot be both a *maple tree* and a *birch tree*. If classifying trees by their type, you would use multi-class classification.
* **There are separate sets of mutually exclusive output labels.** In some cases, users might think they should use multi-label classification, but multiple multi-class classifications would actually be easier.\
  \
  Let’s go back to the online retailer one last time: You want to sort clothing by the clothing type (*shirt, pants, dress, jacket, hat*) and age group *(baby, toddler, kids, teens, adults*). The labels are mutually exclusive within the label set. In other words, if it’s a *baby* shirt, it cannot also be a *teen* shirt. Additionally, whether it is a shirt or a pair of pants has no bearing on whether it’s intended for a certain age group.\
  \
  In this case, you may want to use two separate multi-class functions instead of classifying by both clothing type and age group within the same multi-label classification function.\
  \
  Why?\
  \
  The answer relates to the software engineering best practice of [writing clean code](https://workat.tech/machine-coding/tutorial/design-good-functions-classes-clean-code-86h68awn9c7q#:~:text=A%20function%20should%20do%20one,doing%20more%20than%20one%20thing). A function in software engineering (in this case, a traditional function defined in code) should strive to only do one thing. If you can cleanly break up a function into smaller pieces, then you should break it apart.\
  \
  A similar best practice also applies to machine learning. If the label set can be broken into smaller pieces that have nothing to do with each other (e.g., clothing type and age group), then you should break them apart. Your code, workflows, and data will be cleaner and easier to maintain as a result.\
  \
  Here’s what we mean by that…\
  \
  When annotating a multi-class function, you just have to click one button because the item only gets sorted into one label. One click, and that’s all the information the function needs.\
  \
  But if it’s a multi-label classification function, you have to click all of the buttons that apply (e.g., *pants* and *teen*) and then click “DONE” to go to the next item. You have to click more times to get the same information.\
  \
  Plus, these extra clicks add up even more when you have to add new training data:\
  \
  Once your function is deployed into your system, it will inevitably make errors. A machine-learned function is never perfect, but it can be improved by adding training data over time. As a result, you will need to annotate additional pieces of data to continue training the function. This is referred to as ”active learning.”\
  \
  Here is why this matters: Your function might have a strong confidence score for classifying the clothing type but low confidence for the age group on a particular image. Using active learning best practices, this image is added to the train set and annotated with the right age group. In a situation where you use a single multi-label function, the same image also has to be annotated with the right clothing type label. This extra bit of manual work is unnecessary from the perspective of improving the model since it was already confident on the clothing type. This means you do extra work without gaining much from doing it.\
  \
  When you split this function into two multi-class classifications, each can harvest its own training data that is relevant to improving the function.

### C﻿hoose multi-label classification when

* **You can’t group output labels into separate mutually exclusive sets.** If a shirt is *red*, that does not mean it can’t also have *blue* on it. In situations like this, it makes the most sense to use multi-label classification. The benefits? You only have one function to train. This matters when you move the function into production because you only have one API call. If you chose to use 20 binary functions instead, you would have 20 API calls. Having a single, multi-label function with 20x the training data may be more efficient than managing 20 API calls.

Ready to determine how to move forward with your problem? First list out the output labels you want to sort your data by and then determine whether each data point can just have one or multiple labels. This is a great starting point for determining your best path forward.

## Let’s make machine learning easier

Machine learning is hard. In fact, [it’s often too hard](https://www.nyckel.com/blog/ml-too-hard-for-software-developers/). Software developers and product owners should be able to focus on their own data— not on learning a new discipline that evolves rapidly and requires significant investments.

We’ve made it simple to upload your data set, annotate it, and train a function ready to be deployed to your system via an API.

Check out our multi-label and multi-class classification functions:

* For multi-class, use our classification function type for [text](https://www.nyckel.com/docs/quickstart), [images](https://www.nyckel.com/docs/image-classification-quickstart), and [tabular](https://www.nyckel.com/docs/tabular-classification-quickstart) data.
* For multi-label, use our tags function type. Reach out to [feedback@nyckel.com](mailto:feedback@nyckel.com) for private beta access.
