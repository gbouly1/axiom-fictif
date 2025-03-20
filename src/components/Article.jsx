import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Article = ({ title, description }) => {
  // Référence pour l'élément parent
  const ref = useRef(null);

  // Utilisation de useScroll pour détecter la position de défilement
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Commence quand le haut de l'élément atteint le bas de la fenêtre, se termine quand le bas de l'élément atteint le haut de la fenêtre
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]); // Le titre monte plus rapidement
  const descY = useTransform(scrollYProgress, [0, 1], [0, -50]); // La description monte plus lentement

  // Animation lettre par lettre pour le titre
  const titleAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Animation mot par mot pour la description
  const descriptionAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Fonction pour diviser le texte en mots
  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordAnimation}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <div className="w-1/2 bg-[#020202] flex items-center relative" ref={ref}>
      <div className="pl-15 text-white w-2/3">
        {/* Titre avec animation lettre par lettre + parallaxe */}
        <motion.h2
          className="text-4xl mb-4 font-[Helvetica] absolute top-[15%]"
          style={{ y: titleY }} // Effet parallaxe
          variants={titleAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Array.from(title).map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Description avec animation mot par mot + parallaxe */}
        <motion.p
          className="font-[Helvetica] text-xl font-thin"
          style={{ y: descY }} // Effet parallaxe
          variants={descriptionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {splitWords(description)}
        </motion.p>
      </div>
    </div>
  );
};

export default Article;
