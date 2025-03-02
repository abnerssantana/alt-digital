"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

// Links de navegação
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Portfólio", path: "/portfolio" },
  { name: "Serviços", path: "#servicos" },
  { name: "Sobre", path: "#sobre" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-3 md:py-4"
      )}
    >
      <div className="container px-4 sm:px-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-10">
          <LogoAlt />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <ul className="flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-400 px-3 py-2 inline-block",
                    pathname === link.path || 
                    (pathname.startsWith(link.path) && link.path !== "/")
                      ? "text-primary-400 font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
                {/* Indicador de ativo */}
                {(pathname === link.path || 
                 (pathname.startsWith(link.path) && link.path !== "/")) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary-400 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary-600 ml-4"
            asChild
          >
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </nav>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu size={32} />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-border flex justify-between items-center">
                <LogoAlt />
              </div>
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <SheetClose asChild>
                      <Link
                        href={link.path}
                        className={cn(
                          "flex items-center text-base font-medium transition-colors py-2 px-3 rounded-md hover:bg-accent/50",
                          pathname === link.path || 
                          (pathname.startsWith(link.path) && link.path !== "/")
                            ? "text-primary-400 bg-accent/30"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  </div>
                ))}
              </nav>
              <div className="p-4 border-t border-border space-y-4">
                <div className="flex justify-center space-x-4">
                  <SocialButton href={siteConfig.links.instagram} icon={<Instagram size={18} />} />
                  <SocialButton href={siteConfig.links.linkedin} icon={<Linkedin size={18} />} />
                  <SocialButton href={siteConfig.links.youtube} icon={<Youtube size={18} />} />
                </div>
                <SheetClose asChild>
                  <Button
                    variant="default"
                    className="w-full bg-primary hover:bg-primary-600"
                    asChild
                  >
                    <Link href="/contato">Fale Conosco</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

function SocialButton({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-muted/30 hover:bg-primary-400/20 transition-colors flex items-center justify-center"
    >
      <span className="text-muted-foreground">{icon}</span>
    </a>
  );
}

// Logo component
function LogoAlt() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo Alt Digital"
        width={90}
        height={90}
        className="h-10 w-auto"
      />
    </div>
  );
}