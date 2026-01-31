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

## Archive by Category

{% assign all_categories = site.posts | map: "categories" | compact | flatten | uniq | sort %}
<div class="terminal-categories-archive">
    <div class="terminal-category-list">
        {% for category in all_categories %}
            {%- assign category_slug = category | strip -%}
            {%- if category_slug != "" -%}
                {%- assign posts_in_category = site.posts | where: "categories", category -%}
                <div class="terminal-category-item">
                    <h3 class="terminal-category-title">
                        <span class="terminal-file-permissions">drwxr-xr-x</span>
                        <a href="#{{ category | slugify }}" class="terminal-category-link">
                            <span class="terminal-file-name">{{ category }}/</span>
                        </a>
                        <span class="terminal-file-count">({{ posts_in_category.size }} posts)</span>
                    </h3>
                </div>
            {%- endif -%}
        {% endfor %}
    </div>
</div>

---

## All Posts

{% if site.posts.size > 0 %}
<div class="terminal-post-list">
{%- for post in site.posts -%}
    {%- assign post_categories = post.categories | join: ' ' | slugify -%}
    <article class="terminal-post-item" id="{{ post_categories }}">
        <h3 class="terminal-post-item-title">
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <div class="terminal-post-item-meta">
            <span class="terminal-bracket">[</span><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d %H:%M" }}</time>{% if post.author %}<span class="terminal-separator"> | </span><span class="terminal-author">{{ post.author }}</span>{% endif %}{% if post.categories.size > 0 %}<span class="terminal-separator"> | </span><span class="terminal-categories">{% for category in post.categories %}<span class="terminal-tag" id="{{ category | slugify }}">{{ category }}</span>{% endfor %}</span>{% endif %}<span class="terminal-bracket">]</span>
        </div>
        {% if post.excerpt %}
            <div class="terminal-post-item-excerpt">
                {{ post.excerpt | strip_html | truncatewords: 40 }}
            </div>
        {% endif %}
    </article>
{%- endfor -%}
</div>
{% endif %}

<style>
/* Core Terminal Layout */
.terminal-post-list, .terminal-categories-archive {
    display: block;
    clear: both;
    unicode-bidi: isolate;
}

/* Category Link Styling */
.terminal-category-link {
    text-decoration: none;
    color: inherit;
    outline: none;
}

.terminal-category-link:hover .terminal-file-name {
    background-color: #00ffff;
    color: #000;
}

/* Jump Link Highlight Effect */
:target {
    background-color: rgba(0, 255, 255, 0.15);
    border-radius: 4px;
    transition: background-color 0.5s ease;
}

.terminal-bracket {
    color: #00ffff;
    font-weight: bold;
}

.terminal-post-item-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    margin-top: 5px;
}
</style>
