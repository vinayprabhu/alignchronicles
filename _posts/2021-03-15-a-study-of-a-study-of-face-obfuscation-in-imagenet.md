---
layout: post
title: "A study of “A Study of Face Obfuscation in ImageNet”"
date: 2021-03-15 21:32:31.538 -0000
categories: [research, computer-vision]
excerpt: "A study of “A Study of Face Obfuscation in ImageNet”"
author: "Vinay Prabhu"
---

* * *

### A study of “A Study of Face Obfuscation in ImageNet”

**Table of Contents:**

— — — — — — — — — — — — — — — — — — — — — — — -

· Background  
· Main Issues  
∘ Issue-1: The curious case of Face obfuscation  
∘ Issue-2: NSFW analysis  
∘ Issue-3: Human co-occurrence analysis  
∘ 👹FAQs of the ‘Devil’s advocacy’ kind: Our humble tribute to the cult of “Both-sideism”  
∘ 👹1: Why not just contact them in lieu of public grandstanding?   
∘ 👹2: May be your little emails slipped through the cracks perhaps?  
∘ 👹 3: Well, OK. But PL is not the sole author. How do you know all the co-authors and the collaborators in the acknowledgment were even aware of your work?!  
∘ 👹 4: In the Wired interview published on March 15th, when pressed by the reporter, one of the authors states that “a citation will appear in an updated version of the paper”. Doesn’t that solve the problem?  
· Concluding thoughts: The real issues  
∘ a) Erasure of black-women-scholarship:  
∘ b) Revisiting the horrors of ghost labor:  
— — — — — — — — — — — — — — — — — — — — — — — -

### Background

On June 24, 2020, Abeba Birhane and I released on our paper “[Large image datasets: A pyrrhic win for computer vision?](https://arxiv.org/pdf/2006.16923.pdf)” critiquing the culture of large scale datasets in Computer Vision. In the paper, we performed _a cross-sectional model-based quantitative census covering factors such as age, gender, NSFW content scoring, class-wise accuracy, human-cardinality-analysis, and the semanticity of the image class information in order to statistically investigate the extent and subtleties of ethical transgressions_ using the [**ImageNet dataset**](http://image-net.org/download) as a template _._ The nature and the expanse of the transgressions attracted quite some media attention (See [this](https://www.theregister.com/2020/07/01/mit_dataset_removed/), [this](https://venturebeat.com/2020/07/01/mit-takes-down-80-million-tiny-images-data-set-due-to-racist-and-offensive-content/) and [this](https://venturebeat.com/2020/07/15/announcing-the-ai-innovation-awards-winners-at-transform-2020/)). In Section 2.3 of our paper, we revisited the downstream effects of “ _The WordNet_ _Effect” (_ that results from inheriting labels from the WordNet taxonomy ) and showed how this affects not just the ImageNet dataset but also other datasets such as the the [Tiny Images dataset](https://people.csail.mit.edu/torralba/publications/80millionImages.pdf) and the latest [Tencent-ML-Images dataset](https://github.com/vinayprabhu/Crimes_of_Vision_Datasets/blob/master/Notebooks/Notebook_4_ml_images_unsafe.ipynb) that either directly or indirectly inherited the label-space from WordNet. On June 29th 2020, we learnt that the curators of the Tiny Images dataset had [apologized and withdrawn the dataset](https://groups.csail.mit.edu/vision/TinyImages/).   
In Jan 2021, the paper was formally presented at the IEEE/CVF Winter Conference on Applications of Computer Vision ([WACV -2021](https://openaccess.thecvf.com/content/WACV2021/html/Birhane_Large_Image_Datasets_A_Pyrrhic_Win_for_Computer_Vision_WACV_2021_paper.html)) and has been cited in more than two dozen papers since.  
In the backdrop of all of this work, this Wednesday, on the 10th of March-2021, we encountered a paper titled [_A Study of Face Obfuscation in ImageNet_](https://arxiv.org/pdf/2103.06191.pdf) from the ImageNet curators that has left us disappointed and flummoxed. By indulging in _what appears_ to be a calculated and systematic erasure of the entire body of critique that our work was a part of, the authors have sent out a wide range of wrong signals. This erasure is doubly disappointing given how the community had recently rallied behind the main visionary of the ImageNet project when her contributions towards the “ _AI revolution”_ were being erased in an online compendium and the sheer clout she enjoins in the field.

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-1.png)Left: Version of Brief History of Deep Learning from 1943–2019 [Timeline] on Apr 23, 2020. Right: Version today after the community uproar driven by Dr. Gebru’s[ tweet](https://twitter.com/timnitGebru/status/1252752743942328321?s=20)

Below, we bemoan this unfortunate departure from norms of academic integrity by carefully disentangling the specific details _that characterize the situation from our standpoint_. In doing so, we are sharing the exact snapshots of the conversation(s) that unraveled between the parties involved here.   
**Pre-script** : The authors of the paper [Large image datasets: A pyrrhic win for computer vision?](https://arxiv.org/abs/2006.16923), (and this blog-post you are reading), are abbreviated as VP (Vinay Prabhu) and AB (Abeba Birhane) respectively in the rest of the material presented here. PL refers to the [main visionary](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) of the ImageNet dataset. Wherever relevant, ‘ _Our paper_ ’ refers to [_Large image datasets: A pyrrhic win for computer vision?_](https://arxiv.org/abs/2006.16923)__ and ‘ _their paper_ ’ refers to __[_A Study of Face Obfuscation in ImageNet_](https://arxiv.org/abs/2103.06191) _._

### Main Issues

#### **Issue-1: The curious case of _Face obfuscation_**

 _Background_ : Section 4: _Candidate solutions: The path ahead_ in our paper, was perhaps, the most difficult for us to author. We knew we were submitting to WACV (on the stubborn insistence of VP) , an unlikely venue for ‘ _fairness papers_ ’ whose submission portal did not even have a primary or secondary topic for “ _Explainable AI, fairness, accountability, privacy, and ethics in vision_ ”, which did receive a mention in the CFP however. (See screenshot below).

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-2.png)Screenshot of the email VP wrote to WACV organizers. There was no reply received to this email.

Our goal, simply put, was to in fact, **_engage directly with the practitioners in the field_** and not just the ethics community. And, in many ways, it did culminate in a rather “ _lively discussion_ ” when we did present the paper at WACV in a session chaired by Jordi Pont-Tuset, a Research Scientist @ Google Zürich.  
At this juncture, we’d like to share that AB, along with a lot of our other colleagues and pre-reviewers, rightfully questioned the very need for the section as they felt it reeked of tech-solutionism. Nonetheless, predicting the clamor for ‘possible solutions’ from the reviewers of this traditional Computer Vision conference (which was eventually proven to be a correct assumption), the section persisted. In this regard, we’d like to draw the attention of the reader towards Section 4.3 in our paper which is literally titled “** _Differentially private obfuscation of the faces”_** where we state: ” _This path entails harnessing techniques such as DP-Blur [36] with quantifiable privacy guarantees to obfuscate the identity of the humans in the image. The Inclusive images challenge [94], for example, already incorporated blurring during dataset curation and addressed the downstream effects surrounding change in predictive power of the models trained on the blurred versions of the dataset curated. We believe that replication of this template that also clearly included avenues for recourse in case of an erroneously non-blurred image being sighted by a researcher will be a step in the right direction for the community at large_ ”. As evinced by the papers we cited, privacy preserving obfuscation of images is **_neither a novel idea and most certainly not our idea_**. But, in the specific context of imagining a face-obfuscated version of ImageNet, it is reasonable to assume that any one who will author a paper audaciously titled “ _A Study of Face Obfuscation in ImageNet_ ” will pay at least a lip-service towards citing either our work and/or [94] in our paper which is:  
_[94] Shreya Shankar, Yoni Halpern, Eric Breck, James Atwood, Jimbo Wilson, and D Sculley. No classification without representation: Assessing geodiversity issues in open data sets for the developing world. arXiv preprint arXiv:1711.08536, 2017._  
But the authors chose not to cite this one either. Their paper begins with “ _Image obfuscation (blurring, mosaicing, etc.) is widely used for privacy protection. However, computer vision research often overlooks privacy by assuming access to original unobfuscated images” (Like, really?!_[🙄](https://emojipedia.org/face-with-rolling-eyes/) _)_ and goes on to claim that they have discovered that “.. _the dataset exposes many people co-occurring with other objects in images, e.g., people sitting on chairs, walking their dogs, or drinking beer (Fig. 1). It is concerning since ILSVRC is publicly available and widely used.”_[🥴](https://emojipedia.org/woozy-face/)

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-3.png)

Also, we’d like to ask the readers to take 2 minutes to parse these FAQs from the associated Kaggle contest ([94] in our paper) from > 2 years ago and then read _their paper_ again 🤐

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-4.png)Source: <https://www.kaggle.com/c/inclusive-images-challenge/overview/inclusive-images-faq#recognizable-faces>

#### **Issue-2: NSFW analysis**

The term NSFW appears 38 times in our paper and we not only curated a class-wise meta-dataset (df_nsfw.csv | Size: (1000, 5) ) consisting of the mean and std of the NSFW scores of the train and validation images arranged per-class but also dedicated Appendix B.2 towards “ _NSFW scoring aided misogynistic imagery hand-labeling”._ In Table-5, we specifically focus on classes 445, 638,639, 655 and 459 mapping to bikini, two-piece , maillot ,  
miniskirt and brassiere/ bra/ bandeau in the dataset that we found were NSFW-dense classes.

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-5.png)

Again, much to our disappointment, the authors claim to have discovered that  _: ”The number of NSFW areas varies significantly across different ILSVRC categories. Bikini is likely to contain much more NSFW areas than the average_.” [😒](https://emojipedia.org/unamused-face/)

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-6.png)

#### **Issue-3: Human co-occurrence analysis**

In our paper, we dedicated Section _B.3 Dogs to musical instruments: Co-occurrence based gender biases_ towards human co-occurrence-biases, specifically with regards to classes involving dog-breed-class images and musical instruments that have high density of incidentally co-occurring humans. Their new paper states: “ _Results suggests that super categories such as clothing and musical instrument frequently co-occur with people_ ”🤦

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-7.png)

#### 👹FAQs of the ‘Devil’s advocacy’ kind: Our humble tribute to the cult of “Both-sideism”

Given the attention this might elicit we pre-emptively anticipate the exact flavor of attacks and cover the following “ _Devil’s advocacy counter-points_ ” in the section below:

#### 👹** _1: Why not just contact them in lieu of public grandstanding? Have you bothered to even contact the curators of the ImageNet dataset?_**

Yes! Glad you asked. Here are the screenshots of our emails dating all the way back to Aug 19th 2019 and later, on Apr 12, 2020 to which we received no replies whatsoever:

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-8.png)

Understanding the magnitude of the impact and being wary of any possible [Streissand effect](https://en.wikipedia.org/wiki/Streisand_effect), we spent the entirety of the near **10 month period** between Aug 2019 and Jun 2020 in various outreach efforts amongst many journalists, Computer Vision and Ethics communities and organizations. This also involved VP working with journalists such as [Katyanna Quach](https://twitter.com/katyanna_q?lang=en) at _The Register_ who then authored this article: [Inside the 1TB ImageNet data set used to train the world’s AI: Naked kids, drunken frat parties, porno stars, and more](https://www.theregister.com/2019/10/23/ai_dataset_imagenet_consent/)

#### ** _👹2: Oh come on! Stop with the self-aggrandizing and self-loathing_. _AI royalty tend to receive hundreds of emails a day. May be your little emails slipped through the cracks perhaps?_**

Again, glad you asked!   
**Lemma-1: PL was *extremely* well aware of the work.**  
**Proof** : The paper that we published heavily draws from my talk “[On the four horsemen of ethical malice in peer reviewed machine learning literature](https://hai.stanford.edu/events/hai-weekly-seminar-vinay-uday-prabhu-four-horsemen-ethical-malice-peer-reviewed-machine)” given under the aegis of the Stanford-HAI weekly seminars (thanks to an invite from [Colin Kelley Garvey](https://scholar.google.com/citations?user=S09IVcYAAAAJ&hl=en), an AI ethicist) on April 17, 2020–11:00am–12:00pm. On Apr 15th, I received this email from a HAI co-ordinator stating that “ _I just spoke with HAI Co-Director, Fei-Fei Li, and she would like to come on screen after you finish your talk and ask you a few before Colin gives you questions from the audience. Please let me know if you are comfortable with this request_ ”.

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-9.png)

This was followed by the first ever communication I received voluntarily from PL whose screen-shot is below.

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-10.png)

This was followed by a delayed reply on April 17th, that read …

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-11.png)

#### And lastly, here is the actual video of our zoom-face-to-face meeting [📹](https://emojipedia.org/video-camera/) <https://youtu.be/hpA67iDxNGU>  
**Q.E.D** !  
**_👹 3: Well, OK. But PL is not the sole author. How do you know all the co-authors and the collaborators in the acknowledgment were even aware of your work?!_**

Because they have literally cited us just recently[‽](https://qwerty.dev/interrobang/) In their paper titled “ _REVISE: A Tool for Measuring and Mitigating Bias in Visual Datasets_ ”, the authors contextualize our work by citing “ _Recent work [51] has looked at dataset issues related to consent and justice, and motivate enforcing Institutional Review Boards (IRB) approval for large scale datasets_.” A reductionist take on our work, but a proof-of-awareness nonetheless!

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-12.png)

#### 👹 **_4: In the_**[** _Wired interview_**](https://www.wired.com/story/researchers-blur-faces-launched-thousand-algorithms/)** _published on March 15th, when pressed by the reporter, one of the authors states that “a citation will appear in an updated version of the paper”. Doesn’t that solve the problem?_**

Again. This blog is not about citation-seeking. We’d like to clearly point out that the biggest shortcomings are the tactical abdication of responsibility for all the mess in ImageNet combined with systematic erasure of related critical work, that might well have led to these corrective measures being taken.  
The authors tactically left out an entire body of literature that critiqued the ImageNet beginning with the [ImageNet audits](https://arxiv.org/abs/1905.01347) by Chris Dulhanty and Alexander Wong (and not to mention Chris’ entire [thesis](https://uwspace.uwaterloo.ca/handle/10012/16414)) and more recent data-archeological expeditions such as [Lines of Sight](https://logicmag.io/commons/lines-of-sight/) by Alex Hanna et al. This shouldn’t come as a surprise to anybody because their last inquisition into the _Person subtree_ ( where they admitted that of the 2832 people categories that are annotated within the subtree, 1593 of them were potentially offensive labels and only 158 of them were visual), they made **no mention of the hugely influential ImageNet Roulette project** ( that went viral on September 19, 2019 while the paper only hit the ArXiv servers on 16 Dec 2019!). Also, lest we forget that these _solutions_ are being ushered in a good 12 years after the dataset release. T-W-E-L-V-E YEARS!

### Concluding thoughts: The real issues

#### **a) Erasure of black-women-scholarship:**

AB’s central role in turning a rag-tag set of empirical results and revelations into a cogent peer-review-worthy publication and later investing all the efforts to champion it’s cause via talks, interviews and presentations is one of the main reasons why the paper is even being cited now. The primacy of her contributions is also reflected in the official citation that literally reads:  
_@inproceedings{birhane2021large,  
title={Large Image Datasets: A Pyrrhic Win for Computer Vision?},  
author={Birhane, Abeba and Prabhu, Vinay Uday},  
booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision},  
pages={1537–1547},  
year={2021}  
}  
_But, unfortunately for her, undervaluing of her scholarship is not an aberration but a trend. Black women’s intellectual production has historically been ignored and systemically erased. The hierarchical academic structure that devalues Black women’s intellectual contributions makes contesting such injustice a tiresome endeavor discouraging Black women scholars from coming forward. Black feminist theory scholars such as Jennifer Nash, have extensively explored the [Citational Desires](https://www.bcheights.com/2019/11/17/nash-calls-for-stewardship-in-black-feminist-citation/) of scholars whose contributions have been systematically under-emphasized. Initiatives such as the Cite Black Women collective (<https://www.citeblackwomencollective.org/>) work towards dismantling precisely this behavior in academia and it is unfortunate to see this behavior reinforced by highly esteemed scholars who are supposed to be the torchbearers of hope.

#### **b) Revisiting the horrors of ghost labor:**

During our draft revisions, specifically Section-4, AB and I were in the midst of a ‘ _How do we go about fixing this morass?_ ’ conversation, when we realized two things: In order to truly _clean up_ the dataset, we’d be forced to make two massive compromises:

  * Resort to using the unethical “SoTA” tools from companies like Amazon, Face++ or Clarifai to perform face detection and filter the problematic images
  * Resort to exploiting the ghost labor markets of AMT to hand-annotate the NSFW facet of the dataset.



As it turns out, on the very same day that the [Turkopticon](https://turkopticon.ucsd.edu/) fundraising campaign was announced, a few hours later, we see the efforts of this paper falling prey to both the ills. In fact, the gamified HIT (Human  
Intelligence Task) details reads 🤢: _These images have verified ground truth faces, but we intentionally show incorrect annotations for the workers to fix. The entire HIT resembles an action game. Starting with 2 lives, the worker  
will lose a life when making a mistake on gold standard images. In that case, they will see the ground truth faces (Fig. B Right) and the remaining lives. If they lose both 2 lives, the game is over, and they have to start from scratch at  
the first image. We found this strategy to effectively retain workers’ attention and improve annotation quality._

![](/alignchronicles/assets/images/posts/a-study-of-a-study-of-face-obfuscation-in-imagenet-img-13.png)

(Also see <https://www.vice.com/en/article/88apnv/underpaid-workers-are-being-forced-to-train-biased-ai-on-mechanical-turk> )

To conclude, we say:  
\- This is NOT us desperately hoping to drum up some antics to garner more attention  
\- This is NOT us trying to eke out one more citation   
\- This is NOT us assuming the proverbial higher pedestal and judging anyone  
\- This is NOT an ad hominem attack on any member of the ImageNet team.   
\- This IS us calling out a **_pattern of citation erasure_** (with specific verifiable proofs) and highlighting the ethical shortcomings in a paper that will probably be extremely well cited in the near future and much worse, celebrated (wrongly IMHO) as a template for stop-gap fixes.  
We call upon the curators of the dataset to pay heed to the issues raised and take corrective measures.

Kindest regards,

  * Abeba Birhane and Vinay Prabhu



PS: If all of this is confusing, here is the VERIFIABLE timeline of events to summarize what happened.  
_1: 19 Aug 2019 — Contacted ImageNet curators via email. No response.  
2: Sep 2019: Chat with _[_Katyanna Quach_](https://www.theregister.com/Author/Katyanna-Quach/) _at ‘The Register’ in order to research the specific details regarding ImageNet for an impending article.  
3: 23 Oct 2019: Register article comes out: _[_https://www.theregister.com/2019/10/23/ai_dataset_imagenet_consent/_](https://www.theregister.com/2019/10/23/ai_dataset_imagenet_consent/)_  
4: 12 Apr 2020: Second email contact with the ImageNet curators via email. No response.  
5: 15 Apr 2020: PL contacts me via email  
6: Apr 25, 2020 : Talk at Stanford that PL attends titled “_[ _Ethical Malice in Peer-Reviewed Machine Learning Literature_](https://hai.stanford.edu/events/hai-weekly-seminar-vinay-uday-prabhu-four-horsemen-ethical-malice-peer-reviewed-machine) _” (Video link included)  
7: June 2020, The first version of our paper appears on ArXiv : _[_https://arxiv.org/abs/2006.16923_](https://arxiv.org/abs/2006.16923) _  
8: March 2021, PL et al publish “A Study of Face Obfuscation in ImageNet” sans any citation or acknowledgement_
