export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.tags': 'Tags',
    'post.readMore': 'Read more',
    'post.tags': 'Tags',
    'post.published': 'Published on',
    'post.updated': 'Updated on',
    'post.availableIn': 'Available in',
    'post.previous': 'Previous',
    'post.next': 'Next',
    'language.switch': 'Switch language',
    'home.tagline': 'Visualizing fundamental concepts through diagrams and videos',
    'home.description': 'Explore high-quality educational content covering logic, mathematics, physics, computer science, and artificial intelligence principles.',
    'home.browsePosts': 'Browse Posts',
    'home.exploreTags': 'Explore by Tags',
    'home.featured': 'Featured Posts',
    'home.recent': 'Recent Posts',
    'home.viewAll': 'View all posts',
  },
  zh: {
    'nav.home': '首页',
    'nav.posts': '文章',
    'nav.tags': '标签',
    'post.readMore': '阅读更多',
    'post.tags': '标签',
    'post.published': '发布于',
    'post.updated': '更新于',
    'post.availableIn': '可用语言',
    'post.previous': '上一篇',
    'post.next': '下一篇',
    'language.switch': '切换语言',
    'home.tagline': '通过图表和视频可视化基本概念',
    'home.description': '探索涵盖逻辑、数学、物理、计算机科学和人工智能原理的高质量教育内容。',
    'home.browsePosts': '浏览文章',
    'home.exploreTags': '按标签探索',
    'home.featured': '精选文章',
    'home.recent': '最新文章',
    'home.viewAll': '查看所有文章',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.posts': '投稿',
    'nav.tags': 'タグ',
    'post.readMore': '続きを読む',
    'post.tags': 'タグ',
    'post.published': '公開日',
    'post.updated': '更新日',
    'post.availableIn': '利用可能な言語',
    'post.previous': '前へ',
    'post.next': '次へ',
    'language.switch': '言語を切り替える',
    'home.tagline': '図表と動画で基本概念を視覚化',
    'home.description': '論理、数学、物理学、コンピュータサイエンス、人工知能の原理をカバーする高品質な教育コンテンツを探索してください。',
    'home.browsePosts': '投稿を閲覧',
    'home.exploreTags': 'タグで探索',
    'home.featured': '注目の投稿',
    'home.recent': '最近の投稿',
    'home.viewAll': 'すべての投稿を表示',
  },
} as const;

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
