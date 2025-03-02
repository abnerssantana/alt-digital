import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { FooterCTA } from "@/components/FooterCTA";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-muted pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Coluna do logo e info de contato */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                  />
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              {siteConfig.footer.tagline}
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

          {/* Colunas de links - ocultas em telas menores, visíveis em desktop */}
          {siteConfig.footer.columns.map((column) => (
            <div key={column.title} className="hidden lg:block">
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
        <FooterCTA />

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
            {siteConfig.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {siteConfig.footer.legal.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

function SocialIcon({ href, children, ...props }: SocialIconProps) {
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