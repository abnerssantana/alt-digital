"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  MousePointer, 
  ArrowDown,
  MessageSquare,
  Zap
} from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Transformações baseadas no scroll
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Detectar movimento do mouse para efeito parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cálculo para movimento parallax com mouse
  const calculateParallax = useMemo(() => {
    return (factor = 0.02) => {
      const x = (mousePosition.x - window.innerWidth / 2) * factor;
      const y = (mousePosition.y - window.innerHeight / 2) * factor;
      return { x, y };
    };
  }, [mousePosition]);

  // Animações dos elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatingBadges = [
    { icon: <MessageSquare size={14} />, text: "Estratégia criativa", delay: 0 },
    { icon: <Sparkles size={14} />, text: "Inovação disruptiva", delay: 0.8 },
    { icon: <Zap size={14} />, text: "Soluções digitais", delay: 1.6 }
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden">
      {/* Gradientes de fundo animados */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          className="blur-blob w-[500px] h-[500px] -top-20 -left-20 bg-primary-800/30"
          animate={{
            x: calculateParallax(0.02).x,
            y: calculateParallax(0.02).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
        <motion.div
          className="blur-blob w-[600px] h-[600px] -bottom-60 -right-20 bg-secondary-700/20"
          animate={{
            x: calculateParallax(-0.01).x,
            y: calculateParallax(-0.01).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
        <motion.div
          className="blur-blob w-[300px] h-[300px] top-1/3 right-1/4 bg-accent/10"
          animate={{
            x: calculateParallax(0.015).x,
            y: calculateParallax(0.015).y,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
      </motion.div>

      {/* Padrão de pontos */}
      <div className="absolute inset-0 z-0 opacity-10 pattern-dots text-primary-400"></div>

      {/* Conteúdo */}
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
                <Sparkles size={14} className="mr-2 text-primary-400" />
                <span>Agência Digital Criativa</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              A <span className="text-primary-400">(ALT)</span>ERNATIVA 
              <br className="hidden md:block" /> PARA QUEM PENSA 
              <span className="gradient-text"> DIFERENTE</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Não somos apenas mais uma agência digital. Rompemos com o comum, trazendo 
              uma abordagem disruptiva e criativa que desafia o padrão.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contato" 
                className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors shadow-lg h-10 sm:h-11 group"
              >
                <span>Iniciar projeto</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/portfolio" 
                className="inline-flex items-center justify-center rounded-md border border-primary-400 bg-transparent px-4 py-2 text-sm font-medium text-primary-400 hover:bg-primary-400/10 transition-colors h-10 sm:h-11"
              >
                <MousePointer size={16} className="mr-2" />
                <span>Ver portfólio</span>
              </Link>
            </motion.div>
            
            {/* Badges flutuantes */}
            <div className="relative mt-16 hidden md:block">
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
                    left: `${index * 30}%`, 
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
          </div>

            <motion.div
            style={{ y: y1 }}
            variants={itemVariants}
            className="relative hidden lg:block"
            >
            <div className="aspect-[9/16] relative rounded-2xl overflow-hidden border border-primary-400/20 shadow-xl w-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-800/50 via-transparent to-secondary-700/50 mix-blend-overlay z-10"></div>
              
              {/* Símbolo ≠ animado flutuando */}
              <motion.div 
              className="absolute inset-0 flex items-center justify-center z-20"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
              <span className="text-[300px] font-bold text-white/10">≠</span>
              </motion.div>
              
              {/* Imagem principal */}
              <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
              className="relative z-0 h-full"
              >
              <video 
                src="/altdigital.mp4" 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-fill"
              />
              </motion.div>
            </div>
            
            {/* Elementos decorativos */}
            <motion.div 
              className="absolute bottom-10 -left-10 p-4 bg-black border border-primary-400/20 rounded-lg shadow-lg z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <motion.span 
                className="text-xl font-bold text-primary-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                DISRUPTIVO
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 p-6 bg-black border border-secondary-400/20 rounded-full shadow-lg z-20"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 },
                rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" }
              }}
            >
              <span className="text-4xl font-bold text-secondary-400">≠</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity, y: y2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="text-primary-400/70" />
        </motion.div>
        <span className="text-xs text-muted-foreground mt-2">Scroll para explorar</span>
      </motion.div>
    </section>
  );
}