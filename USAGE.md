# EasyDiagrams CMS Usage Guide

## Project Structure

```text
easy-diagrams/
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collections schema
│   │   └── posts/             # All your blog posts organized by language
│   │       ├── en/            # English posts
│   │       ├── zh/            # Chinese posts
│   │       └── ja/            # Japanese posts
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base layout with header/footer/language switcher
│   │   └── PostLayout.astro   # Layout for individual posts
│   ├── components/
│   │   └── LanguageSwitcher.astro  # (Legacy - integrated into BaseLayout)
│   ├── pages/
│   │   ├── index.astro        # English home page
│   │   ├── zh/                # Chinese pages
│   │   │   └── index.astro    # Chinese home page
│   │   ├── ja/                # Japanese pages
│   │   │   └── index.astro    # Japanese home page
│   │   ├── posts/
│   │   │   ├── index.astro    # All posts listing
│   │   │   └── [...slug].astro # Individual post pages
│   │   └── tags/
│   │       ├── index.astro    # All tags listing
│   │       └── [tag].astro    # Posts by tag
│   └── utils/
│       └── i18n.ts            # i18n utilities and translations
├── public/                    # Static assets (images, etc.)
└── dist/                      # Build output (generated)
```

## Adding New Content

### 1. Create a New Post

Create markdown files in `src/content/posts/` organized in language-specific folders:

**English version** (`en/example-post.md`):

```markdown
---
title: 'Your Post Title'
description: 'Brief description of your post'
pubDate: 2025-01-15
tags: ['Computer Science', 'AI', 'Logic']
featured: false          # Set to true for featured posts
heroImage: '/images/example.png'  # Optional hero image
---

# Your Content Here

Write your content in markdown format...
```

**Chinese version** (`zh/example-post.md`):

```markdown
---
title: '你的文章标题'
description: '文章简介'
pubDate: 2025-01-15
tags: ['Computer Science', 'AI', 'Logic']
featured: false
heroImage: '/images/example.png'
---

# 你的内容

用 Markdown 格式编写内容...
```

### 2. Naming Convention

- Organize posts in language folders: `en/`, `zh/`, `ja/`
- Use descriptive slugs: `understanding-logic-gates.md`
- Same filename for all language versions, just in different folders
- The folder name determines the language, filename becomes the URL slug

### 3. Adding Images

1. Place images in `public/images/`
2. Reference them in markdown: `![Alt text](/images/your-image.png)`
3. Or use heroImage in frontmatter: `heroImage: '/images/hero.png'`

### 4. Using Tags

- Use consistent tag names across posts
- Tags are case-sensitive but will be slugified for URLs
- Example: `'Computer Science'` → `/tags/computer-science`
- Common tags to use:
  - Computer Science
  - AI
  - Physics
  - Mathematics
  - Logic
  - Fundamentals

## Development

### Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321`

### Build for Production

```bash
npm run build
```

Generates static files in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

## Multi-language Support

### How It Works

1. **File-based translations**: Each post version is a separate file in language-specific folders
2. **Automatic language detection**: Based on folder structure (`en/`, `zh/`, `ja/`)
3. **Smart language switcher**: Single switcher in top bar, context-aware
   - On homepage: Switches between language versions of site
   - On post page: Switches to same post in target language (if available)
   - Unavailable languages are visually disabled (grayed out)
4. **Flexible availability**: Not all posts need all languages

### Supported Languages

- English (`en`) - Default
- Chinese (`zh`)
- Japanese (`ja`)

### Adding UI Translations

Edit `src/utils/i18n.ts` to add/modify UI text translations:

```typescript
export const ui = {
  en: {
    'nav.home': 'Home',
    // ... add more
  },
  zh: {
    'nav.home': '首页',
    // ... add more
  },
  // ...
}
```

## Features

### Content Collections

- Type-safe content with Zod schema validation
- Automatic frontmatter validation
- Easy to query and filter

### Tag-Based Organization

- Automatic tag pages generation
- Tag cloud on `/tags` page
- Filter posts by tag

### Language Switching

- **Single smart switcher**: Located in top navigation bar
- **Context-aware**:
  - On homepage: switches site language (`/`, `/zh/`, `/ja/`)
  - On post page: switches post version (`/posts/en/slug`, `/posts/zh/slug`)
- **Visual feedback**: Unavailable translations are grayed out and non-clickable
- **Per-post availability**: Only posts with translations show active language buttons
- **Clean URLs**:
  - Pages: No prefix for English, `/zh/` for Chinese, `/ja/` for Japanese
  - Posts: `/posts/en/slug`, `/posts/zh/slug`, `/posts/ja/slug`

### Featured Posts

Set `featured: true` in frontmatter to highlight posts on the home page

## Tips

1. **Use consistent frontmatter**: Follow the schema in `src/content/config.ts`
2. **Optimize images**: Compress images before adding to `public/images/`
3. **Write descriptive titles and descriptions**: Good for SEO
4. **Use meaningful tags**: Helps users discover related content
5. **Keep language versions in sync**: Update all versions when changing content

## Publishing Workflow

1. Add/edit markdown files in `src/content/posts/`
2. Test locally with `npm run dev`
3. Build for production: `npm run build`
4. Deploy the `dist/` folder to your hosting service

## Troubleshooting

### Build Errors

- Check frontmatter matches the schema in `src/content/config.ts`
- Ensure dates are in valid format: `YYYY-MM-DD`
- Verify all referenced images exist in `public/`

### Language Switching Not Working

- Ensure all language versions have the same base filename in their respective folders
- Verify files are in correct language folders (`en/`, `zh/`, `ja/`)
- Check that folder names match supported locales in `astro.config.mjs`
- For unavailable languages, buttons should appear grayed out (this is expected behavior)

### Posts Not Appearing

- Check that files are in correct language folder: `src/content/posts/en/`, `src/content/posts/zh/`, etc.
- Verify frontmatter is valid YAML
- Ensure `pubDate` is set correctly
- Make sure the language folder (`en/`, `zh/`, `ja/`) matches the page language you're viewing
