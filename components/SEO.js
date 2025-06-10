import Head from 'next/head';

export default function SEO({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta property='canonical' content={canonicalUrl} />
      <meta property='author' content={author} />
      <meta property='publisher' content={publisher} />
      <meta property='language' content={lang} />
    </Head>
  );
}
