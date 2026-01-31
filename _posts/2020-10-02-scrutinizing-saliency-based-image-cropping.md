---
layout: post
title: "Scrutinizing Saliency Based Image Cropping"
date: 2020-10-02 18:01:34.846 -0000
categories: [research, computer-vision]
excerpt: "Scrutinizing Saliency Based Image Cropping"
author: "Vinay Prabhu"
---

* * *

### Scrutinizing Saliency Based Image Cropping

Last week, the saliency-based image[ cropping algorithm](https://www.theguardian.com/technology/2020/sep/21/twitter-apologises-for-racist-image-cropping-algorithm) deployed by twitter came into[ scrutiny.](https://www.theguardian.com/technology/2020/sep/21/twitter-apologises-for-racist-image-cropping-algorithm) Inspired by some of the conversations that unraveled on Twitter and the widely shared reported incidents of racial discrimination, we sought to investigate, experiment, and elucidate the workings of cropping algorithms. Following up from [last week](https://medium.com/@VinayPrabhu/on-the-twitter-cropping-controversy-critique-clarifications-and-comments-7ac66154f687), here are the updates.

**Democratizing the audit**

In order to democratize the scrutiny of this technology, we have created an educational saliency based cropping[ app](https://gradio.app/demo/saliency) where you can upload images and see what a _state-of-the-art_ machine learning model _similar_ to the one deployed by twitter _thinks_ are important parts of the image and see how that results in what parts of the image are cropped out. (Please note that, the exact model and the cropping policy used by twitter are both, to the best of our knowledge, proprietary and beyond _easy_ access. Therefore, our reconstruction is limited to what is available in peer-reviewed open sourced academic literature). We have also added an interactive _TOAST UI image editor_ that one can use to further explore the brittleness of this technology.

![](/alignchronicles/assets/images/posts/scrutinizing-saliency-based-image-cropping-img-1.png)The gradio user interface![](/alignchronicles/assets/images/posts/scrutinizing-saliency-based-image-cropping-img-2.png)The inbuilt image editor to conduct the experiments

**On saliency based cropping**

Saliency based cropping is not unique to Twitter. This very same technology is also used by other tech firms including[ Google](https://twitter.com/AnimaAnandkumar/status/1308096236159893505?s=20), [Adobe](https://patents.google.com/patent/US9626584B2/en), and[ Apple](https://developer.apple.com/documentation/vision/cropping_images_using_saliency). This technique, which twitte[r admittedly uses](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2018/Smart-Auto-Cropping-of-Images.html) on it’s platform, typically entails two phases: The saliency mask estimation phase and the cropping phase.

  * In the first phase, a _saliency mask_ is estimated using a machine learning model that ingests an input image and speculates which parts of the image are interesting and/or important (retain-worthy) and which parts of the image are _discardable_ (or crop-worthy). These machine learning models are typically trained on datasets such as[ SALICON](http://salicon.net/),[ MIT-1003 and CAT2000](http://saliency.mit.edu/datasets.html) with attention-annotated “ _ground truth_ ” saliency maps collected by either using volunteers or crowd-sourcing exercises.
  * In the second phase, the saliency map output in the first phase is then used to come up with a cropping policy that results in a cropped image with the so-perceived non-salient parts of the image being removed and the so-perceived salient parts of the image being retained.



As it turns out, this cropping process is a double edged sword. As it is evident in [these example images](https://gradio.app/demo/saliency), even the cropped image _seems fair_ , the cropping has in fact, masked the differential saliency that the machine learning model associates with the different constituent faces in the image and some of these nuanced facets of biased ugliness are obfuscated in the finally rendered image.

**On the saliency model we used for the gradio app**

Given that both twitter’s saliency-estimation model and the cropping policy are not in the public domain, we used a _similar_ model from peer-reviewed machine learning literature that emulates twitter’s cropping algorithm. We looked for a SoTA model that was open-sourced. We used the [MSI-Net](https://github.com/alexanderkroner/saliency) model which ranked high on the [MIT/Tuebingen Saliency Benchmark](https://saliency.tuebingen.ai/results.html). The associated paper is [Contextual Encoder–Decoder Network for Visual Saliency Prediction](https://www.sciencedirect.com/science/article/pii/S0893608020301660) by Kroner et al. Since this model only maps an input image to saliency map, and doesn’t perform any cropping, we authored a cropping function which is _a sliding window with a fixed aspect ratio (16,9) that maximizes sum of saliency_. Our code is open-sourced, and you can find everything required to build this interface [here](https://github.com/gradio-app/saliency).

**Participation**

The gradio[ saliency based image cropping ](https://gradio.app/demo/saliency)app is open for anyone to interact and experiment with. Upload an image and simply click the **submit** button, which will show you a heatmap of features that the algorithm picks up as “ _important_ ”. **_We do not save or store your images._**  
If you come across an unusual, discriminatory, or biased saliency distribution that you’d like for us to pay heed to or include in a forthcoming academic dissemination, please let us know by dropping it [here](https://www.dropbox.com/request/gFaju50BlFyiGHnCLJ08). (However, please make sure that the images that you are uploading are consensually sourced and adhere to [CC-BY regulations](https://creativecommons.org/about/cclicenses/).)

Team:

  * [Vinay Prabhu](https://twitter.com/vinayprabhu)
  * [Abeba Birhane](https://twitter.com/Abebab)
  * [Ali Abdalla](http://@si3luwa)
  * [Darrell Owens](https://twitter.com/IDoTheThinking)


