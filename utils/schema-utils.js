import { getGlobalData } from './global-data';

/**
 * Gera o schema JSON-LD para um artigo (post de blog).
 * @param {object} post - O objeto do post contendo title, description, date, author, slug.
 * @returns {object} - O objeto de schema JSON-LD.
 */
export const generateArticleSchema = (post) => {
  const globalData = getGlobalData();
  const { title, description, date, author, slug } = post;

  // Garante que o autor tenha um nome, mesmo que seja o padrão do site
  const authorName = author?.name || globalData.name;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${globalData.siteUrl}/posts/${slug}`,
    },
    headline: title,
    description: description,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(), // Idealmente, isso seria atualizado se o post for editado
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: globalData.name,
      logo: {
        '@type': 'ImageObject',
        // Você deve adicionar uma imagem de logo em public/images/logo.png
        url: `${globalData.siteUrl}/images/logo.png`, 
      },
    },
  };

  return schema;
};

/**
 * Gera o schema JSON-LD para Breadcrumbs.
 * @param {array} breadcrumbs - Uma lista de objetos { name, url }.
 * @returns {object} - O objeto de schema JSON-LD.
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  const globalData = getGlobalData();

  const itemListElement = breadcrumbs.map((breadcrumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: breadcrumb.name,
    item: `${globalData.siteUrl}${breadcrumb.url}`,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
};
