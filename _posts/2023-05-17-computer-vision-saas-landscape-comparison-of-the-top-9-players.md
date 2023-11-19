---
layout: post
title: "Computer Vision SaaS Landscape: Comparison of the Top 9 Players"
date: 2023-05-17
author: john
stage: false
featured: false
headliner: false
summary: In this article, we compare the functionality, amount of time it takes
  to set up a model, performance, positioning, and pricing of the nine leading
  computer vision SaaS players. Results show significant variations across
  accuracy, user experience, and pricing structures.
description: We compare nine leading computer vision SaaS providers on
  functionality, model creation time, performance, market positioning, and
  pricing.
image: /blog/images/computer-vision-landscape.webp
---
*To maintain as objective of an assessment as possible, we hired a freelance writer, [John Weston](https://www.linkedin.com/in/john-weston/), who did not have prior experience using Nyckel and does not have ML expertise to test the computer vision platforms featured in this post.*

As your company grows, chances are you will be looking to automate some of your image processing. For example, you may want to count items in images, review the presence or absence of particular objects, identify the category of certain objects, or complete some other task related to your images.

Such automation requires machine learning (ML). Building an ML system yourself can be tempting, but it’s often [far too challenging](https://www.nyckel.com/blog/ml-too-hard-for-software-developers/), wastes time, and ties up labor. We see so many businesses putting off implementing ML until the pain of manual operations becomes unbearable.

The good news is that there are many computer vision SaaS solutions out there, ready to manage your visual data, apply various ML techniques to it, and deploy your ML outputs back into your products and systems. But how do you choose the best SaaS solution for your business in such a crowded field?

To help you understand your options, we reviewed the 9 leading computer vision SaaS players. We compared their functionality, market positioning, and pricing. We also completed a custom [image classification benchmarking](https://www.nyckel.com/blog/image-classification-benchmark-google-vs-aws-vs-hugging-face-vs-nyckel/) task (*does this image show a person wearing a face mask correctly, incorrectly, or not at all?*) using novel data to compare the platforms’ performance and user experience.

Before we review how the 9 providers fared with this task, let’s talk a bit about how we chose them.

## How did we pick these 9 computer vision SaaS players?

The landscape of computer vision SaaS is both dense and sprawling. For example, AWS Sagemaker could be considered a computer vision SaaS platform. However, it’s so broad and general that it is really more of an ecosystem, with a correspondingly steep learning curve. For the purpose of this article, we focus on platforms that are:

1. **Self-service:** They include open access, transparent pricing, and API documentation.
2. **No machine learning skills required:** For example, they don’t ask you to pick a particular network architecture.
3. **Full-stack:** The service should provide data annotation, AutoML (training), and deploy functionality. All you should need is some data, and there’s no need for additional software or programming.

We initially identified 11 CV service providers, including 8 startups, as well as 3 behemoths that offer specialized computer vision services that are more or less self-contained within their ecosystems:

* [Nyckel](#nyckel)
* [Ximilar](#ximilar)
* [Roboflow](#roboflow)
* [Hasty](#hasty)
* [Levity](#levity)
* [Clarifai](#clarifai)
* [Google Vertex AI](#google-vertex-ai)
* [Azure Custom Vision](#azure-custom-vision)
* [AWS Rekognition Custom Labels](#aws-rekognition-custom-labels)
* [Imagga](#imagga)*
* [Datature](#datature)*

\*We learned that neither Imagga nor Datature are “full-stack” in the sense we use it in this survey. While both platforms allow users to train a custom model to classify image data, Imagga requires the use of a command line interface for image data upload, and then trains a bespoke model for you. Datature allows you to go further through its UI, allowing data upload and annotation as well as model training. Datature’s model deployment step, however, requires the use of separate software. For these reasons, we removed these two startups from further consideration in the rest of this survey.

Now let’s take a look at the criteria we used to compare the nine players.

## How we compared the computer vision service providers

In this survey of the top computer vision players, we focused criteria that are important for users who are relatively new to using [machine learning to solve computer vision problems](https://www.nyckel.com/blog/guide-to-computer-vision-for-non-ml-experts/). Here’s the list of what we used for evaluation criteria:

1. **Functionality.** What types of computer vision problems can you solve with the platform?
2. **Time to first model.** How long did it take from the time we created an account until we classified the first image with our newly-trained model?
3. **Performance.** Does the trained model work using a few simple images? We’ll run a benchmarking test for each platform to check their performance.
4. **Market positioning.** How does the company market itself? For example, does it focus on “task automation?” Is the product designed “for developers?”
5. **Pricing.** How does the company structure its pricing? What does it charge for?

Now we have a list of CV SaaS players and a list of criteria to use to compare them. Let’s now run through the benchmarking task.

## Introducing our computer vision benchmarking task

Our dataset included a set of 76 images sourced from Google. The images fall into three categories: wearing a mask correctly (n = 20), wearing a mask incorrectly (n = 32), and not wearing a mask (n = 24).

{% include figure.html url="../images/mask.webp" alt="The images fall into three categories: wearing a mask correctly, wearing a mask incorrectly, and not wearing a mask"%}

We initially started with a smaller set of images, but one of the platforms (Ximilar) required a minimum of 20 images per class. So, we adjusted the dataset for all providers.

For each platform, we looked for the fastest way to train a custom classifier using these images. The basic process was to upload the training data, label it, train a model using the training data, and then test the model on 7 images. (Note: Hasty didn’t have an image classification option — at least in its free plan — so we used object detection.)

## Comparison results: How do the computer vision SaaS services stack up?

This table summarizes what we found for the 9 chosen providers.

| **Platform**                                                    | **Functionality**                                                                                                         | **Time to first model**                                                                                                                                                                                                                             | **Performance**                                                                                                             | **Positioning**                                                                                                                                                                                                                        | **Pricing** (as of March 2023)                                                                                                                                                                                                                            |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Nyckel](#nyckel)                                               | Image classification, image tagging, semantic image search, object detection                                              | ✅ **A few minutes.** Create an account via Google in one click; seconds or minutes to import data; first model ready within minutes.                                                                                                                | ✅ 7/7 correct                                                                                                               | “Lightning fast machine learning for developers.” Caters to small to midsize companies without in-house ML expertise that need to automate to achieve rapid growth. No ML knowledge required.                                          | Free/Development tier: First 1,000 invokes included; Production tier: $50/month; Growth tier: $500/month; Enterprise tier: Custom                                                                                                                         |
| [Ximilar](#ximilar)                                             | Image classification, image tagging, object detection, image regression, semantic image search                            | 🟨 **30 mins minimum.** Join via Google account; 5 mins to navigate to the right model option; 20+ mins to train model; seconds to deploy on new data.                                                                                              | ✅ 7/7 correct                                                                                                               | “Visual AI for Business.” Industries listed on site: collectible items, biotech & medtech, e-commerce, fashion, manufacturing, real estate, safety & security, stock photography.                                                      | Free tier: 3,000 API credits/month; Business tier: $59-$285/month; Professional tier: $499-$3,125/month Optional extra credit packs and custom plans.                                                                                                     |
| [Roboflow](#roboflow)                                           | Image classification, image tagging, object detection, instance segmentation, semantic segmentation                       | 🟨 **30 mins to 24 hours.** Join via Google account; 20 mins from sign up to beginning to train model; model trained in 6 mins (can be up to 24 hours); new images trained one at a time.                                                           | 🟨 6/7 correct                                                                                                              | “Deploy a computer vision model in an afternoon.” Many industries are listed on their site, including healthcare & medicine, manufacturing, agriculture, aerospace & defense, automotive, banking & finance, transportation, and more. | Free/public tier: first 1,000/month inference credits included; Growth tier: Free trial, then individual pricing based on usage; Enterprise tier: Custom                                                                                                  |
| [Hasty](#hasty)                                                 | Image tagging, instance segmentation, object detection, semantic segmentation                                             | ❌ **At least 30 mins; can be considerably more.** Join via Google account; a few minutes to upload images (after quite a bit of looking around for where to do it), and then several more minutes to manually label them (difficult to figure out). | ❌ 2/7 correct                                                                                                               | “Data-centric ML platform” specializing in CV for ML engineers and domain experts.                                                                                                                                                     | Free tier; Self service tier: €300-€4,000/month; Enterprise tier: Custom                                                                                                                                                                                  |
| [Levity](#levity)                                               | Image classification, image tagging                                                                                       | 🟨 **5–10 mins.** UI is very intuitive and clean. Labeling training data took a few mins. Model training took about 4 more minutes.                                                                                                                 | 🟨 5/7 correct. Adding correct images to training data did not help with final 2.                                           | “Powerful AI for daily tasks.” Mid-market companies and SMEs.                                                                                                                                                                          | Free trial; Startup tier: $49-$119/month; Business tier: $139-$1,849/month; Enterprise tier: Custom                                                                                                                                                       |
| [Clarifai](#clarifai)                                           | Image classification, image tagging, object detection, semantic image search semantic segmentation, instance segmentation | 🟨 **30 minutes.** Join via a Google account; create an "application;" manually label images; train model.                                                                                                                                          | 🟨 5/7 correctly classified. 6/7 correctly classified after including the 5 it initially correctly classified in the model. | “The World’s AI™” for developers, data scientists, and no-code operators.                                                                                                                                                              | Free/community tier: 1,000 operations/month; Essential tier: Starts at $30/month; Professional tier: Starts at $300/month; Enterprise tier: Custom                                                                                                        |
| [Google Vertex AI](#google-vertex-ai)                           | Image classification, image tagging, object detection                                                                     | ❌ **1-3 hours.** Create an account via Google Cloud; enter credit card details; sift through Google apps to find the right one; navigate several frustrating steps & errors; use YouTube find to complete our task.                                 | 🟨 6/7                                                                                                                      | “Fully managed ML tools for any use case.” For developers and enterprises.                                                                                                                                                             | Pricing varies based on the input type of the data (image, video), the ML operation you’re completing, and whether you’re doing image classification or object detection. **[See pricing chart.](https://cloud.google.com/vertex-ai/pricing#image-data)** |
| [Azure Custom Vision](#azure-custom-vision)                     | Image classification, image tagging, object detection                                                                     | ❌ **1-2 hours.** Create a Microsoft account; be redirected to sign in multiple times; navigate error messages & confusing steps; find YouTube video for support; quick training & testing of the model after frustrating set up.                    | ✅ 7/7                                                                                                                       | “State-of-the-art computer vision models for your unique use case.” For developers and enterprises.                                                                                                                                    | Free tier: 2 transactions per second (TPS), 5,000 training images per project, and 10,000 predictions/month. Standard tier: 10 TPS, $2 per 1,000 transactions, $10 per compute hour, $0.70 per 1,000 images.                                              |
| [AWS Rekognition Custom Labels](#aws-rekognition-custom-labels) | Image classification, image tagging, object detection                                                                     | ❌ **2-3 hours.** Complete tedious set up process; watch video tutorial; complete next steps; discover that coding is required to deploy; abandon test.                                                                                              | ❌ **N/A** - requires users to download software and code to deploy/test the model, so we did not test performance.          | “Automate and lower the cost of your image recognition and video analysis.” For developers and enterprises.                                                                                                                            | Free tier: lasts 3 months and includes 10 free training hours/month and 4 free interference hours/month. After free tier: Training is $1/hour and interference is $4/hour.                                                                                |

## Comparison takeaways: Computer vision SaaS players

We learned a lot through this benchmarking task, but there are a few broad-stroke insights to take away from it:

* **Accuracy varied:** Not all of the computer vision service providers correctly classified our test images. This doesn’t speak to their capabilities in general, but it is clearly relevant to the user experience when things don’t behave as desired right out of the box.
* **On-the-fly training was possible with a small subset:** Most of the APIs had an explicit training cycle, although some models (Nyckel and Ximilar) updated on the fly as images were labeled. This is a relevant differentiator if you’re trying to test a model quickly or want immediate feedback as you annotate your training data.
* **Intuitiveness varied:** Some APIs had very intuitive and clean UIs, whereas others offered a high-level of customization and an equally high-level of documentation to wade through.
* **Pricing is difficult to compare across providers:** All services had a no-fee option, sufficient for training and deploying at least for a few models based on small datasets, as well as various paid subscriptions. Some pricing structures were more straightforward than others, with Vertex AI’s being the most confusing. It’s difficult to directly compare the providers on cost because some of them quote flat fees, while others price their services according to the number of models deployed, data points predicted, or computational resource-hours used for different activities. The larger providers add in more intensive customer service as an extra for their higher tiers, whereas this tends to be included or left unspecified by the smaller providers. To get a precise determination of cost, a customer will still have to ring around for quotes from their potential providers.
* **Not all were actually full-stack:** We set out to only include full-stack computer vision providers in this benchmark. But after experimenting with the platforms, we discovered two of the platforms, Clarifai and AWS Rekognition, required us to download software and do some coding to deploy the model. We looked for an alternative way to test the platforms’ ability to label our subset of test data. Clarifai’s customer service pointed us to a “context-based classifier,” which we used, but we had to abandon the test at this stage for AWS.

Now we’ll dive a little deeper into each of the players we evaluated.

*(Reminder: we hired an independent freelance writer to assess the functionality and performance of all of the platforms, including Nyckel.)*

### Nyckel

{% include figure.html url="../images/nyckel-cv-saas2.webp" alt="Nyckel computer vision SaaS" link="https://www.nyckel.com" %}

***Super quick and accurate with a breadth of ML services***

[Nyckel](https://www.nyckel.com/) offers a fast and intuitive machine learning API for developers and product teams without in-house ML expertise. Unlike some of the other small players here, Nyckel’s function types extend beyond computer vision to also include text and tabular classification, tagging, and search. Nyckel's computer vision product demonstrated impressive performance through its ease of use, fast setup, and accurate predictions. Its drag-and-drop data upload and bulk labeling allowed us to import and label the images in just seconds or minutes for each batched category.

The model trained on the fly, and its predictions continued to update during data upload and annotation without further prompting. The model will continue to update on-the-fly as new data is annotated and fed to the model. **Nyckel was one of the three players that classified all 7/7 test images correctly (with high confidence), and it had the quickest time to the first model of all the players.** Since Nyckel is newer to the market than the behemoths, it does not have a robust user community like Google, Amazon, or Microsoft.

### Ximilar

{% include figure.html url="../images/ximilar-cv-saas.webp" alt="Ximilar computer vision SaaS" link="https://www.ximilar.com" %}

***User-friendly and accurate with a narrow focus on computer vision***

[Ximilar](https://www.ximilar.com/) specializes in computer vision, with various pre-trained models available for particular use cases (e.g., retail image classifiers or automotive industry classifiers). We avoided these ready-made options, instead training a new model “from scratch” (still with the benefit of the service’s use of transfer learning). Overall, Ximilar’s product was very user-friendly, despite a few connection glitches we experienced. Like Nyckel, it had a simple and fast drag-and-drop interface for data import and bulk labeling.

After uploading the data, model training took about 20 minutes, which was good/average for these platforms. **Ximilar was one of the three players that classified all 7/7 test images correctly.** Like Nyckel and the other small players, it cannot compete with the behemoths regarding their large user communities. An interesting feature of Ximilar’s was an “Explain” feature which overlays a heat map onto the image to indicate how the AI assigned weightings to different image pixels.

### Roboflow

{% include figure.html url="../images/roboflow-cv-saas.webp" alt="Roboflow computer vision SaaS" link="https://www.roboflow.com" %}

***Computer vision platform for enthusiasts who want to get into the details***

Like Ximilar, [Roboflow](https://roboflow.com) specializes in computer vision. Roboflow's computer vision product features a drag-and-drop interface for uploading images and videos, and it supports bulk labeling. It offered two training options: "Fast" and "Accurate," with the latter only available for paid plans.

Roboflow gave us the choice of whether to train our model based on a previous run of the model (not applicable here), with reference to a public checkpoint (recommended by Roboflow), or to train from scratch. We picked the recommended public checkpoint option. We also had the option to preprocess and augment our images for training. We initially left the default options in place (auto-orient and stretch resizing), but our first model was struggling to correctly classify the images, so we generated a new model without the preprocessing options. That new model performed better; **Roboflow classified 6/7 test images correctly, and training the model took only six minutes.**

Although Roboflow offers a range of options for model tweaking, a subscription is required to explore these custom options and apply them to new models. While small in comparison to the large enterprise players, Roboflow has a fairly robust library of resources.

### Hasty

{% include figure.html url="../images/hasty-cv-saas.webp" alt="Hasty computer vision SaaS" link="https://hasty.cloudfactory.com/" %}

***Low performance & usability — but may perform better with image classification (if the option exists)***

[Hasty](https://hasty.cloudfactory.com) also specializes in computer vision and calls itself a “data-centric ML platform.” Even though Hasty markets image classification on its website, we couldn't find an option within the product (at least without paying) to use image classification. Because of this, we used object detection applied to the entire image as a workaround. While, in theory, this method should yield the same outcome as classifying an image as containing a certain object, object detection is usually more computationally intensive than image classification. This means that while there may not be a noticeable difference in speed with smaller datasets, object detection could potentially be slower when dealing with larger ones.

The process of annotating our training data using Hasty's object detection function was tedious; it required us to click four times around each image to [create a bounding box](https://www.nyckel.com/blog/are-bounding-boxes-necessary-for-object-detection/) and then individually label each image. This process proved time-consuming, taking over 25 minutes — which is much longer than the services that allowed bulk labeling. After annotating 28 of our images, the model started training and displayed an accuracy bar for us to track as we annotated more data. After annotating 36 images, Hasty started to (inaccurately) label our training data, so we continued to annotate the remaining 41 images ourselves.

**When it came time to test Hasty’s model accuracy, Hasty had the weakest performance out of all the evaluated products, correctly classifying only 2 out of 7 images.**

### Levity

{% include figure.html url="../images/levity-cv-saas.webp" alt="Levity computer vision SaaS" link="https://levity.ai/" %}

***Easy-to-use with many no-code integrations, core ML performance lagging others***

[Levity](https://levity.ai/) specializes in automating everyday, mundane tasks, including tagging and classifying product images, managing inventory, categorizing email responses, and more. When it comes to computer vision tasks, Levity has less breadth than the other players in this article. The user experience of annotating the training data was a bit different with Levity than the other products; after we uploaded images, Levity displayed them in a one-page tile format, with a drop-down labeling button overlaid on each image. We couldn’t figure out how to bulk label the image set, but the labeling functionality and tile layout made it quick and easy.

Model training only took a few minutes to complete, and **Levity correctly classified 5/7 of our test images — landing in the middle of the pack for performance.** Adding the test images into the training set did not improve the performance of the model.

### Clarifai

{% include figure.html url="../images/clarifai-cv-saas.webp"  alt="Clarifai computer vision SaaS" link="https://www.clarifai.com" %}

***The OG offers a comprehensive product suite in a somewhat confusing platform***

[Clarifai](https://www.clarifai.com) is a broad ML service provider, calling itself the “easiest deep learning AI platform for developers, data scientists, and no-code operators.” (Spoiler: We don’t agree.) Clarifai's computer vision product offered an interesting mix of ease-of-use and complexity. The data upload process was straightforward, offering drag-and-drop functionality or the option to browse files. However, when attempting to label a batch of images in one go using the drag-and-drop method, we encountered an "invalid request" error message, so we annotated the images one-by-one. Despite this hiccup, the user interface was relatively streamlined and intuitive.

However, we found some of Clarifai's terminology confusing. For example, Clarifai calls image labels "concepts," and you have to sort through all sorts of classifier options to find the one that's best for you. At times, the product's functionality was confusing too; we weren’t sure what to do first after we created our account and before we asked Clarifai to train the model, we had to set a bunch of parameters, but we weren't sure what the parameters meant, so we mostly just kept the default settings.

Once we had uploaded and annotated our image data, we attempted to train the model. But we were prompted to sign up for a paid plan. Upon reaching out to Clarifai about this issue, they suggested using the free context-based classifier instead of the initially-selected visual classifier. We then retrained our model using the context-based classifier. **Clarifai correctly classified 5 out of 7 images, albeit with some notably low confidence scores.** When we added the test data into the training data, we were able to enhance the performance to correctly classify 6 out of 7 images.

Clarifai was the only smaller provider that talked about its user community and had a dedicated Slack channel for users, suggesting a commitment to user engagement and support.

### Google Vertex AI

{% include figure.html url="../images/vertex-ai-cv-saas.webp" alt="Google Vertex AI computer vision SaaS" link="https://cloud.google.com/vertex-ai" %}

***Steep learning curve with solid accuracy and helpful user tutorials***

[Vertex AI](https://cloud.google.com/vertex-ai) is Google’s “unified data and AI platform” for machine learning developers, data scientists, and data engineers. Google’s large cloud ecosystem meant we needed to first create a Google Cloud account and then sift through the many APIs and ML apps Google offers before landing on Vertex AI.

The model training and testing process wasn’t all that simple or quick either. For example, after importing our training data images, we were asked to select “Default,” “Training,” “Validation,” or “Test” for every single image from a drop down menu. We left the images set as default instead of clicking 80 times. Once it came time to label our test data, we resorted to manually labeling each image because Vertex AI’s alternative option (upload a PDF to a Google Cloud Console folder and then select that file within Vertex AI) wasn’t working.

Once we (finally) got to the model training step, Google asked us to choose between a high accuracy (but slower) model or a lower accuracy (but faster) model. Since our dataset is small and a lower latency isn’t a concern, we chose high accuracy. After this step, things got confusing. Our model had completed its training and we were ready to add our test images, but we had to stumble through Google documentation and YouTube tutorials to figure out next steps, before we finally found our way to where we could upload our test images one image at a time.

**Vertex AI correctly classified 6 out of 7 of the test images.** While cumbersome, complex, and slow at times, the sheer size of the Google ecosystem means you can find many explainer videos online to help you along in the Vertex AI process.

### Azure Custom Vision

{% include figure.html url="../images/azure-cv-saas.webp" alt="Azure Custom Vision" link="https://azure.microsoft.com/en-us/products/cognitive-services/custom-vision-service" %}

***Getting started is an absolute headache, but the model performs accurately***

[Azure Custom Vision](https://azure.microsoft.com/en-us/products/cognitive-services/custom-vision-service) is the computer vision component of Azure Cognitive Services, which is Microsoft’s AI services that “help developers build cognitive intelligence into applications without having direct AI or data science knowledge.” Setting up our Custom Vision account was nothing short of frustratingly annoying; it required about eight steps and several redirects back to the sign-in page just to get into the Custom Vision app. Then, after a confusing set of next steps, we turned to YouTube for help. Fortunately, we found a video that simplified the process by directing us to a more straightforward dashboard than what we had initially found.

When it was finally time to set up our model, Azure asked us to choose a domain for our task, which included (among other options) three different “general” domains. Upon inspecting these further, we chose General \[A1], which was recommended for larger datasets or more difficult user scenarios (since one image, in particular, kept tripping up the other players, we opted for this option). Uploading our training data images was simple, and we were able to bulk-label each subset of images. When given the choice of Quick or Advanced training, we chose Quick. The model was ready four minutes later.

**Azure Custom Vision was one of the three players that classified all 7/7 test images correctly.** However, logging in and getting started was the worst experience of any of the players we evaluated. Once we finally got set up in Custom Vision, training and testing the model was as quick as any of the simpler APIs. Like the other large players, Custom Vision has a lot of online resources to turn to when you get confused (fortunately for us).

### AWS Rekognition Custom Labels

{% include figure.html url="../images/aws-cv-saas.webp" alt="AWS Custom Vision" link="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html" %}

***Tedious set-up; deployment required coding, so we couldn’t test its performance***

[Amazon Rekognition Custom Labels](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html?pg=ln&sec=ft) is one component of Amazon Rekognition, which includes a variety of pre-trained and customizable computer vision APIs. Amazon says customers can use Custom Labels to “identify the objects, logos, and scenes in images that are specific to your business needs.” Like Azure Custom Vision, Amazon Rekognition’s sign up process is tedious; it took us 10 minutes to just get into the product.

Once in the product’s interface, we followed a video tutorial to get through the first steps until we got to a dashboard that was self-explanatory and laid out the steps to completion nicely. Uploading images was pretty easy (you can only upload 30 at a time, so we did it in 3 batches), but we had to assign a label to each image individually. Unfortunately, once it was time to use/test our model, it required coding with Python. **Coding with Python was beyond the scope of this benchmark, so we had to abandon our test with Custom Labels at this point.**

## So what’s the right way to choose a CV service provider?

The [computer vision market](https://www.nyckel.com/blog/guide-to-computer-vision-for-non-ml-experts/) is large and diverse. Even restricting our search to providers that offer self-service, full-stack services that require no ML skills still leaves room for a lot of differentiation, and therefore, a lot to think about when choosing a provider.

The comparison criteria used here (functionality, time to first model, performance, market positioning and pricing) can make the difference between similar options – provided that you have an accurate characterization of the relative importance of your UX and business needs.

This means figuring out what you need from a computer vision SaaS provider. Here are some questions to consider:

* Does the platform support the function type(s) that your business needs? (E.g., image classification, object detection, or image tagging.) Does the platform offer broad enough function types that can support future use cases?
* How important is ease of use and the ability to train new users quickly? Is the platform intuitive, or does it require a deep dive into technical documentation?
* How accurate is the platform when you run it through some test data sets? Is the platform’s performance good enough for production deployment?
* Is pricing transparent and within your budget? Does it still fit your budget as you increase the number of model invokes?

If you’re interested in exploring Nyckel in more depth, [sign up for a free account](https://www.nyckel.com/console) or click through any of our quick starts, including [image classification](https://www.nyckel.com/docs/image-classification-quickstart) or [object detection](https://www.nyckel.com/docs/detection-quickstart).
