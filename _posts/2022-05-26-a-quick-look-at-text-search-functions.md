---
layout: post
date: 2022-05-26
title: A Quick Look at Text Search Functions
author: dan
summary: See some of the creative ways to add smarts to your application with Text Search
---

Last month we introduced search functions.  We highlighted image search, which lets product developers use AI to explore their image database based on a text or image prompt.  But we also released text search, which as you may have guessed, allows developers to to search their text database with a text or image prompt.

## Ways To Use Text Search

The first and most obvious way to use text search is to semantically search your database.  Load the rows of a digital address book into Nyckel - now your users can perform searches that will find “lawyer” when they search “attorney”, or “previous dentist” when they type “my old hygienist”.

But there are also a few ways to use text search that are less obvious:

Perhaps you’re a toy store, building an app to suggest toys based on an image your customer is viewing.  Import the name of each toy into your search set, and query by the image.  Off-the-shelf APIs might return “Backhoe” or “Excavator”, but your toy is listed as “Digger”.  Giving Nyckel a closed set of words to choose from gives you the best approximate match.

{% include figure.html url="../images/2022/digger.jpg" url2x="../images/2022/digger@2x.jpg" alt="Toy digger"%}

Finally, you can use text search to do zero-shot classification.  Try adding “Person”, “Place”, and “Thing” to your text gallery.  Then search for the text “Venice”, and get “Place” as the top result.  Search with an image of a toaster, and get “Thing” as the top guess.

{% include arcade.html url="https://demo.arcade.software/WNyVlTfth7G52wF7nC3V" caption="Create a Text Search function" %}

## Try It Yourself

As you can see there are some interesting ways to leverage text search to add intelligence to your product.  It’s easy, fast and free to create search functions so try it out for your use case!
