"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Megaphone,
  Video,
  Palette,
  Paintbrush,
  Code,
  PencilRuler,
  ArrowUpRight,
  QrCode
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { VideoShowcase } from "./VideoShowcase";
import { BrandingCard } from "./BrandingCard";

// Map icons to services
const iconMap: Record<string, React.ElementType> = {
  Megaphone,
  Video,
  Palette,
  Instagram: SiInstagram,
  Paintbrush,
  Code
};

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Background parallax effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Generate code lines for the code animation card
  useEffect(() => {
    const lines = [
      `// Alt Digital - Framework Web`,
      `function createSite(cliente) {`,
      `  // Captura a essência da marca`,
      `  const identidade = construirIdentidade(cliente.valores);`,
      `  const experiencia = criarExperiencia(cliente.publico);`,
      `  `,
      `  // Implementa componentes específicos`,
      `  const componentes = {`,
      `    design: { responsive: true, moderno: true },`,
      `    performance: { score: 98, seo: "otimizado" },`,
      `    marketing: integrarEstrategias(cliente.objetivos)`,
      `  };`,
      `  `,
      `  return {`,
      `    ...componentes,`,
      `    identidade,`,
      `    experiencia,`,
      `    lancamento: () => altDigital.deploy(cliente.nome)`,
      `  };`,
      `}`,
      ``,
      `// Iniciando projeto para o cliente`,
      `const seuProjeto = createSite({`,
      `  nome: "Sua Marca",`,
      `  valores: ["autenticidade", "inovação"],`,
      `  publico: "conectado",`,
      `  objetivos: ["conversão", "engajamento"]`,
      `});`,
      ``,
      `// Lançando seu site para o mundo`,
      `seuProjeto.lancamento(); // Site no ar!`
    ];

    setCodeLines(lines);
  }, []);

  // Animate code typing effect
  useEffect(() => {
    if (codeLines.length === 0) return;

    // Start from the beginning when we reach the end
    if (currentLine >= codeLines.length) {
      const resetTimer = setTimeout(() => {
        setCurrentLine(0);
      }, 3000); // Wait 3 seconds before resetting
      return () => clearTimeout(resetTimer);
    }

    // Typing effect with variable timing based on line content
    const timer = setTimeout(() => {
      setCurrentLine(prev => {
        const newLine = prev + 1;
        return newLine;
      });
    },
      // Add different timing based on line content or position
      codeLines[currentLine]?.includes('//') ? 900 : // Comments display longer
        codeLines[currentLine]?.trim() === '' ? 600 :    // Empty lines are quicker
          codeLines[currentLine]?.includes('launch') ? 1500 : // Dramatic pause at launch
            currentLine >= codeLines.length - 3 ? 1500 :     // Slow down at the end
              800);                                           // Regular lines

    return () => clearTimeout(timer);
  }, [currentLine, codeLines]);

  // Calculate parallax effect with mouse
  const calculateParallax = useCallback((factor = 0.02, index = 0) => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x: x + (index * 2), y: y + (index * 1) };
  }, [mousePosition]);

  // Animation variants
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

  // Mouse effect handler
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Badges that float in the page
  const floatingBadges = [
    { icon: <QrCode size={14} />, text: "Inovação digital", delay: 0.2 },
    { icon: <Palette size={14} />, text: "Design criativo", delay: 0.8 },
    { icon: <Code size={14} />, text: "Desenvolvimento Web", delay: 1.5 }
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 relative overflow-hidden bg-primary-500/10 bg-gradient-to-b from-background to-background/80"
      id="servicos"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradients */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            x: calculateParallax(0.02).x,
            y: calculateParallax(0.02).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-60 -right-20 bg-secondary-700/10 rounded-full blur-3xl"
          animate={{
            x: calculateParallax(-0.01).x,
            y: calculateParallax(-0.01).y,
          }}
          transition={{ type: "spring", damping: 25 }}
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
                <PencilRuler size={14} className="mr-2 text-primary-400" />
                <span>Serviços Inovadores
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções <span className="text-primary-400">criativas</span> para desafios
              <span className="gradient-text"> digitais</span>
            </h2>

            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto px-4">
              Com abordagens disruptivas, ajudamos marcas a se destacarem e se conectarem
              com o que há de mais atual no universo digital.
            </p>

            {/* Floating badges */}
            <div className="relative mt-12 hidden md:block h-16">
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

          {/* Bento Grid */}
          <div className="md:px-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(160px,auto)]"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Marketing Digital */}
              <motion.div
                variants={itemVariants}
                className="col-span-12 md:col-span-6 row-span-2"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border-secondary-600/30 bg-gradient-to-br from-[#6A5ACD] via-[#7B68EE] to-[#4169E1] text-white relative">
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                      repeatType: 'reverse'
                    }}
                    style={{
                      backgroundImage: `
          radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at bottom right, rgba(0,0,0,0.1) 0%, transparent 50%)
        `,
                      backgroundSize: '200% 200%'
                    }}
                  />

                  <div className="h-full flex flex-col justify-between relative z-10 p-6 md:p-8">
                    <div>
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        {iconMap.Megaphone && (
                          <iconMap.Megaphone
                            size={32}
                            className="text-white/90"
                          />
                        )}
                      </motion.div>

                      <motion.h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {siteConfig.services[0].title}
                      </motion.h3>

                      <motion.p
                        className="text-base text-white/90 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {siteConfig.services[0].description}
                      </motion.p>

                      <motion.p
                        className="text-white/80 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Estratégias omnichannel para fortalecer a presença digital da sua marca.
                      </motion.p>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="mt-6"
                    >
                      <Link
                        href={`/servicos/${siteConfig.services[0].id}`}
                        className="inline-flex items-center text-sm text-white hover:text-white/80 group"
                      >
                        Saiba mais
                        <ArrowRight
                          size={14}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </motion.div>

                    {/* Floating abstract shapes */}
                    <motion.div
                      className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/5 blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 20, 0],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                </Card>
              </motion.div>

              {/* Video Showcase */}
              <VideoShowcase variants={itemVariants} />

              <BrandingCard
                variants={itemVariants}
                iconMap={iconMap}
              />

              {/* Social Media */}
              <motion.div
                variants={itemVariants}
                className="col-span-12 md:col-span-4 row-span-1"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border-pink-500/30 bg-gradient-to-br from-[#C13584] via-[#F56040] to-[#FFDC80]">
                  <div className="h-full flex flex-col justify-between relative z-10 p-6 text-white">
                    <div>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      >
                        {iconMap.Instagram && <iconMap.Instagram size={24} className="text-white" />}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                      <p className="text-sm text-white/90">
                        Criação de conteúdo envolvente e estratégias de storytelling para conexão autêntica com seu público.
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4"
                    >
                      <Link
                        href={`/servicos/${siteConfig.services[3].id}`}
                        className="inline-flex items-center text-sm text-white hover:text-white/80 group"
                      >
                        Saiba mais
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              {/* Design Gráfico - UPDATED */}
              <motion.div
                variants={itemVariants}
                className="col-span-12 md:col-span-4 row-span-2"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border-primary-400/20 relative p-0">
                  {/* Full-width/height image container */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/design-showcase.jpg"
                      alt="Design Gráfico"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={100}
                      className="object-cover object-center"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative h-full z-10 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-auto"
                    >
                      <motion.div
                        className="w-10 h-10 rounded-full bg-primary-400/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      >
                        {iconMap.Paintbrush && <iconMap.Paintbrush size={20} className="text-primary-300" />}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold mb-2 text-white">{siteConfig.services[4].title}</h3>
                      <p className="text-sm text-white/90 mb-4">
                        Peças visuais que comunicam sua essência e elevam sua marca.
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/servicos/${siteConfig.services[4].id}`}
                          className="inline-flex items-center text-sm text-primary-300 hover:text-primary-200 group"
                        >
                          Saiba mais
                          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              {/* Code Animation */}
              <motion.div
                variants={itemVariants}
                className="col-span-12 md:col-span-8 row-span-1"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border-secondary-700/30 bg-gradient-to-br from-black to-zinc-900 p-0">
                  <div className="h-full flex flex-col relative">
                    <div className="flex items-center bg-zinc-900 px-4 py-2 border-b border-zinc-800">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-xs text-zinc-400">web-development.js</div>
                    </div>

                    <div className="flex-1 p-6 font-mono text-sm overflow-hidden">
                      <div className="relative">
                        {codeLines.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: index <= currentLine ? 1 : 0,
                              x: index <= currentLine ? 0 : -10
                            }}
                            transition={{ duration: 0.5 }}
                            className={cn(
                              "whitespace-pre",
                              line.includes("//") ? "text-zinc-500" : "",
                              line.includes("function") ? "text-primary-400" : "",
                              line.includes("const ") ? "text-primary-300" : "",
                              line.includes('"') || line.includes("'") ? "text-secondary-300" : "",
                              line.includes("return") ? "text-primary-400" : "",
                              line.includes("launch") ? "text-primary-300 font-semibold" : ""
                            )}
                          >
                            {line || "\u00A0"}
                          </motion.div>
                        ))}
                        <motion.div
                          className="absolute bottom-0 left-0 w-2 h-4 bg-primary-400"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    <div className="p-6 border-t border-zinc-800">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                          <h3 className="text-xl font-semibold">Web Development</h3>
                          <p className="text-sm text-zinc-400 mb-3 md:mb-0">
                            Sites responsivos e aplicações web com foco em UX e performance
                          </p>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{
                            opacity: currentLine >= codeLines.length - 3 ? 1 : 0,
                            scale: currentLine >= codeLines.length - 3 ? 1 : 0.9
                          }}
                          transition={{ duration: 0.5 }}
                          className="bg-primary-800/50 rounded-lg px-4 py-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-primary-300 font-mono">Site lançado com sucesso!</span>
                          </div>
                        </motion.div>

                        <Link
                          href={`/servicos/${siteConfig.services[5].id}`}
                          className="flex items-center justify-center w-10 h-10 bg-primary-800/50 rounded-full hover:bg-primary-800 transition-colors mt-3 md:mt-0 ml-auto md:ml-0"
                        >
                          <ArrowUpRight size={16} className="text-primary-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center mt-16"
              >
                <Button
                  className="bg-primary hover:bg-primary-600 text-white group px-8 w-full sm:w-fit"
                  size="lg"
                  asChild
                >
                  <Link href="/servicos" className="inline-flex items-center">
                    <span>Ver todos os serviços</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </motion.div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 -z-10">
            <motion.div
              className="w-full h-full bg-primary-800/10 blur-3xl rounded-full"
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
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 -z-10">
        <motion.div
          className="w-full h-full bg-primary-800/10 blur-3xl rounded-full"
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