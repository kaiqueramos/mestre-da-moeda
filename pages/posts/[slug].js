import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  getPostFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ArrowIcon from '../../components/ArrowIcon';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import Ad from '../../components/Ad';
import Autor from '../../components/Autor'; // Importando o componente Autor

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  img: CustomImage,
  Ad,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
  slug,
}) {
  const router = useRouter();

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${globalData.canonicalUrl}/posts/${slug}`,
        mainEntityOfPage: `${globalData.canonicalUrl}/posts/${slug}`,
        headline: frontMatter.title,
        description: frontMatter.description,
        image: `${globalData.canonicalUrl}/nextjs-blog-theme-preview.png`,
        datePublished: new Date(frontMatter.date).toISOString(),
        dateModified: new Date(frontMatter.date).toISOString(),
        author: {
          '@type': 'Person',
          name: globalData.author,
        },
        publisher: {
          '@type': 'Organization',
          name: globalData.name,
          logo: {
            '@type': 'ImageObject',
            url: `${globalData.canonicalUrl}/favicon.svg`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: globalData.canonicalUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${globalData.canonicalUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: frontMatter.title,
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
        keywords={frontMatter.keywords || globalData.keywords}
        robots={globalData.robotsTag}
        canonicalUrl={`${globalData.canonicalUrl}/posts/${slug}`}
        author={globalData.author}
        publisher={globalData.publisher}
        lang={globalData.lang}
        schemaData={schemaData}
      />
      {/* Google Ads Snippet - Adjust styles as needed */}
      <div className="my-4"> {/* Added a wrapper div for styling */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7370891496054049" crossOrigin="anonymous"></script>
        {/* Bloco1 */}
        <ins className="adsbygoogle"
          style={{ display: "block" }} // Use inline styles for React compatibility
          data-ad-client="ca-pub-7370891496054049"
          data-ad-slot="3749958530"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`} {/* Template literal for the script content */}
        </script>
      </div>
      <Header name={globalData.name} />
      <article className="px-6 md:px-0" data-sb-object-id={`posts/${slug}.mdx`}>
        <header>
          <h1
            className="mb-12 text-3xl text-center md:text-5xl dark:text-white"
            data-sb-field-path="title"
          >
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="mb-4 text-xl" data-sb-field-path="description">
              {frontMatter.description}
            </p>
          )}
        </header>
        <main>
          <article
            className="prose dark:prose-invert"
            data-sb-field-path="markdown_content"
          >
            <MDXRemote {...source} components={components} />
          </article>
          <Autor /> {/* Adicionando o componente Autor aqui */}
        </main>
        <div className="grid mt-12 md:grid-cols-2 lg:-mx-24">
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="flex flex-col px-10 py-8 text-center transition border border-gray-800/10 bg-white/10 md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg last:rounded-b-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none"
            >
              <p className="mb-4 text-gray-500 uppercase dark:text-white dark:opacity-60">
                Previous
              </p>
              <h4 className="mb-6 text-2xl text-gray-700 dark:text-white">
                {prevPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto transform rotate-180 md:mr-0" />
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="flex flex-col px-10 py-8 text-center transition border border-t-0 border-b-0 border-gray-800/10 bg-white/10 md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 first:border-t first:rounded-t-lg md:border-t last:border-b"
            >
              <p className="mb-4 text-gray-500 uppercase dark:text-white dark:opacity-60">
                Next
              </p>
              <h4 className="mb-6 text-2xl text-gray-700 dark:text-white">
                {nextPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto md:ml-0" />
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
      <div className="my-4">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7370891496054049"
          crossOrigin="anonymous"></script>
        {/* Bloco2 */}
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7370891496054049"
          data-ad-slot="8619141837"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

