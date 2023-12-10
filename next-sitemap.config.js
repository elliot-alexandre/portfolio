/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
};

module.exports = NextSitemapConfig;
