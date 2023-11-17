---
layout: post
date: 2022-10-09
title: Whac-a-Spammer - How to Deal with Bots on Your Site
author: dan
summary: Bots posting content to your site can be a scourge. Stay one step ahead of them with these tips, tools, and tricks.
og_image: /blog/images/2022/whac-a-mole.jpeg
og_image_alt: Stop spammers from taking over your site
seo_description: Learn the tools, tips, and tricks to prevent bots from taking over your site.
stage: false
---

The good news: your website is getting popular, and your traffic is up.

The bad news: Bots.

Any site that gets a lot of visitors, sooner or later, will get bots. In fact, according to [this study from Barracuda](https://assets.barracuda.com/assets/docs/dms/Bot_Attacks_report_vol1_EN.pdf), bots make up two thirds of internet traffic. While some are good bots (like web crawlers), most are there to exploit your site in one way or another.

And these spam bots have a way of popping up everywhere. Sometimes you might feel like you’re playing a game of “whac-a-spammer”: you resolve one type of issue only to find yourself dealing with another type.

**In this post we’ll take a comprehensive look at how to prevent spam bots.**

First, though, let’s establish why having these bots on your website is bad news:

* **They can hurt your SEO score.** Everyone wants to be on the 1st page of Google’s search results. That becomes a lot harder to do when bots are compromising the quality of your site, since Google takes spam very seriously.

* **They can degrade your customer experience.** You probably know how unpleasant it is to visit a site that’s poorly moderated and full of spam. Spammy content, if unchecked, will drive away your visitors.

* **They can skew your metrics.** Every post / comment / action taken by a spam bot is an undesired event. If you don’t subtract out these fake events, your aggregate usage metrics will be misleading and you risk making false conclusions about how to improve, maintain, or monetize your site.

# How to prevent spam bots

The good news is that there are a myriad of ways to prevent (or at least discourage) spammers, ranging from quick hacks to systemic improvements.

## Hidden Checkbox Honeypot

In the html form you provide to let users submit content, you can add a checkbox with `display: none` in the css (so that human users can’t see it). Bots love filling out forms, and don’t realize humans can’t see the checkbox. So if the box is checked during form submission, you’ll know it was done by a bot, and you can safely ignore the submission.

This pattern is known as a honey pot. You can learn more about [implementation options on stack overflow](https://stackoverflow.com/questions/36227376/better-honeypot-implementation-form-anti-spam).

## Spurious Drop-down Honeypot

In a variation on the honeypot, you can add a drop-down to your form with a question such as “Why are you posting this?” and provide several choices. Make the default choice something generic like “I don’t know” and several actual options “I’m reviewing this product.” and “I’m a happy customer”. If the default answer is selected, rather than a specific answer, it’s another indication that it may be a bot.

## Captchas

Captchas are tests given to users to tell humans and bots apart. Whether it’s reading blurry or distorted characters from an image, or selecting all the images that contain boats, captchas have long been used to keep out bots.

More recent, sophisticated captchas just have one question: “Are you a human?”  For example, the captchas from [Google](https://www.programmableweb.com/api/google-recaptcha) and [hCaptcha](https://www.hcaptcha.com/) perform a variety of checks, such as whether your browser has cookies that a human’s browser would have, and checking if you move your mouse in a human-like way.

## Verification

Many sites do manual, out-of-band work to make sure their users (and thus their posts) are genuine.

* **Email verification.** Many sites require that you click on a link or enter a code sent to your email address.  This at least proves that you have an email address, which is more than some spam bots can boast.

* **Photo verification.** Many communities require that you post an image of yourself holding a sign with your username to prove you’re a real person, and that you consent to images of you being posted.  For example, [here](https://www.reddit.com/r/selfie/wiki/verification/) is the verification process for the “selfie” community on Reddit.

* **Document verification.** You can also require other documentation to become verified. For example, [Lichess](https://lichess.org), a chess website, [has a process](https://lichess.org/help/master) for associating their users with their online accounts so they can give them credit for their “over-the-board” accomplishments.  Similarly, getting the “blue check” on Twitter requires an [involved process](https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts).

## Require Payment

Most bots stop short of purchasing something in order to spam your site.

If you have an e-commerce site, require your users to purchase a product in order to leave a review. This both prevents bots from leaving spurious reviews, as well as humans who may be mistakenly (or maliciously) trying to review a product they don’t own.

## Human “Spam”

Speaking of mistaken humans: sometimes well-intentioned users can end up looking like spammers. Keep that in mind while you’re designing your anti-spam measures: you might filter out these users' content as well. Of course, it’s often preferable to remove both real spam and content that closely resembles spam, but you’ll have to decide what makes sense for your site.

# How to filter spam that’s been posted

Some bots will inevitably bypass your efforts to prevent them from posting. Your next line of defense is to filter out the content that looks spammy. The tools of the trade include:

## Blacklists

You can add a blacklist for spam detection by creating a comprehensive list of keywords and key phrases so you can track down spammy content that’s already been posted.

However, spammers will often try to subvert blacklists by misspelling words or using repeated vowels: “check out this greeeat deeal”.  You can go one step further than a list of words by using [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) where disallow words or phrases no matter how many ‘e’s they use.

## Frequency / Similarity Analysis

Put a system in place to check new posts against existing ones to make sure that there aren’t too many similar posts appearing in a recent period of time.  Humans don’t (or shouldn’t) post the same thing over and over, so you can safely filter these out.  You can do the same with other submitted content such as user accounts, email addresses, and profiles.

In terms of determining if two pieces of content are similar, oftentimes a simple similarity calculation such as [edit distance](https://en.wikipedia.org/wiki/Edit_distance) will suffice.  More advanced systems will use [feature vectors](https://en.wikipedia.org/wiki/Feature_(machine_learning)) derived from ML models, which can look a level deeper and find posts with the same meaning even if they use different words.

## Machine Learning (ML)

ML is the next level approach when other methods aren’t enough.

Software that’s trained in content moderation and spam detection does a more accurate, targeted job of getting rid of spam bots than more generic approaches. Another reason to use ML is that you can train it to catch spam and other types of problematic content that are specific to your platform.

# Other types of “whac-ing” you may have to do

## New Spamming Techniques or Channels

Always be on the lookout for new ways spammers can target your site.  Whenever you add new features make sure to think about how spammers could abuse them.  For example, if you add the ability to post images as well as text, you’ll need to make sure those images aren’t advertisements or abusive content.  Or, perhaps you add a feature allowing users to direct message each other.  In that case you’ll need to start monitoring for spam in those direct messages.

## Real Users Behaving Badly

Spam bots aren’t the only things you need to look out for.  You’re likely to also enter into a cat-and-mouse chase with real users behaving badly.  Here are some of the things to keep on top of:  

* **New swear words.** Human language has always evolved and there’s no reason it won’t continue to – especially in the Internet Age. You’ll have to adjust and update your content moderation filters for new swear words and other offensive language.

* **Changes in cultural norms.** Plenty of previously innocent words and expressions have developed new, suggestive, or even outright offensive meanings. Stay current on changes in language (especially slang) to prevent potentially offensive content from being posted.

* **Labels change over time.** Similar to the above, labels change over time. Words like “gender” have taken on new layers of meaning and aren’t used the same way in every context.  

# Conclusion

With the Internet (and technology in general) continuing to grow and advance, it’s basically an arms race between site owners and spammers to see who can stay ahead of the other.

The more difficult and expensive you make it for bots to spam your website, the less spammers will be motivated to target your site.  Deploy these remediation techniques to keep your site bot-free, and keep one step ahead of the spammers!
