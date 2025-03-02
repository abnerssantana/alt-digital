import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FooterCTA() {
  const { title, description, buttons } = siteConfig.footer.cta;
  
  return (
    <div className="bg-primary-400 backdrop-blur-sm p-8 rounded-2xl mb-16">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => (
            <Button 
              key={index}
              size="lg" 
              variant={button.variant as "link" | "default" | "destructive" | "outline" | "secondary" | "ghost"}
              className={button.className}
              asChild
            >
              <Link href={button.href} className={button.icon ? "flex items-center" : ""}>
                {button.text}
                {button.icon && <ArrowRight size={16} className="ml-2" />}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}