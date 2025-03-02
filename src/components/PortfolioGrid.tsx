import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
  X,
  Filter
} from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { portfolioConfig } from "@/lib/portfolio-config";

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

// Icon mapping function
const getIconComponent = (iconName: string, size = 16) => {
  switch (iconName) {
    case "SlidersHorizontal": return <SlidersHorizontal size={size} />;
    case "Megaphone": return <Megaphone size={size} />;
    case "Video": return <Video size={size} />;
    case "Palette": return <Palette size={size} />;
    case "Instagram": return <SiInstagram size={size - 2} />;
    case "Paintbrush": return <Paintbrush size={size} />;
    case "Code": return <Code size={size} />;
    default: return null;
  }
};

// Individual project card component
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
            {portfolioConfig.categories.find(cat => cat.id === project.category)?.name}
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

// Project detail component
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
          {portfolioConfig.categories.find(cat => cat.id === project.category)?.name}
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
          {portfolioConfig.ui.viewFullCaseText}
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

// Filtros laterais para telas menores
const FilterSidebar = ({ 
  selectedCategory, 
  setSelectedCategory 
}: { 
  selectedCategory: string; 
  setSelectedCategory: (category: string) => void 
}) => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <DialogTitle className="text-lg font-medium mb-2">Filtrar por Categoria</DialogTitle>
      <div className="flex flex-col gap-2">
        {portfolioConfig.categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            className={cn(
              "justify-start text-sm h-10 w-full",
              selectedCategory === category.id 
                ? "bg-primary hover:bg-primary-600" 
                : "border-primary-400/20 text-muted-foreground hover:border-primary-400 hover:text-primary-400"
            )}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="mr-2">{getIconComponent(category.icon, 18)}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

// Main portfolio component
export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtering projects by category and search
  const filteredProjects = portfolioConfig.projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  // Animations for page elements
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
      {/* Filter bar responsiva */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-background/80 backdrop-blur-lg border-b border-primary-400/10 py-4 mb-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search for all screen sizes */}
            <motion.div variants={itemVariants} className="relative w-full sm:w-64 order-1 sm:order-2">
              <Input
                ref={searchRef}
                placeholder={portfolioConfig.ui.searchPlaceholder}
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
            
            {/* Filter Button Mobile */}
            <motion.div variants={itemVariants} className="sm:hidden w-full order-2 flex items-center justify-between mt-2">
              <div className="text-sm text-muted-foreground">
                {selectedCategory !== "all" ? 
                  `Filtrando por: ${portfolioConfig.categories.find(cat => cat.id === selectedCategory)?.name}` : 
                  "Todos os projetos"
                }
              </div>
              
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="border-primary-400/20">
                    <Filter size={16} className="mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80 p-0">
                  <FilterSidebar 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={(cat) => {
                      setSelectedCategory(cat);
                      setIsFilterOpen(false);
                    }} 
                  />
                </SheetContent>
              </Sheet>
            </motion.div>
            
            {/* Desktop Filters */}
            <motion.div 
              variants={itemVariants} 
              className="hidden sm:flex flex-wrap gap-2 order-1 overflow-x-auto"
              aria-label={portfolioConfig.ui.filters.label}
            >
              {portfolioConfig.categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "text-xs h-9 whitespace-nowrap",
                    selectedCategory === category.id 
                      ? "bg-primary hover:bg-primary-600" 
                      : "border-primary-400/20 text-muted-foreground hover:border-primary-400 hover:text-primary-400"
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="mr-1.5">{getIconComponent(category.icon)}</span>
                  {category.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Projects grid */}
      <div className="container mx-auto px-4">
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <div>
                      <ProjectCard 
                        project={project} 
                        onClick={() => (project)} 
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
                    <div className="p-4 sm:p-6">
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
            <h3 className="text-xl font-semibold mb-2">{portfolioConfig.ui.emptyState.title}</h3>
            <p className="text-muted-foreground mb-4">
              {portfolioConfig.ui.emptyState.description}
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="border-primary-400/30 text-primary-400 hover:bg-primary-400/10"
            >
              {portfolioConfig.ui.emptyState.buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}