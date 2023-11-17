---
layout: post
date: 2021-04-06
title: How to Add Custom Image Classification To Your Application Using Machine Learning (The Easy Way!)
author: jeremy
summary: It’s often valuable to be able to programmatically classify an image into a category. This post explains how you can use Nyckel to do that in minutes.
og_image: /blog/images/2021/nyckel-prediction.png
---

It’s often valuable to be able to programmatically classify an image into a category. For example, let’s say you’re making a recipe website, and you’d like to be able to categorize food images to organize your site. You might define the categories as:

* Breakfasts
* Main courses
* Soups
* Desserts
* Not a food

{% include figure.html url="../images/2021/image-classification-foods.jpg" alt="Image classification via machine learning"%}

Giant leaps in machine learning research over the last few years has made this possible for computers to solve. This article walks through how to add this type of image classification to your application in just a few minutes using Nyckel, the custom machine learning API platform.

First, head to Nyckel and click “Get Started” to create a free account. One logged in, you’ll see your list of functions. Click “New Function” to create your image classification function.

{% include figure.html url="../images/2021/create-nyckel-function.png" alt="Click “New Function” to get started"%}

Next, you’ll define the name, inputs and outputs of your function. To continue the example from above, I chose “Image” inputs and “Choose 1” (category) output, and defined the labels I had described above.

{% include figure.html url="../images/2021/define-inputs.png" alt="Defining the inputs and outputs of your machine learning function"%}
After clicking “Create”, it’s time to upload some photos that will be used for training. Make sure to upload several photos of each type you defined above so the algorithm can be trained to recognize each of your types.

{% include figure.html url="../images/2021/upload-photos.png" alt="Upload a set of images that can be used to train your function"%}
After clicking import, it’s time to start training your machine learning model to meet your needs by simply clicking the correct label for each photo. I click “Main course” for the hot dog and “Dessert” for the donuts below.

{% include figure.html url="../images/2021/annotate-data.png" alt="Click the corresponding label to train your machine learning model"%}
After training just 30 samples, Nyckel can then make predictions on the rest of your images.

{% include figure.html url="../images/2021/grade-quiz.png" alt="Grade a quiz to see how well your machine learning model predicts your images"%}
If you annotate more data, Nyckel will retrain your model to make it even more accurate. The accuracy bars in green above show a 95.9% accuracy. This is calculated via “cross-validation” of your data. A chunk of data is excluded from the model, then predicted using a model trained on the rest of the labeled data and compared to your provided labels. These accuracy bars give a solid estimate of how likely your model will be to correctly classify new images in the future. After labeling the 20 additional samples, our model is now at 100% accuracy!

{% include figure.html url="../images/2021/nyckel-accuracy.png" alt="Nyckel function showing 100% accuracy"%}
Now that your model is trained up, you can call it on new images from your application! Clicking the “Invoke” option on the menu lets you test your image classifier. You can see below it classified the picture of mousse as “Dessert” with 79% confidence. This is with only 50 images annotated. The more you train, the more accurate your function will be with higher confidence!

{% include figure.html url="../images/2021/nyckel-prediction.png" alt="Nyckel predicts this image is of dessert with 79.5% confidence."%}
The real magic happens when you add your function to your application via the Rest API. In fact, everything you can do through the Nyckel website, you can also do via Rest API. For example, you can add input images, label them, and of course call your function. Here’s a curl request that executes an HTTP POST to invoke this function:

You can even call this function yourself from the command line to try classifying a food image. Note that this function was defined as public so anyone can call it without authentication. You’ll probably want to keep yours private to ensure others can’t access your function.

Add your own function’s HTTP POST to your application, and voila! You have a machine learning powered image classifier built into your application!
