import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = ["Skills", "Confidence", "Projects", "Solutions"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container"><div className=" sliding-container p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        We Power Dreams <br />
        that help you develop{" "}
        <span className="inline-block relative h-[1em]">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 top-0 text-green-600 font-mono drop-shadow-md"
            >
              {rotatingWords[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
      <br />
      <p className="ideology-paragraph">
        GeeksforGeeks Student Chapter GIETU is a university-based community chapter
        creating a coding culture for students interested in Computer Science and other
        core technical competencies.
      </p>
      </div>
    </div>
  );
}
