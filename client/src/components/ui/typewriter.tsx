import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

export function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBeforeDelete = 2000,
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const fullText = texts[currentTextIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBeforeDelete,
  ]);

  return (
    <span className="relative">
      <span className="bg-gradient-to-r from-slate-100 via-cyan-300 to-slate-300 bg-clip-text text-transparent">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-[#00D2FF] shadow-[0_0_12px_rgba(0,210,255,0.9)] ml-1 align-middle"
      />
    </span>
  );
}
