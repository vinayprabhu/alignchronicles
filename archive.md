---
layout: page
title: Transmission Archive
permalink: /archive/
---

# Complete Neural Archive

Welcome to the complete archive of transmissions from the Align Chronicles terminal. All posts are indexed chronologically and by neural pathway (category).

$e=mc^2$ is a really nice equation!

Can we $x-\bf{y};\mathbf{y} \in \mathcal{C}$ during the latest stages of 

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
    {% for post in site.posts %}
        <article class="terminal-post-item">
            <h3 class="terminal-post-item-title">
                <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
            </h3>
            <div class="terminal-post-item-meta">
                <span class="terminal-bracket">[</span>
                <time datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: "%Y-%m-%d %H:%M" }}
                </time>
                {% if post.author %}
                    <span class="terminal-separator"> | </span>
                    <span class="terminal-author">{{ post.author }}</span>
                {% endif %}
                {% if post.categories.size > 0 %}
                    <span class="terminal-separator"> | </span>
                    <span class="terminal-categories">
                        {% for category in post.categories %}
                            <span class="terminal-tag">{{ category }}</span>
                        {% endfor %}
                    </span>
                {% endif %}
                {% if post.tags.size > 0 %}
                    <span class="terminal-separator"> | </span>
                    <span class="terminal-tags">
                        {% for tag in post.tags limit:3 %}
                            <span class="terminal-tag">{{ tag }}</span>
                        {% endfor %}
                    </span>
                {% endif %}
                <span class="terminal-bracket">]</span>
            </div>
            {% if post.excerpt %}
                <div class="terminal-post-item-excerpt">
                    {{ post.excerpt | strip_html | truncatewords: 40 }}
                </div>
            {% endif %}
        </article>
    {% endfor %}
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
    <p>The archive is empty. Posts will appear here once the neural interface is fully operational.</p>

</div>
{% endif %}

## Archive by Category

{% assign categories = site.posts | map: 'categories' | join: ',' | split: ',' | sort | uniq %}
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
                        {% if posts_in_category.size > 5 %}
                            <div class="terminal-category-more">
                                <span class="terminal-gray">... and {{ posts_in_category.size | minus: 5 }} more files</span>
                            </div>
                        {% endif %}
                    </div>
                </div>
            {% endunless %}
        {% endfor %}
    </div>

</div>
{% endif %}

## Archive by Year

{% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% if posts_by_year.size > 0 %}

<div class="terminal-yearly-archive">
    <div class="terminal-prompt">
        <span class="terminal-user">user@alignchronicles</span>
        <span class="terminal-separator">:</span>
        <span class="terminal-path">~/posts</span>
        <span class="terminal-symbol">$</span>
        <span class="terminal-command">ls -la | grep "^d" | sort -k9</span>
    </div>

    <div class="terminal-year-list">
        {% for year in posts_by_year reversed %}
            <div class="terminal-year-item">
                <h3 class="terminal-year-title">
                    <span class="terminal-file-permissions">drwxr-xr-x</span>
                    <span class="terminal-file-name">{{ year.name }}/</span>
                    <span class="terminal-file-count">({{ year.items.size }} transmissions)</span>
                </h3>
                <div class="terminal-year-summary">
                    {% assign monthly_posts = year.items | group_by_exp: 'post', 'post.date | date: "%B"' %}
                    {% for month in monthly_posts %}
                        <span class="terminal-month-summary">
                            {{ month.name }}: {{ month.items.size }}
                        </span>
                    {% endfor %}
                </div>
            </div>
        {% endfor %}
    </div>

</div>
{% endif %}

---

```bash
$ echo "Archive navigation complete. Use 'cd /' to return to root directory."
Archive navigation complete. Use 'cd /' to return to root directory.
```

<style>
.terminal-categories-archive,
.terminal-yearly-archive {
    margin: 2rem 0;
}

.terminal-category-item,
.terminal-year-item {
    background-color: rgba(26, 26, 26, 0.5);
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}

.terminal-category-title,
.terminal-year-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #00ffff;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.terminal-file-count {
    color: #808080;
    font-size: 0.9rem;
}

.terminal-category-posts {
    margin-left: 2rem;
}

.terminal-category-post-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.terminal-file-date {
    color: #00cccc;
    min-width: 80px;
}

.terminal-category-more {
    margin-top: 0.5rem;
    font-style: italic;
}

.terminal-year-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-left: 2rem;
    font-size: 0.9rem;
}

.terminal-month-summary {
    color: #00cccc;
    padding: 0.25rem 0.5rem;
    background-color: rgba(0, 255, 255, 0.1);
    border-radius: 4px;
}
</style>
