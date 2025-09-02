import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "./AnimatedBackground";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/roshanshrestha",
      color: "hover:text-primary"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/roshanshrestha",
      color: "hover:text-accent"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:roshan@example.com",
      color: "hover:text-purple"
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <AnimatedBackground variant="waves" className="opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss secure development practices? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-glow bg-card/80 backdrop-blur-sm border-glow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="h-6 w-6 text-primary mr-3" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/20 border-glow"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/20 border-glow"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary/20 border-glow"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-secondary/20 border-glow resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-glow bg-card/60 backdrop-blur-sm border-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>roshan.shrestha@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-3" />
                    <span>Available for Remote Work</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow bg-card/60 backdrop-blur-sm border-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-secondary/20 border border-border transition-all duration-300 ${link.color} hover:shadow-glow hover:transform hover:scale-105`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-glow rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Open to Opportunities</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Seeking cybersecurity internships and full-stack development roles
              </p>
              <Button variant="outline" className="border-glow">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;