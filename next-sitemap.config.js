/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clouddream.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://clouddream.com/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  outDir: './public',
}
