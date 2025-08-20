import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Shield, Server, Lock, Wifi, Eye, AlertTriangle } from "lucide-react";

const CybersecuritySection = () => {
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

  const cyberFocus = [
    {
      title: "Network Security",
      description: "Designing and implementing robust network architectures with advanced firewall configurations and intrusion detection systems.",
      icon: Wifi,
      features: ["Firewall Management", "IDS/IPS Systems", "Network Monitoring", "Traffic Analysis"]
    },
    {
      title: "Penetration Testing",
      description: "Conducting comprehensive security assessments to identify vulnerabilities and strengthen system defenses.",
      icon: Eye,
      features: ["Vulnerability Assessment", "Ethical Hacking", "Security Auditing", "Risk Analysis"]
    },
    {
      title: "Encryption & Privacy",
      description: "Implementing cutting-edge encryption protocols and privacy-focused solutions for data protection.",
      icon: Lock,
      features: ["Data Encryption", "Secure Protocols", "Privacy Controls", "Key Management"]
    },
    {
      title: "Threat Detection",
      description: "Developing intelligent systems for real-time threat identification and automated response mechanisms.",
      icon: AlertTriangle,
      features: ["Real-time Monitoring", "AI-powered Detection", "Incident Response", "Threat Intelligence"]
    }
  ];

  const CyberCard = ({ focus, index }: { focus: any, index: number }) => (
    <Card 
      className={`cyber-card p-8 h-full group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <focus.icon className="w-16 h-16 text-accent group-hover:text-primary transition-colors duration-300 animate-float" />
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{focus.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{focus.description}</p>
      </div>

      <div className="space-y-3">
        {focus.features.map((feature: string, idx: number) => (
          <div 
            key={feature}
            className="flex items-center space-x-3 text-sm opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index * 200) + (idx * 100) + 500}ms`, animationFillMode: 'forwards' }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section ref={sectionRef} id="cybersecurity" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-accent animate-glow-pulse" />
            <Server className="w-10 h-10 text-primary animate-float" style={{ animationDelay: '1s' }} />
            <Lock className="w-8 h-8 text-accent animate-glow-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Cybersecurity Focus
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 animate-glow-pulse" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specializing in cutting-edge cybersecurity solutions that protect digital assets 
            and ensure robust security postures in an ever-evolving threat landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cyberFocus.map((focus, index) => (
            <CyberCard key={focus.title} focus={focus} index={index} />
          ))}
        </div>

        {/* Security Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: "Security Audits", value: "50+", icon: Eye },
            { label: "Vulnerabilities Found", value: "200+", icon: AlertTriangle },
            { label: "Networks Secured", value: "25+", icon: Wifi },
            { label: "Years Experience", value: "3+", icon: Shield }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="relative inline-block mb-3">
                <stat.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySection;