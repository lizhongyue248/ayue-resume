module.exports = {
  title: '个人简历',
  tagline: '阿月的个人简历',
  url: 'https://me.ayue.wiki',
  baseUrl: '/',
  favicon: 'https://resources.echocow.cn/file/solo/favicon.png',
  organizationName: 'lizhongyue248',
  projectName: 'ayue-resume',
  themeConfig: {
    navbar: {
      title: '中月',
      logo: {
        alt: 'My Site Logo',
        src: 'img/avatar.gif',
      },
      links: [
        {
          to: 'docs/base',
          activeBasePath: 'docs',
          label: '个人简历',
          position: 'right',
        },
        {to: 'blog', label: '博客', position: 'right'},
        {
          href: 'https://github.com/lizhongyue248',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: '个人简历',
          items: [
            {
              label: '个人概述',
              to: 'docs/base',
            },
            {
              label: '专业能力',
              to: 'docs/rear',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/11872517/echocow',
            },
            {
              label: 'Hacpai',
              href: 'https://hacpai.com/member/lizhongyue248'
            }
          ],
        },
        {
          title: '社交',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lizhongyue248',
            },
            {
              label: 'WeChat',
              href: 'https://msng.link/o/?lizhongyue248=wc',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/zhongyue248',
            // },
            {
              label: 'Telegram',
              href: 'https://msng.link/o/?EchoCow=tg',
            },
            {
              label: 'Email',
              href: 'mailto:lzy@echocow.cn',
            }
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} ayue <br />黔ICP备17008630号-2`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'https://resources.echocow.cn/js/cursor.js',
    'https://resources.echocow.cn/js/title.js'
  ]
};
