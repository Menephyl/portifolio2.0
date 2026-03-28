import { motion, useReducedMotion } from "framer-motion";
import { memo, useMemo } from "react";

const ATOM_COUNT = 6;
const LINE_COUNT = 8;

function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const atoms = useMemo(() => Array.from({ length: ATOM_COUNT }, (_, i) => i), []);
  const lines = useMemo(() => Array.from({ length: LINE_COUNT }, (_, i) => i), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-cyan-950/20" />

      {/* Floating atoms */}
      {atoms.map((i) => (
        <motion.div
          key={`atom-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `radial-gradient(circle, rgba(0, 209, 255, 0.05) 0%, transparent 70%)`,
            border: "1px solid rgba(0, 209, 255, 0.1)",
            willChange: "transform",
          }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.5 }
              : {
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 15 : -15, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }
          }
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {/* Orbiting electrons */}
          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute w-2 h-2 bg-primary rounded-full"
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
                  className="absolute w-2 h-2 bg-[#00D1FF] rounded-full shadow-[0_0_10px_rgba(0,209,255,0.8)]"
                  style={{
                    transform: "translate(-50%, -50%) translateX(60px)",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute w-2 h-2"
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
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  style={{
                    transform: "translate(-50%, -50%) translateY(-60px)",
                  }}
                />
              </motion.div>
            </>
          )}
        </motion.div>
      ))}

      {/* Glowing lines connecting atoms */}
      {!prefersReducedMotion && (
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
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
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}

export default memo(AnimatedBackground);
