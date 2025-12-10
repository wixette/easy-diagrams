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
    'home.tagline': 'How We Think, Explained Visually',
    'home.description': 'Fundamental ideas revealed through simple diagrams and short animations. A non-profit project. No long texts. Just clear thinking.',
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
    'home.tagline': '人类如何思考，一看便知',
    'home.description': '以极简图示与短动画，呈现人类思维与科学的根本逻辑。公益项目，不堆文字，只求清晰。',
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
    'home.tagline': '人間はどう考えるのか、ひと目でわかる',
    'home.description': 'シンプルな図解と短いアニメーションで、人間の思考と科学の本質を伝える非営利プロジェクト。長文なし、明快さ重視。',
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
