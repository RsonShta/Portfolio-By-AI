import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-background overflow-hidden bg-animated-grid">
      {/* Global background layer */}
      <div className="fixed inset-0 z-0 perspective-1000">
        <AnimatedBackground variant="network" className="opacity-40 transform translate-z-[-100px] scale-[2]" />
        {/* Removed the gradient overlay to make the background more prominent */}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection onScrollToProjects={scrollToProjects} />
        <ProjectsSection ref={projectsRef} />
        <SkillsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="relative py-8 px-6 border-t border-border bg-card/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Roshan Shrestha. Built with security and performance in mind.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
