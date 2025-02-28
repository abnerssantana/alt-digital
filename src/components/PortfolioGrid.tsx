import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Eye, 
  Video, 
  Code, 
  Palette, 
  Megaphone, 
  Paintbrush, 
  Search,
  SlidersHorizontal,
  X
} from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogClose, 
  DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Tipos para os projetos e categorias
type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  client: string;
  year: number;
  tags: string[];
};

// Dados de exemplo para os projetos
const PORTFOLIO_CATEGORIES: Category[] = [
  { id: "all", name: "Todos", icon: <SlidersHorizontal size={16} /> },
  { id: "marketing-digital", name: "Marketing Digital", icon: <Megaphone size={16} /> },
  { id: "video-foto", name: "Vídeo & Foto", icon: <Video size={16} /> },
  { id: "branding", name: "Branding", icon: <Palette size={16} /> },
  { id: "social-media", name: "Social Media", icon: <SiInstagram size={14} /> },
  { id: "design-grafico", name: "Design Gráfico", icon: <Paintbrush size={16} /> },
  { id: "web-development", name: "Web Development", icon: <Code size={16} /> },
];

const PORTFOLIO_PROJECTS: Project[] = [
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
  },
];

// Componente do projeto individual
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="w-full"
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden border-primary-400/10 h-full cursor-pointer group" onClick={onClick}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="bg-primary-400 text-white rounded-full p-3"
            >
              <Eye size={20} />
            </motion.div>
          </div>
          <Badge className="absolute top-3 right-3 bg-primary-400 text-white text-xs">
            {PORTFOLIO_CATEGORIES.find(cat => cat.id === project.category)?.name}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-primary-400/30 text-primary-400">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 2 && (
              <Badge variant="outline" className="text-xs border-primary-400/30 text-primary-400">
                +{project.tags.length - 2}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Componente de detalhe do projeto
const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-7 relative">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <Badge className="w-fit bg-primary-400 text-white mb-4">
          {PORTFOLIO_CATEGORIES.find(cat => cat.id === project.category)?.name}
        </Badge>
        
        <p className="text-muted-foreground mb-6">{project.description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="w-24 text-sm font-medium">Cliente:</div>
            <div>{project.client}</div>
          </div>
          <div className="flex items-start">
            <div className="w-24 text-sm font-medium">Ano:</div>
            <div>{project.year}</div>
          </div>
          <div className="flex items-start">
            <div className="w-24 text-sm font-medium">Tags:</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <Button className="w-full md:w-auto mt-auto bg-primary hover:bg-primary-600">
          Ver caso completo
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

// Componente principal de portfólio
export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Filtragem de projetos por categoria e pesquisa
  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Limpar pesquisa
  const clearSearch = () => {
    setSearchQuery("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  // Animações para os elementos da página
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pb-20">
      {/* Barra de filtros */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-20 z-10 bg-background/80 backdrop-blur-lg border-b border-primary-400/10 py-4 mb-8"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {PORTFOLIO_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "text-xs h-9",
                    selectedCategory === category.id 
                      ? "bg-primary hover:bg-primary-600" 
                      : "border-primary-400/20 text-muted-foreground hover:border-primary-400 hover:text-primary-400"
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="mr-1.5">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative w-full md:w-64">
              <Input
                ref={searchRef}
                placeholder="Buscar projetos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 border-primary-400/20 focus:border-primary-400"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={14} />
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Grid de projetos */}
      <div className="container mx-auto px-4 md:px-6">
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <div>
                      <ProjectCard 
                        project={project} 
                        onClick={() => setSelectedProject(project)} 
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
                    <div className="p-6">
                      <ProjectDetail project={project} />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <Search size={48} className="text-muted-foreground mb-4 opacity-30" />
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Não encontramos projetos que correspondam aos seus critérios de busca.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="border-primary-400/30 text-primary-400 hover:bg-primary-400/10"
            >
              Limpar filtros
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}