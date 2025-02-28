"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Import dos componentes do Shadcn
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Import de ícones
import { 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ChevronDown,
  Megaphone,
  Video,
  Palette,
  Code,
  Paintbrush
} from "lucide-react";
import { SiInstagram } from "react-icons/si";

// Links de navegação
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Portfólio", path: "/portfolio" },
  { name: "Sobre", path: "/sobre" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" }
];

// Serviços para o menu dropdown
const services = [
  { 
    icon: <Megaphone size={16} className="text-primary-400" />, 
    name: "Marketing Digital", 
    path: "/servicos/marketing-digital" 
  },
  { 
    icon: <Video size={16} className="text-primary-400" />, 
    name: "Vídeo & Foto", 
    path: "/servicos/video-foto" 
  },
  { 
    icon: <Palette size={16} className="text-primary-400" />, 
    name: "Branding", 
    path: "/servicos/branding" 
  },
  { 
    icon: <SiInstagram size={14} className="text-primary-400" />, 
    name: "Social Media", 
    path: "/servicos/social-media" 
  },
  { 
    icon: <Paintbrush size={16} className="text-primary-400" />, 
    name: "Design Gráfico", 
    path: "/servicos/design-grafico" 
  },
  { 
    icon: <Code size={16} className="text-primary-400" />, 
    name: "Web Development", 
    path: "/servicos/web-development" 
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para mudar aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoAlt />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                {link.path === "/servicos" ? (
                  <div 
                    onMouseEnter={() => setServicesOpen(true)} 
                    onMouseLeave={() => setServicesOpen(false)}
                    className="relative -mt-1"
                  >
                    <Button 
                      variant="ghost"
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary-400 flex items-center",
                        pathname.startsWith(link.path)
                          ? "text-primary-400 font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                      />
                    </Button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-64 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg z-50"
                        >
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-card/95 border-l border-t border-border"></div>
                          {services.map(service => (
                            <Link
                              key={service.path}
                              href={service.path}
                              className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:bg-accent/50 rounded-md transition-colors"
                            >
                              {service.icon}
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary-400",
                      pathname === link.path
                        ? "text-primary-400 font-semibold"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary-600"
            asChild
          >
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </nav>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu size={24} />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          
          <SheetContent side="right" className="p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border flex justify-between items-center">
                <LogoAlt />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X size={24} />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex-1 p-6 space-y-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    {link.path === "/servicos" ? (
                      <div>
                        <Button 
                          variant="ghost" 
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={cn(
                            "w-full justify-between text-lg font-semibold transition-colors",
                            pathname.startsWith(link.path)
                              ? "text-primary-400"
                              : "text-muted-foreground"
                          )}
                        >
                          {link.name}
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                          />
                        </Button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-2 mt-2 pl-4 overflow-hidden"
                            >
                              {services.map(service => (
                                <SheetClose asChild key={service.path}>
                                  <Link
                                    href={service.path}
                                    className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:bg-accent/50 rounded-md transition-colors"
                                  >
                                    {service.icon}
                                    {service.name}
                                  </Link>
                                </SheetClose>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={link.path}
                          className={cn(
                            "block text-lg font-semibold transition-colors p-2 rounded-md hover:bg-accent/50",
                            pathname === link.path
                              ? "text-primary-400 bg-accent/50"
                              : "text-muted-foreground"
                          )}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-center space-x-4">
                  <a 
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary-400/20 transition-colors"
                  >
                    <Instagram size={20} className="text-muted-foreground" />
                  </a>
                  <a 
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary-400/20 transition-colors"
                  >
                    <Linkedin size={20} className="text-muted-foreground" />
                  </a>
                  <a 
                    href={siteConfig.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary-400/20 transition-colors"
                  >
                    <Youtube size={20} className="text-muted-foreground" />
                  </a>
                </div>

                <Button 
                  variant="default" 
                  className="w-full bg-primary hover:bg-primary-600"
                  asChild
                >
                  <SheetClose asChild>
                    <Link href="/contato">Fale Conosco</Link>
                  </SheetClose>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

import Image from "next/image";

// Logo component
function LogoAlt() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={50}
      height={50}
    />
  );
}