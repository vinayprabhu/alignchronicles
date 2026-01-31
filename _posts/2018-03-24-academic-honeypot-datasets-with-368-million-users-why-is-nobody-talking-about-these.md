---
layout: post
title: "‘Academic’ honeypot datasets with 368 million users. Why is nobody talking about these!?"
date: 2018-03-24 08:32:04.010 -0000
categories: [research, computer-vision]
excerpt: "‘Academic’ honeypot datasets with 368 million users. Why is nobody talking about these!?"
author: "Vinay Prabhu"
---

* * *

### ‘Academic’ honeypot datasets with 368 million users. Why is nobody talking about these!?

As this _Cambridge Analytica_ fracas unraveled, my first reaction was _HOLY-EFFING-SH*T_! People on [social media](https://hackernoon.com/tagged/social-media) were losing their mind over the enormity of the data loot. Even my tech-leaning acquaintances were at-least mildly impressed that that data belonging to as many as 30 to 50 **million** [Facebook](https://hackernoon.com/tagged/facebook) users was siphoned off **_legally_** in the guise of academic research and fed into sinister statistical pipelines drenched in malaise to wreck political mischief, put mildly.

Now, here comes the plot-twist. This was a whole **_different_** kind of a _HOLY-EFFING-SH*T_ moment for me. As someone whose [PhD thesis](https://repositorio-aberto.up.pt/bitstream/10216/107378/2/212801.pdf) was [literally](http://www.cmuportugal.org/tiercontent.aspx?id=5433) in the field of [Network Science](https://en.wikipedia.org/wiki/Network_science), I knew for a fact that 50 million was _puny small_. Academics who worked on the big data facet of the field had routinely amassed and touted far bigger numbers in their publications during my doctoral studies.

Given the inherently romantic nature of the field, I still devote some of my Sundays towards keeping myself abreast of the exciting developments in the field. One such rather[ impressive paper](https://arxiv.org/abs/1612.01734) I recall having read early this year (published in Dec 2017) came to my mind when I saw the [Channel 4 news expose](https://www.youtube.com/watch?v=mpbeOCKZFfQ). This paper had bragged about figures that will make all those worried about the enormity of the Cambridge Analytica breach dive deep into depression.

Are you ready for the number? Are ya sure?

OK, here it goes:

### **368 MILLION USERS.**

In a paper smartly titled ‘ _Do We Really Need to Catch Them All? A New User-Guided Social Media Crawling Method_ ’, a Swedish-Polish team of merely 4 researchers from 2 humble schools ( Blekinge Institute of Technology and Wrocław University of Science and Technology) had amassed a dataset of **368 million unique users** interacting in little over **1.3 billion social interactions**!

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-1.png)The abstract of the paper

But how did a team of 4 pull this off? Combination of 2 ideas:

a) Smart ‘attack/seed points’: Facebook pages.

b) A nifty crawling engine.

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-2.png)

The team had built this rather impressive crawler — SINCE- Social Interaction Network Crawling Engine that they used to collect publicly available Facebook data. Now, which 160 pages you ask? It’s all openly available neatly curated and hosted on Harvard’s [_dataverse_](http://dx.doi.org/10.7910/DVN/DCBDEP).

The numbers on their descriptive stats table is strictly orgasmic. Take a look.

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-3.png)

Now, what if a reader/journalist wants to give this a shot? Sans sinister intentions, purely for intellectual curiosity?

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-4.png)

Can’t code? No worries. GUI tools to the rescue! If you can spare [$75](https://nodexlgraphgallery.org/Pages/Registration.aspx), you can get access to [tools](https://www.smrfoundation.org/networks/facebook-analytics/) like the one above that will allow you to indirectly target users based on one rather interesting backdoor: **Facebook fan pages**!

Example:

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-5.png)

Now, bear in mind that this is not an expose or a witch-hunt against the authors of the fine paper above or their excellent piece of engineering research. For what it’s worth, the authors do vividly state that ‘**We adhere to Facebook’s data privacy policy by anonymizing all data to an extent where it is only possible to backtrack the particular public page that is analyzed** ’, and I for one _do_ take their word for that. This work is from mainstream reputed academics.

The main point here is that if you are considering state-of-the-art publications in areas such as Graph exploration or even recommendation engines, data belonging to a user-set spanning a few hundred million users is par for the course.

Proof?

This:

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-6.png)

So, now what? Does Facebook go through the entire list of academics who were given academic access one by one and flies one their Data engineer and a lawyer to make sure that the data is strongly anonymized?

This where I squirm a little. Online social networks by their volition are tricky beasts to anonymize. This is not an unfounded fear. During my Ph.D, I knew of researchers who were actively working on de-anonymization strategies and had met with plenty of successes. Example:

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-7.png)

Also, believe it or not, we have been here before! In my first year at CMU, I had read Mike Zimmer’s paper on Facebook’s infamous breach of 2008.

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-8.png)

Because we millennials co-exist co-temporally on several social media platforms and carry forward our social allegiances elsewhere, all it takes is one or a few _Harvard freshman from Wyoming_ breaches (See figure below) and we will face cataclysmic ripple effect breakdown of anonymity.

![](/alignchronicles/assets/images/posts/academic-honeypot-datasets-with-368-million-users-why-is-nobody-talking-about-these-img-9.png)

So, perhaps, the only solution is forced deletion from every single academic repository that there is out there?

Possibly so.
