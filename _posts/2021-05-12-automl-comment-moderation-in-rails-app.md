---
layout: post
date: 2021-05-12
title: AutoML Comment Moderation in a Rails App
author: dan
description: Using machine learning to help curate user content
---

## The Problem

Many years ago a friend and I built whatsthatcharge.com, a site to help people identify mysterious charges on their credit card statement. Visitors could post the text of the charge, and others could weigh in on what it was. In the early years it seemed to be working well; people were helping each other solve those mysteries. But, as time went on we started to see inappropriate content on the site: some comments used strong language, some didn’t understand the purpose of the site, and spamming and scamming started to appear as well.

We wrote some automatic rules to block profanity or specific spammy links, which helped some. We also added an admin UI for us to manually flag a comment as inappropriate. But as the traffic grew it became untenable to hand-review everything, and our rules either didn’t catch enough spam or excluded too many valid comments.

We had a vague sense that Machine Learning (ML) could help us with this problem, but it felt like a big lift to invest in the ML knowledge and infra we’d need to build it all out. Most of the software-as-a-service offerings in the ML space were surprisingly difficult to use for what seemed like a relatively simple use case.

## The Solution

[Nyckel](https://www.nyckel.com) abstracts away most of the heavy lifting to make it easy for developers to build ML into their applications. You’re basically creating a cloud-hosted function, but instead of writing code to compute the output based on an input, you’re training the function with example data.

Below are the steps we took to train a content moderation function for whatsthatcharge.

## Step 1: Create a Function (via UI)

After signing in, we created a new Nyckel function that takes text (the comment) as input, and outputs “Not appropriate” or “Appropriate”

## Step 2: Import our Data (via API)

Although Nyckel has a UI to allow you to upload data, in our case we wanted to submit the data via API so that we can eventually automate the process. In the Nyckel UI there’s an “API” tab with code snippets we’ll use to upload samples (our comments) and annotations (whether they’re appropriate):

```ruby
# POST a sample
uri = URI("https://www.nyckel.com/v0.9/functions/dct6kijvs35x9s08/samples")
request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json', 'Authorization' => "Bearer #{access_token}")
request.body = {input: {inlineData: sample_data}}.to_json
response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end
JSON.parse(response.body)
 
# POST an Annotation
uri = URI("https://www.nyckel.com/v0.9/functions/dct6kijvs35x9s08/annotations")
request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json', 'Authorization' => "Bearer #{access_token}")
request.body = {sampleId: sample_id, labelIndex: label_index}.to_json
response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end
JSON.parse(response.body)
```

Note in addition to needing to supply sample_data (the comment text) and label_index (0 for inappropriate, 1 for appropriate), we also need to provide an access_token. For that, we need a third snippet from the docs:

```ruby
# POST to get an access token
uri = URI("https://www.nyckel.com/connect/token")
request = Net::HTTP::Post.new(uri)
request.set_form_data({'client_id' => client_id, 'client_secret' => client_secret, 'grant_type' => 'client_credentials'})
response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end
JSON.parse(response.body)
```

Taking these snippets, we created a NyckelClient class:

```ruby
require 'net/http'
require 'date'
require 'json'
 
class NyckelClient
  def initialize()
    @client_id ||= ENV['NYCKEL_CLIENT_ID']
    @client_secret ||= ENV['NYCKEL_CLIENT_SECRET']
  end
 
  def create_token()
    # POST to get an access token
    uri = URI("https://www.nyckel.com/connect/token")
    request = Net::HTTP::Post.new(uri)
    request.set_form_data({'client_id' => client_id, 'client_secret' => client_secret, 'grant_type' => 'client_credentials'})
    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end
    JSON.parse(response.body)
  end
 
  def get_token()
    unless defined?(@token_expires_at) && @token_expires_at > (DateTime.now + 60.seconds)
      token_response = create_token()
      @access_token = token_response['access_token']
      @token_expires_at = DateTime.now + token_response['expires_in'].seconds
    end
    @access_token
  end
 
  def create_sample(sample_data)
    # POST a Sample
    uri = URI("https://www.nyckel.com/v0.9/functions/dct6kijvs35x9s08/samples")
    request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json', 'Authorization' => "Bearer #{get_token()}")
    request.body = {input: {inlineData: sample_data}}.to_json
    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end
    JSON.parse(response.body)
  end
 
  def create_annotation(sample_id, label_index)
    # POST an Annotation
    uri = URI("https://www.nyckel.com/v0.9/functions/dct6kijvs35x9s08/annotations")
    request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json', 'Authorization' => "Bearer #{get_token()}")
    request.body = {sampleId: sample_id, labelIndex: label_index}.to_json
    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end
    JSON.parse(response.body)
  end
 
  def invoke(sample_data)
    # POST to get a prediction
    uri = URI("https://www.nyckel.com/v0.9/functions/dct6kijvs35x9s08/invoke")
    request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json', 'Authorization' => "Bearer #{get_token()}")
    request.body = {data: sample_data}.to_json
    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end
    JSON.parse(response.body)
  end
end
```

Note that we’re storing the client_id and client_secret in environment variables as suggested by our hosting provider Heroku. Also note the get_token function which ensures that we create a new token any time the existing one gets close to expiring.
Now, using the NyckelClient, we can create a rake task to send our samples and annotations to Nyckel:

```ruby
namespace :ml do
  desc 'Submit the annotated comments'
  task submit_annotated: :environment do |task, args|
    client = NyckelClient.new
 
    annotated_comments = Comment.where.not(appropriate: nil)
    progressbar = ProgressBar.create(title: 'Comments', total: annotated_comments.count)
 
    annotated_comments.each do |comment|
      sample = client.create_sample(comment.text)
      annotation = client.create_annotation(sample['id'], comment.appropriate ? 1 : 0)
 
      progressbar.increment
    end
  end
end
```

We’re using the ruby-progressbar gem so we can watch it churn through the comments.

Running the rake task on the command line:

```rake
rake ml:submit_annotated
```

As the data is being submitted, you can go back to the UI and watch as the data is imported, and every so often Nyckel trains a model that reflects the data submitted so far.

## Step 3: Predict All Comments

Now that we have a model, it’s time to get Nyckel’s opinion on which comments are appropriate and which are not. For that we need to add an invoke() method to our NyckelClient class:

```ruby
class NyckelClient
  ...
 
  def invoke(sample_data)
    # POST to get a prediction
    uri = URI("https://www.nyckel.com/v0.9/functions/dct6kijvs35x9s08/invoke")
    request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json', 'Authorization' => "Bearer #{get_token()}")
    request.body = {data: sample_data}.to_json
    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end
    JSON.parse(response.body)
  end
end
```

and another rake task:

```ruby
namespace :ml do
  ...
 
  desc 'Gets predictions for all comments'
  task predict_comments: :environment do |task, args|
    client = NyckelClient.new
 
    comments = Post.where('predicted_appropriate is null')
    comments_count = comments.count()
    puts "Predicting #{comments_count} comments"
 
    progressbar = ProgressBar.create(title: 'Comments', total: comments_count)
    comments.each do |comment|
      result = client.invoke(comment.body)
 
      comment.predicted_appropriate = result['index'] == 1
      comment.predicted_appropriate_confidence = result['confidence']
      comment.predicted_appropriate_updated_at = DateTime.now()
      comment.save!
 
      progressbar.increment
    end
  end
end
```

Running the command:

```rake
rake ml:predict_comments
```

Once that completes all of the comments have a prediction for whether that comment is appropriate or not, along with a confidence level provided by the model.

## Step 4: Filter the Comments

After recording all the predicted values and their confidences, all that’s left is to filter out comments that were either manually marked as inappropriate, or were marked as inappropriate with high confidence by Nyckel.

## Next Steps

So now the model has looked over all of the comments already in the database, but everything we’ve done so far has required running rake commands on the command line. New comments coming in won’t automatically be predicted. And, if we hand-annotate additional comments in our admin UI, they won’t automatically be sent to Nyckel to be incorporated into the model.

Ideally, when a new comment comes in or a new hand-annotation is made, we’d kick off an async task to call the appropriate Nyckel API. We’ve previously used the DelayedJob gem for this type of thing, and will probably use it again here.

## Wrap Up

It’s a huge piece of mind having a more reasonable process for moderating the comments. And as we upload new comments and annotations to Nyckel the model improves, and so does our ML comment moderation. Browsing through the results it’s pretty remarkable how well it does even with a few hundred annotated comments.

Clearly machine learning is a powerful tool, but it’s a complicated subject area, and one that neither of us were looking to become experts in. For whatsthatcharge.com, Nyckel closed that gap for us and saved some nights and weekends of manual moderation.
