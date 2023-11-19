---
layout: post
date: 2022-04-30
title: Custom AI-Assisted Content Moderation 
author: george
description: Online communities need content moderation to thrive, but the diversity of the internet is not fully served by general purpose content moderation APIs. We lay out the need for custom AI-assisted content moderation, look at what such a moderation pipeline would look like, and show how Nyckel makes it significantly easier to build such a pipeline.
image: /blog/images/2022/content-moderation-workflow-hero.webp
---

As noted on [this mux.com blog post](https://www.mux.com/blog/you-either-die-an-mvp-or-live-long-enough-to-build-content-moderation),
when you have a social platform, you either die an MVP or live long enough to build content moderation.
For many moderation use-cases, like filtering NSFW or offensive content, a general purpose moderation API like
[hivemoderation](https://hivemoderation.com) fits the bill. But, as we've seen with several of our customers,
content moderation is often more nuanced than that.

## The need for custom content moderation

The internet is a wonderfully diverse place where the definition of concepts like "spam", "offensive", and "acceptable"
can vary from site to site, and sophisticated bad actors have strategies that are tailor-made to exploit
specific audiences. Let's look at a few scenarios:

* A photo sharing site for vintage motorcycles that wants to restrict the photos to motorcycle related things.
* An online collectible marketplace where some users are trying to take deals off-platform to save transaction costs. This
is commonly known as [disintermediation](https://en.wikipedia.org/wiki/Disintermediation).
* A forum where foul-mouthed banter is tolerated but often triggers the systems that are trying to detect offensive
content.
* A site where the language of interaction is not one of the common languages supported by moderation APIs.
* A forum platform whose customers use it host their own forums. Each customer has different
guidelines on what's acceptable on their forum.

These are just a few examples to illustrate the point - content moderation is required for these
communities to flourish, but they are ill-served by general purpose moderation APIs. This results in the problem either
being ignored or requiring lots of manual effort.

A purpose-built AI model can greatly reduce the amount of manual moderation effort required. Let's look at what an
AI-assisted moderation solution would look like.

## The AI-assisted content moderation pipeline

Moderation involves human judgment, and it is important to recognize the importance of having a human in the loop in
the AI-assisted content moderation process. The goal of AI-assistance is to reduce the load on human moderators by
automating the simpler cases while letting humans make judgment calls on the more complex ones. A well designed
process will continuously improve the AI model over time as it learns from human decisions. But there will always be
the need for human oversight for two reasons:

* The behavior of people on the site will change over time. This is especially true when you add in moderation as
people try to work around it.
* Even if behavior doesn't change, there will always be gray areas that need human judgment.

With that in mind, here is a diagram of an AI-assisted content moderation workflow:

{% include figure.html url="../images/2022/content-moderation-workflow.webp" description="AI-assisted content moderation workflow" link = "https://www.nyckel.com/custom-content-moderation-api"%}

While the diagram leaves out some implementation-specific details, it captures the essence of the solution. User input
is sent to an AI model to predict whether it's acceptable. If the model accepts or rejects the input with high
confidence, the input is handled accordingly. When the model is not confident, the input is sent to a moderation queue
for manual review. As moderators review items in the queue, their decision is fed back into the model, which learns
from these decisions to improve the quality of its predictions. This continuous improvement of the model, over time,
reduces the size of the moderation queue and the moderator's workload.

While this sounds great, building custom AI models usually requires hiring a Machine Learning (ML) team, which is out of
reach for most. This is where Nyckel can help.

## How Nyckel can help

Nyckel helps you add AI/ML to your product without having to hire an ML team. We abstract away all the
[details of building and maintaining ML solutions]({{site.baseurl}}{% post_url 2022-01-02-ml-too-hard-for-software-developers %}) to
let you focus on what you know best - your data. Nyckel serves as the blue AI box in the diagram above, with a simple
API for the lines that connect to it:

```bash
# Add data to train/improve the model
curl -X POST \
  -H 'Authorization: Bearer <authToken>' \
  -H 'Content-Type: application/json' \
  -d '{ "data": "<data>", "annotation": { "labelId": "<labelId>"} }' \
  https://www.nyckel.com/v1/functions/<functionId>/samples

# Get a prediction from the model
curl -X POST \
  -H 'Authorization: Bearer <authToken>' \
  -H 'Content-Type: application/json' \
  -d '{"data":"<data>"}' \
  https://www.nyckel.com/v1/functions/<functionId>/invoke
```

That's it! Behind the scenes, Nyckel tries out various models and techniques to find the best fit for your data, and
deploys your model to production-ready cloud infrastructure. Each time you add more data, your model learns from it and
improves. All this happens quickly and effortlessly as you use the API above.

You can also use our UI to build and improve your model. Here is a video of Jeremy building and improving comment moderation function using our UI:

{% include youtube.html video-id="0gfS32yourk" title="Create a comment moderation function using Nyckel" %}

Several of Nyckel's customers use us for content moderation and we are encouraged by the results they see and how
quickly they were able to get set up. If you have an online community that could use custom content moderation,
I hope Nyckel can help make it easier for you. Drop us a line if you have any questions.
