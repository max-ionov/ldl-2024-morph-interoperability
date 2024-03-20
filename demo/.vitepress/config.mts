import { defineConfig } from 'vitepress'
import { getUserConfig } from '../config/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LLOD for Interoperable Morphological Description",
  description: "A demo for showing different types of interoperability of OntoLex-Morph",
  base: '/ldl-2024-morph-interoperability/',
  srcExclude: ['**/README.html', 'docs'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Search', link: '/search' },
    //   { text: 'About', link: '/about' }
    // ],
    aside: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/max-ionov/ldl-2024-morph-interoperability' }
    ]
  },
  transformPageData: (pageData) => {
    return getUserConfig()
  }
})

