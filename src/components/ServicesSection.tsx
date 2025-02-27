"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { 
  Megaphone, 
  Video, 
  Palette, 
  Paintbrush, 
  Code 
} from "lucide-react";
import { SiInstagram } from "react-icons/si";

// Map de ícones para os serviços
const iconMap = {
  Megaphone: Megaphone,
  Video: Video,
  Palette: Palette,
  Instagram: SiInstagram,
  Paintbrush: Paintbrush,
  Code: Code
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Layout para o grid bento (diferentes tamanhos)
  const serviceLayout = [
    "col-span-1 md:col-span-2 row-span-2", // Marketing Digital (grande)
    "col-span-1 row-span-1", // Vídeo & Foto (pequeno)
    "col-span-1 row-span-1", // Branding (pequeno)
    "col-span-1 row-span-1", // Social Media (médio)
    "col-span-1 row-span-1", // Design Gráfico (médio)
    "col-span-1 md:col-span-2 row-span-1", // Web Development (grande horizontal)
  ];

  // Cores para os cards
  const cardColors = [
    "from-primary-700 to-primary-900", // Verde escuro
    "from-secondary-600 to-secondary-800", // Terroso
    "from-gray-800 to-gray-900", // Preto/cinza
    "from-primary-600 to-primary-800", // Verde médio
    "from-black to-primary-900/50", // Preto com verde
    "from-secondary-700 to-secondary-900", // Terroso mais escuro
  ];

  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="services" ref={ref}>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços <span className="text-primary-400">Inovadores</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Com soluções criativas, ajudamos marcas a se destacarem e se conectarem 
            com o que há de mais atual no mundo digital.
          </p>
        </motion.div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`${serviceLayout[index]} bento-item bg-gradient-to-br ${cardColors[index]} p-6 md:p-8`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div>
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ 
                        scale: 1.1, 
                        transition: { duration: 0.3 }
                      }}
                    >
                      {IconComponent && <IconComponent size={24} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      {service.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={`/servicos/${service.id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 mt-4 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            href="/servicos" 
            className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors shadow-lg group"
          >
            Ver todos os serviços
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </motion.div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 -z-10">
        <motion.div 
          className="w-full h-full bg-primary-800/20 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4 -z-10">
        <motion.div 
          className="w-full h-full bg-secondary-700/10 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }}
        />
      </div>
    </section>
  );
}