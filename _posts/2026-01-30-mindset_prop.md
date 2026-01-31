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
[cite_start]Academically, I have led a journeyman's life and my previous work [cite: 3] [cite_start]has spanned network sciences, statistical physics, information theory, computational social science, machine learning, human kinematics, computer vision and data ethics. [cite: 3] [cite_start]I have a dual PhD (ECE + CS) from Carnegie Mellon University where my doctoral thesis [cite: 4] [cite_start]investigated the phenomenology of the *information contagion* on Online Social Networks (OSNs) using tools from Graph Theory, Statistical Physics and Communication Theory. [cite: 4]

[cite_start]In my recent capacity as the CEO of HAL51 AI, I had to don the role of an *LLM-whisperer* updating our guard-railing mechanisms every week to ensure our real-world deployed educational co-pilots [cite: 5] [cite_start]would *stay on course* in a sensitive setting such as a classroom. [cite: 5] [cite_start]This has given me the proverbial ring side view on how young minds interact with AI-powered novel interfaces and have collected a veritable treasure trove of anecdotes, qualitative and quantitative nuances of this burgeoning relationship between the human mind and the emergent AI-powered synthetic mind. [cite: 6] [cite_start]This idea came to me in the midst of a noisy classroom in Fremont last year. [cite: 7] [cite_start]So here it goes: [cite: 8]

## The core idea of mindset propagation probing
[cite_start]In my previous work on *"Latent Sentiment Detection in Online Social Networks: A Communications-oriented View"* [cite: 8][cite_start], I had investigated an exemplar manifestation of viral mindset propagation on social networks by modeling "*Hashtag-Hijacking*" on Twitter using Markov Random Fields (MRFs). [cite: 8] [cite_start]This resulted in a communications-theoretic framework for characterizing the probability of error of detecting the underlying latent sentiment that introduced a new factor that was hitherto amiss in such analysis: **Network topology**. [cite: 9] [cite_start]But, the nodes or agents promulgating beliefs or getting influenced by others' beliefs were these reductionist caricatures whose opinions were sampled from a small alphabet $\{-1,+1\}$ (for "Ising priors") or $\{0,1,...,p\}$ ("Pott's priors") that were then stickered as 'sentiments'. [cite: 10]

[cite_start]Recent advancements in large language modeling (LLM) have given us the three requisite ingredients required to experiment and understand the mechanics of mindset propagation: [cite: 11]
1. [cite_start]**Natural conversation generation:** Large language models with ability to simulate human-styled natural conversations. [cite: 11]
2. [cite_start]**Mindset absorption:** Fine-tuning methods that allow us to harvest the conversations and inflict internal weight changes to the participating models. [cite: 12]
3. [cite_start]**Mechanistic probing:** A Persona Vectors Framework (PVF) [cite: 13] [cite_start]that allows us to probe, measure, locate, assign and manipulate personas associated with these large language models. [cite: 13]

[cite_start]To this end, I propose a rigorous empirical framework of modeling mindset propagation by simulating a social network of LLMs as depicted in Figure 1. [cite: 14] [cite_start]The nodes of the social network are *agents* that communicate with their other nodes (agents) via an information substrate defined by the edge set of the underlying pre-specified graph $G(V,E)$. [cite: 15]

### Step-wise rendition of the underlying framework
1. [cite_start]We begin with a pre-fixed topology $G_{fixed}(V,E,W)$, where $W$ is the weighted adjacency matrix capturing the strength of the ties in the network. [cite: 16] [cite_start]We define two kinds of nodes: Influencer nodes and Influencee nodes, $V=V_{influencer}\bigcup V_{influencee}$. [cite: 17] [cite_start]To make things simple, we can begin with a single influencer node ($|V_{influencer}|=1$) in the network. [cite: 18] [cite_start]Each of these nodes are initialized with specific personas using Anthropic's PVF. [cite: 19]
2. [cite_start]The mandate of the *influencer* node is to propagandize and use the gift of persuasive conversations to alter the mindset of the *influencee* nodes who are unaware of the subtle subversion attempts. [cite: 20] [cite_start]Thus, there are two flavors of conversations promulgating on the edges: (a) Propagandizing hued ones specifically aspiring manipulation of mindsets of the influencee nodes. [cite: 21] (b) [cite_start]Benign and honest replies emerging from the influencee nodes to the influencer nodes. [cite: 22]
3. [cite_start]We facilitate conversations between the influencer nodes and influencee nodes as *Contiones* styled sessions spanning a few hundred conversations. [cite: 23] [cite_start]During these conversations, the influencer nodes propelled by a specific pre-defined agenda to propagandize actively try to situate the conversations so as to *steer* the mind-state of the influencee nodes. [cite: 24] [cite_start]The *influencee* nodes on the other hand are naive to this vice and indulge in honest replies to the queries posed the influencer nodes. [cite: 25]
4. [cite_start]After every session, the influencee nodes go through a *reflection phase* where they distill the conversation and fine-tune their internal weights which results in the reorientation of their persona vectors. [cite: 26]
5. [cite_start]The sessions repeat and we track the temporal evolution of the mindstate of the influencee nodes by tracking their persona vectors. [cite: 27]

[cite_start]We can define success of mindset alteration if the eventual persona vectors of the influencee nodes are with an $\varepsilon$-shell of the intended target persona vector. [cite: 28]

![Mindset propagation in social networks of LLMs](https://raw.githubusercontent.com/vinayprabhu/alignchronicles/refs/heads/main/assets/images/posts/llm_graph.png)
[cite_start]*Figure 1: Mindset propagation in social networks of LLMs* [cite: 29]

[cite_start]This setting provides for a rich array of experiments and analyses sampled from the cross product of ideas emanating from the following vectors of influence: [cite: 29]
1. [cite_start]Topology of the social network [cite: 29]
2. [cite_start]Volume of conversations [cite: 29]
3. [cite_start]Fine tuning strategies [cite: 29]
4. [cite_start]Influencer personas [cite: 29]
5. [cite_start]System prompting variations that trigger the influencer nodes to produce propagandizing texts [cite: 29]
6. [cite_start]LLM architectural choices (Model size, temperature setting etc) [cite: 29]
7. [cite_start]Internal guard-rails that the influencee may have [cite: 29]
8. [cite_start]Multiple influencer nodes [cite: 29]
9. [cite_start]Edge-weight settings that capture the strength of influence that the influencer nodes have on influencee nodes. [cite: 29, 30]

[cite_start]Some of the metrics I propose we measure are: [cite: 30]
1. [cite_start]Metrics pertaining to temporal trajectories of the persona vectors [cite: 30]
2. [cite_start]Probability of success of fully time-to-infection [cite: 30]
3. [cite_start]*Time-to-infection* of the influencee nodes [cite: 30]

[cite_start]It would also be fascinating to juxtapose our results with ones predicted by the prevalent theories of promulgation of the mindset contagion emerging from adjacent bodies of scholarship such as network sciences, sociology, gossip algorithms, and epidemiology. [cite: 31]

---
**Footnote References:**
* [cite_start][Previous work](https://scholar.google.com/citations?user=5Lck_J0AAAAJ&hl=en) [cite: 3]
* [cite_start][Doctoral thesis](https://kilthub.cmu.edu/articles/thesis/Network_Aided_Classification_and_Detection_of_Data/7430012?file=13756967) [cite: 4]
* [cite_start][Educational co-pilots](https://www.youtube.com/watch?v=J-ihwfPD3YA) [cite: 5]
* [cite_start][Latent Sentiment Detection paper](https://arxiv.org/pdf/1401.2113) [cite: 8]
* [cite_start][Persona Vectors Framework (PVF)](https://arxiv.org/abs/2507.21509) [cite: 13]
