import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
}

export default function ReactParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particleCount = 50;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        orbitRadius: Math.random() * 30 + 10,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.y += particle.speedY;
        particle.orbitAngle += particle.orbitSpeed;

        // Wrap around screen
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Calculate orbit positions for electron-like effect
        const centerX = particle.x;
        const centerY = particle.y;

        // Draw nucleus (center atom)
        ctx.beginPath();
        ctx.arc(centerX, centerY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();

        // Draw orbiting electrons (3 electrons per atom)
        for (let i = 0; i < 3; i++) {
          const angle = particle.orbitAngle + (i * Math.PI * 2) / 3;
          const electronX = centerX + Math.cos(angle) * particle.orbitRadius;
          const electronY = centerY + Math.sin(angle) * particle.orbitRadius * 0.3;

          ctx.beginPath();
          ctx.arc(electronX, electronY, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity * 0.8})`;
          ctx.fill();
        }

        // Draw orbit paths
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          particle.orbitRadius,
          particle.orbitRadius * 0.3,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(6, 182, 212, ${particle.opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${
              (1 - distance / 150) * 0.1
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
