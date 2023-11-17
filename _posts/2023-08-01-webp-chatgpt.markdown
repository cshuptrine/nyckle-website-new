---
layout: post
title:  "How to Convert PNG & JPG Images to WebP using ChatGPT"
description: This article shows how to use ChatGPT to convert png, jpg, or jpeg files to webp.
date: 2023-08-01 14:05:11 +0600
modified: 2023-08-01 14:05:11 +0600
categories: [ChatGPT]
author: "Chris Shuptrine"
post_image: "/assets/images/blog/webp-chatgpt/webp_jpg_png.webp"
caption: "Table of how webp differs from PNG and JPG"
width: "1200"
height: "628"
badge_color: "bg-leaf"
blog: true
fill: fill-gray-wrapper  
noindex:
codebox: true
faq:
  enable: true
  title: "How to Convert PNG & JPG Images to WebP using ChatGPT FAQ"
  question1: "Can you convert png files to webp using ChatGPT?"
  answer1: "You can't directly upload png files to ChatGPT. However, you can use ChatGPT to guide you through this article's python script that converts png files to webp."
  question2: "Can you convert jpg/jpeg files to webp using ChatGPT?"
  answer2: "You can't directly upload jpg/jpeg files to ChatGPT. However, you can use ChatGPT to guide you through this article's python script that converts jpg files to webp."
  question3: "Why are webp files better for SEO?"
  answer3: "WebP is an image format developed by Google and comes with better compression, meaning the images are smaller (and load faster) without losing quality. Since faster-loading sites help SEO, using WebP files can improve your SEO rankings."
  question4: "How do you convert png or jpg files to WebP?"
  answer4: "WebP files can be a pain, as there's no easy way to create them. You can't just change the file name of a png/jpg file, and you can't convert them using Preview / Adobe products. This article goes into how to bulk convert png/jpg images in seconds."
  question5: "Can I convert jpg/png files to webp online?"
  answer5: "Yes, but the online services can be slow, expensive to use, and not usable for bulk changes. It's possible to do this yourself using an easy python script, though."
  
---

WebP files aren't new, but they're still not widely adopted (though some CMS like Wix automatically convert all images to WebP before deployment). This article explains what WebP images are and how you can use ChatGPT to create them quickly.

<h2>What are WebP files, and why are they good for SEO?</h2>

<p>WebP is an image format developed by Google. This file type has better compression than jpg and png files, meaning the image files are smaller (and load faster) without losing quality. Since Google favors fast-loading sites in search results, converting your images to WebP can help with SEO.</p>

<div class="post-img">
<img class="img" alt="Table of how webp differs from PNG and JPG" src="/assets/images/blog/webp-chatgpt/webp_jpg_png.webp">
</div>

Not using WebP isn't the end of the world, but these small improvements in page speed can add up. Plus, Google's <a href="https://pagespeed.web.dev/" target="_blank">Page Speed Insights</a> will always ding you for any image files that aren't WebP. 

<p class="custom-alert custom-alert-primary">We highly recommend using WebP for all your images. It will speed up your site and lead to better search result rankings</p>

But WebP files can be a pain. Unlike png and jpeg/jpg files, there's no easy way to create them. You can't just change the file name, and you can't convert them using Preview / Adobe products.

<h2>How do I convert WebP files?</h2>

It's possible to convert png/jpg files online using a tool like <a href="https://cloudconvert.com/webp-converter" target="_blank">Cloud Convert</a>. And for one-off files, go for it! I'm not going to sit here and tell you self-hosting a Python is the simplest method.

BUT! As a marketer myself, I found these solutions limited. Mainly:

1. Many bombard you with ads
2. Most throttle your usage. For some blog articles, I had 15-20 images to convert. I either had to use multiple tools to do all 20 or upload them slowly so I didn't hit the conversion cap
3. The conversion process is slow. You have to transfer the files, wait for each one to convert, then download them

<div class="post-img">
<img class="img" alt="online webp converter" src="/assets/images/blog/webp-chatgpt/onlinewebpconverter.webp">
</div>

SO! I created a Python script that I run locally, which:

1. Takes any number of image files
2. Converts them to WebP in milliseconds
3. Does this all for free without ads!

<b>What before may have taken 10 minutes now takes 10 seconds.</b>

The rest of this article outlines how you can use the same script yourself to convert image files to WebP.

<h2>How can I use ChatGPT to create WebP files?</h2>

The bad news is, ChatGPT does not accept uploads (as of May 2023), so you can't just upload png files and have it spit out WebP versions.

The good news is, you can easily convert png/jpg files to WebP using the below script, which was built by ChatGPT. And you can use ChatGPT as your troubleshooter and guide if you run into any issues.

<h2>How do I run this WebP script?</h2>

To convert png/jpg images to WebP, just follow the below instructions. You'll be setting up a script on your computer that will:

1. Take a folder of png/jpg/jpeg files
2. Produce a new folder with WebP versions

<p class="custom-alert custom-alert-primary">Good news here - no coding experience needed! You just need to follow a few steps.</p>

<h3>Set up your dependencies</h3>

This just means you need some basic programs downloaded onto your computer, specifically:

* Python, version 3 or higher
* Pillow, which is a Python tool for imaging

How you download these will depend on your OS (I use MacOS). You'll also need to find your system's command-line interface (CLI). On Mac this is the Terminal program. It's "Command Prompt" or "cmd.exe" on Windows.

To download these, give this prompt to ChatGPT.

<pre class="code-box">
<code id="codeSnippet">I have a Python3 script for converting .webp files to png files. It uses Pillow. I use [insert your OS] operating system. Can you please provide instructions for the dependences I need to run it, giving me CLI prompts?
</code>
<button class="copy-code-button" onclick="copyCodeToClipboard('codeSnippet')">Copy Prompt</button>
</pre>

<div class="post-img">
<img class="img" alt="chatgpt prompt for web" src="/assets/images/blog/webp-chatgpt/chatgpt_webp.webp">
</div>

Then follow its instructions. You'll need to find and use your CLI tool.

<p class="custom-alert custom-alert-success">To troubleshoot errors, copy & paste any CLI errors into ChatGPT. It'll guide you through issues.</p>

<h3>Create the folder the script will live in</h3>

* First, download <a href="https://www.sublimetext.com/download" target="_blank">Sublime Text</a> (unless you already have a good text editor)

* Create a folder called <code>webp</code> in your <code>documents</code> folder.

* Create a folder within the <code>webp</code> folder called <code>images</code>.

* Create an empty Python file called <code>webp.py</code> in the <code>webp</code> folder. To do this:
	* Open SublimeText, create a new file, and save it in the <code>webp</code> folder as <code>webp.py</code>
	* Or use your CLI. For instance, with MacOS Terminal, you can follow these instructions (each line is a new prompt). The <code>touch</code> command creates a new file with that name.

<pre class="code-box">
<code id="codeSnippet">cd
cd documents/webp
touch webp.py</code>
</pre>

<h3>Create the script</h3>

* Open that <code>webp.py</code> file with SublimeText.

* Copy the below code into the file and save.

<pre class="code-box">
<code id="codeSnippet">import os
from pathlib import Path
from PIL import Image

input_folder = 'images'
output_folder = 'compressed_images'
quality = 60

# Use pathlib for easier path handling
input_path = Path(input_folder)
output_path = Path(output_folder)

# Create output folder if it doesn't exist
output_path.mkdir(parents=True, exist_ok=True)

# Helper function to determine if a file is an image
def is_image(file):
    return file.suffix.lower() in ['.png', '.jpeg', '.jpg']

# Iterate through files in the input folder
for file in input_path.iterdir():
    if file.is_file() and is_image(file):
        try:
            img = Image.open(file).convert('RGBA')

            webp_filename = file.stem + '.webp'
            img.save(output_path / webp_filename, 'webp', quality=quality, lossless=False)

        except Exception as e:
            print(f"Error processing file '{file}': {e}")

print('Done!')</code>
<button class="copy-code-button" onclick="copyCodeToClipboard('codeSnippet')">Copy Code</button>
</pre>

<h3>Run the script</h3>

* Put all image files (png, jpeg, jpg) you want to convert into the <code>images</code> folder within your <code>webp</code> folder.

<div class="post-img">
<img class="img" alt="Chatgpt webp script folder" src="/assets/images/blog/webp-chatgpt/folder.webp">
</div>

* Ask ChatGPT how to run a Python script.

<pre class="code-box">
<code id="codeSnippet">I have file webp.py in path /documents/webp. I use [X] operating system. I have python3 downloaded. How can I run the prompt through my CLI?
</code>
<button class="copy-code-button" onclick="copyCodeToClipboard('codeSnippet')">Copy Prompt</button>
</pre>

<div class="post-img">
<img class="img" alt="Chatgpt webp prompt" src="/assets/images/blog/webp-chatgpt/chatgptprompt.webp">
</div>

Then follow these instructions. For instance, on MacOS, you'd follow these prompts (each line is a different prompt), which you would put into Terminal.

<pre class="code-box">
<code id="codeSnippet">cd
cd documents/webp
python3 webp.py</code>
</pre>

* Once run, the CLI should say, "done". It will create a folder called <code>compressed_images</code> which will have all the converted images.

<div class="post-img">
<img class="img" alt="Chatgpt folder of compressed images" src="/assets/images/blog/webp-chatgpt/compressed_images.webp">
</div>

<b><u>Some notes:</u></b>


* It will automatically create a <code>compressed_images</code> folder. You do not need to add it or delete this after the first run
* Ensure the width/height of your png/jpg images are commensurate to their size on the page. For instance, if you have a logo that is taking up a 200x50 size spot, you don’t want to convert a 2000x500px image. So, before running the script, reduce the image size
* Most image tools can't edit WebP files, so make sure the file you are converting is correctly cropped/resized/etc.
* If you would like to increase the quality of the image (or decrease it), change the quality number below in the <code>webp.py</code> file. A higher number will be a bigger file, but higher quality. The typical quality range is 50-80

 <pre class="code-box">
<code id="codeSnippet">input_folder = 'images'
output_folder = 'compressed_images'
quality = 60</code>
</pre>
<br>

<h2>How well does the ChatGPT WebP script compress?</h2>

Here's actual images I compressed using the script.

<table class="pretty-table">
  <thead>
    <tr>
      <th>PNG Size</th>
      <th>WebP Size</th>
      <th>% Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>449kb</td>
              <td>45kb</td>
               <td style="color: #28A745;">-90%</td>
    </tr>
    <tr>
      <td>401kb</td>
              <td>37kb</td>
              <td style="color: #28A745;">-90%</td>
    </tr>
    <tr>
      <td>303kb</td>
              <td>61kb</td>
              <td style="color: #28A745;">-80%</td>
    </tr>
  </tbody>
</table>

When I ran it through an additional external compressor, you can see that it was as optimized as possible!

<div class="post-img">
<img class="img" alt="Webp files are totally compressed by chatgpt" src="/assets/images/blog/webp-chatgpt/compression.webp">
</div>

<hr style="margin-top:-50px">

There you go. Using ChatGPT and the Python script above, you can convert .png, .jpeg, and .jpg files into .webp files in just a few seconds.

If you want additional ways to improve your website's page speed, Discoverable Marketing can help. With our one-time committment, you'll get a report with step-by-step advice around improving your technical SEO infrastructure, <a href="https://www.discoverablemarketing.com/blog/improve-g2-rank/" target="_blank">G2 rankings</a>, Google rankings, and more.

You can learn more about Discoverable Marketing <a href="https://www.discoverablemarketing.com" target="_blank">here</a>.
