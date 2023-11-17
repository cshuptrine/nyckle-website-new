---
layout: post
title: Why Narrow AI is Better Than GPT-4 For Machine Learning-Driven Decisions
date: 2023-04-19
author: oscar
stage: false
featured: true
seo_title: GPT-4 vs. Nyckel for Machine-Learning Driven Decisions
summary: GPT-4 is impressive. Yet, there are better tools available (including
  Nyckel) that are tailored to the unique needs of software developers and
  product teams who need an API for machine learning-driven decision making.
seo_description: Learn why products that can spring up narrow AI models trained
  for specific tasks outperform GPT-4 for ML-driven decisions.
og_image: /blog/images/narrow-ai-approach-header.png
og_image_alt: NarrowAI vs GPT as David vs Goliath
---

*[ML is still too hard for software developers](https://www.nyckel.com/blog/ml-too-hard-for-software-developers/). So what’s the solution? OpenAI’s huge, generic models have rightfully made a big splash. But it comes at steep costs at several levels, and developers are finding that smaller, targeted “Narrow AI” functions are a better bet for their use cases.*

- - -

Machine learning (ML) has evolved rapidly over the last 10 years. Today, almost any business can benefit from ML in one way or another. However, [ML is still too hard for software developers](https://www.nyckel.com/blog/ml-too-hard-for-software-developers/). Complexities range from grasping core ML concepts; staying up-to-date with the literature; bringing up software for annotation, data inspection & training; setting up infrastructure; and more.

As a result, there is a vast under-utilization of ML-powered applications and features. And as a result of that, there are many ML players working on tackling this complexity.

OpenAI, perhaps the most well-known player, is betting on so-called large language models (LLMs). They recently released their new flagship model GPT-4, with reportedly over 1 Trillion parameters. These models are trained to perform almost any task and come equipped with a very generic text → text interface. Because of this flexible interface, LLMs like GPT-4 can solve so-called “generative” ML tasks, where new content is created. The applications are endless, including generating blog posts similar to the very one you are reading.

One can also use the GPT-4 interface to solve so-called "discriminative" ML tasks, where the goal is to make decisions. These tasks typically have a fixed schema, e.g., the input can be a text string, and the output can be one of a set of predefined categories. How is this achieved using GPT-4? Let’s take a look.

## Using GPT-4 for decision-making

Let’s start with so-called “zero-shot” learning, where you ask for a decision without providing any examples of the output categories. In this example, we use the [ChatGPT](https://openai.com/chatgpt) client, powered by the GPT-4 model, but the same thing can be achieved by using the [OpenAI API](https://platform.openai.com/docs/introduction):

{% include figure.html url="../images/Nyckel-AI-approach-relating-to-GPT-4-6.png" width="80" alt="The confusion matrix for the whale sound classification function"%}

This reply makes sense, but in order to use it as part of an application, we need the output to be schematized so that the caller can parse it as part of the API request. To achieve that, we can simply ask:

{% include figure.html url="../images/Nyckel-AI-approach-relating-to-GPT-4-1.png" width="80" alt="The confusion matrix for the whale sound classification function"%}

That’s pretty good, although you’d have to strip the period, make your parser case insensitive, and manage cases when the GPT-4 replies out of schema.

LLMs such as GPT-4 also support so-called “few-shot” learning, where you provide examples as part of the prompt. This is often required in production systems where the decisions are more nuanced. Here is what our “pass me the ketchup” example might look like:

{% include figure.html url="../images/Nyckel-AI-approach-relating-to-GPT-4-2.png" width="80" alt="The confusion matrix for the whale sound classification function"%}

Again, it works. And in general, for toy problems, it will continue to work. However, at some point, the lack of a data engine will become painfully evident, particularly for decisions with multiple output categories.

For example, let’s say you are classifying press releases into 10 categories, such as “Events,” “Business,” “Tourism,” etc. You’d first need to provide examples for all ten categories in the prompt itself, which becomes quite a long list. Next, you will need to keep augmenting the prompt if you find samples where the AI gets it wrong. This can quickly become a game of “whack-a-mole,” where you fix one type of issue only to have another appear.

The way to solve these types of problems is well known; you need to build a “[data engine.](https://www.nyckel.com/blog/9-ways-to-use-a-data-engine-to-improve-your-ml-model/)” A data engine allows you to discover corner cases and iterate on the labeling of your existing samples to ensure the model receives the right kinds of inputs.

So, ironically, the highly sophisticated AI solution from OpenAI lacks the basic scaffolding required to solve production-grade discriminative (decision) tasks.

## Alternative to LLMs: Narrow AI models trained for specific tasks

At the highest level, [Nyckel](https://www.nyckel.com) solves the same problem as OpenAI: abstracting away the complexities of managing the ML minutia. However, we take a diametrically different solution. Instead of providing a single, huge, static, general model, Nyckel provides tooling to spring up “narrow” AI models trained for specific tasks.

Contrary to GPT-4, Nyckel’s functions are schematized with a “standard” Rest API interface. These functions are cheap and light and allow developers to spin up as many as they need for their application. This approach resonates with many developers, allowing them to break down their ML needs into simple, digestible pieces.

With Nyckel, it's fast to spin up a solution to the “pass-me-the ketchup” toy problem, albeit not quite as fast as with GPT-4. Here is the zero-shot example with Nyckel:

{% include arcade.html url="https://demo.arcade.software/v77HuZ5XvJoQ6x66ADfO" caption="Zero-shot learning with Nyckel" %}

And for few-shot learning:

{% include arcade.html url="https://demo.arcade.software/UCzpYcR4NXhdqyWF25ne" caption="Few-shot learning with Nyckel" %}

So while Nyckel functions are not quite as fast to create as an API call to GPT-4, they scale much better. Meaning: it is easy to add more outputs and more data while tracking how well the function performs.

The narrow AI models are also smaller, meaning they’re cheaper to invoke; the output adheres to a fixed schema; and they scale to more complex problems that require a data engine to iterate on the data. For example, Nyckel’s data engine provides:

* CRUD (Create, Read, Update, and Delete) operations on inputs and labels.
* The ability to identify examples where Nyckel disagrees with the desired output. This can help identify labeling errors as well as highlight corner cases and problem areas.
* The ability to identify examples from the invoke stream that should be labeled to further improve the model.

## OpenAI’s GPT-4 vs. Nyckel: Key differences

OpenAI has created an incredible product with many practical and creative use cases. Yet, there are better tools available (including Nyckel) that are tailored to the unique needs of software developers and product teams who need an API for machine learning-driven decision making. We outline some of the key differences between Nyckel and GPT-4 below:

|                                   | **GPT-4**                                                                                                          | **Nyckel**                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| **AI paradigm**                  | General AI trained on a huge language model to perform almost any task.                                            | N﻿arrow AI trained for specific tasks (e.g., classification of images and text). |
| **API interface**                 | Generic text-to-text API interface.                                                                               | Schematized, "standard" REST API interface                                      |
| **Decision-making capabilities** | Effective on simpler problems. Needs significant prompt engineering and external scaffolding for complex problems. | Optimized for decision-making tasks with a built-in data engine.                |
| **C﻿ost**                         | $0.06 per API call ([for 1K tokens / 8K context](https://openai.com/pricing)).                                    | $0.001 per API call (at the [Growth](https://www.nyckel.com/pricing) tier).       |

## Nyckel: the “Narrow AI” API for decision-making

We built Nyckel specifically for the needs of developers and product teams who don’t have machine learning expertise in-house. (And for most companies, [we don’t think they need it](https://www.nyckel.com/blog/service-oriented-design-applies-to-ml-too/) in-house anyways.) [Check out our docs and quickstarts](https://www.nyckel.com/docs) to explore how your team could use our product.

If you’re ready to give Nyckel a try, [sign up for a free account](https://www.nyckel.com/console) or [get in touch with us](mailto:feeback@nyckel.com) to chat through how best you could tackle your use case.
