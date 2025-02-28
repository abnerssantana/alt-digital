"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, FolderCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Configurações de animação
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Seção de Introdução */}
        <section 
          ref={ref} 
          className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-primary-900/10 to-background"
        >
          {/* Gradientes de fundo decorativos */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="blur-blob w-[500px] h-[500px] -top-20 -left-20 bg-primary-800/20"
              animate={{
                x: [0, 20, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="blur-blob w-[400px] h-[400px] bottom-0 right-1/4 bg-secondary-700/10"
              animate={{
                x: [0, -20, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>

          {/* Padrão de pontos */}
          <div className="absolute inset-0 z-0 opacity-10 pattern-dots text-primary-400"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-4">
                <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
                  <FolderCheck size={14} className="mr-2 text-primary-400" />
                  <span>Nossos Projetos</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={itemVariants} 
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Conheça nosso <span className="text-primary-400">portfólio</span> de 
                <span className="gradient-text"> trabalhos</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8"
              >
                Projetos que desafiam o comum e trazem resultados tangíveis para marcas 
                que buscam se destacar no cenário digital e criar conexões autênticas.
              </motion.p>

              {/* Estatísticas */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 mb-6"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">42+</span>
                  <span className="text-sm text-muted-foreground">Clientes Satisfeitos</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">127</span>
                  <span className="text-sm text-muted-foreground">Projetos Entregues</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">8</span>
                  <span className="text-sm text-muted-foreground">Prêmios Conquistados</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">4</span>
                  <span className="text-sm text-muted-foreground">Anos de Experiência</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button 
                  className="bg-primary hover:bg-primary-600 text-white group mt-4"
                  size="lg"
                  asChild
                >
                  <Link href="#contato" className="inline-flex items-center">
                    <span>Vamos criar juntos</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filtro e Grid de Projetos */}
        <PortfolioGrid />

        {/* CTA */}
        <section className="py-20 bg-primary-900/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
                <Sparkles size={14} className="mr-2" />
                <span>Vamos Trabalhar Juntos</span>
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para criar algo <span className="gradient-text">incrível</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para discutir seu projeto. Estamos ansiosos para 
                transformar suas ideias em experiências digitais impactantes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-600 text-white"
                  asChild
                >
                  <Link href="/contato" className="inline-flex items-center">
                    Iniciar Projeto
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-400 text-primary-400 hover:bg-primary-400/10"
                >
                  Ver Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}