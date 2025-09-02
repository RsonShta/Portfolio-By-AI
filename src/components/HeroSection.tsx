import { Shield, Code2, Network, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <AnimatedBackground variant="particles" className="opacity-40" />
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-6 mb-8 animate-slide-up">
          <Shield className="h-12 w-12 cyber-icon" />
          <Code2 className="h-12 w-12 cyber-icon" />
          <Network className="h-12 w-12 cyber-icon" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient-primary">Roshan</span>{" "}
          <span className="text-gradient-secondary">Shrestha</span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 text-muted-foreground animate-slide-up">
          <p className="mb-2">Cybersecurity Student & Full-Stack Developer</p>
          <p className="text-sm md:text-base">
            Securing the digital world through code and cutting-edge security practices
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-glow">
            Download Resume
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-up">
          <div className="card-glow bg-card/50 backdrop-blur-sm p-6 rounded-lg">
            <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Security First</h3>
            <p className="text-sm text-muted-foreground">
              Ethical hacking and penetration testing expertise
            </p>
          </div>
          
          <div className="card-glow bg-card/50 backdrop-blur-sm p-6 rounded-lg">
            <Code2 className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Full-Stack Dev</h3>
            <p className="text-sm text-muted-foreground">
              Modern web applications with secure architecture
            </p>
          </div>
          
          <div className="card-glow bg-card/50 backdrop-blur-sm p-6 rounded-lg">
            <Network className="h-8 w-8 text-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Network Security</h3>
            <p className="text-sm text-muted-foreground">
              Infrastructure protection and monitoring systems
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="h-8 w-8 text-primary opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;