---
layout: post
title: How SPYSCAPE Added Magic Into Their AR Game Using Nyckel
date: 2022-08-09
author: oscar
stage: false
featured: false
headliner: false
summary: <i>Literally over the space of ten minutes, I created a Nyckel account,
  threw some random images at it… and it blew my mind! It was
  spooky-accurate!</i> – Gwyn Morfey, SPYSCAPE Tech Lead
description: Using Nyckel ML FaaS, SPYSCAPE trained and deployed an image
  classification function, used as a key feature of the Augmented Reality
  in-game experience.
image: /blog/images/spyscape-case-study-header-image.webp
image_alt: Spyscape uses Nyckel to build augmented reality experiences
---

<a href="https://spyscape.com/">SPYSCAPE</a> is a destination spy museum and experience in New York City, with interactive exhibits about fictional and real spies.
The museum’s permanent exhibits include interactive features and immersive games through which visitors can figure out what kind of spy they would be. Are you a handler or a technician? Special ops or cryptographer?

{% include quote.html text="Normally you have a problem and then you go for a solution... What I’ve now got is a really nice solution, and we’re actually looking for other problems we can apply it to!" author="Gwyn Morfey" title="SPYSCAPE Tech Lead" mugshot="/assets/images/important/quote-gwen.webp" %}

{: .highlights }
SPYSCAPE uses Nyckel image classification to add "magic" to their AR games
: 10 minutes to train first classifier
: Function was "spooky accurate" right away
: Nyckel-powered magic camera a game highlight


The HQ also features a rolling exhibit. 007 x SPYSCAPE has recently moved out, and a physical component of a new Batman x SPYSCAPE mobile augmented reality game has moved in. Batman x Skyscape can be played anywhere in the world, but, if you happen to be in NYC, the game will also take you through the exhibition. It gives you the immersive experience of actually working with Batman and the characters from that universe.

{% include quote.html text="But we really wanted to have that magic: making it seem like, how could they have done that? It must be a person!" author="Gwyn Morfey" title="SPYSCAPE Tech Lead" mugshot="/assets/images/important/quote-gwen.webp" %}

What you do in the game moves the story forward. Although you’re in fact communicating with software, SPYSCAPE wants it to feel like you’re communicating with real people. But the question was how to do this at scale?
The game already used a large branching script about the length of a typical novel. This allows the characters to react to the choices that players make in the game, which begins to establish the feeling of reality.

{% include figure.html url="../images/2022/spyscape-ux.webp" width="100" alt="Spyscape UX" link="https://spyscape.com" %}

The physical exhibits in New York use RF wristbands and NFC to maintain a personalised sense of reality throughout the game, producing an immersive magic that resonates with customers. But another powerful element of the HQ’s immersiveness comes from its use of picture recognition.

{% include quote.html text="What we were looking to do was basically Things That Are Magic, and people love the magic camera!" author="Gwyn Morfey" title="SPYSCAPE Tech Lead" mugshot="/assets/images/important/quote-gwen.webp" %}

At one point in the exhibit, visitors have to go into a laboratory and take pictures with the Batcam. SPYSCAPE needed an AI to <a href=" https://www.nyckel.com/image-classification-api">classify the photographs</a> that visitors were taking within the game in order for the game to react to them in a realistic way.

SPYSCAPE already had a lot of infrastructure in AWS, so that was their first thought. But there were lots of competing priorities within the company at the time, and it didn’t make sense to take on a whole raft of machine learning researchers just to solve this problem. Outsourcing made sense, and that’s when Tech Lead Gwyn saw an advertisement for Nyckel on Hacker News.

{% include quote.html text="Literally over the space of ten minutes, I created an account, threw some random images at it… and it blew my mind! It was spooky-accurate!" author="Gwyn Morfey" title="SPYSCAPE Tech Lead" mugshot="/assets/images/important/quote-gwen.webp" %}

There was very little to do in terms of API integration: a dozen or so example images per class of training data, uploaded to the Nyckel web interface; and a server written in Node, deployed in AWS, to do a little bit of munging of the output.

Gwyn and his team are so pleased with the magic of the ML-powered Batcam that they are now looking for other use cases within Skyscape.

{% include quote.html text="Thanks for building this thing – it’s super-cool!" author="Gwyn Morfey" title="SPYSCAPE Tech Lead" mugshot="/assets/images/important/quote-gwen.webp" %}