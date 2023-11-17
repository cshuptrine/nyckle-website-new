---
layout: post
title: How What’s That Charge 4x’d It's Revenue Using Nyckel Auto-Moderation
date: 2022-10-30
author: oscar
stage: false
seo_title: WTC Customer Story
summary: <i>AI-powered auto-moderation allowed quicker release of more content
  to our public repository of credit card charges, driving a 4x increase in Ad
  revenue.</i> – Jeremy Schneider, Co-founder, WTC
seo_description: What's That Charge uses Nyckel to automate its content
  moderation, improving the site's user experience and increasing WTC's revenue.
og_image: /blog/images/whats-that-charge-case-study-graphic.png
og_image_alt: What's That Charge uses Nyckel to automate content moderation
---

[What's That Charge](https://www.whatsthatcharge.com/) (WTC) is like Urban Dictionary for credit card charges. The site helps people understand the sometimes mysterious entries on their credit card statement. It does so by hosting over 100,000 credit card charges along with crowd-sourced explanations. Making sure the content is up to date and informative is critical for WTC to stay relevant and to drive Google Ad traffic. After seeing revenue falter slowly over time, WTC was able to dramatically turn the situation around by using Nyckel to automate their content moderation process.

{% include quote.html text="AI-powered auto-moderation allowed quicker release of more content to the site, driving a 4x increase in Ad revenue." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

{: .highlights }
WTC uses Nyckel text classification to release and moderate site content
: 4x increase in ad revenue
: 1 day to integrate Nyckel moderation
: Seamless auto-improvements using Nyckel API

*Note: Jeremy Schneider co-founded “What’s That Charge”.  Jeremy is an investor in, and advisor to, Nyckel, but he is not actively involved in the company.*

## What is WTC and what does it do?

Could you start a company in 24 hours?

Jeremy Schneider and his co-founder set themselves this challenge 10 years ago, and then, one night at the gym, Jeremy had an epiphany that became their 24-hour company.

Jeremy realized that he had a problem identifying charges on his credit card statement in cases where the statement listing uses a holding company name or an obscure reference. If Jeremy was facing this problem, other people would be too, and, thus, WTC was born. They quickly set up a website to help people facing the same problem.

{% include quote.html text="To this day, WTC is paying my rent." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

{% include figure.html url="../images/2022/WTC-screenshot-border.jpg" alt="What's that charge screenshot" %}

## How does WTC make money?

WTC makes its money from selling Google ads. For this to be effective, they need to maintain a competitive amount of recent and relevant content on their website. This allows their page to rank highly in searches, bringing traffic to their site, and increasing follow-through on the ads that WTC features.

{% include quote.html text="Revenue has basically gone straight up since the Nyckel integration." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

## Why did WTC need an ML solution?

WTC was intended to help people identify mysterious charges on their credit card statements. But they didn’t know what the charges were either – hence the idea for the business in the first place! So they designed WTC as a forum for user-generated content (UGC): the website would crowdsource the answers.

WTC’s UGC takes one of two forms.

Users submit a list of charges. But, sometimes users submit non-charges.
Users help to describe charges that have already been submitted. Each charge generates a page, and other people can then comment on it to explain what it is and how they know.

Both these forms of user submission were vulnerable to spam, hate speech, and so on – as is typical of any UGC. Furthermore, a significant number of user comments were unhelpful for the site’s main function, such as venting about the frustration of not knowing what a charge is – not helpful when you’re simply trying to find a quick answer.

So, WTC needed to manually moderate this content, classifying user-submitted charges as “is a charge” or “is not a charge”, and user-submitted descriptions as “helpful” or “not helpful”. They even had cases of people typing in their credit card details and asking WTC for a refund, which needed to be removed quickly to prevent fraud.

Jeremy realized that ML had advanced a lot since the inception of the company, and that they should be able to use ML to classify user submissions automatically.

{% include quote.html text="There wasn’t an API in the world that tells you if something’s a charge or not. It’s too niche. Nothing else \[apart from ML] could moderate that." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

## What did WTC try before Nyckel?

They tried manually reviewing comments first, as well as hiring friends to help moderate UGC on an hourly or per-item basis. They did not want to take on a large staff dedicated to content moderation; they wanted to keep WTC as light-weight as possible.

They tried using a drop-down menu through which users would self-select whether their submission was appropriate while submitting it. Users had to answer the question “What are you doing?” If they answered with one of the “unhelpful” categories, such as “requesting a refund”, then the comment would not be made public.

They also tried using regular expressions that could pick up things like credit card details, spam urls, or inappropriate language in order to screen out bad content.

So, the manual review was good but costly, and the automatic review was cheap but error-prone.

They knew that these problems were now tractable for ML, but they didn’t want to invest hundreds of hours on developing an ML platform just to moderate WTC’s UGC. They really wanted to find a ML-as-a-service API, where they could just upload their data, tag it, and then they could give WTC the classifications.

But that didn’t seem to exist.

The business side hadn’t yet caught up with the technology. They could find businesses saying “call here for a demo”, or “super heavy-weight solutions like AWS Sagemaker”, but not the simple API they really wanted.

{% include quote.html text="That’s where Nyckel comes in: there should be an easy way to upload your data, tag it, and then make calls against your new function. And that is exactly how Nyckel works." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

## What does Nyckel do for WTC?

WTC has two text classification functions: IsCharge, and IsGoodComment. All the complexity around the different types of bad charges and the different types of unhelpful comments is reduced to these two binary functions.

{% include figure.html url="../images/2022/WTC-examples.jpg" alt="What's that charge example content" %}

The text classification function was trained just on those binary classifications, without the need for more granular categories.

{% include quote.html text="It’s very easy for a human to read these comments and decide whether the content is useful or not, and within the space of less than 1000 comments we had a trained text classification function that now runs WTC." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

WTC had no shortage of data, but none of it was classified. They uploaded a csv file to the Nyckel UI and labeled it there.

{% include quote.html text="It was actually kinda fun just sitting there for 20 minutes and clicking yes, no, yes, no, a bunch of times, and then, like magic, Nyckel knew the rest of them!" author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

## How does WTC improve its model over time?

A false negative is not a big deal for WTC, and, in the spirit of keeping things lightweight, they don’t feel very much pressure for continuous monitoring and improvement.

{% include figure.html url="../images/2022/WTC-flow.png" alt="What's that charge improvement flow" %}

They have set a modest confidence threshold of 80%, meaning that Nyckel will only flag a comment for human moderation when the ML model is less than 80% confident in its own classification of the comment. Whether or not a human reviewer disagrees with the ML classification, the result is fed back to the model, making it more accurate. Furthermore, if WTC notices that the model is in fact correctly classifying comments but flagging too many of them for review, they can adjust down the confidence threshold, allowing a greater proportion of the moderation to be automated.

{% include quote.html text="It’s kind of amazing that What’s That Charge can get better without even touching the code." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

## What effect has Nyckel had on WTC’s business?

WTC’s business moves forward by listing the most charge names and the most recent charge names. Manually curating their list was bad for business. In a lightweight company, manual moderation will always be a bottleneck, and the impact for WTC was that pages were not being created quickly enough to rank highly against competitors – bad news for an advertisement traffic revenue site.

{% include figure.html url="../images/2022/WTC-revenue.png" alt="What's that charge revenue" %}

When WTC launched, they made $3k per month. Then, competitors entered the field and they slowly lost market share over the next 8 years, reaching a low point of $800 in September 2019.

{% include quote.html text="Having ML make these calls means that we’re getting more content on the site – and we started making a lot more money when that happened." author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}

After the Nyckel integration in early 2021, they bounced back up to $1900 per month. A few months later, they hit $4000 per month, and then $7500 per month.

{% include quote.html text="Nyckel reinvigorated our interest in our own business because now it’s making serious money!" author="Jeremy Schneider" title="Co-founder, WTC" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-wtc.jpg"%}