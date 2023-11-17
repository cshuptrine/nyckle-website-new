---
layout: post
title: Pet Media Group saves $120k annually with AI content moderation
date: 2023-06-09
author: nyckel
stage: false
featured: false
headliner: false
seo_title: Pet Media Group Customer Story
summary: '<i>Nyckel’s API docs were super straightforward to use. Our first
  custom content moderation model was live within a day.</i> — Eyass Shakrah,
  Co-Founder, Pet Media Group'
seo_description: Pet Media Group uses Nyckel's image classification to moderate
  pet listings to ensure they meet animal welfare policies. Using Nyckel has
  resulted in $120K in annual savings.
og_image: /blog/images/pet-media-group-case-study-header.jpg
---
{% include quote.html text="Before Pet Media Group, I built and sold two other billion-dollar marketplaces. Each had an entire floor of manual reviewers before we invested in an AI solution. When building PMG, we wanted to avoid these mistakes and integrate with an AI service early on." author="Eyass Shakrah" title="Co-Founder, Pet Media Group" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-pmg.jpg" %}

{: .highlights }
PMG uses Nyckel image classification to moderate pet listings and enforce animal welfare policies
: $120 annual savings – 20x return on investment
: 90% reduction of manual review needs
: First model integrated in 1 day
: AI moderation accuracy surpassing human quality

## About Pet Media Group

[Pet Media Group](https://www.petmediagroup.com/) (PMG) operates some of the world’s largest online pet marketplaces, connecting reputable breeders with future pet parents. Every year, PMG helps over 1.5 million pets find forever homes.

## The Challenge

PMG is deeply committed to operating ethical online pet marketplaces and doing its part to support animal welfare. Users post thousands of pets across its sites daily, with an average of 20 images per listing that moderators need to review against PMG’s animal welfare policies. For example, PMG reviews pet ads for:

* Dogs with cropped ears (illegal in most markets and a critical animal welfare violation),
* Holiday-themed images (not allowed because PMG wants to discourage gifting pets as they tend to get abandoned after the holidays),
* Puppies advertised without a picture of the puppy with its mother (required to certify the authenticity of the breeder), and
* Any image with emojis overlaid on the image (not allowed because they are often used to hide surgical modifications of the pet that PMG does not allow).

{% include figure.html url="../images/pmg-nyckel-functions-new.jpg" description=" Pet Media Group uses several Nyckel functions to moderate pet listings for violations to its animal welfare policies." alt="Pet marketplace AI content moderation"%}

Moderating so many images for various violations proved both time-consuming and labor-intensive for PMG. In fact, the company had 15 full-time employees dedicated exclusively to moderating its pet listings.

Eyass Shakrah, a co-founder of Pet Media Group, was familiar with how quickly this manual review could create inefficiencies and rack up costs. Eyass has founded and sold two other billion-dollar marketplaces. At each, they staffed entire floors of human moderators before investing in AI solutions. With PMG, Eyass knew he wanted to “avoid these mistakes and integrate with an AI service early on.”

In addition to knowing he wanted to integrate with AI early, Eyass also knew they wouldn’t build an ML team in-house because of how competitive the talent pool is and how quickly PMG wanted to go to market with the solution.

{% include quote.html text="We were looking for a solution that provided a good combination of high accuracy with fast time-to-value. Plus, the total cost of ownership is always an important factor for us when considering any third-party software." author="Eyass Shakrah" title="Co-Founder, Pet Media Group" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-pmg.jpg" %}

## The Solution

Before finding Nyckel, PMG ran a proof-of-concept with Amazon Rekognition, Google AutoML, and several other smaller services. The products felt bulky and didn’t quite hit the mark, so the team turned to Google to search for alternatives.

When PMG found Nyckel, the team was intrigued by its reasonable cost, including its fee structure and low-to-minimal maintenance costs.

“Nyckel was significantly more price competitive, with little to no overhead needed from our engineering and data science teams to maintain and improve the integration, ” Eyass said.

But it wasn’t just the price that sold PMG on Nyckel. Nyckel felt like a developer tool, was incredibly fast, and demonstrated strong performance from the outset when the team demoed the product on an actual use case. Plus, PMG appreciated the wide array of function types Nyckel had available, including text, image, and tabular classification, optical character recognition (OCR), object detection, and text and image search.

{% include quote.html text="The fact that within 10 minutes, we could sign-up, train a model and have it deployed made Nyckel a compelling option for us." author="Eyass Shakrah" title="Co-Founder, Pet Media Group" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-pmg.jpg" %}

{% include figure.html url="../images/pmg-emoji-new2.png" description=" Nyckel image classification API detects if a seller added emojis to their image (fail) or not (pass)." alt="Image classification for pet marketplace"%}

## The Results

The integration of Nyckel into Pet Media Group’s production environment was very quick. The team used Nyckel’s UI to upload and annotate a data set of images— requiring less than one hour total. Within the same day of setting up the model, PMG was live in production with its first model.

{% include quote.html text="Nyckel’s API docs were super straightforward to use. Our first custom content moderation model was live within a day." author="Eyass Shakrah" title="Co-Founder, Pet Media Group" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-pmg.jpg" %}

Now, instead of human moderators reviewing every listing on PMG’s site, its moderators focus on monitoring listings with low-confidence predictions from Nyckel. To improve the model’s accuracy even more, the team adds any errors back into Nyckel as training samples.

This additional training has paid off; the Nyckel-based content moderator now matches or surpasses the accuracy of PMG’s manual reviewers across all applied models.

{% include quote.html text="Within 4 weeks of getting set up with Nyckel, we went from 100% manual review of all pet adverts to 25%. A few months later, that number is now approaching 10% manual review." author="Eyass Shakrah" title="Co-Founder, Pet Media Group" mugshot="https://www.nyckel.com/_content/Marketing/images/mugshot-pmg.jpg" %}

Pet Media Group has also quantified its results: Nyckel has freed up work corresponding to $120k annually, which the company can now invest in other high-value areas. PMG is so pleased with its results with Nyckel that it’s exploring how to use Nyckel for additional use cases, including:

* Moderating user-to-user chat messages,
* Scanning ads for near-duplicate image content,
* Using classification to determine the likelihood of an ad resulting in a sale,
* And using regression to recommend a sales price.

- - -

Interested in exploring how our custom [content moderation](https://www.nyckel.com/custom-content-moderation-api) or [computer vision](https://www.nyckel.com/computer-vision-api) solutions could support your business? [Give Nyckel a try for free](https://www.nyckel.com/console), and [reach out to us](mailto:feedback@nyckel.com) with any questions.
