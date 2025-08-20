import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Shield } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg subtle-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{ top: '20%', left: '10%' }}
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div 
          className="absolute w-2 h-2 bg-accent rounded-full"
          style={{ top: '60%', left: '80%' }}
          animate={{ 
            y: [-15, 15, -15],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{ top: '30%', left: '70%' }}
          animate={{ 
            y: [-8, 8, -8],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            variants={itemVariants}
          >
            <motion.div
              variants={iconVariants}
              animate={floatAnimation}
            >
              <Code className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              animate={{
                ...floatAnimation,
                transition: { ...floatAnimation.transition, delay: 1 }
              }}
            >
              <Shield className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              animate={{
                ...floatAnimation,
                transition: { ...floatAnimation.transition, delay: 2 }
              }}
            >
              <Code className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 professional-text"
            variants={itemVariants}
          >
            Roshan Shrestha
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Cybersecurity Student & Full-Stack Developer
          </motion.p>
          
          <motion.div 
            className="text-lg text-foreground/80 mb-12"
            variants={itemVariants}
          >
            <p>Building secure and innovative digital solutions</p>
            <p>where cybersecurity meets cutting-edge development</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:shadow-professional px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="professional-border bg-transparent text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown 
                className="w-6 h-6 text-primary mx-auto cursor-pointer hover:text-accent transition-colors"
                onClick={() => scrollToSection('about')}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;