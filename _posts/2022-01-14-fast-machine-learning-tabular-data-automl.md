---
layout: post
date: 2022-01-14
title: Machine Learning on Tabular Data with Nyckel
author: george
description: Nyckel releases a new feature to create Machine Learning models for tabular data in minutes.
---

Our customers very quickly see the value that Nyckel brings - someone with zero knowledge of machine learning
is able to train and deploy custom image and text classification functions within minutes. As a result, we got
requests to support more than just image and text inputs. The most popular request was to support tabular input
data with multiple columns of different types.

## Tabular Data Classification (beta)

Today, we are releasing tabular data classification as a beta feature. Here is a 3-minute video of it in action:

{% include youtube.html video-id="bgoJAh8-twI" title="Tabular Data Classification using Nyckel" %}

In the above video, Jeremy used one of the most popular datasets on kaggle - the
[titanic dataset](https://www.kaggle.com/c/titanic). It lists data on titanic passengers (name, age,
number of siblings, ticket class, etc.) with a column that indicates whether the passenger survived the shipwreck.
The challenge is to create a model that predicts which passengers survived.

In less that two minutes, we are able to go from the data to a trained and deployed model.
Underneath this serene user experience, there is a lot going on:

- Training-optimized cloud hardware is allocated
- Several state-of-the-art deep neural networks and hyper-parameters are evaluated to find the best fit for your data
- Your model is deployed on inference-optimized and elastically scalable cloud hardware, behind a secure REST API

## Uploading Data

You can upload your data as a csv. The csv must have a header row with column names. For each column in your csv, you
can either ignore the column or use it as one of the inputs to the model. You can optionally select an output column.
This column must contain one of the output labels that you defined when creating the function, either in text form
as the label name or a numerical zero-based label position index.

## Supported Data Types

We currently support the following data types for columns:

- Numerical - use this for numbers of any kind
- Text - use this for anything textual, whether that's free-form text or a category

We don't yet support date/time as a first-class data-type. You can either convert it to a number like unix epoch
timestamp, or leave it as text and choose a text datatype.

We will add more data types in the future. Drop us a line to tell us the data types you'd like to see supported.

## Beta Limitations

The beta has a few known limitations:

- The first row of your CSV must contain column names, and the names must be unique. Also make sure your column names match from your first CSV upload to subsequent ones.
- The output label names have to be pre-declared when you create a function. Any output column value that doesn't match
the declared label names (or numerical label position index) will be ignored.
- We only support text and numerical data types. When in doubt, use the text data type. Drop us a line to let us know
what other data types you'd like to see supported.

## Feedback

We are always surprised and impressed by the variety of use-cases that our customers use us for, and we're excited for
the new use-cases that this feature enables. We'd love to hear your feedback - use the `Contact Us` button on your
function page to share your thoughts.
