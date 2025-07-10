import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'
import { chineseSearchOptimize, pagefindPlugin } from "vitepress-plugin-pagefind";
import timeline from "vitepress-markdown-timeline";
import mdItSub from "markdown-it-sub"
import mdItSup from "markdown-it-sup"
import mdItMark from "markdown-it-mark"

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 暗黑模式
  appearance: 'dark',
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: 'yuanquanke',
  description: 'yuanquanke 的个人空间',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    },
    // 使用插件加载
    plugins: [pagefindPlugin({
      customSearchQuery: chineseSearchOptimize,
      btnPlaceholder: '搜索',
      placeholder: '搜索文档',
      emptyText: '空空如也',
      heading: '共: {{searchResult}} 条结果'
    })],
  },
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    // 设置logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '阅读',
        items: [
          { text: '重温《老人与海》', link: '/blogs/reader/hemingway/h01' },
          { text: '重温《祝福》', link: '/blogs/reader/luxun/luxun' },
          { text: '鲁迅为何喜欢“喷”人', link: '/blogs/reader/luXunMaRen/lu' },
        ]
      },
      { text: 'AI', link: '/blogs/ai' },
      { text: '工具', link: '/blogs/tools' },
      {
        text: '面试',
        items: [
          { text: '问解', link: '/blogs/interview/problem/' },
          { text: 'javascript', link: '/blogs/interview/js/' },
          { text: 'css', link: '/blogs/interview/css/' },
          { text: '手撕代码', link: '/blogs/interview/code/' },
          { text: '性能优化', link: '/blogs/interview/performance/' },
          { text: "网络", link: "/interview/internet/" },
          // { text: '操作系统', link: '/interview/os/' },
          // { text: '设计模式', link: '/interview/design/' },
          { text: '综合问题', link: '/blogs/interview/other/' },
          // { text: '面经', link: '/interview/experience/' }
        ]
      },
      { text: '关于', link: '/blogs/about' },
      // { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
    ],

    socialLinks: [
      // {
      //   icon: 'github',
      //   link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      // }
    ],

  },
  markdown: {
    math: true,
    config: (md) => {
      md.use(timeline)
      md.use(mdItSub)
      md.use(mdItSup)
      md.use(mdItMark)
    }
  },
})
