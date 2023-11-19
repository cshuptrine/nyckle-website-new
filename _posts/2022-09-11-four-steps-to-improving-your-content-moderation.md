---
layout: post
title: 4 Steps to Improved Content Moderation
date: 2022-09-11
author: oscar
stage: false
featured: false
headliner: false
summary: Progress through blacklists and pre-trained AI's to full custom-AI
  content moderation.
description: Learn how to improve your content moderation through blacklists
  and regular expressions, through pre-trained AIs, to custom AI that learns
  from your data.
image: /blog/images/2022/content-moderation-steps-hero.webp
image_alt: The four steps to content moderation
---

As someone who runs an online platform, you’re excited to see your users interacting and posting content. You’re focused on growth and traction, after all.

Only afterward do you notice the _problem_.

Most of your users (hopefully) are normal, awesome people who genuinely love your site. Their content adds value and helps to foster a community on your platform. Unfortunately, all it takes is a few bad apples to post random, inappropriate, or even dangerous content and suddenly you find yourself doing damage control.

**Content moderation is essential for anyone looking to build, grow and manage a successful community within a platform**. One of the biggest challenges with content moderation is finding a solution that’s both efficient and accurate.

In this post, we’re sharing 4 effective steps to successful content moderation, using specific examples.

## Step 1: Identify the Type of Problematic Content You’re Dealing With

Content moderation problems are as varied and frustrating as the individuals who cause them. Also, you might be experiencing more than one type of problematic content.

Some of the most common examples include:

* Rude/abusive/hate speech. This one runs the gamut from mild insults to pornography and graphic language. Cyberbullying falls into this category
* Trolling. Users seeking attention, often in the form of harassing/annoying other users rather than contributing to the conversation
* Spam/bots. Generic content intended to advertise, propagandize, or otherwise distract and influence users.
* Irrelevant/self-promotional content. Content that’s off-topic, often with the purpose of redirecting users. For example: in a blog post comment section, a user may post a link to their own blog and encourage others to click on it and leave the original platform
* Scams/Phishing. Irrelevant content, but specifically with the purpose of extracting either money or personal information from other users
* Solicitations. Inappropriate content specifically aimed at exploiting children/minors or any other vulnerable person
* An uptick in user complaints/user churn. Users expressing frustration with the platform, resulting in higher than normal complaints and turnover
* Disintermediation. Users attempting to avoid platform fees by trying to take deals off-platform – this is often an issue with e-commerce sites
* Inadvertent PII (Personally Identifiable Information). Users unwittingly posting a photo or image that, usually in the background or foreground, contains PII such as a phone number or address

Note that some of these categories overlap, and some may contain subcategories of their own. **Also keep in mind that the type of problematic content you experience likely has to do with the type of platform you’re running**. If you’re running a website for children, for example, you are probably going to be focused on avoiding different content issues than if you were running, say, a travel blog.

## Step 2: Use Quickest Solutions (Heuristics) First

You’ve identified your problem, now it’s time to take action.

**The most basic solutions to start with are non-ML (machine learning)**. Human editing is time-consuming, so let’s take a look at the next step after that.

If the content on your platform is mainly text-based, then a **regex together with a blacklist** of toxic or problematic words and phrases can be used to block users from posting content that includes these words. This blacklist (sometimes called a “blocklist”) is a pretty standard, comprehensive example.

Keep in mind that you don’t need to have the perfect solution or be an expert when you begin doing content moderation. By definition, **heuristics are not a perfect approach to resolving all your issues, but they will get you off to a good start.**

In fact, Google research scientist Martin Zinkevich actually [advises that you don’t use ML](https://developers.google.com/machine-learning/guides/rules-of-ml) when starting out with your content moderation. There are faster ways to get results until you have the data needed to then move on to ML-based solutions.

Of course, heuristics have their downfalls. You can find yourself experiencing the “whack-a-mole” effect when fixing one content issue causes another problem to pop up in the process.

For example, a potentially offensive word on a blacklist (like “balls”) may have a primary or secondary meaning that’s completely benign. You may find yourself fixing problems that you didn’t have in the first place.

## Step 3: Use a Pre-Trained AI

When heuristics are no longer sustainable, the next step is pre-trained AI.

There are a number of platforms that will automate the content moderation process for you. [Hive Moderation](https://hivemoderation.com/) offers options for all types of data, from video and audio to text and GIFs. [Assembly AI](https://www.assemblyai.com/) focuses on AI-powered audio, with services that cover a range of audio-based services, while [Surge AI](https://www.surgehq.ai/) is a dataset-focused platform. Alternatively, you can look for a vendor in a marketplace such as [RapidAPI](https://rapidapi.com/). [This](https://rapidapi.com/inferdo/api/nsfw-image-classification1/) is an example of an API for detecting NSFW imagery.

Obviously, all of the above are just a few notable examples.

While pre-trained AI is far more efficient than heuristics, it still comes with some issues:

* These moderation policies are "one size fits all" and may not fit your community and its specific needs.
* You inherit any problems that come with the training data these platforms use.
* The model is fixed so you can’t improve it by feeding it new data examples from your own community.

## Step 4: Use Custom AI

If you’ve come to this point and still need a more precise approach, then it’s time for you to use custom AI.
Custom AI-based content moderation means that you’re using AI trained on your own data.
Here are some of the advantages of using custom AI:

* You are able to continually improve the AI by giving it new/more data (that your team manually annotates)
* Because the AI is learning from your data, it will be tailored to your community and the moderation style you want to enforce
* Custom AI based on deep learning will be robust enough to catch misspellings. It can also generalize to other languages, depending on how it’s trained

Depending on how sensitive, challenging, and time-consuming your content moderation needs are, you may be able to get by on heuristics and/or pre-trained AI. However, over time, a custom AI solution will minimize manual curation needs and deliver the best content to your platform.

However, while Custom AI solutions are highly effective, they do require deep expertise in Machine Learning. The fastest way to implement custom AI is to go with a ML-SaaS service. Established platforms like [Nyckel](https://www.nyckel.com) and [Imagga](https://imagga.com) will quickly get you set up with custom AI moderation, helping resolve your issues so you can focus on building your brand.
