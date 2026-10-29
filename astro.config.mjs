const siteUrl =
  process.env.SITE_URL ?? 'https://tabuas-de-pinho.pages.dev';

export default {
  site: siteUrl,
  build: {
    inlineStylesheets: 'always',
  },
};
