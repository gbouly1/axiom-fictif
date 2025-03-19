import { motion } from "framer-motion";
import React from "react";

const Article = ({ title, description }) => {
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
    <div className="w-1/2 bg-[#020202] flex items-center relative">
      <div className="pl-15 text-white w-2/3">
        {/* Titre avec animation lettre par lettre */}
        <motion.h2
          className="text-5xl mb-4 absolute top-[15%]"
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

        {/* Description avec animation mot par mot */}
        <motion.p
          className="font-[Helvetica] text-2xl font-thin"
          variants={descriptionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {splitWords(description)}
        </motion.p>
      </div>
    </div>
  );
};

export default Article;
