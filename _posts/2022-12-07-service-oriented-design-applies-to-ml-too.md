---
layout: post
title: Service Oriented Design Applies to ML Too
date: 2022-12-07
author: dan
featured: false
summary: The way we’re building ML solutions today runs contrary to system
  design best practices. Thinking holistically about ML as a service yields
  designs that are cleaner technically and better organizationally.
description: Service oriented design applied to machine learning will help
  manage ML complexity and build scalable organizations. Learn why.
image: /blog/images/service-oriented-design-v4.webp
image_alt: Service oriented design for machine learning
---

Imagine you’re building a product that needs to accept credit card payments. Do you:

1. Use Stripe, or
2. Register for a merchant account, sign deals with payment gateways, task your engineers with building out a processing pipeline, and then put systems in place to renew those deals and maintain that pipeline for the life of your business?

Unless you’re building a Stripe competitor, the answer is obvious, and for all the obvious reasons: Using Stripe will save you time and money, work better than what you would have come up with, and abstract away all the complexity of payments so you and your engineers can focus on your core business.

But, surprisingly, when you replace “accept credit card payments” with “use machine learning,” all too often we see businesses rolling their own, and missing out on the clear benefits of using a service.

## Rolling your own

Rolling your own is so prevalent in the machine learning industry, that an ecosystem has built up around doing it yourself. There are labeling products, GPU provisioning products, pipeline management products, experiment tracking products, and more — all there to help you build your own solution.

But saving your engineers time on any of these lower-level tasks misses the bigger opportunity — to benefit from the higher level abstraction of an end-to-end ML service. Worse yet, if you take on the complexity of assembling together these lower-level products, your team now moves slower every time they start new ML projects or try to improve existing ones.  Organizationally, this manifests as teams waiting in line for help from the handful of engineers who understand how it works, which in turn, will delay ML adoption, and cause some teams to avoid using ML at all.

## Service oriented design

Services shield organizations from incidental complexity, exposing only the essential complexity of the problem. The essential complexity of payment processing is the API you call to specify how much your product costs, and whether it’s taxable. Stripe protects you from all the incidental complexity around merchant accounts, payment gateways, and the code to make it all run.

For machine learning, the essential complexity is the example inputs and outputs you’d like the AI to learn from, and the API you call to predict the outputs for future inputs. The incidental complexity includes things like running and tracking experiments, assessing the results of those experiments, when and how much GPU to use, and maintaining all the ML infrastructure to keep things humming.

Unfortunately, both roll your own attempts and many ML services that exist today don’t hide the incidental complexity.

The Stripe API doesn’t require the user to choose a payment gateway… how would they know which one to use? What are the implications of choosing the wrong one? What is a payment gateway anyway?

But ML services still ask you what experiments you want to run, how you’d like to assess performance, and how much money to spend on training. How do users know which model architectures to try? How much money is the right amount of money to spend training this? What are the implications of setting aside larger test or validate datasets? Asking these questions not only exposes unnecessary complexity, but it also invites mistakes, or at least missed opportunities, to build better models faster.

Unlike payments processing, the field of ML is evolving a mile a minute. That means it’s even more important to use a service oriented approach. Inside the black box, the ML techniques can be constantly improved, tweaking the pipeline to improve speed and accuracy, and adopting new capabilities such as zero-shot learning and prompt engineering. These changes are handled by ML experts, and each of their improvements lifts the quality and performance for everyone with no new work required from service consumers.

## Build vs. buy

Using Stripe as an example is convenient to drive home the point that good service boundaries are important for your engineering velocity. But it also suggests that your company should buy an end-to-end service vs. building it in house. Although reining in [Not Invented Here Syndrome](https://en.wikipedia.org/wiki/Not_invented_here) within your organization is important, there are valid reasons for building and operating services in house.

But for ML specifically, often these in-house solutions do not have, or even attempt to have, a clean service boundary. Each product team curates their own data with their own tools, training is done by another team (with each model having its own bespoke pipeline), and hosting the model is left to yet another team. Each team throws their artifacts over the wall to the next, and the process quickly calcifies, inhibiting improvement and leaking complexity.

An end-to-end ML service, on the other hand, will wrap data handling, training pipelines, and hosting concerns. Consumers need not care about intermediate artifacts, and the team in charge of the service can iterate on its inner workings without disrupting other teams' roadmaps.

## ML is no exception

There’s nothing special about machine learning that prevents well-designed services from hiding incidental complexities. The services that grew up around the roll-your-own approach represent a misstep in the evolution of machine learning; a mistake that will be corrected as newer, cleaner service APIs become available. When product teams integrate with these APIs, their results will improve over time without needing to keep up with the latest advancements.

Well-designed service boundaries are at the core of what helps manage complexity and build scalable organizations. The sooner we stop building systems that expose the ML inner workings, the sooner we can realize those benefits.
