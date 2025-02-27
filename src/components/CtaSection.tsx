import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
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
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-muted pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Coluna do logo e info de contato */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center font-bold text-2xl">
                <span>alt</span>
                <span className="text-primary-400">≠</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              A (ALT)ERNATIVA PARA QUEM PENSA DIFERENTE. Agência digital especializada em soluções criativas e inovadoras.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-400" />
                <span className="text-muted-foreground text-sm">
                  {siteConfig.contact.address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400" />
                <span className="text-muted-foreground text-sm">
                  {siteConfig.contact.phone}
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400" />
                <span className="text-muted-foreground text-sm">
                  {siteConfig.contact.email}
                </span>
              </div>
            </div>
          </div>

          {/* Colunas de links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Newsletter */}
        <div className="bg-primary-800/50 backdrop-blur-sm p-8 rounded-2xl mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Vamos criar algo incrível juntos</h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato para discutir seu projeto ou assine nossa newsletter para receber novidades e inspiração.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-400 hover:bg-primary-500 text-white"
                asChild
              >
                <Link href="/contato" className="flex items-center">
                  Fale Conosco
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-400 text-primary-400 hover:bg-primary-400/10"
                asChild
              >
                <Link href="/newsletter">
                  Assinar Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-muted/20 mb-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <SocialIcon href={siteConfig.links.instagram} aria-label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href={siteConfig.links.linkedin} aria-label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href={siteConfig.links.youtube} aria-label="YouTube">
              <Youtube size={18} />
            </SocialIcon>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Alt Digital. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/termos" className="text-xs text-muted-foreground hover:text-foreground">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-xs text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary-400 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}