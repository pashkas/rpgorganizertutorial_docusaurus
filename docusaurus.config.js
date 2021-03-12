module.exports = {
  title: 'РПГ Органайзер - туториал',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'РПГ Органайзер', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      language: ['en', 'ru'],
      indexDocs: true,
      docsRouteBasePath: '/',
      indexDocSidebarParentCategories: 4,
      indexBlog: false,
    }]
  ],
  themeConfig: {
    navbar: {
      title: 'РПГ Органайзер - туториал',
      logo: {
        alt: 'My Site Logo',
        src: 'img/4N0IoOfsCjU.jpg',
      },
      items: [

      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} РПГ Органайзер inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};