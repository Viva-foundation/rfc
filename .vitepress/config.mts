import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Viva RFCs",
  description: "Technical documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Full structure', link: '/projects/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/viva-foundation/rfc' }
    ]
  },
  base: '/rfc/',
})
