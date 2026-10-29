const siteUrl =
  process.env.SITE_URL ?? 'https://tabuas-de-pinho.jlaffitteg.workers.dev';

export default {
  site: siteUrl,
  build: {
    inlineStylesheets: 'auto',
  },
};
