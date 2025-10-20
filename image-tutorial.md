# Adding Images to Your Jekyll Blog: Complete Tutorial

## Overview

This tutorial covers everything you need to know about adding images to your Align Chronicles blog posts, from basic syntax to advanced styling techniques.

---

## 1. Where to Store Images

### Recommended Directory Structure

```
align_chronicles_blog/
├── assets/
│   └── images/
│       ├── posts/           # Post-specific images
│       ├── featured/        # Featured/hero images
│       ├── thumbnails/      # Thumbnail versions
│       └── general/         # Reusable images
```

### Storage Options

**Option A: Local Storage (Recommended)**

- Store images in `assets/images/` directory
- Organized by category or post
- Full control over files
- Works offline during development

**Option B: External Hosting**

- Use services like Imgur, Cloudinary, or GitHub
- Reduces repository size
- Requires internet connection
- May have bandwidth limits

---

## 2. Basic Markdown Image Syntax

### Standard Markdown Format

```markdown
![Alt text](/assets/images/filename.jpg)
```

**Components:**

- `!` - Indicates an image
- `[Alt text]` - Descriptive text for accessibility
- `(/path/to/image)` - Image path (relative or absolute)

### Examples

**Local image:**

```markdown
![Neural network diagram](/assets/images/posts/neural-net.png)
```

**External image:**

```markdown
![AI concept](https://images.pexels.com/photos/17485607/pexels-photo-17485607/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-ai-assitance-in-the-control-systems-needed-to-create-fusion-energy-it-was-created-by-khyati-trehan-as-part.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
```

**With title attribute (tooltip on hover):**

```markdown
![Robot](/assets/images/robot.jpg "Advanced AI Robot")
```

---

## 3. Images with Captions

### Method 1: HTML Figure Element (Recommended)

```html
<figure>
  <img src="/assets/images/posts/alignment.png" alt="AI Alignment Diagram">
  <figcaption>Figure 1: The alignment problem in artificial intelligence</figcaption>
</figure>
```

### Method 2: Markdown with Emphasis

```markdown
![AI Alignment](/assets/images/alignment.png)
*Figure 1: The alignment problem in artificial intelligence*
```

### Method 3: Custom CSS Class

```markdown
![AI Alignment](/assets/images/alignment.png){: .image-with-caption}
**Caption:** The alignment problem in artificial intelligence
```

---

## 4. Image Sizing and Styling

### Method 1: Inline HTML

```html
<img src="/assets/images/logo.png" alt="Logo" width="300" height="200">
```

### Method 2: HTML with Style Attribute

```html
<img src="/assets/images/banner.jpg" alt="Banner" 
     style="width: 100%; max-width: 800px; height: auto;">
```

### Method 3: Kramdown Attributes (Jekyll's Markdown)

```markdown
![Small image](/assets/images/icon.png){: width="100px" height="100px"}

![Centered image](/assets/images/hero.jpg){: .center-image}

![Responsive image](/assets/images/photo.jpg){: style="max-width: 600px; width: 100%;"}
```

### Method 4: CSS Classes

First, define classes in your CSS:

```css
.img-small { width: 200px; }
.img-medium { width: 400px; }
.img-large { width: 800px; }
.img-full { width: 100%; }
.img-center { display: block; margin: 0 auto; }
.img-float-right { float: right; margin: 0 0 1em 1em; }
```

Then use in markdown:

```markdown
![Description](/assets/images/photo.jpg){: .img-medium .img-center}
```

---

## 5. Advanced Image Techniques

### Responsive Images

```html
<img src="/assets/images/photo.jpg" 
     alt="Description"
     style="max-width: 100%; height: auto;">
```

### Images with Links

```markdown
[![Click me](/assets/images/thumbnail.jpg)](/assets/images/full-size.jpg)
```

### Side-by-Side Images

```html
<div style="display: flex; gap: 10px;">
  <img src="/assets/images/img1.jpg" alt="Image 1" style="width: 50%;">
  <img src="/assets/images/img2.jpg" alt="Image 2" style="width: 50%;">
</div>
```

### Image Gallery

```html
<div class="image-gallery">
  <img src="/assets/images/gallery/1.jpg" alt="Image 1">
  <img src="/assets/images/gallery/2.jpg" alt="Image 2">
  <img src="/assets/images/gallery/3.jpg" alt="Image 3">
  <img src="/assets/images/gallery/4.jpg" alt="Image 4">
</div>
```

### Background Images (in HTML sections)

```html
<div style="background-image: url('/assets/images/bg.jpg'); 
            background-size: cover; 
            padding: 50px; 
            color: white;">
  <h2>Content over background</h2>
</div>
```

---

## 6. External vs Local Images

### When to Use Local Images

✓ Images you created or own
✓ Important content that shouldn't break
✓ Images you'll reuse across posts
✓ When you need full control
✓ For offline development

### When to Use External Images

✓ Large image files (videos, high-res photos)
✓ Temporary or reference images
✓ Images from CDNs (faster loading)
✓ When repository size is a concern
✓ Images you don't own (with proper attribution)

### External Image Best Practices

```markdown
<!-- Always include attribution -->
![AI Robot](https://i.pinimg.com/736x/dd/cb/25/ddcb25568a0d2d0ae931c6f041248a7a.jpg)
*Image source: [Example.com](https://example.com) - CC BY 4.0*

<!-- Use reliable hosting -->
![Diagram](https://i.ytimg.com/vi/QC9yun0HbNE/sddefault.jpg)
```

---

## 7. Best Practices and Organization

### File Naming Conventions

```
✓ Good:
  - neural-network-diagram.png
  - 2024-10-ai-safety-hero.jpg
  - alignment-problem-fig1.svg

✗ Avoid:
  - IMG_1234.jpg
  - Screen Shot 2024-10-04.png
  - image (1).jpg
```

**Rules:**

- Use lowercase letters
- Separate words with hyphens
- Include descriptive names
- Add dates for time-sensitive images
- Use appropriate extensions (.jpg, .png, .svg, .gif)

### Directory Organization

```
assets/images/
├── posts/
│   ├── 2024-10-ai-safety/
│   │   ├── hero.jpg
│   │   ├── diagram-1.png
│   │   └── diagram-2.png
│   └── 2024-09-consciousness/
│       ├── hero.jpg
│       └── brain-scan.jpg
├── featured/
│   ├── homepage-hero.jpg
│   └── about-banner.jpg
└── general/
    ├── logo.png
    ├── avatar.jpg
    └── icons/
```

### Image Optimization

1. **Compress images** before uploading
   
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for photos, < 50KB for graphics

2. **Choose the right format**
   
   - `.jpg` - Photos, complex images
   - `.png` - Graphics, transparency needed
   - `.svg` - Logos, icons, diagrams (scalable)
   - `.gif` - Simple animations
   - `.webp` - Modern format (smaller, high quality)

3. **Use appropriate dimensions**
   
   - Hero images: 1200-1600px wide
   - Content images: 600-800px wide
   - Thumbnails: 200-400px wide
   - Icons: 32-128px

### Accessibility Guidelines

```markdown
<!-- ✓ Good: Descriptive alt text -->
![A neural network with three layers showing input, hidden, and output nodes](/assets/images/neural-net.png)

<!-- ✗ Bad: Generic or missing alt text -->
![image](/assets/images/neural-net.png)
![](/assets/images/neural-net.png)
```

**Alt Text Best Practices:**

- Describe the image content and context
- Keep it concise (< 125 characters)
- Don't start with "Image of..." or "Picture of..."
- For decorative images, use empty alt: `alt=""`
- Include text that appears in the image

### Performance Tips

1. **Lazy loading** (for many images):
   
   ```html
   <img src="/assets/images/photo.jpg" alt="Description" loading="lazy">
   ```

2. **Responsive images** (serve different sizes):
   
   ```html
   <img src="/assets/images/photo-800.jpg" 
     srcset="/assets/images/photo-400.jpg 400w,
             /assets/images/photo-800.jpg 800w,
             /assets/images/photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Description">
   ```

3. **Use CDN** for external images when possible

---

## 8. Common Issues and Solutions

### Issue: Image Not Showing

**Solutions:**

- Check file path (case-sensitive on Linux servers)
- Verify file exists in `assets/images/`
- Ensure correct baseurl in `_config.yml`
- Check file permissions
- Clear Jekyll cache: `bundle exec jekyll clean`

### Issue: Image Too Large

**Solutions:**

- Resize before uploading
- Use CSS max-width: `style="max-width: 100%;"`
- Compress the file
- Use responsive images

### Issue: Broken External Links

**Solutions:**

- Download and host locally
- Use reliable CDN services
- Keep backup copies
- Regular link checking

---

## 9. Quick Reference

### Basic Image

```markdown
![Alt text](/assets/images/image.jpg)
```

### Image with Caption

```html
<figure>
  <img src="/assets/images/image.jpg" alt="Alt text">
  <figcaption>Caption text</figcaption>
</figure>
```

### Sized Image

```markdown
![Alt text](/assets/images/image.jpg){: width="400px"}
```

### Centered Image

```html
<img src="/assets/images/image.jpg" alt="Alt text" style="display: block; margin: 0 auto;">
```

### Clickable Image

```markdown
[![Alt text](/assets/images/thumb.jpg)](/assets/images/full.jpg)
```

---

## 10. Example Workflow

### Adding an Image to a New Post

**Step 1:** Prepare your image

- Resize to appropriate dimensions
- Compress to reduce file size
- Rename with descriptive name: `ai-alignment-diagram.png`

**Step 2:** Save to directory

```bash
cp ~/Downloads/ai-alignment-diagram.png assets/images/posts/
```

**Step 3:** Reference in your post

```markdown
---
layout: post
title: "Understanding AI Alignment"
---

The alignment problem is one of the most critical challenges in AI safety.

![AI Alignment Problem Visualization](/assets/images/posts/ai-alignment-diagram.png)

As shown in the diagram above, alignment involves...
```

**Step 4:** Build and preview

```bash
bundle exec jekyll serve
```

**Step 5:** Check in browser at `http://localhost:4000`

---

## Additional Resources

- **Jekyll Documentation:** https://jekyllrb.com/docs/posts/
- **Markdown Guide:** https://www.markdownguide.org/basic-syntax/#images
- **Image Optimization:** https://squoosh.app/
- **Free Stock Photos:** Unsplash, Pexels, Pixabay
- **Icon Resources:** Font Awesome, Feather Icons

---

*Last updated: October 2024*
*For Align Chronicles Blog*
