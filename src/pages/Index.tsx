import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Global background layer */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground variant="grid" className="opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
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