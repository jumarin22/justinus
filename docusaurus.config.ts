import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Justinus',
  tagline: '',
  favicon: 'img/Aurelius_edit.ico',

  future: {
    v4: true,
  },

  url: 'https://jumarin22.github.io',
  baseUrl: '/justinus/',

  organizationName: 'jumarin22',
  projectName: 'justinus',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'changelog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Aurelius_edit.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Justinus',
      logo: {
        alt: 'Justinus Logo',
        src: 'img/marcus.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'philosophersSidebar',
          position: 'left',
          label: 'Philosophy',
        },
        {
          to: '/changelog',
          position: 'left',
          label: 'Changelog',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Justinus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
