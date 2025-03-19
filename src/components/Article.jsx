import { motion } from "framer-motion";
import React from "react";

const Article = ({ title, description }) => {
  // Configuration des animations de texte
  const titleAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.06,
      },
    },
  };

  // Animation pour chaque lettre
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Animation pour chaque mot
  const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="w-1/2 bg-[#020202] flex items-center relative">
      <div className="pl-15 text-white w-2/3">
        <motion.h2
          className="text-4xl mb-4 font-[Helvetica] absolute top-[15%]"
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

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default Article;
