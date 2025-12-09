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

## Adding a New Language

To add a new language (e.g., French `fr` or Spanish `es`) to the entire site:

### Step 1: Update Astro Configuration

Edit `astro.config.mjs`:

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ja', 'fr'],  // Add 'fr' here
  routing: {
    prefixDefaultLocale: false,
  },
}
```

### Step 2: Add Language Metadata

Edit `src/utils/i18n.ts`:

**Add to languages object:**
```typescript
export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  fr: 'Français',  // Add this
} as const;
```

**Add UI translations:**
```typescript
export const ui = {
  // ... existing en, zh, ja ...
  fr: {  // Add complete French translations
    'nav.home': 'Accueil',
    'nav.posts': 'Articles',
    'nav.tags': 'Étiquettes',
    'post.tags': 'Étiquettes',
    'post.published': 'Publié le',
    'post.updated': 'Mis à jour le',
    'language.switch': 'Changer de langue',
    'home.tagline': 'Visualiser les concepts fondamentaux...',
    'home.description': 'Explorez du contenu éducatif...',
    'home.browsePosts': 'Parcourir les articles',
    'home.exploreTags': 'Explorer par étiquettes',
    'home.featured': 'Articles en vedette',
    'home.recent': 'Articles récents',
    'home.viewAll': 'Voir tous les articles',
  },
} as const;
```

### Step 3: Create Language-Specific Pages

Create homepage: `src/pages/fr/index.astro`

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import { useTranslations } from '../../utils/i18n';

const lang = Astro.currentLocale || 'fr';
const t = useTranslations(lang);

const allPosts = await getCollection('posts', ({ slug }) => {
  return slug.startsWith(`${lang}/`);
});

// Get featured and recent posts
const featuredPosts = allPosts
  .filter((post) => post.data.featured)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 3);

const recentPosts = allPosts
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 6);
---

<BaseLayout title="Accueil" description="..." lang={lang}>
  <!-- Copy structure from existing homepage -->
</BaseLayout>
```

### Step 4: Create Content Folder

Create the posts directory:
```bash
mkdir src/content/posts/fr
```

### Step 5: Add Content

Create posts in `src/content/posts/fr/`:

```markdown
---
title: 'Votre titre en français'
description: 'Description de votre article'
pubDate: 2025-01-15
tags: ['Science Informatique', 'IA']
featured: false
---

# Contenu en français

Votre contenu ici...
```

### Step 6: Test

```bash
npm run dev
```

Visit:
- `/fr` - French homepage
- `/fr/posts` - (if created)
- Language switcher should now show "Français" option

### Summary Checklist

- [ ] Add locale to `astro.config.mjs`
- [ ] Add language name to `src/utils/i18n.ts` → `languages`
- [ ] Add complete UI translations to `src/utils/i18n.ts` → `ui`
- [ ] Create `src/pages/{lang}/index.astro`
- [ ] Create `src/content/posts/{lang}/` folder
- [ ] (Optional) Create localized `/posts` and `/tags` pages
- [ ] Test all pages and language switching

## Publishing Workflow

1. Add/edit markdown files in `src/content/posts/{lang}/`
2. Test locally with `npm run dev`
3. Build for production: `npm run build`
4. Deploy the `dist/` folder to your hosting service
