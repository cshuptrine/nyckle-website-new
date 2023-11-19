---
layout: post
title: What's Best for Content Moderation? Blacklists vs. Pre-Trained ML vs.
  Custom ML (A Benchmark)
date: 2023-04-30
author: george
stage: false
featured: true
summary: In this post, we compare the accuracy of various content moderation
  approaches — blacklists, pre-trained ML models, and custom-trained ML models —
  on a public Kaggle dataset.
description: "Comparing accuracy of blacklist, pre-trained & custom-trained
  ML models for content moderation using a public Kaggle toxicity dataset. "
image: /blog/images/content-moderation-benchmark.webp
---
In an earlier post of ours, *[4 Steps to Improved Content Moderation](https://www.nyckel.com/blog/four-steps-to-improving-your-content-moderation/)*, we outline the stages of maturity most businesses go through when it comes to content moderation:

1. Realize you have a content moderation problem.
2. Use simple heuristics like word blacklists. This works for a while until you realize that the blacklists are finding too many false positives and negatives, especially as users change their behavior to circumvent the list. 
3. Use a pre-trained machine learning content moderation model or API. This also works fine until you run into the same issue as with the blacklists: the false positives and false negatives are high, and the pre-trained model doesn't cater to the unique communication patterns of your community.
4. Finally, you use a machine learning model or API that is customized to your data, improves your false positives and negatives, and [continuously learns](https://www.nyckel.com/blog/ai-content-moderation-best-practices/) from changing user behavior. 

At Nyckel, we are in the business of providing ML models customized to your data. Unsurprisingly, we claim that customized ML models are the ideal solution to your content moderation needs. In this post, we put that claim to the test by benchmarking a custom-trained Nyckel text classification function against a word blacklist and pre-trained content moderation APIs. 

## The moderators we tested

### Simple blacklist moderator

* [PurgoMalum](https://rapidapi.com/community/api/purgomalum-1) is a free toxicity moderator based on a simple internal profanity list, available on RapidAPI, with unlimited use.

### Pre-trained ML moderators

* [Detoxify](https://rapidapi.com/jing-is-coding-jing-is-coding-default/api/detoxify) is a freemium ML-based toxicity and profanity moderator available on RapidAPI, limited to 10,000 requests per month.
* [Perspective API](https://perspectiveapi.com) is a free ML-based toxicity checker that runs on Google Cloud Console.

### Custom ML moderators

* [Nyckel](https://www.nyckel.com) is an ML platform that can quickly train models based on your data without any ML expertise required. It provides various ML functions, like image classification, object detection, and semantic search, but we'll use Nyckel's text classification function for this post. 

## The data

We have taken a public dataset from Kaggle, *[Hate Speech and Offensive Language Dataset](https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset)*, which contains Tweets tagged as hate speech (0), offensive language (1), or neither (2). For benchmarking purposes, we can re-classify the text as simply toxic (1) or not toxic (0). 

As the CSV file comes pre-sorted alphanumerically, first, we randomize it. We use the first 5000 data points in this randomized set to train Nyckel. Then we use the next 100 data points to test the accuracy of each content moderation API. 

## The benchmarking process

The [code](https://github.com/NyckelAI/codesamples/blob/main/kaggle_toxicity_benchmark/kaggle_toxicity_benchmark.ipynb) and data for the benchmark are available on [github](https://github.com/NyckelAI/codesamples/tree/main/kaggle_toxicity_benchmark). We measure the accuracy of each moderator by feeding each of them the same set of 100 tweets. We then compare the result returned by the moderator against the toxicity labels provided in the dataset. The results are available in data files in the github repo. For example, Nyckel's results are [here](https://github.com/NyckelAI/codesamples/blob/main/kaggle_toxicity_benchmark/dataNyckel.csv).

### Training Nyckel

Unlike the other content moderators, we need to train Nyckel since it's a custom solution. To train Nyckel, we use the first 5000 tweets and toxicity labels from the dataset to train the model through the web app. When testing accuracy, we make sure that the data we use is not in the training data. This [text classification quickstart](https://www.nyckel.com/docs/quickstart) has a clickable walkthrough for training a text classification function. 

## Results

|                      | Accuracy | False Positives | False Negatives |
| -------------------- | -------- | --------------- | --------------- |
| PurgoMalum Blacklist | 88%      | 11              | 1               |
| Detoxify             | 84%      | 11              | 5               |
| Perspective          | 86%      | 11              | 3               |
| Nyckel               | 93%      | 6               | 1               |

Nyckel outperforms the other toxicity moderators significantly. On further inspection into the false positive result identified by Nyckel (and others), it was actually a true positive, misidentified within the original CSV file. 

Training Nyckel to identify toxic comments is simple, even without any ML expertise, and the results beat out competitive solutions. If you're interested in learning more, read how Nyckel-powered content moderation helped [4x the revenue of one of our customers](https://www.nyckel.com/blog/how-whats-that-charge-quadrupled-ad-revenue-using-nyckel/), or [try us out](https://www.nyckel.com/console) for free to see how it could work for your use case.