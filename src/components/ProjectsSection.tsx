import { ExternalLink, Github, Shield, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureAuth Dashboard",
      description: "Full-stack authentication system with advanced security features including 2FA, session management, and threat detection.",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "2FA"],
      category: "security",
      icon: Shield,
      github: "#",
      demo: "#"
    },
    {
      title: "Network Monitor Pro",
      description: "Real-time network monitoring tool with intrusion detection and automated response capabilities.",
      technologies: ["Python", "Django", "Redis", "WebSocket", "AI/ML"],
      category: "networking",
      icon: Globe,
      github: "#",
      demo: "#"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Secure cryptocurrency portfolio management with encryption and multi-signature support.",
      technologies: ["TypeScript", "React", "Express", "MongoDB", "Crypto"],
      category: "web",
      icon: Database,
      github: "#",
      demo: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "security": return "text-accent";
      case "networking": return "text-purple";
      case "web": return "text-primary";
      default: return "text-primary";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing secure, scalable applications and cybersecurity solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="card-glow bg-card/80 backdrop-blur-sm border-glow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`h-8 w-8 ${getCategoryColor(project.category)}`} />
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-glow">
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;