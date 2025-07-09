import Head from 'next/head';

export default function SEO({ title, description, keywords, robots, canonicalUrl, author, publisher, lang, schemaData }) {
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
      <meta property="google-adsense-account" content="ca-pub-7370891496054049"></meta>
      
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
    </Head>
  );
}
