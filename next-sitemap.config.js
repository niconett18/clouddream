/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ddpillow.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ddpillow.com/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  outDir: './public',
}
