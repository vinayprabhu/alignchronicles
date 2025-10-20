
# Align Chronicles - Cyberpunk Jekyll Blog Template

A retro sci-fi terminal-themed Jekyll blog template designed for GitHub Pages. Features a green-on-black cyberpunk aesthetic with vintage computer terminal styling, perfect for blogs about AI, technology, cyberpunk culture, and digital philosophy.

![Terminal Interface](https://img.shields.io/badge/Interface-Terminal-00FFFF?style=for-the-badge&logo=terminal&logoColor=00FFFF) ![Jekyll](https://img.shields.io/badge/Jekyll-CC0000?style=for-the-badge&logo=Jekyll&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)

## 🚀 Live Demo

Check out the template in action: [View Live Demo](https://yourusername.github.io/align-chronicles-blog)

## ✨ Features

### 🎨 Visual Design
- **Retro Sci-Fi Terminal Aesthetics** - Cyan on black color scheme with vintage computer terminal styling
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices  
- **Terminal Window Effects** - Complete with window controls, title bar, and terminal prompt styling
- **Matrix-Style Background Effects** - Subtle animated background elements
- **ASCII Art Header** - Custom ASCII art logo with glowing animations
- **Monospace Typography** - Fira Code and Share Tech Mono fonts for authentic terminal feel

### 📝 Content Management
- **Jekyll-Powered** - Static site generator optimized for GitHub Pages
- **Markdown Blog Posts** - Write posts in simple Markdown format
- **LaTeX Math Support** - MathJax integration for mathematical notation
- **Multi-Page Structure** - Home, About, Archive, and Contact pages
- **Post Categories & Tags** - Organized content with filtering capabilities
- **SEO Optimized** - Built-in SEO tags and sitemap generation

### 🛠 Technical Features
- **GitHub Pages Compatible** - Deploy directly from your GitHub repository
- **No Build Process Required** - Push to GitHub and your site is live
- **Fast Loading** - Minimal JavaScript, optimized CSS
- **Terminal-Style Navigation** - File system inspired menu structure
- **Code Syntax Highlighting** - Rouge syntax highlighter with terminal themes
- **RSS Feed** - Automatic feed generation for subscribers

### 🎯 Interactive Elements
- **Typing Animations** - Command line typing effects
- **Hover Effects** - Terminal-style glitch effects and glows
- **Console Easter Eggs** - Hidden developer console commands
- **Dynamic Uptime Display** - Real-time session uptime counter
- **Interactive Terminal Prompts** - Authentic command line styling

## 📦 Installation & Setup

### Option 1: Use This Template (Recommended)

1. **Click the "Use this template" button** on the GitHub repository page
2. **Name your repository** - For GitHub Pages, use `yourusername.github.io` format
3. **Clone your new repository** to your local machine:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

### Option 2: Fork This Repository

1. **Fork this repository** to your GitHub account
2. **Rename the repository** to `yourusername.github.io` in settings
3. **Clone your fork** to your local machine

### Option 3: Manual Setup

1. **Create a new repository** named `yourusername.github.io`
2. **Download the template files** and upload them to your repository
3. **Ensure all files are in the root directory** of your repository

## ⚙️ Configuration

### Basic Configuration

Edit `_config.yml` to customize your site:

```yaml
# Site settings
title: Your Blog Name
email: your.email@example.com
description: >-
  Your blog description here. This appears in search results and the site header.
baseurl: "" # Keep empty for GitHub Pages
url: "https://yourusername.github.io" # Replace with your GitHub Pages URL

# Social media (optional)
twitter_username: yourusername
github_username: yourusername
```

### Customizing the Design

#### Colors
Edit `assets/css/main.scss` to customize the color scheme:

```scss
// Terminal color scheme variables
$terminal-bg: #0a0a0a;           // Main background
$terminal-cyan: #00ffff;         // Primary accent color
$terminal-green: #00ff00;        // Success/command color
$terminal-yellow: #ffff00;       // Warning color
```

#### Typography
The theme uses these fonts by default:
- **Fira Code** - Modern monospace with ligatures
- **Share Tech Mono** - Sci-fi inspired monospace font

To use different fonts, update the Google Fonts link in `_layouts/default.html`.

#### ASCII Art
Customize the header ASCII art in `_includes/header.html`. Generate your own at:
- [ASCII Art Generator](http://www.patorjk.com/software/taag/)
- [Text to ASCII Art Generator](https://fsymbols.com/generators/carty/)

## 📝 Writing Posts

### Creating a New Post

Create a new file in the `_posts` directory with the format: `YYYY-MM-DD-post-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-25 16:42:00 +0000
categories: [category1, category2]
tags: [tag1, tag2, tag3]
author: "Your Name"
excerpt: "A brief summary of your post that appears in listings."
---

# Your Post Title

Your post content goes here in Markdown format...
```

### Using LaTeX Math

The template includes MathJax support for mathematical notation:

```markdown
Inline math: $E = mc^2$

Display math:
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

### Code Blocks

Use standard Markdown code blocks with syntax highlighting:

````markdown
```python
def hello_world():
    print("Hello, digital world!")
```
````

### Terminal-Style Elements

The theme includes special CSS classes for terminal styling:

```markdown
<div class="terminal-prompt">
    <span class="terminal-user">user@system</span>
    <span class="terminal-path">~</span>
    <span class="terminal-symbol">$</span>
    <span class="terminal-command">your command here</span>
</div>
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your changes** to the main branch of your repository:
   ```bash
   git add .
   git commit -m "Initial blog setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Wait for deployment** (usually 1-5 minutes)
   - GitHub will show a green checkmark when ready
   - Your site will be available at `https://yourusername.github.io`

### Custom Domain (Optional)

To use a custom domain like `yourblog.com`:

1. **Add a CNAME file** to your repository root:
   ```
   yourblog.com
   ```

2. **Configure DNS** with your domain provider:
   - Create a CNAME record pointing to `yourusername.github.io`
   - Or use A records pointing to GitHub's IP addresses

3. **Update _config.yml**:
   ```yaml
   url: "https://yourblog.com"
   ```

## 🛠 Local Development

To test your site locally before deploying:

### Prerequisites

- **Ruby** (version 2.7 or higher)
- **RubyGems**
- **Bundler**

### Setup

```bash
# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Open your browser to http://localhost:4000
```

### Live Reload

For automatic rebuilding during development:

```bash
bundle exec jekyll serve --livereload
```

## 📁 Directory Structure

```
align-chronicles-blog/
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── README.md            # This file
├── index.html           # Homepage
├── about.md             # About page
├── archive.md           # Posts archive page
├── contact.md           # Contact page
├── _layouts/            # HTML templates
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── page.html        # Static page layout
├── _includes/           # Reusable HTML components
│   ├── header.html      # Site header
│   └── footer.html      # Site footer
├── _posts/              # Blog posts (Markdown files)
│   ├── 2024-01-15-sample-post.md
│   └── ...
├── _sass/               # Sass stylesheets (optional)
├── assets/              # Static assets
│   ├── css/
│   │   └── main.scss    # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Images directory
└── _site/               # Generated site (ignored by Git)
```

## 🎨 Customization Guide

### Changing Colors

Edit the color variables in `assets/css/main.scss`:

```scss
// Custom color scheme example
$terminal-bg: #1a0033;           // Dark purple background
$terminal-cyan: #ff00ff;         // Magenta accent
$terminal-green: #00ff88;        // Cyan-green commands
```

### Adding New Pages

1. **Create a new Markdown file** in the root directory
2. **Add front matter**:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   permalink: /your-page-url/
   ---
   ```
3. **Update navigation** in `_includes/header.html`

### Modifying the Header

Edit `_includes/header.html` to:
- Change the ASCII art logo
- Modify navigation links
- Update system information display

### Custom JavaScript

Add interactive features in `assets/js/main.js`:
- Terminal animations
- Typing effects  
- Interactive elements
- Console easter eggs

## 📱 Mobile Optimization

The template is fully responsive with mobile-specific optimizations:

- **Optimized ASCII art** that scales appropriately
- **Touch-friendly navigation** with proper spacing
- **Readable font sizes** on small screens
- **Horizontal scrolling** for code blocks
- **Collapsible sections** for better mobile experience

## 🔧 Troubleshooting

### Common Issues

**Site not displaying properly:**
- Check that all files are in the repository root
- Verify `_config.yml` syntax is correct
- Ensure GitHub Pages is enabled in repository settings

**Fonts not loading:**
- Check internet connection (Google Fonts require external access)
- Verify font URLs in `_layouts/default.html`

**Math equations not rendering:**
- Ensure MathJax script is loading
- Check equation syntax (use `$...$` for inline, `$$...$$` for display)

**Local development issues:**
- Run `bundle install` to install dependencies
- Use `bundle exec jekyll serve` instead of just `jekyll serve`

### Getting Help

- **GitHub Issues**: Report bugs or request features
- **Jekyll Documentation**: [jekyllrb.com](https://jekyllrb.com)
- **GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/en/pages)

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/awesome-feature`)
3. **Commit your changes** (`git commit -m 'Add awesome feature'`)
4. **Push to the branch** (`git push origin feature/awesome-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Maintain the cyberpunk terminal aesthetic
- Ensure mobile responsiveness
- Test thoroughly on GitHub Pages
- Follow Jekyll best practices
- Document any new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Jekyll** - Static site generator
- **GitHub Pages** - Free hosting platform  
- **Fira Code** - Excellent monospace font with ligatures
- **MathJax** - Mathematical notation rendering
- **Cyberpunk culture** - Aesthetic inspiration
- **Terminal emulators** - UI/UX inspiration

## 🔮 Future Enhancements

Planned features for future releases:

- **Search functionality** - Terminal-style search interface
- **Dark/light mode toggle** - Multiple terminal color schemes
- **Comment system** - Terminal-themed comment integration  
- **Archive filtering** - Advanced post filtering by date/category
- **Performance optimizations** - Further speed improvements
- **Additional layouts** - Portfolio, gallery, and other page types

---

```bash
$ cat /etc/motd
╔══════════════════════════════════════════════════════════════════════╗
║                       ALIGN CHRONICLES v2.1.0                       ║
║                    Terminal Blog Template for Jekyll                 ║
║                                                                      ║
║  Thank you for choosing Align Chronicles for your digital presence.  ║
║  May your words flow like phosphorescent data streams through the    ║
║  neural networks of cyberspace.                                      ║
║                                                                      ║
║  Remember: In a world of corporate interfaces, the terminal remains  ║
║  the last bastion of authentic human-computer communication.         ║
╚══════════════════════════════════════════════════════════════════════╝

Connection established. Happy blogging!
```

For questions, feature requests, or just to say hello, reach out via the neural link protocols in the contact section of your deployed site.

*[End of transmission]*
