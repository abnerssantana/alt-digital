export const siteConfig = {
  name: "Alt Digital",
  description: "Soluções digitais inovadoras. Não somos apenas mais uma agência, somos a (ALT)ERNATIVA para quem pensa diferente.",
  url: "https://altdigital.com.br",
  ogImage: "https://altdigital.com.br/og.jpg",
  links: {
    instagram: "https://instagram.com/altdigital",
    linkedin: "https://linkedin.com/company/altdigital",
    youtube: "https://youtube.com/c/altdigital",
    whatsapp: "https://wa.me/5517900000000"
  },
  contact: {
    email: "contato@altdigital.com.br",
    phone: "+55 17 90000-0000",
    address: "São José do Rio Preto, SP"
  },
  footer: {
    tagline: "A (ALT)ERNATIVA PARA QUEM PENSA DIFERENTE. Agência digital especializada em soluções criativas e inovadoras.",
    copyright: "© {year} Alt Digital. Todos os direitos reservados.",
    legal: [
      { name: "Termos de Uso", href: "/termos" },
      { name: "Política de Privacidade", href: "/privacidade" }
    ],
    columns: [
      {
        title: "Empresa",
        links: [
          { name: "Sobre nós", href: "/sobre" },
          { name: "Missão e Visão", href: "/sobre#missao-visao" },
          { name: "Equipe", href: "/sobre#equipe" },
          { name: "Trabalhe conosco", href: "/carreiras" }
        ]
      },
      {
        title: "Serviços",
        links: [
          { name: "Marketing Digital", href: "/servicos/marketing-digital" },
          { name: "Vídeo & Foto", href: "/servicos/video-foto" },
          { name: "Branding", href: "/servicos/branding" },
          { name: "Social Media", href: "/servicos/social-media" },
          { name: "Design Gráfico", href: "/servicos/design-grafico" },
          { name: "Web Development", href: "/servicos/web-development" }
        ]
      },
      {
        title: "Recursos",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "E-books", href: "/recursos/ebooks" },
          { name: "Casos de sucesso", href: "/casos" },
          { name: "FAQ", href: "/faq" }
        ]
      }
    ],
    cta: {
      title: "Vamos criar algo incrível juntos",
      description: "Entre em contato para discutir seu projeto ou assine nossa newsletter para receber novidades e inspiração.",
      buttons: [
        {
          text: "Fale Conosco",
          href: "/contato",
          variant: "default",
          className: "bg-secondary-400 hover:bg-primary-500 text-white",
          icon: true
        }
      ]
    }
  },
  services: [
    {
      id: "marketing-digital",
      title: "Marketing Digital",
      description: "Estratégias que conectam marcas e pessoas de forma autêntica e impactante",
      icon: "Megaphone"
    },
    {
      id: "video-foto",
      title: "Vídeo & Foto",
      description: "Produções audiovisuais de alta qualidade",
      icon: "Video"
    },
    {
      id: "branding",
      title: "Branding",
      description: "Identidades visuais marcantes e posicionamento estratégico",
      icon: "Palette"
    },
    {
      id: "social-media",
      title: "Social Media",
      description: "Gestão completa das suas redes sociais",
      icon: "Instagram"
    },
    {
      id: "design-grafico",
      title: "Design Gráfico",
      description: "Peças visuais que comunicam sua essência",
      icon: "Paintbrush"
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Sites e aplicações web que convertem visitantes em clientes",
      icon: "Code"
    }
  ],
  manifesto: {
    mission: "Desafiar os padrões do mercado de conteúdo e audiovisual, entregando soluções originais e conectadas às tendências mais atuais.",
    vision: "Transformar a Alt Digital em uma referência de inovação e criatividade, onde cada projeto é uma oportunidade de reinventar o digital.",
    values: [
      {
        title: "Criatividade",
        description: "Acreditamos que a criatividade é a chave para romper padrões. Nossa equipe é movida por inspiração e paixão, criando experiências que fogem do óbvio e que marcam."
      },
      {
        title: "Parceria Autêntica",
        description: "Abraçamos os sonhos dos nossos clientes como se fossem nossos. Valorizamos relações de confiança e colaboração, trabalhando lado a lado para transformar visões em realidade."
      },
      {
        title: "Inovação Constante",
        description: "Nunca paramos de aprender e evoluir. Estamos sempre em busca de novas tecnologias, tendências e abordagens para manter nosso trabalho na vanguarda."
      }
    ],
    archetype: {
      title: "Rebelde",
      tagline: "Desafiar o status quo para criar algo novo, audacioso e transformador",
      emotional: "Esse arquétipo atrai aqueles que valorizam a originalidade e que desejam se expressar de forma genuína, sem se prender a regras tradicionais ou padrões estabelecidos.",
      goal: "Mudar o jogo, sendo uma força transformadora que desafia as convenções e abre caminho para novas possibilidades."
    }
  },
  testimonials: [
    {
      quote: "A equipe da Alt Digital realmente entendeu nossa marca e entregou um resultado que superou nossas expectativas. Eles não têm medo de propor ideias ousadas que realmente funcionam.",
      author: "Marina Oliveira",
      role: "Diretora de Marketing, TechBrand",
      avatar: "/avatars/avatar2.jpg"
    },
    {
      quote: "Trabalhar com a Alt Digital foi uma experiência transformadora para nossa marca. Eles realmente entregam o que prometem: disrupção com propósito.",
      author: "Carlos Mendes",
      role: "CEO, Inovva",
      avatar: "/avatars/avatar1.jpeg"
    },
    {
      quote: "Em um mercado saturado de conteúdo igual, a Alt Digital nos ajudou a encontrar nossa voz autêntica e a nos destacar da concorrência.",
      author: "Juliana Torres",
      role: "Gerente de Produtos, EcoEssência",
      avatar: "/avatars/avatar3.jpg"
    }
  ]
};