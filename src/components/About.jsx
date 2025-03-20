import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const About = ({ description }) => {
  const [words, setWords] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    // Diviser la description en mots
    if (description) {
      setWords(description.split(" "));
    }
  }, [description]);

  return (
    <div ref={ref}>
      <div className="bg-[#020202] p-5">
        <p className="text-amber-50 font-[Helvetica]">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1, // Délai progressif pour chaque mot
                ease: "easeInOut",
              }}
              className="inline-block mr-1"
            >
              {word}{" "}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
