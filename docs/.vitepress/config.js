/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default{
  lang: 'en-US',
  title: "VueSet",
  description: "A Vue 3 Component Library",
  themeConfig: {
    logo: '/logo.svg',
    docsDir: 'docs',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/NormanAzares/BSCS3A_VUESET',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Components',
        items: getComponents(),
      },
    ],
  },
}

function getComponents() {
  return [
    { text: 'Button', link: '/guide/button/button' },
    { text: 'Checkbox', link: '/guide/checkbox/checkbox' },
    { text: 'Dividers' },
    { text: 'Form' },
    { text: 'Progress' },
    { text: 'RadioBox' },
    { text: 'Select' },
    { text: 'Switch' },
    { text: 'TextArea' },
  ]
}


