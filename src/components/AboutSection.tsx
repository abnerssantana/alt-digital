"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Sparkles,
  Lightbulb,
  Users,
  RefreshCw
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Ícones para os valores
  const valueIcons = {
    "Criatividade": <Sparkles className="w-5 h-5 text-primary-400" />,
    "Parceria Autêntica": <Users className="w-5 h-5 text-primary-400" />,
    "Inovação Constante": <RefreshCw className="w-5 h-5 text-primary-400" />
  };

  // Variantes para animação
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
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-primary-800/20" id="about">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Texto */}
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-secondary-500/50 text-secondary-500 animated-border">
                <span>Nosso DNA</span>
              </Badge>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-primary-400">Rebelde</span> por natureza
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-8 text-white/90"
            >
              "{siteConfig.manifesto.archetype.tagline}"
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <Card className="bg-background/30 backdrop-blur-sm border-primary-400/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-primary-400 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Missão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {siteConfig.manifesto.mission}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/30 backdrop-blur-sm border-primary-400/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-primary-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Visão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {siteConfig.manifesto.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-400 text-primary-400 hover:bg-primary-400/10 group" 
                asChild
              >
                <Link href="/sobre" className="flex items-center">
                  Conheça nossa história
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Valores */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary-400/5 blur-3xl"
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
            
            <Card className="bg-gradient-to-br from-black/60 to-primary-800/40 backdrop-blur-sm rounded-2xl border-primary-400/10 shadow-xl overflow-hidden">
              <CardHeader className="pb-2 relative">
                <motion.div 
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary-900/50 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-3xl font-bold text-primary-400">≠</span>
                </motion.div>
                
                <CardTitle className="text-2xl font-semibold flex items-center">
                  <span className="text-4xl mr-2 text-primary-400">≠</span>
                  <span>Nossos Valores</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-8 mt-4">
                  {siteConfig.manifesto.values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center mt-1 group-hover:bg-primary-800/70 transition-colors">
                          {valueIcons[value.title]}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1 text-primary-300 group-hover:text-primary-200 transition-colors">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">{value.description}</p>
                        </div>
                      </div>
                      
                      {index < siteConfig.manifesto.values.length - 1 && (
                        <div className="w-full h-px bg-gradient-to-r from-primary-400/20 via-primary-400/10 to-transparent mt-4"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Padrão de fundo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 z-0 pattern-dots text-primary-400"></div>
    </section>
  );
}