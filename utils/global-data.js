export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Mestre da Moeda';

  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved';

  const phrases = [
    'Dinheiro no bolso, futuro tranquilo',
    'Invista hoje, colha amanhã',
    'Liberdade financeira ao seu alcance',
    'Seu futuro financeiro começa agora',
    'Dinheiro inteligente, vida feliz',
    'Aprenda a fazer seu dinheiro render mais',
    'Controle suas finanças, conquiste seus sonhos',
    'Planeje, invista, realize',
    'Seu guia para o sucesso financeiro',
    'Invista em você, invista no seu futuro',
    'Finanças simples, resultados incríveis',
    'Faça seu dinheiro trabalhar para você',
    'Aposentadoria tranquila, vida longa',
    'Seu dinheiro seguro, seu futuro garantido',
    'Educação financeira para todos',
    'Invista com confiança, cresça com segurança',
    'O poder das finanças em suas mãos',
    'Descubra o segredo do sucesso financeiro',
    'Riqueza não é sorte, é planejamento',
    'Conquiste sua independência financeira',
    'Economize hoje, aproveite amanhã',
    'Pequenas economias, grandes resultados',
    'Dicas para economizar sem abrir mão do que você gosta',
    'Orçamento inteligente, vida leve',
    'Saiba como gastar menos e viver melhor',
    'Economize dinheiro, realize seus sonhos',
    'Dicas práticas para o seu bolso',
    'Seu guia para uma vida financeira mais leve',
    'Descubra como economizar sem sacrifícios',
    'Planeje seus gastos, conquiste seus objetivos',
    'Seu dinheiro, suas regras',
    'Acredite no seu potencial financeiro',
    'Sonhe alto, planeje baixo',
    'O futuro financeiro que você merece',
    'Sua jornada para a riqueza começa aqui',
    'Inspire-se, planeje, conquiste',
    'O sucesso financeiro está ao seu alcance',
    'Seja o mestre do seu dinheiro',
    'Seu futuro financeiro, suas escolhas',
    'Nunca é tarde para começar a investir',
    'Dinheiro sem mistério',
    'Finanças descomplicadas',
    'Seu bolso em dia',
    'Dinheiro na sua mão',
    'Seu futuro garantido',
    'Invista certo',
    'Economize já',
    'Sucesso financeiro',
    'Riqueza ao seu alcance',
    'Comece agora',
    'Aprenda a investir',
    'Domine suas finanças',
    'Educação financeira já',
    'Seu guia financeiro',
    'Finanças para todos',
    'Invista no seu conhecimento',
    'Descomplique suas finanças',
    'Aprenda e lucre',
    'Seu futuro em suas mãos',
    'Invista em você',
    'Aposente-se cedo',
    'Liberdade financeira',
    'Invista no seu futuro',
    'Multiplique seu dinheiro',
    'Domine seus gastos',
    'Planeje sua riqueza',
    'Conquiste seus sonhos',
    'Economize para o futuro',
    'Construa sua riqueza',
    'Invista com propósito',
    'Comece a investir hoje!',
    'Planeje seu futuro agora!',
    'Domine suas finanças já!',
    'Descubra como economizar!',
    'Invista no seu conhecimento!',
    'Conquiste sua liberdade!',
    'Multiplique seu dinheiro!',
    'Saia das dívidas!',
    'Comece a economizar!',
    'Assuma o controle!'
  ]

  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : phrases[Math.floor(Math.random() * phrases.length)];

  const keywords = process.env.BLOG_KEYWORDS
    ? decodeURI(process.env.BLOG_KEYWORDS)
    : 'finanças, investimentos, economia, dinheiro, mestre da moeda';

  const canonicalUrl = process.env.CANONICAL_URL
    ? decodeURI(process.env.CANONICAL_URL)
    : 'https://mestredamoeda.netlify.app/';

  const robotsTag = process.env.ROBOTS_TAG
    ? decodeURI(process.env.ROBOTS_TAG)
    : 'index, follow';

  const author = process.env.BLOG_AUTHOR
    ? decodeURI(process.env.BLOG_AUTHOR)
    : 'Kaique Ramos';

  const publisher = process.env.BLOG_PUBLISHER
    ? decodeURI(process.env.BLOG_PUBLISHER)
    : 'Mestre da Moeda';

  const lang = process.env.BLOG_LANG
    ? decodeURI(process.env.BLOG_LANG)
    : 'pt-BR';

  return {
    name,
    blogTitle,
    footerText,
    keywords,
    canonicalUrl,
    robotsTag,
    author,
    publisher,
    lang,
  };
};

