import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Shield, Server } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      id="about" 
      className="py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 professional-text">
            About Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            variants={slideLeftVariants}
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate cybersecurity student and full-stack developer with a deep interest in 
              building secure, innovative applications. My journey bridges the gap between robust 
              development practices and cutting-edge security protocols.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With expertise spanning from frontend technologies to backend security implementations, 
              I focus on creating digital experiences that are not only user-friendly but also 
              fortified against modern cyber threats.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in penetration testing, 
              network security, and encryption technologies - always staying ahead of the curve 
              in our ever-evolving digital landscape.
            </p>
          </motion.div>

          {/* Animated illustration */}
          <motion.div variants={slideRightVariants}>
            <Card className="professional-card p-8 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-center items-center gap-8 mb-8">
                  <motion.div 
                    className="relative"
                    animate={{ 
                      y: [-10, 10, -10],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Code2 className="w-16 h-16 text-primary" />
                    <motion.div 
                      className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                  <div className="text-4xl font-bold text-accent">+</div>
                  <motion.div 
                    className="relative"
                    animate={{ 
                      y: [-8, 12, -8],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Shield className="w-16 h-16 text-accent" />
                    <motion.div 
                      className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Developer + Security Expert
                </h3>
                
                <p className="text-muted-foreground">
                  Crafting secure applications with modern technologies
                </p>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Server className="absolute top-4 right-4 w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [-3, 7, -3],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Code2 className="absolute bottom-4 left-4 w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [-4, 6, -4],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <Shield className="absolute top-1/2 left-8 w-4 h-4" />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;