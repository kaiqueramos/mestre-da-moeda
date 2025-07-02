import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({
  title,
  description,
  keywords,
  robots,
  canonicalUrl,
  author,
  publisher,
  lang,
  datePublished,
  dateModified,
  imageUrl,
  articleSection,
}) {
  const router = useRouter();
  const fullUrl = `https://mestredamoeda.netlify.app${router.asPath}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl || "https://mestredamoeda.netlify.app/nextjs-blog-theme-preview.png", // Fallback image
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished, // Use published date if modified is not available
    "author": {
      "@type": "Person",
      "name": author,
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher,
      "logo": {
        "@type": "ImageObject",
        "url": "https://mestredamoeda.netlify.app/github-banner.svg", // Replace with your publisher logo
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    "articleSection": articleSection, // Category of the article
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="author" content={author} />
      <meta property="publisher" content={publisher} />
      <meta property="lang" content={lang} />
      <meta property="google-adsense-account" content="ca-pub-7370891496054049" />

      {/* Schema Markup for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}
