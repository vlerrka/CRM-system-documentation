const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CRM для онлайн-школы',
  tagline: 'Документация проекта',
  favicon: 'img/favicon.ico',

  url: 'https://vlerrka.github.io',
  baseUrl: '/CRM-system-documentation/',
  organizationName: 'vlerrka',
  projectName: 'CRM-system-documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/vlerrka/CRM-system-documentation/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CRM для онлайн-школы',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://github.com/vlerrka/CRM-system-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Ресурсы',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vlerrka/CRM-system-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CRM для онлайн-школы. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;