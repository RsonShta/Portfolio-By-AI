import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  variant?: "grid" | "particles" | "network" | "waves";
  className?: string;
}

const AnimatedBackground = ({ variant = "grid", className = "" }: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (variant === "particles" || variant === "network") {
      const particleCount = variant === "network" ? 25 : 50;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2
        });
      }
      setParticles(newParticles);

      const interval = setInterval(() => {
        setParticles(prev => prev.map(particle => ({
          ...particle,
          x: (particle.x + particle.vx + 100) % 100,
          y: (particle.y + particle.vy + 100) % 100,
        })));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [variant]);

  const renderGrid = () => (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
            <pattern
              id="gridGlow"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="60"
                cy="60"
                r="1"
                fill="hsl(var(--accent))"
                opacity="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#gridGlow)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5 animate-pulse-glow" />
    </div>
  );

  const renderParticles = () => (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.6)`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent animate-float" />
    </div>
  );

  const renderNetwork = () => (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 25) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${otherParticle.x}%`}
                  y2={`${otherParticle.y}%`}
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.5"
                  opacity={0.3 - distance / 100}
                />
              );
            }
            return null;
          })
        )}
      </svg>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent border border-accent/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * 2}px`,
            height: `${particle.size * 2}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px hsl(var(--accent) / 0.4)`,
            animation: `pulse-glow ${2 + Math.random() * 2}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );

  const renderWaves = () => (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--purple))" stopOpacity="0.08" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            className="animate-float"
            style={{ animationDuration: "8s" }}
          />
          <path
            d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
            fill="url(#wave2)"
            className="animate-float"
            style={{ animationDuration: "12s", animationDelay: "-2s" }}
          />
        </svg>
      </div>
    </div>
  );

  switch (variant) {
    case "particles":
      return renderParticles();
    case "network":
      return renderNetwork();
    case "waves":
      return renderWaves();
    default:
      return renderGrid();
  }
};

export default AnimatedBackground;