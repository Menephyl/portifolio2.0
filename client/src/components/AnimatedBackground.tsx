import { motion } from "framer-motion";
import { memo, useMemo } from "react";

// Constantes extraídas para evitar recriação
const ATOM_COUNT = 6;
const LINE_COUNT = 8;

const containerVariants = {
  animate: {
    y: [0, -50, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

function AnimatedBackground() {
  // Memoizar arrays para evitar recriação em cada render
  const atoms = useMemo(() => Array.from({ length: ATOM_COUNT }, (_, i) => i), []);
  const lines = useMemo(() => Array.from({ length: LINE_COUNT }, (_, i) => i), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/react-particles-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
          }}
          variants={containerVariants}
          animate="animate"
        />
      </div>

      {/* Floating atoms */}
      {atoms.map((i) => (
        <motion.div
          key={`atom-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
            border: "1px solid rgba(6, 182, 212, 0.2)",
            willChange: "transform",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {/* Orbiting electrons */}
          <motion.div
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              top: "50%",
              left: "50%",
              willChange: "transform",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="absolute w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" 
              style={{ 
                transform: "translate(-50%, -50%) translateX(60px)",
              }} 
            />
          </motion.div>

          <motion.div
            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              willChange: "transform",
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" 
              style={{ 
                transform: "translate(-50%, -50%) translateY(-60px)",
              }} 
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Glowing lines connecting atoms */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${10 + i * 12}%`}
            y1="20%"
            x2={`${20 + i * 12}%`}
            y2="80%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default memo(AnimatedBackground);
