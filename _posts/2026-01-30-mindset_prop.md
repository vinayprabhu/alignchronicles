---
layout: post
title: "Mindset propagation probing by simulating social networks of LLMs"
date: 2026-01-30 16:15:00 -0800
categories: [research, llm-sociology]
excerpt: "Proposing a rigorous empirical framework of modeling mindset propagation by simulating a social network of LLMs."
author: "Vinay Prabhu"
tags: [artificial-intelligence, network-science, llm, persona-vectors]
---

## Background: What led to this 
[cite_start]Academically, I have led a journeyman's life and my previous work [1] has spanned network sciences, statistical physics, information theory, computational social science, machine learning, human kinematics, computer vision and data ethics[cite: 3]. [cite_start]I have a dual PhD (ECE + CS) from Carnegie Mellon University where my doctoral thesis [2] investigated the phenomenology of the *information contagion* on Online Social Networks (OSNs) using tools from Graph Theory, Statistical Physics and Communication Theory[cite: 4].

[cite_start]In my recent capacity as the CEO of HAL51 AI, I had to don the role of an *LLM-whisperer* updating our guard-railing mechanisms every week to ensure our real-world deployed educational co-pilots [3] would *stay on course* in a sensitive setting such as a classroom[cite: 5]. [cite_start]This has given me the proverbial ring side view on how young minds interact with AI-powered novel interfaces[cite: 6]. [cite_start]This idea came to me in the midst of a noisy classroom in Fremont last year[cite: 7].

## The core idea of mindset propagation probing
[cite_start]In my previous work on *"Latent Sentiment Detection in Online Social Networks: A Communications-oriented View"* [4], I had investigated an exemplar manifestation of viral mindset propagation on social networks by modeling "*Hashtag-Hijacking*" on Twitter using Markov Random Fields (MRFs)[cite: 8]. [cite_start]This resulted in a communications-theoretic framework for characterizing the probability of error of detecting the underlying latent sentiment that introduced a new factor: **Network topology**[cite: 9].

[cite_start]Recent advancements in large language modeling (LLM) have given us the three requisite ingredients[cite: 11]: 
1. [cite_start]**Natural conversation generation:** Large language models with ability to simulate human-styled natural conversations[cite: 11].
2. [cite_start]**Mindset absorption:** Fine-tuning methods that allow us to harvest the conversations and inflict internal weight changes[cite: 12].
3. [cite_start]**Mechanistic probing:** A [Persona Vectors Framework (PVF)](https://arxiv.org/abs/2507.21509) [5] that allows us to probe, measure, locate, assign and manipulate personas[cite: 13].

[cite_start]I propose a rigorous empirical framework of modeling mindset propagation by simulating a social network of LLMs[cite: 14]. [cite_start]The nodes are *agents* communicating via an information substrate defined by the graph $G(V,E)$[cite: 15].

### Step-wise rendition of the underlying framework
1. [cite_start]We begin with a pre-fixed topology $G_{fixed}(V,E,W)$[cite: 16]. [cite_start]We define Influencer and Influencee nodes, $V=V_{influencer}\bigcup V_{influencee}$[cite: 17]. [cite_start]To start, we can use a single influencer ($|V_{influencer}|=1$)[cite: 18]. [cite_start]Nodes are initialized with personas using Anthropic's PVF[cite: 19].
2. [cite_start]The influencer's mandate is to use persuasive conversations to alter the mindset of the influencee[cite: 20]. [cite_start]Conversations are either (a) Propagandizing or (b) Benign and honest replies[cite: 21, 22].
3. [cite_start]We facilitate *Contiones* styled sessions spanning hundreds of conversations[cite: 23]. [cite_start]Influencers steer the mind-state, while influencees remain naive[cite: 24, 25].
4. [cite_start]After every session, influencees enter a *reflection phase* to fine-tune internal weights and reorient persona vectors[cite: 26].
5. [cite_start]Sessions repeat while we track the temporal evolution of the persona vectors[cite: 27].

[cite_start]Success is defined if the eventual persona vectors are within an $\varepsilon$-shell of the intended target persona vector[cite: 28].

![Mindset propagation in social networks of LLMs](/alignchronicles/assets/images/posts/llm_graph.png)
[cite_start]*Figure 1: Mindset propagation in social networks of LLMs* [cite: 29]

---
**References:**
1. [cite_start][Google Scholar Profile](https://scholar.google.com/citations?user=5Lck_J0AAAAJ&hl=en) [cite: 3]
2. [cite_start][Doctoral Thesis (CMU)](https://kilthub.cmu.edu/articles/thesis/Network_Aided_Classification_and_Detection_of_Data/7430012?file=13756967) [cite: 4]
3. [cite_start][Educational Co-pilots Demo](https://www.youtube.com/watch?v=J-ihwfPD3YA) [cite: 5]
4. [cite_start][Latent Sentiment Detection paper](https://arxiv.org/pdf/1401.2113) [cite: 8]
5. [cite_start][Persona Vectors Framework (PVF)](https://arxiv.org/abs/2507.21509) [cite: 13]
