---
layout: post
title: Taimi Reduces Content Moderation Time by 3x, Experiences 10x Cost
  Reduction With Nyckel
date: 2022-08-09
author: oscar
stage: false
seo_title: Taimi Customer Story
summary: <i>Our average moderation time went down by three times, auto
  moderation coverage increased four times, and accuracy imporoved to 96%!</i> –
  Vladislav Yavorskyi, Moderation Manager, Taimi
seo_description: Taimi used Nyckel’s text classification API to increase
  curation coverage and accuracy and reduce latency over time with its
  auto-retrain. Read more.
og_image: /blog/images/taimi-case-study-header-image.png
og_image_alt: Taimi uses Nyckel for content moderation
---

<a href="https://taimi.com">Taimi</a> is an LGBTQ+ dating app, with over 16 million users on the platform. With a community as large as Taimi’s, content moderation is critical to ensure a positive user experience.

{% include quote.html text="[Nyckel] is significantly cheaper than manual moderation…9 or 10 times cheaper than using a [moderation] company in Europe or the US." author="Vladislav Yavorskyi" title="Moderation Manager, Taimi" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-taimi.jpg" %}

{: .highlights }
Taimi uses Nyckel text classification to moderate content across its platforms
: 3x reduction in content moderation time
: 4x increase in auto-moderation coverage
: 10x cost reduction compared to manual curation
: 96% accuracy for auto-moderation

## About Taimi

Taimi is a dating app for lesbian, gay, bi, trans, queer, and others who don’t identify as cisgender and heterosexual. The company built the app around the concept of dating fluidity, and users choose it because it offers them a queer-centric bio, authentic connections, a place to be themselves, and a strong commitment to harassment prevention.

{% include figure.html url="../images/2022/taimi-info-card.jpg" alt="Taimi info card" link="https://taimi.com"%}

## The Challenge

Taimi’s moderation team was up against a lot: they had thousands of images and pieces of text per day to moderate. At the same time, they needed to optimize their moderation tools. 

Taimi needed a content moderation solution that was faster and higher quality than keyword-based moderation and would take into account the context of the content within the platform. The team recognized they needed machine learning (ML) to support their complex moderation needs.

## The Solution

Taimi’s Moderation Manager, Vladislav Yavorskyi, discovered Nyckel’s [content curation solutions](https://www.nyckel.com/custom-content-moderation-api) via an internet search for ML and AI solutions. Vladislav was immediately pleased with the simplicity and usability of Nyckel’s interface, and the ready-to-use free plan meant that Vladislav’s team could get started right away.

{% include quote.html text="The user interface is really ergonomic and user-friendly." author="Vladislav Yavorskyi" title="Moderation Manager, Taimi" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-taimi.jpg" %}

Taimi’s moderation isn’t as simple as classifying content as acceptable or unacceptable. The team uses more than 10 categories during the moderation process, including contextual considerations. For example, the team weighs whether the content contains external links or social media.

Taimi’s first approach with Nyckel was to use a single model across half a dozen moderation categories. This was successful, but Vladislav’s team needed the model to auto-moderate more content, and with greater accuracy. They decided to train individual models for each of their categories. The next step was to train the first of these stripped-down models.

{% include quote.html text="Training this model took less than two minutes and you can really trust it." author="Vladislav Yavorskyi" title="Moderation Manager, Taimi" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-taimi.jpg" %}

The first of the new models that the team tested were able to moderate 45% of Taimi’s content with 95% accuracy. And with every training cycle, the numbers improved. The team moved forward with implementing these models across each category.

## The Results

Today, most of Taimi’s content is moderated automatically. The moderation time — the time from when the content goes live to when the content has been moderated — has been reduced to a few seconds. And to monitor the model’s continued performance as user behavior changes, the moderation team checks a subsample of auto-moderated content.

Using Nyckel’s [Text Classification API](https://www.nyckel.com/text-classification-api), Taimi now automates 60% of all content moderation with an accuracy of 96%. Average moderation time is down 3x and auto-moderation coverage is up 4x. Apart from continuing to improve the current model, Vladislav plans to apply Nyckel’s machine learning to the problem of scammers and spammers in the future.

- - -

Interested in exploring how our custom content moderation solutions could support your business? [Sign up to give Nyckel a try for free](https://login.nyckel.com/), or [learn more about our content moderation solutions](https://www.nyckel.com/custom-content-moderation-api).

For more reading on content moderation, check out these articles:

* [The Ever-Growing Landscape of Content Moderation AI Platforms](https://www.nyckel.com/blog/the-ever-growing-landscape-of-content-moderation-ai-platforms/)
* [Content Moderation using SurgeAI's Toxicity Dataset](https://www.nyckel.com/blog/content-moderation-using-surgehq-toxicity-dataset/)
* [What Features Does Your Manual Content Moderation Tool Need?](https://www.nyckel.com/blog/what-features-does-your-manual-content-moderation-tool-need/)