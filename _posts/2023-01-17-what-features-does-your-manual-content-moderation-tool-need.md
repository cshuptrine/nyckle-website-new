---
layout: post
title: "What Features Does Your Manual Content Moderation Tool Need? "
date: 2023-01-16
author: dan
summary: Automated content moderation helps you review large volumes of UGC
  quickly and efficiently. But even the most sophisticated tools aren’t perfect
  and still require some level of manual review. We outline the features to
  consider adding to your manual content moderation tool.
description: Even the most sophisticated content moderation tools aren't
  perfect solutions and require some level of manual review. We outline
  important manual review features.
image: /blog/images/manual-content-moderation-tool-header.webp
image_alt: Important features of a content moderation tool
---

If you have user-generated content (UGC) on your platform, then you have a [content moderation problem](https://www.nyckel.com/blog/what-is-content-moderation/). Moderating UGC may be a future problem, or it may be a now problem, but you will need to solve it at some point if your company wants to grow.

Automation is part of the solution. Automated content moderation helps you quickly and efficiently review large volumes of UGC, freeing up your teams to work on the interesting stuff. But automation is not a panacea. Even [sophisticated automated classification tools](https://www.nyckel.com/blog/custom-ai-assisted-content-moderation-pipeline/) require manual review by actual people if they are to remain effective.

This article will dive into the evolution of manual content review processes and suggest some features you might want to add to your review tool.

## An evolving content moderation process

As your company scales, your volume of UGC – and hence your volume of content moderation – scales with it. Left unchecked, [UGC can harm your company's brand](https://www.nyckel.com/blog/why-content-moderation-is-important-for-your-business/) or even harbor illegal activity. But tackling content moderation can itself become a barrier to business growth by consuming more and more of your company’s resources.

Usually, the first step is manual review: human annotation of UGC. This means your staff does more moderation work and less of everything else. Or it means hiring more staff specifically to handle the moderation. Neither of these approaches is sustainable.

Using automated classification tools can help reduce the workload of your human reviewers. But, even if – or especially if – you’re using machine learning (ML), [you will need humans in the loop](https://www.nyckel.com/blog/ai-content-moderation-best-practices/) to:

* Train ML models. You need people involved during set-up and integration.
* Improve models by finding and correcting their mistakes. You will need people to monitor and maintain performance workflows.
* Correct mistakes that models make. You'll need people involved in moderation quality control.

A manual UGC review tool is intended to make human moderation as efficient as possible. Let’s consider what features you should look for in a manual review tool.

## Important elements of a manual UGC review tool

Nyckel has been helping businesses use ML to solve their content moderation problems for some time now. We’ve seen a lot of our customers’ review tools and seen what’s worked well. Here are the main features to consider, from basic to advanced, whether you’re developing a bespoke tool or buying one off the shelf.

### The basics – interface design and sorting functionality

Interface design is very important for the usability and efficiency of a manual review tool. The four basics to watch for are:

* The use of different font sizes
* The use of automatic highlighting of problematic content
* The placement of action buttons
* The ability to sort content based on how you need to handle it

We’ll review these recommendations using the mock-up of a manual moderation tool interface below.

{% include figure.html url="../images/content-moderation-tool-mockup-1.webp" description="Mock-up of a hypothetical manual content moderation tool" alt="Mock-up of a manual content moderation tool" %}

#### FONT SIZE

The mock-up shows the content that needs moderating in a large font size at the top of the screen. Subsequent pieces of content to be reviewed are displayed below in a smaller font size. We would expect the next item in the list to automatically scroll to the top position after we make a decision about the current item.

#### HIGHLIGHTED PROBLEMATIC CONTENT

If your automated moderation tool supports blacklists, those problematic words can be  highlighted in red. These are strings that the moderation tool has identified with some threshold level of confidence as violating your UGC policy.

#### ACTION BUTTONS

The example above also includes prominent, differently colored action buttons. Buttons should stay in the same place. If you need to click through five hundred items of UGC, you don’t want to have to chase the “Deny” and “Approve” buttons around the page every time you move on to a new piece of content.

#### SORTABLE CONTENT

In addition to this core functionality, it’s useful to have ways to sort content items based on how you need to handle them. For example, notice that the mock-up above shows the option to “Skip” or “Escalate” items.

Skipping allows the human moderator to quickly move through easier or typologically similar cases, and then come back later to handle those skipped cases in a batch or with the benefit of consultation with team members or the moderation policy. You might also like to have the ability to sort items into different queues or move them to the back of a single queue.

Escalating may be necessary when the decision is too tricky, and you want to pass the item to a senior moderator to handle. You would also likely want to escalate items that need legal attention; for example, inappropriate disclosure of personally identifiable information or any apparent criminal behavior.

It may also make sense to sort items by the model’s confidence score, sorting the content items, for example, by what the model predicts is the most inappropriate to the most appropriate content.

{% include figure.html url="../images/content-moderation-tool-mockup-3.webp" description="Additional mock-up of a hypothetical manual content moderation tool" alt="Mock-up of a manual content moderation tool" %}

In addition to sorting by rejected, skipped, or predicted level of inappropriateness, you may also want to consider functionality that allows you to:

* Randomly sort review items to monitor for things like [data drift](https://www.nyckel.com/blog/ai-content-moderation-best-practices/), which is when your training data is substantially different from the data your model receives after implementation.
* Filter by specific text or [regular expression](https://en.wikipedia.org/wiki/Regular_expression), image or image size, etc.
* Display machine-generated scores next to each content item to give human moderators a better sense of "good" and "bad content." These scores could include confidence scores (like those mentioned above), heuristic scores, and static API scores from off-the-shelf products like Hive Moderation.
* Show how other moderators are making decisions on the same content items. Note, however, that you may need to tweak this based on the individual moderator’s work styles and preferences. Having other people’s decisions displayed could bias moderators toward consensus.

### Custom workflow functionality

Assuming that all the basics of the moderation interface look and feel good from a usability perspective, you then want to look for more advanced features that allow you to:

* Manage class definitions
* Compare human-moderated decisions
* Use a login and audit log system

#### MANAGE CLASS DEFINITIONS

If you’ve been moderating content for any length of time, you have likely updated your class definitions at some point. This could mean banning things that were fine a few years ago (or vice versa) or adding or removing whole new categories of content as user behavior changes.

A more mature integration will benefit from the ability to view and edit the definition of each class of content. The interface should also be able to handle the coexistence of data that has been classified according to different class definitions, potentially flagging items annotated with a previous version of the definition.

#### COMPARE HUMAN-MODERATED DECISIONS

If you’ve got more than a handful of human moderators, then you can make use of their level of consensus to check that everyone is applying policy in the same way. Important posts can be reviewed by multiple people. Dissensus among your moderators can be instructive because it often points to situations where policy needs refining, for example, from new slang coming into use, or recent world events impacting user behavior.

Tracking individual moderator decisions also helps identify “oracles,” team members whose decisions are consistently accurate and reliable. Other moderators can be scored against the oracles’ answers, improving accuracy and flagging moderators who aren’t performing well.

#### LOGIN AND AUDIT LOG SYSTEM

Tracking the annotation decisions of different users means building and managing a login system, as well as generating an audit log showing who reviewed each piece of content, when, and under which policy version.

{% include figure.html url="../images/content-moderation-tool-mockup-2.webp" description="Additional mock-up of a hypothetical manual content moderation tool" alt="Mock-up of a manual content moderation tool" %}

### Next-level features of a manual moderation tool

There are certain features of a manual moderation tool that can improve the efficiency and accuracy not only of your human moderators but also of your ML tool. These features may include:

#### REAL-TIME ML SCORES

With moderation tools that update ML scores in real-time, every manual decision that your human moderators make can be fed back to the model. This incrementally improves the model's accuracy on the fly and continually updates scores in the manual tool's interface.

#### CONFIDENCE THRESHOLD TESTING

Having the option to see which items would be auto-approved if you changed the confidence threshold can help you investigate the right cost-benefit scenario for your business. Factors that you may weigh in choosing the confidence threshold that’s right for your business could include your current state of growth, the benefits of greater automation, and the UX and reputational costs of false negatives and false positives.

## Off-the-shelf content moderation solutions

Before taking the plunge with a custom ML moderation solution, it makes sense to see [what’s already out there, ready to plug and play](https://www.nyckel.com/blog/the-ever-growing-landscape-of-content-moderation-ai-platforms/). We already mentioned Hive Moderation; other options include Azure Content Moderator and Amazon Rekognition.

The ongoing trade-off between ease of use and customizability will steer your decision here. Off-the-shelf solutions probably won’t give you all the features you want, but more customization means a steeper learning curve. And a lighter feature set will tend to expand over time, so it could still make sense to keep things simple initially in order to get things moving quickly.

Another possible can of worms is how the service works with your user files. The details of the integration may end up being your primary consideration when choosing an off-the-shelf service, depending on your own setup and the level of data protection that you want, or whatever is most important for your business.

## What next step will you take to improve your content moderation?

Having a content moderation problem can be stressful. UGC itself can be politically charged or toxic to work with. User behavior changes. Your moderation policies change. Business growth means diverting more resources to moderation or looking for tools that streamline your moderation workflows.

If you’re going to grow without burning out, you need a manual review tool in your moderation toolkit

Remember that content moderation is a never-ending story. Don’t try to solve it on day one. Start simple; you can get more sophisticated over time. This applies to both custom and off-the-shelf solutions.

Let us know what killer features your tool has, or what you want to see in your next solution.

And if you’re looking for a quicker, more accurate, and easier-to-use [content moderation ML platform](https://www.nyckel.com/custom-content-moderation-api), give Nyckel a try by [creating a free account](https://www.nyckel.com/console).
