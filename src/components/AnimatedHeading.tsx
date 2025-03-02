import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { Variants } from "framer-motion";

interface AnimatedHeadingProps {
  itemVariants?: Variants;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ itemVariants }) => {
  // Estado para controlar a animação de digitação
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedGradient, setTypedGradient] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  
  const text1 = "A (ALT)ERNATIVA";
  const text2 = "PARA QUEM PENSA";
  const gradientText = "DIFERENTE";
  
  const cursorRef = useRef(null);
  
  // Função para animar o efeito de cursor piscando
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  // Efeito de digitação para a primeira linha
  useEffect(() => {
    if (typedText1.length < text1.length) {
      const timeout = setTimeout(() => {
        setTypedText1(text1.substring(0, typedText1.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText2.length < text2.length) {
      // Começar a digitar a segunda linha quando a primeira terminar
      const timeout = setTimeout(() => {
        setTypedText2(text2.substring(0, typedText2.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedGradient.length < gradientText.length) {
      // Começar a digitar a palavra com gradiente quando a segunda linha terminar
      const timeout = setTimeout(() => {
        setTypedGradient(gradientText.substring(0, typedGradient.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Animação concluída
      setIsComplete(true);
    }
  }, [typedText1, typedText2, typedGradient]);
  
  // Efeito de highlight para a palavra ALT
  const highlightAlt = (text: string) => {
    if (!text.includes("(ALT)")) return text;
    
    const parts = text.split("(ALT)");
    return (
      <>
        {parts[0]}
        <motion.span 
          className="text-primary-400 relative"
          animate={{ 
            textShadow: isComplete 
              ? ["0 0 5px rgba(123, 172, 128, 0)", "0 0 10px rgba(123, 172, 128, 0.7)", "0 0 5px rgba(123, 172, 128, 0)"] 
              : "none"
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2 
          }}
        >
          (ALT)
        </motion.span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.h1 
      variants={itemVariants}
      className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight mb-6 relative"
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <span>{highlightAlt(typedText1)}</span>
          {typedText1.length === text1.length && typedText2.length === 0 && (
            <motion.span 
              ref={cursorRef}
              className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary-400 ml-1"
              animate={{ opacity: isCursorVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
        
        <div className="flex items-center mt-2">
          <span>{typedText2}</span>
          {typedText1.length === text1.length && typedText2.length === text2.length && typedGradient.length === 0 && (
            <motion.span 
              ref={cursorRef}
              className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary-400 ml-1"
              animate={{ opacity: isCursorVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
        
        <div className="flex items-center mt-2">
          {typedGradient && (
            <motion.span 
              className="gradient-text"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)",
                textShadow: isComplete 
                  ? ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"] 
                  : "none"
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                filter: { duration: 0.5 },
                textShadow: { repeat: Infinity, duration: 3 }
              }}
            >
              {typedGradient}
            </motion.span>
          )}
          {typedText2.length === text2.length && typedGradient.length < gradientText.length && (
            <motion.span 
              ref={cursorRef}
              className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary-400 ml-1"
              animate={{ opacity: isCursorVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
      </div>
      
      {isComplete && (
        <motion.div 
          className="absolute -inset-1 -z-10 opacity-20"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            filter: ["blur(8px)", "blur(10px)", "blur(8px)"]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            repeatType: "mirror"
          }}
        >
          <span className="gradient-text text-3xl md:text-5xl lg:text-4xl font-bold">
            A (ALT)ERNATIVA
            <br className="hidden md:block" /> PARA QUEM PENSA 
            <span> DIFERENTE</span>
          </span>
        </motion.div>
      )}
    </motion.h1>
  );
};

export default AnimatedHeading;