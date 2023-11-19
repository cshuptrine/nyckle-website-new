---
layout: post
date: 2022-04-29
title: ML is Just a Developer Tool
author: dan
summary: ... at least for now
description: Even with massive advances, Machine Learning should still be considered one tool of many in a developers' toolchain; not a panacea.
---

Like most companies who went through Y-Combinator this winter, Nyckel just raised a seed round.  One of the frequent questions we got from investors was something along the lines of “won’t GPT-3 put you out of a job?”  Like, now that GPT-3 exists, programming has been solved, and we can all go home.

Unfortunately (or perhaps fortunately), I don’t think it has, and I don’t think we can.  The reality of ML is that it’s just another tool in the developers toolbelt, more similar to a library like ImageMagick, or a programming technique like recursion.

Granted, it’s a heck of a tool.  ML unlocks capabilities that have previously eluded developers (see: [this now dated XKCD](https://xkcd.com/1425/)).  Those capabilities in turn open up a whole new set of possibilities for products and services.  But it is just one component of those products or services.  Developers are still doing the same fundamental job they always have.

For example: suppose you’re asked to write software that can grade worksheets with handwritten answers.  One example might look like this:

{% include figure.html url="../images/2022/worksheet-partial.webp" description="An example worksheet" %}

How do you write a program that grades written exams?  Well, you break the problem down, just like you would any software project.  First you have to capture images of the exam pages; perhaps by integrating with a scanner or camera API.  Then what?  Well, you probably need to identify which handwriting represents the answer to which question.

For a worksheet like the example above, you might be able to get away with just hardcoding the bounding boxes for each answer section.  But, if your users are scanning with their phones, you’ll need to take into account images taken from closer or farther away, or taken at an angle.  You can look for an image library that can resize and correct for skewed images, or you might consider training an image detector to find where the answers are written.

{% include figure.html url="../images/2022/detected-question-1.webp" description="Grabbing just question 1" %}

Once you’re able to point to the specific handwritten text for question 1, you need to convert it to a string using OCR:

```json
{"text":"What is a scientific law?\nA law is a statement that predicts a natural\nphenomenon without explaining why."}
```

Cool, now you’ve got a string of text that represents the answer to question 1.  Now what?  Something that works surprisingly well is training a (deep learning based) text classifier using examples of correct and incorrect answers, and having the trained model decide whether this new answer looks more like a correct answer or more like an incorrect answer.

Voila, you’ve got a workable happy path for grading question 1.  Now to build out the app to grade every question; and to allow exam writers to plug in new questions, and train new answer classifiers.  Test it with some users - maybe you find you need to handle edge cases like the scanned images being too low resolution, or upside down, and decide how to handle illegible handwriting, give partial credit, and so on.

Hopefully you see that although the tools are new, the process of developing new products is the same as it always has been.  You, the developer, need to break the problem down, and iterate towards something workable.  After it’s all said and done, you’ve got an amazing product: it friggin' grades handwritten exams!  But ML doesn’t allow you to short circuit the fundamental process of decomposing the problem, handling edge cases, and building a great user experience around the whole thing.

The entire ML field is still progressing rapidly, and we as practitioners / product developers are still developing the tips and tricks to best make use of these new tools.  At Nyckel we’re fortunate to have great customers who we can learn alongside and pave the way forward together.
