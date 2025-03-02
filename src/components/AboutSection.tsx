"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Dna,
  Lightbulb,
  Target,
  Compass,
  Rocket
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Mapeamento de ícones mais expressivos
  const valueIcons = {
    "Criatividade": <Rocket className="w-6 h-6 text-primary-400" />,
    "Parceria Autêntica": <Compass className="w-6 h-6 text-primary-400" />,
    "Inovação Constante": <Target className="w-6 h-6 text-primary-400" />
  };

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
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-primary-900 via-background to-secondary-900"
      id="sobre"
    >
      {/* Efeitos de fundo decorativos */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, rgba(123,172,128,0.1) 0%, transparent 50%),
            radial-gradient(circle at bottom right, rgba(157,96,59,0.1) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%'
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Coluna de Texto */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400">
                <Dna size={14} className="mr-2" />
                Nosso DNA Disruptivo
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Além do
                <span className="gradient-text"> Convencional</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Somos mais do que uma agência. Somos um movimento que desafia
                o status quo, reimaginando o potencial digital com uma abordagem
                verdadeiramente original e transformadora.
              </p>
            </motion.div>

            {/* Cartões de Missão e Visão */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              <Card className="bg-background/30 backdrop-blur-sm border-primary-400/10 p-6 space-y-4 hover:border-primary-400 transition-all">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-primary-300">Missão</h3>
                </div>
                <p className="text-muted-foreground">
                  {siteConfig.manifesto.mission}
                </p>
              </Card>

              <Card className="bg-background/30 backdrop-blur-sm border-primary-400/10 p-6 space-y-4 hover:border-primary-400 transition-all">
                <div className="flex items-center space-x-3">
                  <Compass className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-primary-300">Visão</h3>
                </div>
                <p className="text-muted-foreground">
                  {siteConfig.manifesto.vision}
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Coluna de Valores */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-primary-900/60 to-secondary-900/40 backdrop-blur-sm border-primary-400/10 p-8 space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-secondary-500">≠</span>
                <h3 className="text-2xl font-semibold">Nossos Valores</h3>
              </div>

              {siteConfig.manifesto.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.5 + (index * 0.2),
                    duration: 0.5
                  }}
                  className="group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="my-auto w-12 h-12">
                      {valueIcons[value.title as keyof typeof valueIcons]}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary-300 group-hover:text-primary-200 transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {index < siteConfig.manifesto.values.length - 1 && (
                    <div className="w-full h-px bg-gradient-to-r from-primary-400/20 via-primary-400/10 to-transparent mt-6"></div>
                  )}
                </motion.div>
              ))}
            </Card>

            {/* Efeitos decorativos */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-400/5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Botão de CTA */}
        <motion.div variants={itemVariants}>
              <Link
                href="/sobre"
                className="mt-8 inline-flex items-center justify-center rounded-md border border-primary-400 bg-transparent px-4 py-2 text-sm font-medium text-primary-400 hover:bg-primary-400/10 transition-colors h-10 w-full sm:h-11 sm:w-fit"
              >
                <span>Descubra nossa jornada</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
      </div>

      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots text-primary-400"></div>
      </div>
    </section>
  );
}