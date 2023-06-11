/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default {
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
    { text: 'Dividers', link: '/guide/dividers/dividers' },
    { text: 'Form', link: '/guide/form/form' },
    { text: 'Input', link: '/guide/input/input' },
    { text: 'Progress', link: '/guide/progress/progress' },
    { text: 'RadioBox', link: '/guide/radio/radio' },
    { text: 'Select', link: '/guide/select/select'},
    { text: 'Switch', link: '/guide/switch/switch' },
    { text: 'TextArea', link: 'guide/textarea/textarea' },
  ]
}


