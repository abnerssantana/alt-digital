"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Import dos componentes do Shadcn
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
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
  { icon: <Megaphone size={16} />, name: "Marketing Digital", path: "/servicos/marketing-digital" },
  { icon: <Video size={16} />, name: "Vídeo & Foto", path: "/servicos/video-foto" },
  { icon: <Palette size={16} />, name: "Branding", path: "/servicos/branding" },
  { icon: <SiInstagram size={14} />, name: "Social Media", path: "/servicos/social-media" },
  { icon: <Paintbrush size={16} />, name: "Design Gráfico", path: "/servicos/design-grafico" },
  { icon: <Code size={16} />, name: "Web Development", path: "/servicos/web-development" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para mudar aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        "w-7xl fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 mx-auto",
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center">
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
                  <div>
                    <button
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary-400 flex items-center",
                        pathname.startsWith(link.path)
                          ? "text-primary-400 font-semibold"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.name}
                      <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown para serviços */}
                    {servicesOpen && (
                      <div 
                        className="absolute left-0 top-full pt-2 w-56"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="rounded-lg bg-card/95 backdrop-blur-sm border border-border p-2 shadow-lg">
                          {services.map(service => (
                            <Link
                              key={service.path}
                              href={service.path}
                              className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary-400 hover:bg-primary-400/10 rounded-md transition-colors"
                            >
                              <span className="text-primary-400">{service.icon}</span>
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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

          <Button className="bg-primary hover:bg-primary-600 text-white" asChild>
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </nav>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu size={24} />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-primary-400/20">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <LogoAlt />
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X size={24} />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </SheetTrigger>
              </div>

              <nav className="flex-1">
                <ul className="space-y-6 text-lg">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      {link.path === "/servicos" ? (
                        <div>
                          <button
                            className={cn(
                              "flex items-center justify-between w-full transition-colors hover:text-primary-400",
                              pathname.startsWith(link.path)
                                ? "text-primary-400 font-semibold"
                                : "text-muted-foreground"
                            )}
                            onClick={() => setServicesOpen(!servicesOpen)}
                          >
                            {link.name}
                            <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {servicesOpen && (
                            <div className="mt-2 ml-4 space-y-2">
                              {services.map(service => (
                                <Link
                                  key={service.path}
                                  href={service.path}
                                  className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary-400 transition-colors"
                                >
                                  <span className="text-primary-400">{service.icon}</span>
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.path}
                          className={cn(
                            "block transition-colors hover:text-primary-400",
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
              </nav>

              <div className="mt-auto pt-8 border-t border-primary-400/10">
                <div className="flex space-x-4 mb-6">
                  <SocialIcon href={siteConfig.links.instagram} icon={<Instagram size={20} />} />
                  <SocialIcon href={siteConfig.links.linkedin} icon={<Linkedin size={20} />} />
                  <SocialIcon href={siteConfig.links.youtube} icon={<Youtube size={20} />} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary-600 text-white" asChild>
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

// Logo component
function LogoAlt() {
  return (
    <div className="flex items-center font-bold text-2xl">
      <span>alt</span>
      <span className="text-primary-400">≠</span>
    </div>
  );
}

// Social media icon component
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary-400/20 transition-colors"
    >
      {icon}
    </a>
  );
}