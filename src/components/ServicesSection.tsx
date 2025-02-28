"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Megaphone, 
  Video, 
  Palette, 
  Paintbrush, 
  Code,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";

// Map de ícones para os serviços
const iconMap: { [key: string]: React.ComponentType<{ size: number; className: string }> } = {
  Megaphone,
  Video,
  Palette,
  Instagram: SiInstagram,
  Paintbrush,
  Code
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Transformações baseadas no scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Calcular movimento parallax com mouse
  const calculateParallax = (factor = 0.02, index = 0) => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x: x + (index * 2), y: y + (index * 1) };
  };

  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // Efeito do mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const floatingBadges = [
    { icon: <Sparkles size={14} />, text: "Inovação digital", delay: 0.4 },
    { icon: <Palette size={14} />, text: "Design criativo", delay: 0.8 },
    { icon: <Code size={14} />, text: "Desenvolvimento premium", delay: 1.2 }
  ];

  // Cores de fundo explícitas para garantir que cada card tenha uma cor
  const cardBackgrounds = [
    "bg-primary-700", // Verde escuro
    "bg-secondary-600", // Terroso
    "bg-gray-800", // Preto/cinza
    "bg-primary-600", // Verde médio
    "bg-primary-900", // Verde escuro
    "bg-secondary-700" // Terroso escuro
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 relative overflow-hidden" 
      id="services" 
      onMouseMove={handleMouseMove}
    >
      {/* Gradientes de fundo animados */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-primary-800/30 rounded-full blur-3xl"
          animate={{
            x: calculateParallax(0.02).x,
            y: calculateParallax(0.02).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-60 -right-20 bg-secondary-700/20 rounded-full blur-3xl"
          animate={{
            x: calculateParallax(-0.01).x,
            y: calculateParallax(-0.01).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
      </motion.div>

      {/* Padrão de pontos */}
      <div className="absolute inset-0 z-0 opacity-10 pattern-dots text-primary-400"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full text-primary-400 mb-4 border-primary-400/50">
              <Sparkles size={14} className="mr-2 text-primary-400" />
              <span>Serviços Inovadores</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluções <span className="text-primary-400">criativas</span> para desafios
              <span className="text-primary-400"> digitais</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Com abordagens disruptivas, ajudamos marcas a se destacarem e se conectarem 
              com o que há de mais atual no universo digital.
            </p>

            {/* Badges flutuantes */}
            <div className="relative mt-8 hidden md:block">
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: badge.delay,
                    duration: 0.5
                  }}
                  className="absolute"
                  style={{ 
                    left: `${index * 30 + 15}%`, 
                    top: `${index * 10}px` 
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5 + index, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <div className="inline-flex items-center rounded-full bg-background/50 backdrop-blur-sm border border-primary-400/20 text-xs py-1.5 px-3">
                      <span className="mr-1.5">{badge.icon}</span>
                      {badge.text}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Grid Bento */}
          <div className="px-4 md:px-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Marketing Digital (grande) */}
              <motion.div
                key={siteConfig.services[0].id}
                variants={itemVariants}
                className={`col-span-12 md:col-span-8 row-span-2 rounded-xl overflow-hidden shadow-lg ${cardBackgrounds[0]}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-6 md:p-8">
                  <div>
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {iconMap.Megaphone && <iconMap.Megaphone size={24} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl md:text-3xl font-semibold mb-3">{siteConfig.services[0].title}</h3>
                    <p className="text-lg text-white/80 max-w-lg mb-4">
                      {siteConfig.services[0].description}
                    </p>
                    <p className="text-white/60 text-sm max-w-md">
                      Desenvolvemos estratégias omnichannel para fortalecer a presença digital da sua marca e gerar resultados tangíveis.
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6"
                  >
                    <Link 
                      href={`/servicos/${siteConfig.services[0].id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  {/* Elemento decorativo */}
                  <motion.div 
                    className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary-400/10 blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              {/* Vídeo & Foto */}
              <motion.div
                key={siteConfig.services[1].id}
                variants={itemVariants}
                className={`col-span-12 md:col-span-4 rounded-xl overflow-hidden shadow-lg ${cardBackgrounds[1]}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-6">
                  <div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {iconMap.Video && <iconMap.Video size={20} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{siteConfig.services[1].title}</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      {siteConfig.services[1].description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Link 
                      href={`/servicos/${siteConfig.services[1].id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Branding */}
              <motion.div
                key={siteConfig.services[2].id}
                variants={itemVariants}
                className={`col-span-6 md:col-span-4 rounded-xl overflow-hidden shadow-lg ${cardBackgrounds[2]}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-6">
                  <div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {iconMap.Palette && <iconMap.Palette size={20} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{siteConfig.services[2].title}</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      {siteConfig.services[2].description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Link 
                      href={`/servicos/${siteConfig.services[2].id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                key={siteConfig.services[3].id}
                variants={itemVariants}
                className={`col-span-6 md:col-span-4 rounded-xl overflow-hidden shadow-lg ${cardBackgrounds[3]}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-6">
                  <div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {iconMap.Instagram && <iconMap.Instagram size={20} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{siteConfig.services[3].title}</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      {siteConfig.services[3].description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Link 
                      href={`/servicos/${siteConfig.services[3].id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Design Gráfico */}
              <motion.div
                key={siteConfig.services[4].id}
                variants={itemVariants}
                className={`col-span-6 md:col-span-4 rounded-xl overflow-hidden shadow-lg ${cardBackgrounds[4]}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-6">
                  <div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {iconMap.Paintbrush && <iconMap.Paintbrush size={20} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{siteConfig.services[4].title}</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      {siteConfig.services[4].description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Link 
                      href={`/servicos/${siteConfig.services[4].id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Web Development */}
              <motion.div
                key={siteConfig.services[5].id}
                variants={itemVariants}
                className={`col-span-12 md:col-span-8 rounded-xl overflow-hidden shadow-lg ${cardBackgrounds[5]}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-6 md:p-8">
                  <div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      {iconMap.Code && <iconMap.Code size={20} className="text-primary-300" />}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{siteConfig.services[5].title}</h3>
                    <p className="text-sm text-white/80 max-w-md">
                      {siteConfig.services[5].description}
                      <span className="block mt-2 text-white/60">
                        Desenvolvemos sites responsivos, aplicações web e sistemas personalizados com foco em experiência do usuário e performance.
                      </span>
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Link 
                      href={`/servicos/${siteConfig.services[5].id}`}
                      className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  {/* Elemento decorativo */}
                  <motion.div 
                    className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-secondary-400/10 blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-16"
          >
            <Button
              className="bg-primary hover:bg-primary-600 text-white group px-8 py-6"
              asChild
            >
              <Link href="/servicos">
                <span className="text-base">Ver todos os serviços</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </motion.div>
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