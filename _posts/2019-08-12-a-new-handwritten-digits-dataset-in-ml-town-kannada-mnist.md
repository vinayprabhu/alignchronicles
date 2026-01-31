---
layout: post
title: "A new handwritten digits dataset in ML town: Kannada-MNIST"
date: 2019-08-12 07:02:31.581 -0000
categories: [research, computer-vision]
excerpt: "A new handwritten digits dataset in ML town: Kannada-MNIST"
author: "Vinay Prabhu"
---

* * *

### Kannada-MNIST:A new handwritten digits dataset in ML town

![](/alignchronicles/assets/images/posts/a-new-handwritten-digits-dataset-in-ml-town-kannada-mnist-img-1.png)Class-wise mean images of the 10 handwritten digits in the Kannada MNIST dataset

### TLDR:

I am disseminating 2 datasets:  
**Kannada-MNIST dataset** : 28X 28 grayscale images: 60k Train | 10k Test  
** _Dig_ -MNIST:** 28X 28 grayscale images: 10240 (1024x10) {See pic below}

![](https://cdn-images-1.medium.com/max/800/1*umXsR1L29KkRoaA6PqgzzA.png)Putting the ‘Dig’ in Dig-MNIST

The Kannada-MNIST dataset is meant to be a drop-in replacement for the MNIST dataset 🙏 , albeit for the numeral symbols in the Kannada language .  
Also, I am disseminating an additional dataset of 10k handwritten digits in the same language (predominantly by the non-native users of the language) called Dig-MNIST that can be used as an additional test set.

Resource-list:

GitHub 👉: <https://github.com/vinayprabhu/Kannada_MNIST>  
Kaggle 👉: <https://www.kaggle.com/higgstachyon/kannada-mnist>  
ArXiv 👉 : <https://arxiv.org/pdf/1908.01242.pdf>

If you use Kannada-MNIST in a peer reviewed paper, we would appreciate referencing it as:

Prabhu, Vinay Uday. “Kannada-MNIST: A new handwritten digits dataset for the Kannada language.” arXiv preprint arXiv:1908.01242 (2019)..

Bibtex entry:
    
    
    @article{prabhu2019kannada,  
      title={Kannada-MNIST: A new handwritten digits dataset for the Kannada language},  
      author={Prabhu, Vinay Uday},  
      journal={arXiv preprint arXiv:1908.01242},  
      year={2019}  
    }

### Introduction:

Kannada is the official and administrative language of the state of Karnataka in India with nearly 60 million speakers worldwide. Also, as per articles 344(1) and 351 of the Indian Constitution, Kannada holds the status of being one of the 22 scheduled languages of India . The language is written using the official Kannada script, which is an abugida of the Brahmic family and traces its origins to the Kadamba script (325–550 AD).

![](https://cdn-images-1.medium.com/max/800/1*xaZWZBr2UfxUgTz0v_HKDg.jpeg)Kannada stone inscriptions: Source: <https://karnatakaitihasaacademy.org/karnataka-epigraphy/inscriptions/>

Distinct glyphs are used to represent the numerals 0–9 in the language that appear distinct from the modern Hindu-Arabic numerals in vogue in much of the world today. Unlike some of the other archaic numeral-systems, these numerals are very much used in day-to-day affairs in Karnataka, as in evinced by the prevalence of these glyphs on license-plates of vehicles captured in the pic below:

![](https://cdn-images-1.medium.com/max/800/1*3-9oPIx2OpN6K_0LT6TIew.jpeg)A vehicle license plate with Kannada numeral glyphs![](https://cdn-images-1.medium.com/max/800/1*ZA-VdN1bW1mzhBRhL7u-tQ.png)MNIST-ized renderings of the variations of the glyphs across the modern Kannada fonts

This figure here captures the MNIST-ized renderings of the variations of the glyphs across the following modern fonts: _Kedage, Malige-i, Malige-n, Malige-b, Kedage-n, Malige-t, Kedage-t, Kedage-i, Lohit-Kannada, Sampige and Hubballi-Regular_.

### Dataset curation:

#### Kannada-MNIST:

65 volunteers were recruited in Bangalore, India, who were native speakers of the language as well as day-to-day users of the numeral script. Each volunteer filled out an A3 sheet containing a 32 × 40 grid. This yielded filled-out A3 sheets containing 128 instances of each number which we posit is large enough to capture most of the natural intra-volunteer variations of the glyph shapes. All of the sheets thus collected were scanned at 600 dots-per-inch resolution using the Konica Accurio-Press-C6085 scanner that yielded 65 4963 × 3509 png images.

![](https://cdn-images-1.medium.com/max/800/1*IPd-9QTVqRKVZT55kXGz9A.jpeg)Volunteers helping curate the Kannada-MNIST dataset

#### Dig-MNIST:

8 volunteers aged 20 to 40 were recruited to generate a 32 × 40 grid of Kannada numerals (akin to 2.1), all written with a black ink Z-Grip Series | Zebra Pen on a commercial Mead Cambridge Quad Writing Pad, 8–1/2" x 11", Quad Ruled, White, 80 Sheets/Pad book. We then scan the sheet(s) using a Dell — S3845cdn scanner with the following settings: • Output color: Grayscale • Original type: Text • Lighten/Darken: Darken+3 • Size: Auto-detect The reduced size of the sheets used for writing the digits (US-letter vis-a-vis A3) resulted in smaller scan (.tif) images that were all approximately 1600×2000.

### Comparisons with MNIST:

1: Mean pixel-intensities distribution:

![](https://cdn-images-1.medium.com/max/800/1*IvUn9GCrsxh057tiOYFQjQ.png)

2: Morphological properties:

![](https://cdn-images-1.medium.com/max/800/1*a--YyuBlcI-wwpVBZtRynA.png)Code source: <https://github.com/dccastro/Morpho-MNIST>

3: PCA-analysis:

![](https://cdn-images-1.medium.com/max/800/1*qBy0LQ1FdXM9luO5zU9HKQ.png)

4: UMAP visualizations:

![](https://cdn-images-1.medium.com/max/800/1*zRDnLyX77tHh2l6_2lLniw.png)

### Some classification bench-marking:

I used a _standard_ MNIST-CNN architecture to get some basic accuracy benchmarks (See fig below)

![](https://cdn-images-1.medium.com/max/800/1*dGhUnlrByhN62gaXEAw4CQ.png)The CNN architecture used for the benchmarks

#### (a) Train on Kannada-MNIST train and test on Kannada-MNIST test

![](https://cdn-images-1.medium.com/max/800/1*pAQ9q-uurYH6nha46uV0Xg.png)

#### (b) Train on Kannada-MNIST train and test on Dig-MNIST

![](https://cdn-images-1.medium.com/max/800/1*xqk2EF2mFJd08acxKw-3pA.png)

### Open challenges to the machine learning community

We propose the following open challenges to the machine learning community at large.

  1. To characterize the nature of catastrophic forgetting when a CNN pre-trained on MNIST is retrained with Kannada-MNIST. This is particularly interesting given the observation that the typographical glyphs for 3 and 7 in Kannada-MNIST hold uncanny resemblance with the glyph for 2 in MNIST.
  2. Get a model trained on purely synthetic data generated using the fonts (as in [1]) and augmenting to achieve high accuracy of the Kannada-MNIST and Dig-MNIST datasets.
  3. Replicate the procedure described in the paper across different languages/scripts, especially the Indic scripts.
  4. With regards to the dig-MNIST dataset, we saw that some of the volunteers had transgressed the borders of the grid and hence some of the images either have only a partial slice of the glyph/stroke or have an appearance where it can be argued that they could potentially belong to either of two different classes. With regards to these images, it would be worthwhile to see if we can design a classifier that will allocate proportionate softmax masses to the candidate classes.
  5. The main reason behind us sharing the raw scan images was to foster research into auto-segmentation algorithms that will parse the individual digit images from the grid, which might in turn lead to higher quality of images in the upgraded versions of the dataset.
  6. Achieve MNIST-level accuracy by training on the Kannada-MNIST dataset and testing on the Dig-MNIST dataset without resorting to image pre-processing.



[1] Prabhu, Vinay Uday, Sanghyun Han, Dian Ang Yap, Mihail Douhaniaris, Preethi Seshadri, and John Whaley. “Fonts-2-Handwriting: A Seed-Augment-Train framework for universal digit classification.” _arXiv preprint arXiv:1905.08633_ (2019). [ <https://arxiv.org/abs/1905.08633> ]
