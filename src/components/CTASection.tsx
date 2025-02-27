"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-primary-800/80 via-primary-800/60 to-primary-700/60 backdrop-blur-sm border-primary-400/20 shadow-xl overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-1/3 h-full">
              <motion.div 
                className="absolute top-0 right-0 w-full h-full opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7BAC80" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#B9762A" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M0,0 L100,0 L100,100 L80,100 C50,80 90,50 0,100 Z" fill="url(#grad1)" />
                </svg>
              </motion.div>
            </div>

            <div className="relative z-10">
              <CardHeader className="text-center pb-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center mb-3"
                >
                  <span className="inline-block p-2 bg-primary-400/20 rounded-full">
                    <Sparkles className="h-6 w-6 text-primary-300" />
                  </span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                    Vamos criar algo <span className="text-primary-400">incrível</span> juntos
                  </CardTitle>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CardDescription className="text-lg max-w-2xl mx-auto text-muted-foreground">
                    Entre em contato para discutir seu projeto ou assine nossa newsletter 
                    para receber novidades e inspiração diretamente em sua caixa de entrada.
                  </CardDescription>
                </motion.div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Card className="border-primary-400/10 bg-black/30 h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">Inicie seu projeto</CardTitle>
                        <CardDescription>
                          Agende uma conversa com nossa equipe para discutir suas necessidades
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button 
                          className="w-full bg-primary-400 hover:bg-primary-500 text-white group"
                          asChild
                        >
                          <Link href="/contato" className="flex items-center justify-center">
                            Fale Conosco
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Card className="border-primary-400/10 bg-black/30 h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">Assine nossa newsletter</CardTitle>
                        <CardDescription>
                          Receba conteúdos exclusivos, insights e tendências
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <div className="flex w-full">
                          <Input 
                            type="email" 
                            placeholder="Seu e-mail" 
                            className="rounded-r-none focus-visible:ring-primary-400/50 border-r-0"
                          />
                          <Button 
                            className="rounded-l-none bg-primary-400 hover:bg-primary-500 text-white"
                          >
                            <Send size={16} />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
      
      {/* Efeitos de fundo */}
      <motion.div 
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-primary-400/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </section>
  );
}