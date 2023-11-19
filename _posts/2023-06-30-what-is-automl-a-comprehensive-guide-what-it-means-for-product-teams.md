---
layout: post
title: What is AutoML? A Comprehensive Guide & What It Means for Product Teams
date: 2023-06-29
author: george
stage: false
featured: false
headliner: false
summary: "In this post we look at AutoML, explain what it is and how it works,
  and discuss how it can help product teams build AI-enabled products and
  features. "
description: "In this post we look at AutoML, explain what it is and how it
  works, and discuss how it can benefit product teams trying to build AI-enabled
  products and features. "
image: /blog/images/what-is-automl-9.webp
---
<div markdown="1" class="comment-div">
This post is the first in a series of articles about AutoML and what it offers organizations looking to implement ML. The second article of this series [examines the concept of End-to-End AutoML](https://www.nyckel.com/blog/end-to-end-automl-your-automl-platform-should-span-the-entire-ml-development-pipeline/) and the final article shares [nine features your AutoML platform should include](https://www.nyckel.com/blog/automl-platform-9-features-your-solution-should-include/).

</div>

Machine learning has proven to be a helpful tool, but, historically, training or fine-tuning ML models has been reserved for experts. AutoML tries to change that by automating this process. In this article, we share an overview of what AutoML is, how it works, and why it’s a compelling option for teams looking to integrate AI into their products.

## What is AutoML?

AutoML is the process of automating the tasks involved in training an ML model from labeled data. In other words, it automates what an ML expert does when creating a machine learning model. It eliminates not only repetitive, mundane, and time-consuming tasks but also the tasks that require ML expertise, such as choosing the model architecture, training or fine-tuning the model, choosing hyperparameters for training, finding a way to measure performance, choosing what train/test split to use, and more. 

AutoML solutions were created to:

* Enable folks without ML expertise to train a model from labeled data, 
* Automate the tedium and undifferentiated heavy lifting involved in training an ML model, and
* Reduce mistakes  by encoding best practices.

Simplifying the ML development process with AutoML isn’t just appealing to those who aren’t ML experts; even those with ML expertise are turning to AutoML solutions for certain tasks, so they can allocate their time and expertise where it’s actually necessary.

## The job of AutoML: Replicate the role of an ML engineer

AutoML tools replicate what a human engineer does when creating a machine learning model. To understand what all an AutoML needs to do, let’s take a look at how an ML engineer would train a model:

1. **Data augmentation:** Data augmentation involves applying various transformations or manipulations to the existing training data to increase the dataset's size artificially, with the goal of introducing more variation in the dataset to make the resulting model more robust. When working with image datasets, these transformations can include flipping, rotating, scaling, cropping, or adding noise to the data samples. The augmented data is then used alongside the original training data to train the models. 
2. **Feature engineering:** Feature engineering aims to extract the most relevant information from the data, reduce noise, and improve the model's ability to learn and generalize. The ML expert needs to analyze the data collected, choose the most relevant features from the available data, and often create new features. This stage also includes scaling, normalizing, or encoding features to ensure they are in a suitable format for the machine learning model.
3. **Model selection:** The expert then researches and chooses the appropriate model architecture that suits the problem and the available data. They may choose to use [transfer learning](https://builtin.com/data-science/transfer-learning) with pre-trained models, or train a model from scratch. It is necessary to test a variety of models and different transfer learning techniques and parameters. The ML expert may explore various algorithms or architectures, such as decision trees, support vector machines, neural networks, or ensemble methods, and select the ones that show promise. 
4. **Model training or transfer learning:** The selected model architectures or pre-trained models are trained or fine-tuned on the annotated training data. The kind of training techniques and [hyperparameters](https://towardsdatascience.com/parameters-and-hyperparameters-aa609601a9ac) used depends on the problem and the amount of data available. This process is different for each model type chosen in the previous step. The expert runs several training experiments with various models, training techniques, and hyperparameters.  
5. **Model evaluation:** The ML expert then evaluates the trained model using appropriate evaluation metrics, such as accuracy, precision, recall, or mean squared error, depending on the problem type. Cross-validation techniques are often applied to obtain more reliable estimates of model performance. Evaluation results help in selecting the best-performing model for deployment. 
6. **Optimization:** Optimizing the trained ML model for deployment involves refining its latency, size, and resource utilization. Techniques like model quantization and pruning are applied to reduce memory usage and inference time. Specialized formats may be used to enhance performance on specific platforms and accelerators. Testing and validation are conducted to verify the optimized model's performance.

This model creation process requires expertise, time, and resources. AutoML makes it simpler and faster to train models without ML expertise. It even [outperformed a group of data scientists](https://arxiv.org/ftp/arxiv/papers/2009/2009.01564.pdf) in 7 out of 12 cases in a benchmark at the University of Stuttgart. 

## AutoML example: Classify images with dogs

Let's consider a specific example: an image classification problem where we want to determine whether a picture contains a dog. Here's how an [AutoML platform](https://www.nyckel.com/blog/automl-platform-9-features-your-solution-should-include/) would tackle this task:

1. The user uploads annotated data. For example, they upload images organized into two folders called “DogPresent” and “NoDogPresent.” 
2. The platform sets aside a subset of data for validation to measure the accuracy of the trained model. Some platforms set aside a fixed validation set. Others, like Nyckel, use cross-validation to create a more robust model and accuracy measurement. 
3. The platform generates augmentations, such as rotations, flips, skewing, cropping, and adding noise to each piece of training data. These augmentations help create a more robust model.
4. The platform selects pre-trained models for fine-tuning. Some platforms use a single pre-trained model, while others, like Nyckel, explore a wide range of models. Examples of pre-trained models that a platform might use include [ResNet50](https://www.mathworks.com/help/deeplearning/ref/resnet50.html) and [CLIP](https://huggingface.co/docs/transformers/model_doc/clip) vision transformers.
5. The platform then fine-tunes each model with different hyperparameters and fine-tuning techniques. Some platforms may only try one technique, while others experiment with a range of options. 
6. Between the various pre-trained models and fine-tuning techniques tried, there are likely tens to hundreds of resulting models. The platform evaluates the performance of each of them to identify the one with the best accuracy. Trying a wider range of models and fine-tuning techniques makes it more likely to find a better performing model. 
7. The winning model is packaged, optimized for deployment, and made available. Platforms like Nyckel can even automate the deployment process for seamless integration.

It's important to note that models are rarely static. As you find more data that can help in improving the model, you will need to incorporate the new data into existing training data and retrain the model.

## Why use AutoML?

AutoML solutions make it easier, less expensive, and faster to integrate ML into products and services. Here’s why:

1. **You don’t need ML expertise on staff**. AutoML enables you to train ML models and build ML into your product without hiring ML experts. 
2. **AutoML enables your ML team to focus on higher-value endeavors that require their expertise.** Even if you have ML expertise on your team, AutoML automates a lot of the tedious and repetitive tasks involved in training a model.
3. **AutoML models are often more reliable and higher quality.** AutoML tools encode best practices for training and evaluating models, so the models are less likely to make errors.
4. **You can create the model you need faster.** Because the process is automated, AutoML platforms can try out hundreds of experiments in parallel. This automation and parallelism means you can create models faster. For example, Nyckel’s customers usually create their first model within 5 minutes of signing up. Several of our customers go from signing up to using their model in production in less than a week. 
5. **AutoML models usually perform very well.** Because AutoML engines usually try out a variety of models and training / fine-tuning techniques, it is likely to find a model that works well for your data. 
6. **ML training infrastructure is unnecessary.** All you need is access to the Internet and a machine capable of using the AutoML tool you need. There's no need to invest in complex ML training infrastructure, making AutoML accessible and cost-effective.
7. **AutoML enables your product team to create ML-enabled features.** Rather than your product team needing to compete for an ML team’s time and resources (which slows down innovation and development), they can use a self-service AutoML tool that doesn’t require ML expertise. This can create a tighter feedback loop between your customers and ML-enabled features.

## When does it not make sense to use AutoML?

AutoML is best used when your ML challenge falls into or can be decomposed into a [well-researched ML task with many available models](https://huggingface.co/tasks). Not all of these ML tasks will be supported by AutoML platforms. The most commonly supported tasks in AutoML are image/text/tabular classification, text/tabular regression, and object detection. However, the list of AutoML-able tasks will increase over time as ML research expands and AutoML platforms incorporate more “settled” ML research. For example, Nyckel currently supports [these tasks](https://www.nyckel.com/product), but plans to expand this set over time. 

There are a couple of situations where AutoML may not be appropriate:

* When the ML task you are trying to solve is novel, on the bleeding edge, or generally not supported by existing AutoML platforms. 
* When the benefits of AutoML are outweighed by marginal improvements in accuracy that can be gained by dedicated ML experts with intimate knowledge of your data domain training a custom model. Even if this is the case, we recommend starting with AutoML; it gets you going quickly and provides a baseline against which you can measure other hand-crafted approaches.  

## AutoML landscape: A sampling of AutoML tools

### Libraries

Using AutoML libraries requires some ML expertise and management of training hardware and pipelines, but they could be appropriate for experienced teams. Some companies have strict requirements on data not being sent to services, and AutoML libraries may be preferred in these cases. However, as noted below, some services like Nyckel can be deployed to private data centers. Here are a few examples of AutoML libraries:

* [AutoKeras](https://autokeras.com/)
* [Auto-SKlearn](https://automl.github.io/auto-sklearn/master/)
* [Auto-PyTorch](https://github.com/automl/Auto-PyTorch)
* [TPOT (Tree-based Pipeline Optimization Tool)](https://github.com/EpistasisLab/tpot)
* [Ludwig](https://ludwig.ai/latest/)

### Services

AutoML services abstract away the training hardware and can be used without any ML or coding expertise. While they do require you to send training and inference data to a service provider, some, like Nyckel, support private and on-prem deployments, which means your data never has to leave your data center. Our [overview of computer vision AutoML services](https://www.nyckel.com/blog/computer-vision-saas-landscape-comparison-of-the-top-9-players/), and our [benchmark of image classification AutoML services](https://www.nyckel.com/blog/image-classification-benchmark-google-vs-aws-vs-hugging-face-vs-nyckel/) has more detail, but here are a few examples of AutoML services:

* [Nyckel](https://www.nyckel.com/product) 
* [Huggingface AutoNLP](https://huggingface.co/autotrain) 
* [Google Vertex AI](https://cloud.google.com/vertex-ai)
* [AWS AutoML](https://aws.amazon.com/machine-learning/automl/) 

When evaluating AutoML services, it's important to understand whether they're [end-to-end solutions that handle all aspects of ML development](https://www.nyckel.com/blog/end-to-end-automl-your-automl-platform-should-span-the-entire-ml-development-pipeline/), or if they only handle model training. 

- - -

*Interested in using AutoML to solve your ML challenges. Watch [this 60-second video](https://www.youtube.com/watch?v=BzawKd_7WDY) on how easy it could be, read our [benchmark of image classifcation AutoML services](https://www.nyckel.com/blog/image-classification-benchmark-google-vs-aws-vs-hugging-face-vs-nyckel/), play with some of our [quickstart guides](https://www.nyckel.com/docs/image-classification-quickstart), or [try us out](https://www.nyckel.com/console) for free.*