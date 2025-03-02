export const portfolioConfig = {
  categories: [
    { id: "all", name: "Todos", icon: "SlidersHorizontal" },
    { id: "marketing-digital", name: "Marketing Digital", icon: "Megaphone" },
    { id: "video-foto", name: "Vídeo & Foto", icon: "Video" },
    { id: "branding", name: "Branding", icon: "Palette" },
    { id: "social-media", name: "Social Media", icon: "Instagram" },
    { id: "design-grafico", name: "Design Gráfico", icon: "Paintbrush" },
    { id: "web-development", name: "Web Development", icon: "Code" }
  ],
  projects: [
    {
      id: "brand-revolution",
      title: "Brand Revolution",
      category: "branding",
      description: "Redesign completo da identidade visual para uma startup de tecnologia em crescimento, incluindo novo logo, sistema de cores e brand guidelines.",
      thumbnail: "/portfolio/branding-1.jpg",
      client: "TechStartup",
      year: 2024,
      tags: ["Identidade Visual", "Logo", "Diretrizes de Marca"]
    },
    {
      id: "eco-essence",
      title: "Eco Essence",
      category: "design-grafico",
      description: "Sistema de embalagens sustentáveis para linha de produtos naturais, utilizando materiais recicláveis e design minimalista.",
      thumbnail: "/portfolio/design-1.jpg",
      client: "Natural Care",
      year: 2023,
      tags: ["Embalagem", "Sustentabilidade", "Design de Produto"]
    },
    {
      id: "digital-presence",
      title: "Digital Presence",
      category: "web-development",
      description: "Desenvolvimento de plataforma e-commerce responsiva com integração a sistemas de pagamento e gestão de estoque.",
      thumbnail: "/portfolio/web-1.jpg",
      client: "Fashion Store",
      year: 2024,
      tags: ["E-commerce", "UX/UI", "Desenvolvimento Web"]
    },
    {
      id: "urban-campaign",
      title: "Urban Campaign",
      category: "marketing-digital",
      description: "Estratégia de marketing integrada para lançamento de produto urbano, incluindo campanhas digitais, mídia paga e análise de resultados.",
      thumbnail: "/portfolio/marketing-1.jpg",
      client: "Urban Lifestyle",
      year: 2023,
      tags: ["Estratégia Digital", "Mídia Paga", "Lançamento"]
    },
    {
      id: "vivid-stories",
      title: "Vivid Stories",
      category: "video-foto",
      description: "Série de vídeos institucionais e ensaio fotográfico para apresentação da equipe e ambiente de trabalho da empresa.",
      thumbnail: "/portfolio/video-1.jpg",
      client: "Corporate Solutions",
      year: 2024,
      tags: ["Vídeo Institucional", "Fotografia", "Storytelling"]
    },
    {
      id: "social-impact",
      title: "Social Impact",
      category: "social-media",
      description: "Gestão completa de redes sociais incluindo criação de conteúdo, estratégia de engajamento e análise de métricas.",
      thumbnail: "/portfolio/social-1.jpg",
      client: "Impact NGO",
      year: 2023,
      tags: ["Instagram", "Conteúdo", "Engajamento"]
    },
    {
      id: "magazine-layout",
      title: "Magazine Layout",
      category: "design-grafico",
      description: "Design editorial para revista trimestral, incluindo layout, tipografia e tratamento de imagens.",
      thumbnail: "/portfolio/design-2.jpg",
      client: "Culture Magazine",
      year: 2024,
      tags: ["Editorial", "Tipografia", "Layout"]
    },
    {
      id: "product-showcase",
      title: "Product Showcase",
      category: "video-foto",
      description: "Ensaio fotográfico profissional para catálogo de produtos, com direção de arte e pós-produção avançada.",
      thumbnail: "/portfolio/video-2.jpg",
      client: "Premium Products",
      year: 2023,
      tags: ["Fotografia de Produto", "Direção de Arte", "Catálogo"]
    },
    {
      id: "app-interface",
      title: "App Interface",
      category: "web-development",
      description: "Design e desenvolvimento de interface para aplicativo mobile com foco em experiência do usuário e acessibilidade.",
      thumbnail: "/portfolio/web-2.jpg",
      client: "Health Tech",
      year: 2024,
      tags: ["UI/UX", "Mobile", "Aplicativo"]
    }
  ],
  ui: {
    emptyState: {
      title: "Nenhum projeto encontrado",
      description: "Não encontramos projetos que correspondam aos seus critérios de busca.",
      buttonText: "Limpar filtros"
    },
    searchPlaceholder: "Buscar projetos...",
    viewFullCaseText: "Ver caso completo",
    filters: {
      label: "Filtragem de projetos"
    }
  }
};
