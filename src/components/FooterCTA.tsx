import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FooterCTA() {
  const { title, description, buttons } = siteConfig.footer.cta;
  
  return (
    <div className="relative bg-primary-800/40 backdrop-blur-md p-8 lg:p-12 rounded-2xl mb-16 overflow-hidden animated-border">
      {/* Background blobs */}
      <div className="blur-blob bg-primary-400/30 w-64 h-64 -top-32 -left-20"></div>
      <div className="blur-blob bg-secondary-500/20 w-80 h-80 -bottom-40 -right-20"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots text-primary-300/10 mix-blend-overlay"></div>
      
      <div className="relative text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-extrabold mb-3 text-white">{title}</h3>
        <p className="text-white mb-8 text-base">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => {
            // Primary button styling
            if (button.variant === "default") {
              return (
                <Button 
                  key={index}
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-500 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href={button.href} className="flex items-center">
                    {button.text}
                    {button.icon && <ArrowRight size={16} className="ml-2 animate-pulse" />}
                  </Link>
                </Button>
              );
            }
            
            // Outline button styling
            return (
              <Button 
                key={index}
                size="lg" 
                variant="outline" 
                className="border-primary-400 text-primary-100 hover:bg-primary-700/40 hover:border-primary-300 transition-all duration-300"
                asChild
              >
                <Link href={button.href}>
                  {button.text}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}