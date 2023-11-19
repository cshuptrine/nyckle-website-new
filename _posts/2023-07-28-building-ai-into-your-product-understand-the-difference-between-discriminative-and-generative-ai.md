---
layout: post
title: "Discriminative vs. Generative AI: Which Should You Build Into Your Product?"
date: 2023-07-28
author: oscar
stage: false
featured: false
headliner: false
summary: If you’re considering building AI into your product, it’s important to
  know the difference between generative and discriminative AI. We dive into the
  differences and the pros and cons of each.
description: If you’re considering building AI into your product, it’s
  important to know the difference between generative and discriminative AI. We
  dive into the differences and the pros and cons of each.
image: /blog/images/discriminative-vs-generative-ai1.webp
---
At Nyckel, our goal is to not only make it simpler to solve problems with ML but also help developers and product teams learn what they actually need to know about ML to be successful in their roles. In this article, we’ll review one of the important ML distinctions you should know before building AI into your product: the differences between generative and discriminative AI.

| **Generative AI**                                                                                                           | **Discriminative AI**                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Typically trained on very large language models (LLMs) to perform almost any task                                           | Can be trained on narrow models to perform very specific tasks (e.g., text or image classification), making it quick and easy to spin up functions        |
| Objective of the model is to create entirely new content using the data the model has been trained on                       | Objective of the model is to make a decision based on data the model has been trained on                                                                  |
| Input and output are very flexible, often requiring prompt engineering to determine the best input to get the output needed | Input is typically fixed schema (e.g., input: text string or image, output: predefined categories)                                                        |
| Sometimes makes things up (hallucinates), which requires a human to confirm the output’s accuracy                           | Having a human reviewer in the loop to moderate low confidence decisions and retrain the model with new annotated data can help improve model performance |
| Solutions typically do not have the scaffolding required to discover problem cases and iterate on annotated data            | Best solutions enable a data engine — a process for detecting and managing problematic data                                                               |
| Popular tools include ChatGPT, DALL-E, Jasper, Ask Codi, Sythesia, and Writesonic                                           | Popular tools include Nyckel, Roboflow, Vertex AI, Hugging Face, and Akkio                                                                                |

## What is generative AI?

We’ll start with the type of AI you’re likely most familiar with because it’s [driven much of the hype](https://apnews.com/hub/generative-ai) in recent months: generative AI. The objective of generative AI is to create new content using what the ML model (a large language model) has learned from training data. The types of content you can create with generative AI are vast and include text, images, music, videos, 3D models, synthetic data, and more. One of the most commonly used forms of generative AI are customer support chatbots.

Generative AI solutions, like GPT-4, typically have flexible interfaces, meaning you can guide the models to respond in a way that aligns with what you’re trying to accomplish. The applications for generative AI almost feel limitless; if there’s a type of content you want to create and deliver to your customers via your product, you can probably do it with support from LLMs like GPT-4.

For all of the upside of generative AI, there are also challenges you’ll need to overcome: 

* Generative AI models are tricky to control. You never quite know what you’re going to get, so you may need a lot of trial and error (i.e., prompt engineering) to get closer to your desired output.
* These models are prone to making stuff up (i.e., hallucinating). You’ll need a human reviewer involved to confirm the accuracy of the model’s output.
* Most generative AI solutions lack the basic scaffolding required to help you solve discriminative (decision-based) tasks. More specifically, solutions like those from OpenAI don’t enable a [data engine](https://www.nyckel.com/blog/9-ways-to-use-a-data-engine-to-improve-your-ml-model/) to help you discover corner cases and iterate on the labeling of your existing samples to ensure the model receives the right type of inputs.

### Generative AI skills

The most important generative AI skills to know as a product manager or developer are **prompt engineering** and **prompt chaining.**

**Prompt engineering** is figuring out which words and phrases to use as an input to get the model to respond in the way you want it to (the output). Courses in prompt engineering are popping up left and right, and you can also learn a lot by searching for example prompts. But, in our opinion, the best way to learn is to jump into a tool like GPT-4 to give it a spin for yourself — experimenting with how different prompts get different results.

Here’s how a product manager of a real estate mobile app could explore how they could use GPT-4 to help its customers (realtors) write property listings:

{% include figure.html url="../images/prompt-engineering-real-estate-listing.webp" alt="GPT-4 prompt engineering for real estate application"%}

**Prompt chaining** is another important skill for generative AI. With prompt chaining, you ask the model a sequence of questions or provide a series of prompts to get additional information or closer to the answer you want from the model. For example, if the model's initial output isn’t in the format you need it, you’ll need to “chain” prompts together to get the output in the right format. (In the example below, see how the user requested that the model only respond with the home type.)

For example, the same real estate mobile app mentioned above could use generative AI to fill in all of the property fields for a listing by providing the high-level property details as the original prompt. By chaining together multiple prompts, the developer could have the LLM produce all the outputs it needs for each listing. See [an example chat transcript from ChatGPT](https://chat.openai.com/share/ade82814-d867-4902-87f8-fe6a2cd37f7f) for how this might look.

{% include figure.html url="../images/prompt-chaining-real-estate-listing2.webp" description= "Prompt chaining with GPT-4" alt="Prompt chaining with GPT-4"%}

## What is discriminative AI?

Now let’s shift to discriminative AI, which is the type of solution that Nyckel provides. The objective of discriminative AI is to make a decision or distinguish between different types of data. These models learn the boundaries between different classes or categories in the training data and then make predictions (or decisions) based on them. One of the most commonly used forms of discriminative AI are spam filters: Is this "spam" or "not spam?"

Typically, generative AI and discriminative AI are used for different situations altogether. However, you can use generative AI models/LLMs for discriminative tasks (including a spam filter). We shared an example of [how you could use GPT-4 for a discriminative task in this post](https://www.nyckel.com/blog/why-narrow-ai-is-better-than-gpt-4-for-machine-learning-driven-decisions/), showing how you could categorize an input as toxic or not toxic. 

{% include figure.html url="../images/Nyckel-AI-approach-relating-to-GPT-4-2.webp" width="80" alt="The confusion matrix for the whale sound classification function"%}

However, when you need to complete a discriminative task (i.e., you need to make a decision), it’s often a lot faster to train a discriminative function. Plus, they scale much better because it’s easier to add more outputs and more data, while also tracking how well the function performs.

Compared to generative AI, the downside of discriminative AI solutions is that they’re narrower in focus. In other words, they’re trained to complete specific tasks, like detect objects, classify images, search text, and more. As a result, you can’t perform as many tasks as you can with generative AI. However, this is only relevant if your use case is something you can’t manage with a discriminative function. The narrow scope is actually an upside if discriminative AI is what you need (again, because it’s faster and easier to scale).

### Discriminative AI skills

When you’re using a discriminative AI solution, the most important activities your team needs to do, include: 

* **Choosing the right data as inputs.** The data you use to train your model needs to be real-world data from your system and have enough annotated examples from each label set to train the model with. 
* **Choose the right set of outputs.** The output labels you choose will depend on what you’re trying to achieve with your discriminative function. For example, if you want to label your product images by the category they belong to on your website (e.g., [REI might label its products](https://www.rei.com) by "Camp & Hike," "Climb," "Cycle," etc.), you will want to include all the relevant labels and decide [whether a product image should only belong to one label or if it could have multiple labels assigned](https://www.nyckel.com/blog/multi-class-classification-vs-multi-label-classification-key-differences-how-to-choose/).
* **Chain together simpler functions to a more complex whole.** For example, let’s go back to the real estate management app. Imagine the site auto-tags photos by which room they are taken in. This can be done by training a “WhichRoomIsThis” multi-class classification function. However, before tagging photos with which room they are, you may want to add a “pre-processing” function that simply says “is this photo relevant for the posting?” That function could filter out blurry photos, personal photos, and other non-relevant images. So, you end up chaining together the “IsThisPhotoRelevant” function with the “WhichRoomIsThis” function.
* **Moderate decisions with low confidence and feed new annotated data into the model to improve performance.** The most significant benefit to using a discriminative AI solution for discriminative tasks is the ability to monitor model performance and iterate on your data. Using a [discriminative solution that enables a data engine](https://www.nyckel.com/blog/why-narrow-ai-is-better-than-gpt-4-for-machine-learning-driven-decisions/) helps you pinpoint where your model is underperforming and annotate new data to ensure the model receives the right kinds of inputs to increase performance. 

Here’s an example of how the same real estate mobile app could design a discriminative function to categorize listing photos into their respective categories:

**Input data**: Images from a listing of a house for sale

**Output labels:** Front exterior, Back exterior, Yard, Entryway, Kitchen, Dining Room, Living Room, Family Room, Sunroom, Office, Bedroom, ½ Bath, ¾ Bath, Full Bath, Closet, Mudroom, Stairway, Basement, Workout Room, Storage Space, Mechanical Room, Neighborhood Amenity, Neighborhood Park

If the real estate app wanted to separate interior versus exterior photos from each other, they could chain together different functions to break down the listing photos into smaller subsets: 

1. Is this photo of the exterior or interior of a house?
2. If exterior → is it: Front exterior, Back exterior, Yard, Neighborhood Amenity, Neighborhood Park?
3. If interior → is it: Entryway, Kitchen, Dining Room, Living Room, Family Room, Sunroom, Office, Bedroom, ½ Bath, ¾ Bath, Full Bath, Closet, Mudroom, Stairway, Basement, Workout Room, Storage Space, Mechanical Room?

{% include figure.html url="../images/discriminative-vs-generative-ai2.webp" alt="Generative AI vs. Discriminative AI"%}

## Do you need to create new content or make a decision?

Chances are you’ll be in a meeting soon when someone broaches the topic of how to integrate AI in your product. During those conversations, we challenge you to get to the bottom of what you’re trying to accomplish with AI. For example, are you trying to automate a process? Help a customer find what they’re looking for quicker? Integrate a supportive AI chatbot that can respond to customer inquiries?

The crux of this question is whether you need to classify existing data to help your product make a decision, or generate entirely new content.

Once you have a solid understanding of this, you can begin to narrow in on the segment of the AI market that can best solve your challenge. Popular LLMs like GPT-4 can perform discriminative tasks, [but not as well as narrow AI models trained to make decisions](https://www.nyckel.com/blog/why-narrow-ai-is-better-than-gpt-4-for-machine-learning-driven-decisions/) (discriminative models). Understanding the difference between these different types of models is one of the first steps to effectively building AI into your product. 

If discriminative AI is what you need, [give Nyckel a try for free](https://www.nyckel.com/console). If you need help getting started, [check out our quickstarts](https://www.nyckel.com/docs/image-classification-quickstart) or [reach out to us](mailto:feedback@nyckel.com).