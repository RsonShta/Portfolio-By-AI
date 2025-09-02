import { Code, Shield, Server, Database, Globe, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "./AnimatedBackground";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust"]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "text-accent",
      skills: ["Penetration Testing", "Ethical Hacking", "Vulnerability Assessment", "OWASP", "Cryptography", "Security Auditing"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "text-purple",
      skills: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI", "GraphQL"]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-primary",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "AWS S3"]
    },
    {
      title: "DevOps & Cloud",
      icon: Server,
      color: "text-accent",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "Nginx"]
    },
    {
      title: "Security Tools",
      icon: Lock,
      color: "text-purple",
      skills: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "Kali Linux", "SIEM Tools"]
    }
  ];

  const certifications = [
    { name: "CEH - Certified Ethical Hacker", status: "In Progress" },
    { name: "CompTIA Security+", status: "Planned" },
    { name: "AWS Certified Solutions Architect", status: "Planned" }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-dark overflow-hidden">
      <AnimatedBackground variant="network" className="opacity-25" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient-secondary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining development expertise with cybersecurity knowledge to build secure, robust applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-glow bg-card/60 backdrop-blur-sm border-glow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-6 w-6 ${category.color} mr-3`} />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/30 hover:bg-secondary/50 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border-glow">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Certifications & <span className="text-gradient-primary">Learning Path</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-secondary/20">
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <Badge 
                  variant={cert.status === "In Progress" ? "default" : "secondary"}
                  className={cert.status === "In Progress" ? "bg-gradient-primary" : ""}
                >
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;