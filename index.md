---
layout: default
---


# Intro

<img title="Profile pic" src="{{ '/assets/images/general/me.JPG' | relative_url }}" alt="Event at Maker Nexus" style="float: left; margin-right: 20px; margin-bottom: 10px;" width="165">

Hey there stranger\!  This is [Vinay Prabhu](https://scholar.google.com/citations?user=5Lck_J0AAAAJ&hl=en), a tinkerer, an entrepreneur and an AI researcher. I am currently CEO'ing at [HAL51.AI](https://hal51.ai/) co-founded with close friend [Sanghyun Han](https://www.linkedin.com/in/jjangsangy/) where we invent trippy [hardware](https://hal51.ai/) such as the [LemurBox](https://www.youtube.com/watch?v=caEJpOOrN1k&ab_channel=HAL51), the world's first frugal-science inspired XR device that turns your boring old [smartphone into a 3D Alexa](https://www.amazon.com/dp/B0DPV2PYBP). It *hosts* a rigged 3D avatar powered by LLMs. Guard-railing these educational avatars has given us a unique ringside-view on how ideas from AI safety manifest themselves in the real world, in the [classroom](https://www.youtube.com/watch?v=J-ihwfPD3YA) and beyond.
From time to time, I scribble [code](https://github.com/vinayprabhu) and ship [some artsy slop to the playa at Burning Man](https://youtu.be/sMcYkzWC2rI?feature=shared).  
 
 PS: [Here](https://www.vinayprabhu.com/) is my equally wonky personal website. Click at your own peril!

## Recent Posts

{% comment %}
This simple loop displays the 5 most recent blog posts
{% endcomment %}

{% for post in site.posts limit:5 %}
* [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
