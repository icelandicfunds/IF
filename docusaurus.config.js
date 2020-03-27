/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Icelandic funds',
  tagline:
    'Innovative solutions to accelerate capital growth',
  url: 'https://www.icelandicfunds.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Icelandic funds',
  projectName: 'if',
  themes: ['@docusaurus/theme-search-algolia'],
  plugins: ['my-loaders'], // loader required for .svg
  themeConfig: {
    algolia: {
      apiKey: '25626fae796133dc1e734c6bcaaeac3c',
      indexName: 'docsearch',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      logo: {
        alt: 'Icelandic funds',
        src: 'img/if-logo.svg',
        src_theme: {
          light: 'img/if-logo.svg',
          dark: 'img/if-logo-white.svg',
          href: 'https://docsearch.algolia.com/playground',
        },
      },
      links: [
        {
          label: 'About',
          to: 'docs/about/overview',
          position: 'right',
        },
        {
          label: 'Method',
          to: 'docs/method/tangibility',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of use',
              to: 'docs/legal/terms-of-use',
            },
            {
              label: 'Privacy policy',
              to: 'docs/legal/privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Icelandic funds.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
