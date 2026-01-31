---
layout: post
title: "Cats to crazy quilts: Using style transfer to generate adversarial examples"
date: 2018-06-20 19:21:03.620 -0000
categories: [research, computer-vision]
excerpt: "Cats to crazy quilts: Using style transfer to generate adversarial examples"
author: "Vinay Prabhu"
---

* * *

### Cats to crazy quilts: Using style transfer to generate adversarial examples

### **Prelude:**

Let’s begin with a simple introduction into the world of adversarial inputs. These are inputs into a [machine learning](https://hackernoon.com/tagged/machine-learning) classifier that have been shrewdly perturbed in such a way that these changes are near damn invisible to the naked eye but can fool the machine learning classifier into predicting either a arbitrary wrong class (Un-targeted) or a specific wrong class (targeted).

There are two defining images that come to my mind when I think of this field at large. The first one is the classic _Panda-to-Nematode_ image from [here](https://arxiv.org/pdf/1412.6572.pdf).

![](https://cdn-images-1.medium.com/max/800/1*qEDDXIassDlGeL1fnuumCw.png)The now iconic example of a panda’s image getting perturbed into a gibbon (Source: <https://arxiv.org/pdf/1412.6572.pdf> )

The second one, is this one below that provides a geometrical perspective on where these adversarial inputs actually reside.

![](https://cdn-images-1.medium.com/max/800/1*r-vRrUZgjRi-DesNCM8XtQ.png)An image that provides a geometrical perspective on the adversarial inputs (Source: <https://infoscience.epfl.ch/record/229872/files/spm_preprint.pdf> )

Where I [work](https://unify.id/labs/), harnessing adversarial examples in a non-computer vision setting for dataset augmentation (to increase both robustness and generalizatibity) forms a key part of our pipeline. In this regard, we have disseminated a few humble attempts such as [_Vulnerability of deep learning-based gait biometric recognition to adversarial perturbations_](https://unify.id/2017/07/21/vulnerability-of-deep-learning-based-gait-biometric-recognition-to-adversarial-perturbations-2/) _,_[_On grey-box adversarial attacks and transfer learning_](https://unify.id/wp-content/uploads/2018/03/greybox_attack.pdf) _and_[ _On Lyapunov exponents and adversarial perturbations._](https://unify.id/wp-content/uploads/2018/03/lyap_e.pdf)

Recently while dabbling with the idea of using **_interpolated style transfer_** to generate mutually adversarial pairs of images, I chanced upon this fuzziness surrounding one of the more fundamental questions of machine learning: What does constitute a true label and how do machine learning companies offering commercial off-the-shelf (OTS) [APIs ](https://hackernoon.com/tagged/apis)define the same?

### **TLDR:**

1: We describe an experiment that entailed using style transferred images to target mis-classification in the context of a specific popular commercial off-the-shelf (OTS) API (I use the _Watson Visual-Recognition- V3 API, version 2016–05–20_ API for all the results shown here.)

2: The style transferred images achieved adversarial attack success rates of 97:5 % (195 out of 200).

3: The goal is _not to proclaim a new blackbox attack recipe_ or to berate the commercial API used, but to merely highlight the fuzzing surrounding what constitutes a true label or a true tag. This is one account of the simple observation that while using interpolated style transfer as a method for generating mutually adversarial pairs, the ’ _raw image_ ’ that is adversarially perturbed is not necessarily a naturally occurring image and is a style-transferred image itself.

4: Pitch the idea of using interpolated style transfer as a recipe of generating mutually adversarial pairs that can be used for model regularization as well as generating _challenging_ co-class images as inputs into training pipelines for Siamese-net like _embedding deepnets_ trained on triplet-loss cost functions.

5: Pitch the idea of using the interpolated weight as the _new semantic epsilon_ in here:

![](https://cdn-images-1.medium.com/max/800/1*RiG6x4etj-hydp5bgpEfMw.png)Time for a new **semantic epsilon**?

### **The Deep-dive:**

With this prelude in tow, the deep dive now begins.

Let’s start by focusing on the figure below:

![](https://cdn-images-1.medium.com/max/800/1*AjiSIwHRzFC-YqkCI29CuA.png)Cat2Fabric: The journey of a cat’s image into a pattern

What we see is the _journey_ of the image of a cat getting style-transferred into a ‘pattern-style-image’ using the _arbitrary image stylization_ [2] [_Magenta_](https://github.com/tensorflow/magenta/tree/master/magenta/models/arbitrary_image_stylization) __ project for different interpolation weights monotonically increasing from 0 to 1 (from the left to the right). As seen, with the raw image (interpolation weight (_w=0_)) or style-transferred images with low interpolation weights (up until interpolation weight _w=0.1_) as inputs, the commercial OTS classification API has, as expected _correctly_ classified the image as a **_cat_** with high confidence scores (0.97 to 0.99). When we increase the interpolation weight slightly to _w=0.15_ , we see a dramatic change in the inferred label landscape. The top guessed classes dramatically change from _feline, cat and carnivore_ to _cellophane, moth and invertebrate_.   
While the two images are virtually indistinguishable for the naked eye and are merely _0.03_ apart in terms of the structural similarity distance (which is _1-structural similarity index_ [4]) (_0.125_ apart in terms of the infinity-norm distance), the labels assigned for the two images by the black-box classifier turn out to be wildly different.   
Thus, we refer to this pair as constituting a _mutually adversarial pair_ with regards to the black-box classifier and the distance metric used. The local texture based features that the classifier might have learned, has perhaps coaxed it into making erroneous classification, while the image still clearly looks like that of cat. Now emerges a natural query whether the artistically style transferred **synthetically generated** image (with _w=0.1)_ _deserved_ to be classified as a _cat_ in the first place. This is akin to another related question of what is the normative expected class when the input is a real world figurine rather than an animate being, which brings us to the figure below.

![](https://cdn-images-1.medium.com/max/800/1*zV8e46uZGmt9kfp8qT_VfA.png)Is this a ‘Cat’ or a ‘Cat-figurine’?

Here, we see the input image ( The image was sourced from [here](https://www.wayfair.com/keyword.php?keyword=outdoor+cat+sculptures) ). We find this specific shopping portal to be an especially good source of such figurine art examples.  
literally being that of an artistic cat figurine that results in a high confidence classification of being categorized a _cat_ with high confidence score (_0.89_).

**Specific of the experimentation procedure:**  
It is indeed legitimate to ask if the cat example discussed above was idiosyncratically chosen. In order to assuage those concerns, we did the following experiment.  
The main querying point behind the experiment was as follows:  
_Is it indeed the case that images that are style transferred with a global low interpolation weight do result in mis-classifications?_ For this, we extracted 200 randomly chosen cat images from the [_Kaggle Dogs and Cats_](https://www.kaggle.com/c/dogs-vs-cats) dataset. We resized all of them to size 299 x 299 and style transferred each one of them using the same style image extracted from the DTD dataset[1] using the style transfer algorithm detailed in [2]. The figure below showcases this with a specific example.

![](https://cdn-images-1.medium.com/max/800/1*6vPS_fdqMLuhg9qQVGHXiQ.png)The concept

In order to ensure that the images still looked ‘cat-like’ the interpolation weight was set to a _low_ value of _0.125_.   
One can sift through all the raw images and the style transferred images as a gif animation here below.

![](https://cdn-images-1.medium.com/max/800/1*9GTAeyaRRPIYLOAqYdjWhA.gif)Gif of true images and their style transferred counterparts

Now, both the raw images and the style transferred images were classified using the _Watson Visual Recognition- V3 API, version 2016–05–20_ API.  
The _Accept-Language header string_ that sets the language of the output class names was set to _en_.  
The _owners query array_ was set to the default option (_IBM_).  
The _classifier-ids_ was set to _default_ that required no training and would _Return classes from thousands of general tags_. The _threshold query_ parameter that represents the minimum score a class must have to be returned was set to _0.5_.  
The results are covered in the forthcoming section.  
**Results:**

![](https://cdn-images-1.medium.com/max/800/1*SYEKiqjl5IWEnRkT67T2Gw.png) Histogram of the top inferred labels

In the figure above, we see the counts of the most probable classes that the API returned. As seen, the top 4 classes that encompassed more than _50%_ of the test images were _crazy quilt, camouflage, mosaic and patchwork_.

In the figure below, we see the scores as well as the histogram of scores related to the 200 classification trials.

![](https://cdn-images-1.medium.com/max/800/1*eaEtyK0tX9ivCbWGlvzM8A.png)Scores and histogram of scores returned by the Watson classifier for the 200 test images

As seen, we have an overwhelmingly large number of cases where the mis-classifications were made with high confidence scores associated. In the figure below, we see the 5 images that the API classified correctly.

![](https://cdn-images-1.medium.com/max/800/1*s8XuO5igmFLCxxTRkkVi5A.png)The lucky 5: Correctly classified as ‘Cat’ by Watson

Now, in this figure, we see randomly chosen 6 examples of style transferred images that were classified incorrectly.

![](https://cdn-images-1.medium.com/max/800/1*hO2hcirlCr-cen43Wo4ECA.png)6 random not-so luckies

**Conclusion and Future Work**  
Due to limitations of API usage for free-tier users, we could not extend the experiment for larger datasets, which is our immediate goal. Besides this, another question that we would like to explore is the choice of the style image. We selected an image for the texture dataset on account of 2 reasons. The first being that a pre-trained style transfer model was readily available. The second reason was based on a hunch that texture, would be in fact be the right aspect of the image to _perturb_ to induce a mis-classification.  
As stated in the prelude, our intention is not to proclaim a new black-box attack or to berate the commercial API.

Besides showcasing the potential of looking at style transfer as an adversarial example generating technique, we also wanted to draw attention to the inherent fuzziness that surrounds the definition of what constitutes an image class/category or ‘tags’ in the case of such APIs and what entails an image mis-classification.  
The API that we used [describes](https://www.ibm.com/watson/services/visual-recognition/index.html%5Coverview) the technology as: **_Watson Visual Recognition’s category-specific models enable you to analyze images for scenes, objects, faces, colors, foods, and other content_**. With regards to the specific [API documentation](https://www.ibm.com/watson/developercloud/visual-recognition/api/v3/curl.html?curl%5Cget-classify), it was stated that upon usage with Pre-trained models (in lieu of a custom trained classifier), the API _Returns classes from thousands of general tags._  
On the concluding note, we would like to remark that we also ascertained the efficacy of these style-transferred based black-box attacks using the universal adversarial images for different Deep-nets from [3] as the style image, the results of which we plan to disseminate in the full version of this work.

### **Links:**

(This work will be presented at the [CV-COPS workshop](http://vision.soic.indiana.edu/bright-and-dark-workshop-2018/) @ CVPR-2018)

Github: <https://github.com/vinayprabhu/Art_Attack>

Poster:

![](https://cdn-images-1.medium.com/max/800/1*DrdqZi6P3xjZi54gLuJyfg.png)Poster for the paper

**References**

[1] M. Cimpoi, S. Maji, I. Kokkinos, S. Mohamed, and A. Vedaldi. Describing textures in the wild. In Computer Vision and Pattern Recognition (CVPR), 2014 IEEE Conference on, pages 3606–3613. IEEE, 2014.

[2] G. Ghiasi, H. Lee, M. Kudlur, V. Dumoulin, and J. Shlens. Exploring the structure of a real-time, arbitrary neural artistic stylization network. arXiv preprint arXiv:1705.06830, 2017.

[3] S.-M. Moosavi-Dezfooli, A. Fawzi, O. Fawzi, and P. Frossard. Universal adversarial perturbations. <https://arxiv.org/abs/1610.08401>

[4] Z.Wang, A. C. Bovik, H. R. Sheikh, and E. P. Simoncelli. Image quality assessment: from error visibility to structural similarity. IEEE transactions on image processing, 13(4):600– 612, 2004.
