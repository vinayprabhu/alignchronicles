---
layout: post
title: "On the twitter cropping controversy: Critique, clarifications and comments"
date: 2020-09-21 17:10:31.159 -0000
categories: [research, computer-vision]
excerpt: "On the twitter cropping controversy: Critique, clarifications and comments"
author: "Vinay Prabhu"
---

* * *

### On the twitter cropping controversy: Critique, clarifications & comments- 1

TL;DR: _Fcuck the algorithm_  
Table of Contents:  
\- Experiment details   
\- Feedback from twitter: The two camps of the Rashomon aisle   
\- Unbiased algorithmic saliency cropping is a pipedream   
\- Conclusion

> [](https://twitter.com/vinayprabhu/status/1307460502017028096?s=20)

This Saturday noon, I was made aware of an ongoing saliency based cropping bias fracas on my [timeline](https://twitter.com/Abebab/status/1307430893418688512?s=20). As I was literally rushing through the final [experiments](https://github.com/vinayprabhu/CFD_MLImages) for a forthcoming paper that seeks to address Computer Vision’s growing fascination with physiognomy, I thought I’d run this little statistical experiment live on twitter with the exact same [Psychonomic dataset](https://chicagofaces.org/default/) I was currently using to investigate this.

### Experiment details:

The[ CFD dataset](https://chicagofaces.org/default/download/) contains 93 images of consensually collected _self-identified_ Black (B) and White (W) faces controlled for _saturation, size, resolution, lighting conditions, facial expressions, clothing and face-stimuli (neutral)_. (Please read Pg.1125 in the [paper](https://www.wittenbrink.org/cfd/mcw2015.pdf) for the details). I generated a 3x1 grid of Black and white faces with an all black separator image in the middle.

**_Why you ask?_** Because, it was literally the format of the viral image that I saw on my timeline that had cropped out the black person (See Fig-1 below for the exact screenshot and the code)

![](https://cdn-images-1.medium.com/max/800/1*NJUkvhLW6hvQ3tgfh4TZJA.png)Figure 1: The tweet that motivated the format of the experiment

**Results:  
** After the automated tweets began appearing on my timeline, I screenshotted the images, made a collage, used the [makesense](https://www.makesense.ai/) annotation tool and manually conduct the post-cropping census. Of the 93 image pairs, 92 went through (Automated tweeting has always been a stochastic lossy endeavor to me. If you have ideas to fix this, do share them!), and of the 92 images, I saw a 40:52 White:Black split. Here’s the link for the [collage](https://github.com/vinayprabhu/CFD_MLImages/blob/master/Data/cfd_twitter_all.png) and the [annotation file](https://github.com/vinayprabhu/CFD_MLImages/blob/master/Data/cfd_twitter_all.csv).**  
FAQs:**  
_1: Err, is this how natural images occur in the real world?!  
A: _Nope. There’s a group from MIT whose research I truly admire that contacted me that is doing this sort of an experiment as I type this. That said, I do have issues with the so-called _in the wild_ image datasets, on account of the fact that most of these are collected sans consent. [Abeba Birhane](https://twitter.com/Abebab) and I literally published a [25 page paper](https://arxiv.org/pdf/2006.16923.pdf) covering many of the ethical shortcomings.

![](https://cdn-images-1.medium.com/max/800/1*eI1FezjMR7aPi0hUGcTbcw.png)

2: _Why not choose all the 4278 (93 choose 2) pairs for the experiment?_  
A: I am doing that as stated in my tweet. I literally created an account [@cropping_bias](https://twitter.com/cropping_bias) to do this in an exhaustive manner. I am waiting on the twitter dev team to approve my developer account access. The last update I have is on Monday, 21 Sep, 2020 5:15 AM where they are asking me for further clarifications.   
I have performed many experiments with the twitter API before and API access grant has been pretty swift. I think they are more thoroughly checking with a human-in-the-loop and as of today, I don’t think they are hurriedly updating their algorithm and stalling the key access  
 _3: So these initial results demonstrate no racial bias, correct?_  
A: No no no no. **_Racism is_** __**_experiential. Not statistical._** If you are banking on statistics to establish that racism exists, you need a soul searching and a half.

![](https://cdn-images-1.medium.com/max/800/0*FF4kGEJfZfdW_RnO)Figure 2: Racism is experiential. What statistic can one possibly assign to this plaque that renders it racist?!

### **Feedback from twitter: The two camps of the Rashomon aisle**

A few hours after I posted the tweet, I had observed a rather overwhelming response to the tweet, including a series of DMs containing strong reactions, appropriations and critique that left me somewhat befuddled but not entirely.

> Before any further elaboration, I’d like to explicitly lose the “Model Right Activists” crowd: **Fcuk the algorithm**!

Okay, that stated, let me draw your attention, firstly, to the _Rashomon effect_ I observed in the responses received. The exact same 40:52 W:B ratio was interpreted in completely different ways and I’ve had a front row seat to the emergence of the two camps on my timeline.

C**amp-A** : The erasure rate of a black person’s face is 43.4%! _Why is this tech even framing it as a binary classification gatekeeping problem_?! This experiment has serious shortcomings too. _This is why all tech is a cesspit right now_!

**If you can’t tell already, I am squarely, a denizen of this Camp-A (**_Okay. There’s goes the centrist crowd_**)**

C**amp-B** : Voila! 56.4% chance of acceptance! Therefore NO RACIAL VIAS! (_Psst … Many camp-B members, I suspect, silently believe it’s in fact “reverse racism” at work but won’t say it out aloud._)

Now, on the basis of _this specific experiment_ and _MY_ value system and beliefs, it is demonstrably clear that Twitter’s image cropping framework **needs a complete overhaul with some proper soul searching thrown in for good measure.** Whether it is on the basis of fashionably FACCT* approved statistical metrics (See [Goodhart’s law](https://en.wikipedia.org/wiki/Goodhart%27s_law)) or not is irrelevant to me and it should be to you too.

### _Unbiased algorithmic saliency cropping is a pipedream_

 _Unbiased algorithmic saliency cropping is a pipedream, and an ill-posed one at that. The very way in which the cropping problem is framed, it’s fate is sealed and there is no woke “unbiased” algorithm implemented downstream that could fix it._

With the following arguments, I’d like to motivate why the ansatz is _reasonable._

  1. **The Whyness of cropping:**



Why even ‘smart crop’? The first question that came to my mind is: _What does “smart cropping” achieve that mere ‘dumb’ downsizing does not_? To the detractors playing devil’s advocate and stating that the entire ‘true’ image is just a click away anyway, I ask: _Can’t the same logic be used to just deploy “dumb” downsizing of the image in lieu of a fancy neural network_? If the timeline reader is indeed intrigued by the context of the tweet and the image, won’t they just click on the blurry downsized image? Either way, “it’s just one click away”. No?  
Also, was there really an exodus of users from twitter on account of blurry downsized images that prompted the creation and deployment of this technology that comes with it’s own non trivial carbon footprint and engineering overhead?

**2\. All metrics are wrong. Some are useful, albeit within a utility shelf-life.**

Twitter’s dissemination [here](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2018/Smart-Auto-Cropping-of-Images.html) states verbatim that _Photos in your timeline are cropped to improve consistency and to allow you to see more Tweets at a glance_?Err, what exactly is “consistency” and why is maximizing # of tweets/ glance a worthy metric to pursue? Is consistency the same as area under the curve (AUC), normalized scan-path saliency (NSS), and similarity (SIM) metrics? Does hitting high numbers on CAT2000 and MIT1003 MIT saliency benchmarks guarantee good user experience and user wellness? (_Psst… it clearly is not in case you missed the memo_).

**3\. The ethics of saliency cropping**

At the heart of this whole field of saliency driven image cropping lies this audacious set of borderline meta-physical beliefs:

a) That there is a single mysterious universal notion of ground truth saliency distribution associated with an image that transcends the viewer’s lived experiences across the idiosyncratic space-time chronotypes we inhabit.

b) This universally valid saliency map can be accurately algorithmized by training a critter of the deep differentiable model menagerie, “DeepGaze” or something else that breaches the so called “state of the art”.

In fact, I wonder if this technology causes more harm by deployment of an _under-performing_ model or a _well-performing_ model (in the puritanical Machine Learning sense that is). In fact, doing eye-tracking data driven algorithmic saliency cropping might actually end up faithfully reproducing and promulgating correlative human foibles like the _male gaze_ in the collected dataset that’ll only alienate the self identified female users of the platform. Am unsure if that’s what Twitter wants.

![](https://cdn-images-1.medium.com/max/800/0*Dq4Q1z4Km8KRvKV9)Source: <https://www.tn2magazine.ie/feminist-film-series-the-male-gaze/>

**4: The irrelevance of model rights activism (MRA) and the falsified sanctity of the 50:50 parity: Schadenfreude much?**

I have personally found a fair bit of appropriating the 40:52 result as a testament that the AI is not to be blamed and there’s demonstrably no bias. To me, it is precisely irrelevant if the neural network weights here are not where the blame lies or if the dataset was unbiased within your value framework. While the tools of cold rationalism oblivious to the human condition and historicities goad us to believe that a 50:50 parity is sanctimonious, I strongly question that. Heck, even the Senate cloture rule literally requires a 60:40 ratio to end a debate and move to a vote. 51 is too ostentatious is it?  
Is there a universal cut off ratio above which _fairness_ is dramatically ushered in? All we have are putatively reasonable cutoffs, and it doesn’t take a SJW to realize that these cutoffs are put in place in an ad hoc fashion, usually by the ones in power._Lest we forget that statisticians are still grappling with the 0.05 p-value devil put in place by a eugenicist patriarch_.

To conclude, as with anything on twitter, the response was noisy, instantaneous and of course, hard to quickly summarize. Lack of sound participatory design principles have rendered Twitter timelines, IMHO, to amplify both the _Baader-Meinhof selective attention bias_ and _denominator blindness_. Momentum of the narrative far trumps empathetic thinking, and I oft find myself culpable for that as well.

### Conclusion

Here’s a bunch of parting salvos that I’d like to sign off with.

  * Yes! I noticed visceral schadenfreude by the ‘No racism’ MRA crowd. To those from this crowd reading this essay, here’s my [twitter link](https://twitter.com/vinayprabhu) so that it’s easier to unfollow and block me :)
  * Yes! I am and you should remain suspicious of any & all claims of CLEAN UNBIASED anthropogenic datasets
  * Yes! Large tracts of Behavioral research & psychonomics are seriously troublesome
  * Yes! CFD does have MANY serious shortcomings. I am addressing these in a forthcoming paper (link to be shared here)
  * Yes! The _neutral white_ background is NOT ‘realistic’
  * Yes! It is a red herring fallacy to suggest that this study somehow indicates I believe in binarized race classification or similarly garbage ideas like binarized gender.
  * Nope. This study was not meant to assign nor assigned a clean chit to nobody’s algos
  * Nope. Black & brown faces are not ‘corner cases’ and that type of phraseology is mighty troublesome.



Have a nice thoughtful week ahead, and remember:

**Fcuk the algorithm.**

**Always!**

#### Addition: The second installment of this blog series can be found here: <https://medium.com/@VinayPrabhu/scrutinizing-saliency-based-image-cropping-6b7a70cfb4f1>
