// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Cats Effect', // Title for your website.
  tagline: 'The purely functional runtime system for Scala',
  url: 'https://typelevel.org', // Your website URL
  baseUrl: '/cats-effect/',
  repoUrl: 'https://github.com/typelevel/cats-effect',
  projectName: 'cats-effect',
  githubHost: 'github.com',
  organizationName: 'typelevel',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {href: 'https://github.com/typelevel/cats-effect', label: "GitHub", external: true},
    {href: `/cats-effect/api/index.html`, label: 'API'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#3e5b95',
    secondaryColor: '#294066',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright (c) 2017-2020 Typelevel`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'github',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  twitterUsername: 'typelevel',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,
  docsSideNavCollapsible: true,

  users: [
    {
      // we probably can't do disney, or logos in general, due to restrictions
      image: 'img/200px-Disney+_logo.svg.png',
      caption: 'The Walt Disney Company',
      title: 'The Walt Disney Company',
      infoLink: 'https://www.disney.com',
      pinned: true
    }
  ]
};

module.exports = siteConfig;
