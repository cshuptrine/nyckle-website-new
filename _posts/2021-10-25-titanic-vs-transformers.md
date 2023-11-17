---
layout: post
date: 2021-10-25
title: 'A top 3% score in the Kaggle Titanic Challenge using Transformers'
author: oscar
summary: In this post we show how to make a top 3% submission on the Kaggle Titanic Challenge using Transformers
og_image: /blog/images/2021/titanic-kaggle-hero.jpg
og_image_alt: Titanic - learning from disaster
---

The tragic Titanic shipwreck, documented in countless books and movies, has made its way into the Machine Learning world via the Kaggle challenge: [Titanic - learning from disaster](https://www.kaggle.com/c/titanic). In this challenge the goal is to predict which passengers survive based on metadata like sex, name and ticket price.

The Titanic competition, with almost 16000 teams, is the [most popular on all of Kaggle](https://dataaspirant.com/most-popular-kaggle-competition-solutions/). The competition is perpetually open and is part of the "getting started" suite. Kaggle archives any submission older than 2 months, but even so there are over 15000 submissions as of today. There is also a wild amount of discussions and how-tos. A few worth looking at are: [a score of 0.8 is great](https://www.kaggle.com/carlmcbrideellis/titanic-leaderboard-a-score-0-8-is-great) and the more comprehensive [how am I doing with my score](https://www.kaggle.com/pliptor/how-am-i-doing-with-my-score). The current top-score, as far as I can tell, is 85% by veteran Kaggle competitor [Chris Deotte](https://www.kaggle.com/cdeotte/titanic-wcg-xgboost-0-84688).

In this post we look at a new approach to solving the Titanic dataset -- render each row as a string and use a [Transformer](https://arxiv.org/abs/1706.03762) to encode the strings into a feature vector. This eliminates tedious feature engineering required using a "standard" scikit-learn / pandas workflow, and as we shall see, performs in the top 3% on the Kaggle leaderboard!

## Data

Let's take a quick look at the data before we dive in. The first three entries in the training data look like this.

| Survived | Pclass | Name | Sex | Age | SibSp | Parch | Ticket | Fare | Cabin | Embarked |
| - | - | - | - | - | - | - | - | - | - | - |
| 0 | 3 | Braund, Mr. Owen Harris | male | 22 | 1 | 0 | A/5 21171 | 7.25 |  | S |
| 1 | 1 | Cumings, Mrs. John Bradley | female|38|1|0|PC 17599|71.2833|C85|C|
|1|3| Heikkinen, Miss. Laina |female|26|0|0|STON/O2. 3101282|7.925| |S|

"SibSp" refers to the number of siblings and spouses and "Parch" the number of parents. Otherwise, the column names speak for themselves. For more details refer to the excellent Kaggle [data explorer](https://www.kaggle.com/c/titanic/data).

## Transformers

A Transformer is a type of neural network that dominates the modern Natural Language Processing field. They are even starting to challenge the convolutional neural network for image processing. If you are not familiar with them, I recommend [the illustrated transformer](https://jalammar.github.io/illustrated-transformer/) by Jay Alammar.

Here we use the excellent Huggingface library to load up a pre-trained Transformer and use it as a feature extractor. Once we have the feature vector we train a XGBoost classifier with standard settings and that is pretty much it. The core feature extraction code looks like this:

```python
class TransformerExtractor:
    def __init__(self, model_name="distilbert-base-uncased"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModel.from_pretrained(model_name)

    def extract(self, texts: List[str]):
        feats = np.zeros((len(texts), 768), np.float16)
        for itt, text in enumerate(tqdm(texts)):
            tokenized_text = self.tokenizer(text, return_tensors="pt")
            model_output = self.model(**tokenized_text)[0].detach().cpu().numpy()
            feats[itt, :] = model_output.mean(axis=1).flatten()
        return feats
```

The only design choice here is how to join the row entries into a string. In this submission I use the simplest option possible: concatenating the entries together. This achieves a score of `0.80143` on the public benchmark which currently ranks 454 out of 14855 (top 3%). Not bad considering the simplicity and flexibility of the approach! I tried adding the column headers also but it didn't boost the score any further.

Code is available in a [Kaggle notebook](https://www.kaggle.com/oscarbeijbom/titanictransformers). That is pretty much it, happy coding!
