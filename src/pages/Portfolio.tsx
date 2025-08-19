import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  ArrowRight, 
  Building2, 
  Award, 
  Code2, 
  Calendar, 
  MapPin, 
  TrendingUp,
  ExternalLink,
  Github,
  Brain,
  ShoppingCart,
  Zap,
  GraduationCap,
  Database,
  Cloud,
  TestTube,
  Mail,
  Phone,
  Linkedin,
  Send
} from "lucide-react";

const Portfolio = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to section based on hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Home section data
  const highlights = [
    {
      icon: Building2,
      title: "Software Development Engineer Intern @ Amazon",
      description: "Tripled daily ticket resolutions with proprietary API integration"
    },
    {
      icon: Building2, 
      title: "Full-Stack Intern @ Lockheed Martin",
      description: "Built real-time security monitoring with Splunk"
    },
    {
      icon: Award,
      title: "1st Place PatriotHacks 2024 Winner",
      description: "Apollo AI - Voice-powered Alexa skill with GPT-4o-mini"
    }
  ];

  // Experience section data
  const experiences = [
      {
      company: "Apollo Technologies, LLC",
      role: "Founder & CEO",
      location: "Virtual",
      period: "Aug 2024 - Present",
      description:
        "Founded an agency focused on full-stack web, e-commerce, and AI integrations while exploring smart home/building infrastructure and helpful AI assistants under the Apollo Tech brand.",
      achievements: [
        "Shipped a Shopify storefront (905's Finest) with Stripe/PayPal, Meta Pixel, and Google Analytics; delivered client training and baseline SEO handoff.",
        "Built Apollo AI, an Alexa + GPT-4o-mini assistant; won PatriotHacks 2024 “Most Likely to Become a Startup.”",
        "Secured paid engagements with clients using a lightweight CRM/outreach workflow and sales workflows for client projects."
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS",
        "Shopify",
        "Stripe",
        "OpenAI API",
        "Google Analytics",
        "Meta Pixel"
      ],
      metrics:
        "Bootstrapped operation; shipped first storefront in about 6 weeks and an award-winning voice AI MVP."
    },
    {
      company: "Amazon.com, Inc",
      role: "Software Development Engineer Intern",
      location: "Arlington, VA",
      period: "May 2024 - Aug 2024",
      description: "Integrated Amazon's Tickety API and automated the AWS deployment pipeline, tripling daily ticket resolutions while sustaining a 100% PR merge rate via rigorous code reviews.",
      achievements: [
        "Built an advanced ticket search on top of Amazon's internal ticket triage service that reduced query latency and issue resolution times for hundreds of internal users, applying strong problem solving skills to optimize workflows.",
        "Delivered 10+ sprints on schedule with an 8-person Agile team to ship every milestone on or ahead of schedule and committed to the delivery of long-term product goals."
      ],
      stack: ["React", "TypeScript", "Stencil", "AWS", "Jest"],
      metrics: "3x daily ticket resolutions, 100% PR merge rate"
    },
    {
      company: "Lockheed Martin Corporation",
      role: "Full Stack Software Engineering Intern",
      location: "Virtual",
      period: "May 2023 - Aug 2023",
      description: "Designed and deployed a Microsoft .NET based Windows metrics data model in Splunk that triggered real-time security alerts, eliminating critical dashboard outages and cutting time-to-detect incidents.",
      achievements: [
        "Monitored and tuned AWS-hosted services via Splunk analytics and data analysis, supplying actionable performance insights and optimizing critical infrastructure capacity planning.",
        "Resolved JIRA tickets and debugged Python/XML-based Splunk dashboards to maintain data availability and prevent reporting gaps."
      ],
      stack: ["Python", "XML", "Splunk", "AWS", "Microsoft .NET"],
      metrics: "Real-time security alerts, eliminated critical outages"
    }
  ];

  // Projects section data
  const projects = [
    {
      title: "Apollo AI",
      subtitle: "GPT-4o-mini Powered Alexa Skill",
      description: "End-to-end voice workflow application that won 1st place ('Most Likely to Become a Startup') at PatriotHacks 2024. Built a low-latency voice interaction system with custom hardware integration.",
      problem: "Students with disabilities needed better voice-powered accessibility tools for academic assistance.",
      approach: "Engineered an end-to-end voice workflow using OpenAI API on AWS, designed multi-turn dialog logic, and used GPT-4o-mini for faster response times.",
      result: "Delivered a personalized demo-ready prototype that won first place at a major hackathon, demonstrating real-world impact and scalability potential.",
      stack: ["Node.js", "AWS Lambda", "OpenAI API", "GPT-4o-mini", "Git", "GitHub"],
      category: "AI/ML",
      icon: Brain,
      links: {
        demo: "https://devpost.com/software/apollo-ai-eqvxh3",
        github: "https://github.com/VargasChristopher/apollo_ai"
      },
      featured: true
    },
    {
      title: "905's Finest Web Store",
      subtitle: "E-commerce Platform with Integrated Marketing",
      description: "Launched a custom Shopify storefront in 6 weeks with integrated payment processing, social media advertising, and SEO optimization. Delivered comprehensive client training and baseline SEO for sustainable growth.",
      problem: "Client needed a professional e-commerce store to expand their retail business online with added marketing capabilities.",
      approach: "Built a custom Shopify store, integrated Stripe/PayPal payment processing, set up Meta Pixel for Facebook and Instagram ads, and delivered hands-off training for client self-management.",
      result: "Successfully launched storefront enabling client to self-manage inventory and accept orders independently post-launch, with baseline SEO driving organic traffic.",
      stack: ["Shopify", "JavaScript", "Stripe", "Meta Pixel (Facebook Pixel)"],
      category: "Full-Stack",
      icon: ShoppingCart,
      hideLinks: true,
      featured: false
    },
    {
      title: "MC Genius",
      subtitle: "Clinical Decision Support for Medical Cannabis",
      description:
        "An evidence-based mobile app and companion site that provide dosing guidance and clinical decision support for medical cannabis, tailored to patient factors and product specifics.",
      problem:
        "Dispensary staff and patients lacked accessible, evidence-based dosing guidance leading to avoidable adverse reactions and inconsistent care.",
      approach:
        "Built a Flutter (Dart) mobile app with a JSON placeholder API to simulate infinite scroll, plus a web companion (HTML/CSS/JS).",
      result:
        "Delivered a working MVP for the Pitt Challenge 2019 hackathon, demonstrating an integrated drug information resource and e-wellness record concept.",
      stack: ["Dart", "Flutter", "HTML", "CSS", "JavaScript", "JSON API"],
      category: "Web/Mobile",
      icon: TestTube,
      links: {
        demo: "https://devpost.com/software/mc-genius",
        github: "https://github.com/VargasChristopher/VargasChristopher.github.io/tree/master/public/MC_Genius_Site"
      },
      featured: false
    },
    {
      title: "Team Chaotic Website",
      subtitle: "Single-page site for an e-sports Fortnite team",
      description:
        "A one-page marketing & recruiting site I built in 2018 in my free time for my younger brother's team (Team Chaotic). Sections include About, Team roster, Recruitment details, and Contact.",
      problem:
        "The team needed a simple public hub to introduce themselves, showcase the roster, and recruit players/designers.",
      approach:
        "Shipped a lightweight, responsive page using HTML/CSS/vanilla JS on GitHub Pages. Implemented anchor navigation, profile cards for the roster, modal-style recruitment details, and a contact block with email/Instagram.",
      result:
        "Gave the team a sharable presence for tryouts and inquiries; remains as an archive.",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      category: "Static Site",
      icon: Code2,
      links: {
        demo: import.meta.env.BASE_URL + "Chaotic_Website/index.html",
        github: "https://github.com/VargasChristopher/VargasChristopher.github.io/tree/master/public/Chaotic_Website"
      },
      featured: false
    }
  ];

  // About section data
  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: ["Java", "Python", "C", "C++", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Dart"]
    },
    {
      category: "Frameworks",
      icon: Code2,
      skills: ["React","Stencil", "Node.js", "Express.js", "Microsoft .NET"]
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Mongoose", "Amazon RDS"]
    },
    {
      category: "Cloud / DevOps",
      icon: Cloud,
      skills: ["Docker", "Azure", "Docker", "Git", "Github", "CI/CD"]
    },
    {
      category: "AI / ML",
      icon: Brain,
      skills: ["OpenAI API", "Data Mining", "Artificial Intelligence / Machine Learning", "Natural Language Processing"]
    },
    {
      category: "Testing / Monitoring",
      icon: TestTube,
      skills: ["JUnit", "Jest", "Splunk", "SonarQube"]
    }
  ];

  // Contact section data
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "christophervargas_@outlook.com",
    href: "mailto:christophervargas_@outlook.com",
    description: "Warm intros and quick hellos welcome."
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (571) 285-8690",
    href: "tel:+15712858690",
    description: "Best for quick logistics; text is fine."
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/atsvargas",
    href: "https://www.linkedin.com/in/atsvargas/",
    description: "Let's connect, mention what you're building or looking for."
  }
];


  // Form handlers
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or use the direct email link below.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Home Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Software Engineer & Founder, exploring {" "}
              <span className="gradient-text">Smart Systems and AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Founder @ Apollo Tech. Former Amazon & Lockheed intern. Currently exploring smart-building/home infrastructure and AI assistants
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="hero" size="lg" className="spring glow-hover" asChild>
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault(); // stop the instant jump
                    const el = document.getElementById("projects");
                    if (!el) return;

                    // respect reduced motion
                    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

                    // calculate the offset position
                    const NAV_OFFSET = 80; // adjust to your h-16 etc.
                    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

                    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
                  }}
                  className="focus-ring"
                >
                  View Projects
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="spring" asChild>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1fb6nPLtFDqmK3q-bjQJaJPzWHh8_NBT1/view?usp=sharing" download>
                  View Resume
                </a>
              </Button>
            </div>

            {/* Quick Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass p-6 spring hover:scale-105 glow-hover">
                  <highlight.icon className="h-8 w-8 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/3 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional <span className="gradient-text">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Delivering measurable impact through scalable systems and innovative solutions 
                at industry-leading organizations.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass glow-hover spring transition-all duration-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="flex items-center text-primary font-semibold text-lg">
                          <Building2 className="h-4 w-4 mr-2" />
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground leading-relaxed">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Metrics */}
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Impact & Metrics</h4>
                      <p className="text-foreground">{exp.metrics}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="skill-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Case studies showcasing problem-solving approach, technical implementation, 
                and measurable results across different domains.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className={`glass transition-all duration-500 ${
                  project.featured ? 'ring-2 ring-primary/20 glow' : ''
                } project-card`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-2xl font-bold">
                              {project.title}
                            </CardTitle>
                            {project.featured && (
                              <Award className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <CardDescription className="text-lg text-primary font-medium">
                            {project.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="skill-badge">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Overview */}
                    <p className="text-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Problem → Approach → Result */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          Problem
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          Approach
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.approach}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          Result
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="skill-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {(project.links?.demo || project.links?.github) && (
                      <div className="flex gap-4 pt-4">
                        {project.links?.demo && (
                          <Button variant="hero" className="spring" asChild>
                            <a 
                              href={project.links.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="focus-ring"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Demo
                            </a>
                          </Button>
                        )}
                        {project.links?.github && (
                          <Button variant="outline" className="spring" asChild>
                            <a 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="focus-ring"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Projects
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-center mb-12">
                More Projects <span className="gradient-text">Coming Soon</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {placeholderProjects.map((project, index) => (
                  <Card key={index} className="glass opacity-60 hover:opacity-80 transition-opacity duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-muted">
                          <project.icon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <Badge variant="secondary" className="mt-2">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                I'm a software engineer and founder who likes to innovate and learn. I've built across the stack, front ends in React/TypeScript, services on AWS, and data/monitoring that keeps systems reliable. Along the way I've learned to balance speed with quality and to measure impact rather than just activity.
              </p>
            </div>

            {/* Personal Story */}
            <Card className="glass mb-16">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed mb-6">
                    I started <strong>Apollo Technologies, LLC</strong> to turn that builder mindset into real projects like full-stack web work, e-commerce, and AI prototypes while I explore where I want to take the company next. Day-to-day, that means working with small local businesses and iterating on internal prototypes and ideas under the Apollo Tech umbrella.
                  </p>

                  <p className="text-foreground leading-relaxed mb-6">
                    I'm especially excited about assistants that feel useful (not gimmicky) and the systems behind smart homes / buildings, interfaces, automation, and safety that quietly make life easier. A recent example is <strong>Apollo AI</strong>, a voice assistant prototype that won “Most Likely to Become a Startup” at PatriotHacks 2024, built around Alexa + GPT-4o-mini to keep latency low and interactions natural.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    If you're building reliable products, modernizing internal tools, or exploring intelligent home/building infrastructure, I'd love to collaborate, whether that's as a solo contributor or through Apollo Tech.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="glass mb-16">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      George Mason University
                    </h4>
                    <p className="text-foreground font-medium mb-2">
                      Bachelor of Science in Computer Science
                    </p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span>GPA: 3.70/4.00</span>
                      <span>•</span>
                      <span>Graduating Dec 2025</span>
                      <span>•</span>
                      <span>Fairfax, VA</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Matrix */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">
                Technical <span className="gradient-text">Skills</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <Card key={index} className="glass spring hover:scale-105 glow-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{category.category}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="skill-badge text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Personal Values */}
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Core <span className="gradient-text">Values</span>
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* 1 */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h4 className="font-semibold mb-2">Useful over Flashy</h4>
                    <p className="text-muted-foreground text-sm">
                      Ship features that reduce friction and deliver measurable outcomes.
                      Practical wins over vanity metrics.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold mb-2">Reliability & Safety by Design</h4>
                    <p className="text-muted-foreground text-sm">
                      Prefer simple, observable systems with graceful fallbacks, especially
                      for automation in homes & buildings.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="font-semibold mb-2">Human-Centered AI</h4>
                    <p className="text-muted-foreground text-sm">
                      Assistants should help, not overwhelm. Prioritize clarity, privacy, and
                      accessibility. Helpful is better than hype.
                    </p>
                  </div>

                  {/* 4 */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🧭</span>
                    </div>
                    <h4 className="font-semibold mb-2">Ownership & Integrity</h4>
                    <p className="text-muted-foreground text-sm">
                      Take responsibility end-to-end, communicate tradeoffs, and keep
                      commitments. Do the right thing even when it's not flashy.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h4 className="font-semibold mb-2">Iterate & Measure</h4>
                    <p className="text-muted-foreground text-sm">
                      Ship small, instrument the work, learn from data, and improve. Progress
                      beats perfection.
                    </p>
                  </div>

                  {/* 6 */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">♿</span>
                    </div>
                    <h4 className="font-semibold mb-2">Accessibility by Default</h4>
                    <p className="text-muted-foreground text-sm">
                      Build for everyone: strong contrast, keyboard support, screen-reader
                      labels, and reduced-motion options.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 overflow-x-clip scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I like meeting engineers, founders, and recruiters. If you're exploring
                full-stack work, AI assistants, or smart home/building systems, I'd love to
                compare ideas and see how we can help each other.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 w-full">
              {/* Contact Form */}
              <Card className="glass w-full overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-3">
                    <Send className="h-6 w-6 text-primary" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    No hard pitch needed, share a link, a problem you're thinking about, or a role
                    you're hiring for. I usually reply within a couple of days.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field for spam prevention */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="focus-ring bg-input/50 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="focus-ring bg-input/50 border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        rows={6}
                        required
                        className="focus-ring bg-input/50 border-border resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full spring glow-hover"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="glass w-full overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      Contact Information
                    </CardTitle>
                    <CardDescription>
                      Prefer direct contact? Reach out using any of these methods.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {contactMethods.map((method, index) => (
                        <a
                          key={index}
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex w-full items-center gap-4 p-4 rounded-lg border border-border hover:bg-primary/5 hover:border-primary/20 transition-all spring focus-ring"
                        >
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <method.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-foreground">{method.label}</h4>
                            <p className="text-primary font-medium truncate break-words">{method.value}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="glass w-full overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <Button variant="outline" size="lg" className="w-full spring" asChild>
                        <a 
                          target="_blank" 
                          rel="noopener noreferrer"
                          href="https://drive.google.com/file/d/1fb6nPLtFDqmK3q-bjQJaJPzWHh8_NBT1/view?usp=sharing" 
                          download
                          className="focus-ring"
                        >
                          View My Resume
                        </a>
                      </Button>
                      
                      <Button variant="outline" size="lg" className="w-full spring" asChild>
                        <a 
                          href="https://www.linkedin.com/in/atsvargas/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="focus-ring"
                        >
                          Connect on LinkedIn
                        </a>
                      </Button>

                      <Button variant="outline" size="lg" className="w-full spring" asChild>
                        <a 
                          href="https://github.com/VargasChristopher" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="focus-ring"
                        >
                          Explore my GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="glass border-primary/20 w-full overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h4 className="font-semibold text-foreground">Currently Available</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Open to coffee chats, collaborations, and new-grad roles starting late 2025.
                      Graduation: December 2025.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
