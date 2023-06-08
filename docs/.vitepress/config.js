/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
module.exports = {
  lang: 'en-US',
  title: "VueSet",
  description: "A Vue 3 Component Library",
  themeConfig: {
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
    { text: 'Button'},
    { text: 'Checkbox'},
    { text: 'Dividers'},
    { text: 'Form'},
    { text: 'Progress'},
    { text: 'RadioBox'},
    { text: 'Select'},
    { text: 'Switch'},
    { text: 'TextArea'},
  ]
}


