import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('posts');

  // Sort posts by publication date (newest first)
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'EasyDiagrams',
    description: 'Visualizing fundamental concepts through diagrams and videos',
    site: context.site || 'https://easydiagrams.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
