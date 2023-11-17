---
layout: post
date: 2021-04-28
title: Add Image Classification Using Machine Learning to a Web App With a Single Line of Code 
author: jeremy
summary: Inspired by a scene from HBO's Silicon Valley, I decided to build a website that identifies whether a photo is of a hot dog.
og_image: /blog/images/2021/hotdog-training.png
---

Inspired by [this scene in HBO's Silicon Valley](https://www.youtube.com/watch?v=ACmydtFDTGs), I decided to build a website that identifies whether a photo is of a hot dog. Below is the magical line of JavaScript code that executes the image recognition:

```javascript
$.ajax({
    url: 'https://www.nyckel.com/v0.9/functions/km6svjpscep917bc/invoke',
    type: 'post',
    data: formdata,
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function (response)
    {
        displayResult(response);
    }
});
```

Ok, so maybe it’s 12 lines of code. But it could be one without all that whitespace. You can see this code in action, and even try to identify if your photo is of a hot dog by visiting www.ishotdog.com. (I challenge you to find an image that it gets wrong)

So what’s happening here? Well, the magic happens with an AJAX post to this URL:

```url
https://www.nyckel.com/v0.9/functions/km6svjpscep917bc/invoke
```

That is a REST API endpoint for a Nyckel custom machine learning function. Developing a custom ML function from scratch would typically require setting up a lot of stuff, including:

* Learn Python
* Learn Pytorch or TensorFlow
* Collect data
* Annotate data
* Implement active learning
* Choose a ML network and design loss function
* Provision GPU compute
* Track experiments, progress & metadata
* Tweak hyperparameters to optimize performance
* Evaluate model performance
* Deploy your model on scalable compute
* Build an API to invoke your deployed model
* Call your function

By using an auto machine learning service like Nyckel you can skip most of those steps and go straight to the fun part! Namely, this is what’s left:

* Collect data (e.g. find photos of hot dogs and not hot dogs)
* Annotate the data (e.g. click to train the model on which is which)
* Call your function (via API as in the code snippet above)

Here’s a screenshot of how training the model in Nyckel looks:

{% include figure.html url="../images/2021/hotdog-training.png" alt="Training a custom image classification function"%}

The above screenshot shows that the model is already actively identifying the difference between a hot dog and a sandwich (is a hot dog a sandwich?!)

Nyckel abstracts away the normally laborious and expertise-required process to set up, train, implement, and deploy a machine learning model. Now it can be done in just a few minutes and deployed simply as the code above shows.

Check out this article if you want to see a more detailed walkthrough of getting a machine learning model up and running with Nyckel. And let me know in the comments if you find an image that IsHotDog.com identifies incorrectly!
