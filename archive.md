---
layout: page
title: Transmission Archive
permalink: /archive/
---

# Complete Neural Archive

Welcome to the complete archive of transmissions from the Align Chronicles terminal. All posts are indexed chronologically and by neural pathway (category).

<div class="terminal-prompt">
    <span class="terminal-user">user@alignchronicles</span>
    <span class="terminal-separator">:</span>
    <span class="terminal-path">~/posts</span>
    <span class="terminal-symbol">$</span>
    <span class="terminal-command">find . -name "*.md" | wc -l</span>
</div>

**Total transmissions:** {{ site.posts.size }}  
**Archive status:** {{ site.posts.size | plus: 0 }}% indexed

## All Posts

{% if site.posts.size > 0 %}
<div class="terminal-post-list">
{%- for post in site.posts -%}
    <article class="terminal-post-item">
        <h3 class="terminal-post-item-title">
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <div class="terminal-post-item-meta">
            <span class="terminal-bracket">[</span><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d %H:%M" }}</time>{% if post.author %}<span class="terminal-separator"> | </span><span class="terminal-author">{{ post.author }}</span>{% endif %}{% if post.categories.size > 0 %}<span class="terminal-separator"> | </span><span class="terminal-categories">{% for category in post.categories %}<span class="terminal-tag">{{ category }}</span>{% endfor %}</span>{% endif %}{% if post.tags.size > 0 %}<span class="terminal-separator"> | </span><span class="terminal-tags">{% for tag in post.tags limit:3 %}<span class="terminal-tag">{{ tag }}</span>{% endfor %}</span>{% endif %}<span class="terminal-bracket">]</span>
        </div>
        {% if post.excerpt %}
            <div class="terminal-post-item-excerpt">
                {{ post.excerpt | strip_html | truncatewords: 40 }}
            </div>
        {% endif %}
    </article>
{%- endfor -%}
</div>
{% else %}
<div class="terminal-empty-state">
    <pre><code>
$ ls -la posts/
total 0
drwxr-xr-x 2 user alignchronicles   4096 Jan  1 00:00 .
drwxr-xr-x 3 user alignchronicles   4096 Jan  1 00:00 ..

No posts found. Neural network initializing...
    </code></pre>
</div>
{% endif %}

## Archive by Category

{% assign categories = site.posts | map: "categories" | compact | flatten | uniq | sort %}
{% if categories.size > 0 %}
<div class="terminal-categories-archive">
    <div class="terminal-prompt">
        <span class="terminal-user">user@alignchronicles</span>
        <span class="terminal-separator">:</span>
        <span class="terminal-path">~/posts</span>
        <span class="terminal-symbol">$</span>
        <span class="terminal-command">ls -la | grep "^d"</span>
    </div>

    <div class="terminal-category-list">
        {% for category in categories %}
            {% unless category == "" %}
                {% assign posts_in_category = site.posts | where: 'categories', category %}
                <div class="terminal-category-item">
                    <h3 class="terminal-category-title">
                        <span class="terminal-file-permissions">drwxr-xr-x</span>
                        <span class="terminal-file-name">{{ category }}/</span>
                        <span class="terminal-file-count">({{ posts_in_category.size }} files)</span>
                    </h3>
                    <div class="terminal-category-posts">
                        {% for post in posts_in_category limit:5 %}
                            <div class="terminal-category-post-item">
                                <span class="terminal-file-permissions">-rw-r--r--</span>
                                <time class="terminal-file-date">{{ post.date | date: "%Y-%m-%d" }}</time>
                                <a href="{{ post.url | relative_url }}" class="terminal-link">{{ post.title | escape }}</a>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            {% endunless %}
        {% endfor %}
    </div>
</div>
{% endif %}

<style>
.terminal-post-list { display: flow-root; width: 100%; }
.terminal-category-item { background-color: rgba(26, 26, 26, 0.5); border: 1px solid rgba(0, 255, 255, 0.2); border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
.terminal-category-title { display: flex; align-items: center; gap: 1rem; color: #00ffff; margin-bottom: 1rem; font-size: 1.1rem; }
.terminal-file-date { color: #00cccc; min-width: 80px; }
.terminal-bracket { color: #00ffff; font-weight: bold; }
</style>
