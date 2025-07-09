import React from 'react';
import { getGlobalData } from '../utils/global-data';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function SobreNos({ globalData }) {
    const schemaData = {
        '@context': 'https://schema.org',
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
            name: 'Sobre Nós',
            item: `${globalData.canonicalUrl}/sobre-nos`,
          },
        ],
      };

    return (
        <Layout>
            <SEO 
                title={`Sobre Nós - ${globalData.name}`}
                description="Conheça mais sobre o Mestre da Moeda e nossa missão de democratizar o conhecimento financeiro."
                canonicalUrl={`${globalData.canonicalUrl}/sobre-nos`}
                schemaData={schemaData}
            />
            <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
                <h1 className="text-3xl font-bold mb-6 dark:text-white">Sobre Nós</h1>
                <div className="mb-6 dark:text-gray-300 leading-relaxed">
                    <p>Olá! Sou Kaique, um desenvolvedor apaixonado por tecnologia e profundamente fascinado pelo mundo da economia. Acredito que o conhecimento financeiro é uma ferramenta poderosa para capacitar indivíduos e transformar vidas.</p>
                    <p>Este projeto é uma iniciativa individual, nascida da minha convicção de que a informação econômica deve ser acessível a todos, independentemente de sua formação ou nível de conhecimento prévio. Busco criar um espaço onde conceitos complexos sejam desmistificados e apresentados de forma clara e intuitiva.</p>
                    <p>Meu objetivo é fornecer recursos valiosos, desde análises de mercado e indicadores econômicos até ferramentas práticas para o planejamento financeiro pessoal. Estou comprometido em construir uma plataforma que inspire a tomada de decisões informadas e promova a educação financeira em larga escala.</p>
                    <p>Agradeço por fazer parte desta jornada. Se você tiver sugestões, dúvidas ou apenas quiser compartilhar suas ideias, sinta-se à vontade para entrar em contato. Juntos, podemos construir um futuro financeiro mais sólido e próspero.</p>
                </div>
            </div>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}

export default SobreNos;