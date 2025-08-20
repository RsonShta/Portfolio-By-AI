import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Code, Database } from "lucide-react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "SecureAuth Dashboard",
      description: "A comprehensive authentication system with multi-factor security, built with React and Node.js. Features advanced encryption and threat detection capabilities.",
      tech: ["React", "Node.js", "PostgreSQL", "JWT", "Encryption"],
      icon: Shield,
      category: "Security"
    },
    {
      title: "CyberThreat Analyzer",
      description: "Real-time network monitoring tool that identifies and analyzes potential security threats. Built with modern web technologies and advanced algorithms.",
      tech: ["JavaScript", "Python", "MongoDB", "WebSockets", "AI/ML"],
      icon: Database,
      category: "Cybersecurity"
    },
    {
      title: "Secure Web Portal",
      description: "Enterprise-grade web application with robust security features, including penetration testing tools and vulnerability assessments.",
      tech: ["PHP", "MySQL", "HTML/CSS", "Security Protocols"],
      icon: Code,
      category: "Full Stack"
    },
    {
      title: "Network Security Suite",
      description: "Comprehensive network security toolkit featuring intrusion detection, firewall management, and automated threat response systems.",
      tech: ["Python", "Networking", "Security Tools", "Automation"],
      icon: Shield,
      category: "Security"
    },
    {
      title: "Encrypted Chat App",
      description: "End-to-end encrypted messaging application with advanced security features and real-time communication capabilities.",
      tech: ["React", "WebRTC", "Encryption", "Real-time"],
      icon: Code,
      category: "Development"
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated security scanning tool that identifies potential vulnerabilities in web applications and provides detailed security reports.",
      tech: ["Security Testing", "Automation", "Reporting", "Analysis"],
      icon: Database,
      category: "Security"
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <Card 
      className={`cyber-card p-6 h-full group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <project.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-1">{project.title}</h3>
            <span className="text-sm text-accent font-medium">{project.category}</span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/50 hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        <Button 
          size="sm" 
          className="bg-primary text-primary-foreground hover:shadow-cyber flex-1"
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="glow-border bg-transparent text-primary hover:bg-primary/10 flex-1"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Demo
        </Button>
      </div>
    </Card>
  );

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-glow-pulse" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing secure applications and cybersecurity solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            size="lg"
            variant="outline"
            className="glow-border bg-transparent text-primary hover:bg-primary/10 px-8 py-3"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;