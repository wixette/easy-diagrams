import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://easydiagrams.com';

export const GET: APIRoute = async ({ site }) => {
  const allPosts = await getCollection('posts');

  // Define all static pages with their language variants
  const staticPages = [
    // Homepage
    { path: '/', locales: ['en', 'zh', 'ja'] },
    // Posts listing
    { path: '/posts', locales: ['en', 'zh', 'ja'] },
    // Tags listing
    { path: '/tags', locales: ['en', 'zh', 'ja'] },
  ];

  // Get all unique tags across all languages
  const tagsByLang: Record<string, Set<string>> = {
    en: new Set(),
    zh: new Set(),
    ja: new Set(),
  };

  allPosts.forEach((post) => {
    const lang = post.slug.split('/')[0];
    post.data.tags.forEach((tag) => {
      if (tagsByLang[lang]) {
        tagsByLang[lang].add(tag.toLowerCase().replace(/\s+/g, '-'));
      }
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${
  // Static pages
  staticPages
    .map((page) => {
      return page.locales.map((locale) => {
        const mainUrl = locale === 'en' ? page.path : `/${locale}${page.path}`;
        const alternates = page.locales
          .map((altLocale) => {
            const altUrl = altLocale === 'en' ? page.path : `/${altLocale}${page.path}`;
            const hreflang = altLocale === 'en' ? 'en-US' : altLocale === 'zh' ? 'zh-CN' : 'ja-JP';
            return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${SITE_URL}${altUrl}"/>`;
          })
          .join('\n');

        return `  <url>
    <loc>${SITE_URL}${mainUrl}</loc>
${alternates}
  </url>`;
      }).join('\n');
    })
    .join('\n')
}
${
  // Individual tag pages
  Object.entries(tagsByLang)
    .flatMap(([lang, tags]) => {
      return Array.from(tags).map((tag) => {
        const tagPath = `/tags/${tag}`;
        const mainUrl = lang === 'en' ? tagPath : `/${lang}${tagPath}`;

        // Find which languages have this tag
        const availableLocales = Object.entries(tagsByLang)
          .filter(([_, langTags]) => langTags.has(tag))
          .map(([locale]) => locale);

        const alternates = availableLocales
          .map((altLocale) => {
            const altUrl = altLocale === 'en' ? tagPath : `/${altLocale}${tagPath}`;
            const hreflang = altLocale === 'en' ? 'en-US' : altLocale === 'zh' ? 'zh-CN' : 'ja-JP';
            return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${SITE_URL}${altUrl}"/>`;
          })
          .join('\n');

        return `  <url>
    <loc>${SITE_URL}${mainUrl}</loc>
${alternates}
  </url>`;
      });
    })
    .join('\n')
}
${
  // Blog posts
  allPosts
    .map((post) => {
      return `  <url>
    <loc>${SITE_URL}/posts/${post.slug}</loc>
  </url>`;
    })
    .join('\n')
}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
