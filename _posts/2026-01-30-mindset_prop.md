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
Academically, I have led a journeyman's life and my previous work [[1]][1] has spanned network sciences, statistical physics, information theory, computational social science, machine learning, human kinematics, computer vision and data ethics. I have a dual PhD (ECE + CS) from Carnegie Mellon University where my doctoral thesis [[2]][2] investigated the phenomenology of the *information contagion* on Online Social Networks (OSNs) using tools from Graph Theory, Statistical Physics and Communication Theory.

In my recent capacity as the CEO of HAL51 AI, I had to don the role of an *LLM-whisperer* updating our guard-railing mechanisms every week to ensure our real-world deployed educational co-pilots [[3]][3] would *stay on course* in a sensitive setting such as a classroom. This has given me the proverbial ring side view on how young minds interact with AI-powered novel interfaces. This idea came to me in the midst of a noisy classroom in Fremont last year. 

## The core idea of mindset propagation probing
In my previous work on *"Latent Sentiment Detection in Online Social Networks: A Communications-oriented View"* [[4]][4], I had investigated an exemplar manifestation of viral mindset propagation on social networks by modeling "*Hashtag-Hijacking*" on Twitter using Markov Random Fields (MRFs). This resulted in a communications-theoretic framework for characterizing the probability of error of detecting the underlying latent sentiment that introduced a new factor: **Network topology**. 

Recent advancements in large language modeling (LLM) have given us the three requisite ingredients: 
1. **Natural conversation generation:** Large language models with ability to simulate human-styled natural conversations.
2. **Mindset absorption:** Fine-tuning methods that allow us to harvest the conversations and inflict internal weight changes.
3. **Mechanistic probing:** A [Persona Vectors Framework (PVF)][5] [[5]][5] that allows us to probe, measure, locate, assign and manipulate personas associated with these large language models.

To this end, I propose a rigorous empirical framework of modeling mindset propagation by simulating a social network of LLMs. 

![Mindset propagation in social networks of LLMs](/alignchronicles/assets/images/posts/llm_graph.png)
*Figure 1: Mindset propagation in social networks of LLMs*

### Step-wise rendition of the underlying framework
1. We begin with a pre-fixed topology $G_{fixed}(V,E,W)$. We define Influencer nodes and Influencee nodes. 
2. The mandate of the *influencer* node is to propagandize and use persuasive conversations to alter the mindset of the *influencee* nodes. 
3. We facilitate *Contiones* styled sessions spanning a few hundred conversations. 
4. After every session, the influencee nodes go through a *reflection phase* to fine-tune internal weights.
5. The sessions repeat and we track the temporal evolution of the mindstate of the influencee nodes.

---

### References
[1]: https://scholar.google.com/citations?user=5Lck_J0AAAAJ&hl=en "Google Scholar Profile"
[2]: https://kilthub.cmu.edu/articles/thesis/Network_Aided_Classification_and_Detection_of_Data/7430012?file=13756967 "Doctoral Thesis"
[3]: https://www.youtube.com/watch?v=J-ihwfPD3YA "Educational Co-pilots Demo"
[4]: https://arxiv.org/pdf/1401.2113 "Latent Sentiment Detection Paper"
[5]: https://arxiv.org/abs/2507.21509 "Persona Vectors Framework"
