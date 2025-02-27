"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cálculo para movimento parallax suave
  const calculateParallax = (factor = 0.02) => {
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x, y };
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradientes de fundo animados */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="blur-blob w-[500px] h-[500px] -top-20 -left-20 bg-primary-700/30"
          animate={{
            x: calculateParallax(0.02).x,
            y: calculateParallax(0.02).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
        <motion.div
          className="blur-blob w-[600px] h-[600px] bottom-0 right-0 bg-secondary-700/20"
          animate={{
            x: calculateParallax(-0.01).x,
            y: calculateParallax(-0.01).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
      </div>

      {/* Linhas de grid para efeito visual */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#6a994e15_1px,transparent_1px),linear-gradient(to_bottom,#6a994e15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              A <span className="text-primary-400">(ALT)</span>ERNATIVA PARA 
              <br className="hidden md:block" /> QUEM PENSA DIFERENTE
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Não somos apenas mais uma agência digital. Rompemos com o comum, trazendo 
              uma abordagem disruptiva e criativa que desafia o padrão e cria experiências que realmente marcam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary-600" asChild>
                <Link href="/contato" className="flex items-center">
                  Inicie seu projeto
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/portfolio">
                  Ver portfólio
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700/50 via-transparent to-secondary-700/50 mix-blend-overlay"></div>
              
              {/* Símbolo ≠ animado flutuando */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <span className="text-[300px] font-bold text-white/10">≠</span>
              </motion.div>
              
              <img 
                src="/api/placeholder/600/600" 
                alt="Alt Digital - Agência Criativa" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decoração absoluta 1 */}
            <motion.div 
              className="absolute -bottom-10 -left-10 p-4 bg-black border border-primary/20 rounded-lg shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <span className="text-xl font-bold text-primary-400">DISRUPTIVO</span>
            </motion.div>
            
            {/* Decoração absoluta 2 */}
            <motion.div 
              className="absolute -top-6 -right-6 p-6 bg-black border border-secondary/20 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-4xl font-bold text-secondary-400">≠</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}