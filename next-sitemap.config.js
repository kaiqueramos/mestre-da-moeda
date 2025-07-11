/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mestredamoeda.netlify.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api' },
    ],
  },
  priority: 0.7,
  changefreq: 'monthly',
  transform: async (config, path) => {
    // Posts do blog com prioridade alta
    if (path.startsWith('/posts/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Página inicial com prioridade máxima
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Página do blog com prioridade alta
    if (path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Outras páginas com prioridade padrão
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  exclude: [
    // Rotas de API, páginas de erro, etc.
    '/api/*',
    '/server-sitemap.xml',
  ],
};