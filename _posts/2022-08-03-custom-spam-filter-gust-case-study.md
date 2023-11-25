---
layout: post
title: How Startup Accelerator Gust Trained a Custom Spam Filter using Nyckel
date: 2022-08-03
author: oscar
stage: false
summary: <i>It was wonderful and saved us a ton of time. We finally got rid of
  spam profiles that were draining our site ranking, bothering customers, and
  giving us a general headache!</i> – Peter Swan, CEO, Gust
description: Gust used Nyckel to train a custom AI spam filter. The new
  filter is 95% accurate and reduced their curation workload, while improving
  site quality.
image: /blog/images/gust-case-study-header-image.webp
image_alt: Gust uses Nyckel for custom AI spam filter
---

<a href="https://gust.com">Gust</a> helps entrepreneurs turn good ideas into great startups. It combines software tools, a funding application platform, and community to make it easy to start a startup that's set up for success. After being in business for more than 10 years, Gust needed some bespoke AI, and that’s when they came to <a href="https://www.nyckel.com/custom-content-moderation-api">Nyckel</a>.

{% include quote.html text="It was wonderful and saved us a ton of time. We finally got rid of spam profiles that were draining our site ranking, bothering customers, and giving us a general headache!" author="Peter Swan" title="CEO, Gust" mugshot="/assets/images/important/quote-peter.webp" %}
ugs
{: .highlights }
Gust uses Nyckel text classification to moderate site content
: 95% accuracy of AI moderation, up from 70%
: Restored SEO reputation & eliminated customer complaints
: Nyckel integration was "wonderful" and "extremely quick"


When entrepreneurs join Gust’s platform, they build a start-up profile which they then use to present themselves to angel investors and accelerators, and they can even opt to make the profile public so that it’s indexed by search engines as part of the start-up’s public presence. The profile is used to find funding, legal support, and for investors to evaluate propositions. Gust’s tools help users to understand their sources of value and how to synthesize them, where to improve, and their possible next steps.

{% include quote.html text="It’s funny – we had kind of an after-effect of this. We were like, OK, we have to stop being so psyched about how well this worked because now we have to turn our attention to the strategic stuff!" author="Peter Swan" title="CEO, Gust" mugshot="/assets/images/important/quote-peter.webp" %}

Unfortunately, start-up pitches often look very similar to scams – especially if they’re operating in a newly deregulated space. For example, there’s been an explosion of legitimate cannabis businesses in the US in the past few years, and they naturally share a lot of their pitching and messaging vocabulary with long-established scammers and illegal traders. Last year, Gust hit an inflection point: the task of manually sorting the real accounts from the fraudulent back-linkers became too big. Their naïve approach – keywords, blacklists, admin tools – was just taking too long.

Because the volume of submissions is so large, whole categories of things wouldn't get flagged by the naïve system. These would then propagate out onto the internet and generate huge backlink spam networks pointing to Gust. This was draining the Gust site ranking, backlink profile, and the brand value.

Gust had looked to third party APIs for spam filters, but those filters weren’t smart enough to walk the line of subtlety between legitimate start-ups and scams. Canned models weren’t good enough; Gust needed machine learning and they needed something custom. That’s when they contacted Nyckel.

{% include quote.html text="Not having a good system to deal with spam was draining our site ranking, our actual backlink profile, and the brand value that we had built up." author="Peter Swan" title="CEO, Gust" mugshot="/assets/images/important/quote-peter.webp" %}

Gust had tried to use AWS, but found its command-line interface unwieldy – and it had the significant drawback that it couldn’t be updated on the fly. This headache was relieved by Nyckel's <a href="https://www.nyckel.com/text-classification-api">Text Classification API</a>: all Gust needed to do was write some code to export some training data for Nyckel. Most of this data was used to train an AI model, but a portion of it was kept separate in order to test the model once it was generated.

{% include quote.html text="We immediately got to see that, OK, Nyckel is doing a better job than our naïve solution because it’s caught a bunch of things in both directions that straddle that line of subtlety" author="Peter Swan" title="CEO, Gust" mugshot="/assets/images/important/quote-peter.webp" %}

The data training took 5 minutes. A couple more hours was required to investigate the points of difference between the model’s classification and Gust’s manual classification. They launched the model with a plan to correct in the places where the model had disagreed with Gust, and then iterated the process; they exported the data again, spent 5 minutes training the model, and a couple more hours to check. Then the updated model could be swapped into Gust’s platform, along with some tweaks to environment variables. All in all, the process took a matter of weeks.

{% include quote.html text="We got to sunset all of the naïve modelling code, and just took this huge time waster, both in terms of technical cost and operational cost – and just got rid of it!" author="Peter Swan" title="CEO, Gust" mugshot="/assets/images/important/quote-peter.webp" %}

It now takes Gust 20–30 minutes per week to review the model’s rejections. It’s correctly classifying 95% of them. And it’s catching stuff as it comes in, rather than Gust waiting for fake accounts to show up in the Google analytic footprint. This means that the associated platform clean-up has been eliminated, complaints about false negatives have been eliminated, the brand harm caused by fake accounts has been eliminated, and the network of SEO and backlink sites that would grow up around fake accounts has been eliminated.

{% include quote.html text="Once we got moving, it just moved extremely quickly for us. And once complete, it has freed up a ton of brain space and time" author="Peter Swan" title="CEO, Gust" mugshot="/assets/images/important/quote-peter.webp" %}

Gust is already looking ahead at other ways that AI could speed up their operations, from photo ID recognition to sorting legal documents into appropriate diligence classes, removing the intense thinking time that drains energy and can be a bottleneck in getting a start-up off the ground.