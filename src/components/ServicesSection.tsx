"use client";

import { useRef, useState, useCallback } from "react";
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
  QrCode
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VideoShowcase } from "./VideoShowcase";
import { BrandingCard } from "./BrandingCard";
import { WebDevelopmentCard } from "./WebDevelopmentCard";

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

  // Background parallax effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

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
    initial: { opacity: 0, y: 20 },
    animate: {
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

              {/* Web Development Card Component */}
              <WebDevelopmentCard variants={itemVariants} />
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