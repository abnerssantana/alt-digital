"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Quote,
  ArrowLeft,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = siteConfig.testimonials;

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotation functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change testimonial every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextTestimonial]);

  // Pause auto-rotation when user interacts
  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    
    // Restart auto-rotation after 10 seconds of inactivity
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

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

  return (
    <section
      ref={ref}
      className="py-24 px-4 relative overflow-hidden bg-primary-900/10"
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full animated-border text-primary-400 mb-4">
              <MessageCircle size={14} className="mr-2 text-primary-400" />
              <span>Histórias de Sucesso</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>

          <p className="text-muted-foreground text-base px-8">
            Transformações autênticas e resultados que falam por si. Nossos clientes
            compartilham suas experiências de trabalhar com a Alt Digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          {/* Testimunho Principal */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-8 lg:col-span-9"
          >
            <Card className="h-full bg-primary-800/10 border-primary-400/20 shadow-md">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Quote className="text-primary-400 w-12 h-12 mb-6 opacity-40" />
                  <motion.p
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-base md:text-1xl mb-8 text-foreground"
                  >
                    {testimonials[activeTestimonial].quote}
                  </motion.p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-primary-400">
                      <Image
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].author}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        {testimonials[activeTestimonial].author}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="text-xs text-primary-400 hover:text-primary-500"
                    >
                      {isAutoPlaying ? "Pausar" : "Auto-play"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Miniatura de depoimentos */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                onClick={() => handleManualNavigation(() => setActiveTestimonial(index))}
                className={`
                  cursor-pointer transition-all duration-300 
                  ${index === activeTestimonial
                    ? 'border-primary-400 bg-primary-100/5'
                    : 'border-border bg-background/30 hover:border-primary-400/50'}
                `}
              >
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Controles de navegação */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 flex justify-center space-x-4 mt-8"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="border-primary-400/50 text-primary-400 hover:bg-primary-100/10"
            >
              <ArrowLeft size={16} />
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(() => setActiveTestimonial(index))}
                  className={`
                    h-2 rounded-full transition-all 
                    ${index === activeTestimonial
                      ? 'bg-primary-400 w-6'
                      : 'bg-primary-200/30 w-2'}
                  `}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="border-primary-400/50 text-primary-400 hover:bg-primary-100/10"
            >
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}