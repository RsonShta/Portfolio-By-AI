import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Shield, 
  Server, 
  Lock, 
  Wifi, 
  Terminal,
  Globe
} from "lucide-react";

const SkillsSection = () => {
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

  const developmentSkills = [
    { name: "HTML/CSS", icon: Code, level: 90 },
    { name: "JavaScript", icon: Terminal, level: 85 },
    { name: "React", icon: Code, level: 88 },
    { name: "Node.js", icon: Server, level: 82 },
    { name: "PHP", icon: Database, level: 78 },
    { name: "Full Stack", icon: Globe, level: 85 }
  ];

  const securitySkills = [
    { name: "Network Security", icon: Wifi, level: 88 },
    { name: "Penetration Testing", icon: Shield, level: 85 },
    { name: "Encryption", icon: Lock, level: 82 },
    { name: "Security Analysis", icon: Terminal, level: 86 },
    { name: "Threat Assessment", icon: Shield, level: 84 },
    { name: "Cyber Defense", icon: Server, level: 87 }
  ];

  const SkillCard = ({ skill, index, delay }: { skill: any, index: number, delay: number }) => (
    <Card 
      className={`cyber-card p-6 group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <skill.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="font-semibold text-lg">{skill.name}</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${delay + 300}ms`
            }}
          />
        </div>
      </div>
    </Card>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-glow-pulse" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of development prowess and cybersecurity expertise
          </p>
        </div>

        {/* Development Skills */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Code className="inline w-8 h-8 mr-3 text-primary" />
            Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentSkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index}
                delay={index * 150}
              />
            ))}
          </div>
        </div>

        {/* Security Skills */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Shield className="inline w-8 h-8 mr-3 text-accent" />
            Cybersecurity
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securitySkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index}
                delay={600 + index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;