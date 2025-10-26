import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2, Brain, Palette, Database } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "AI/ML Engineer",
      bio: "PhD in Computer Science with focus on natural language processing. Passionate about making AI accessible and beneficial for all.",
      icon: Brain,
    },
    {
      name: "Marcus Johnson",
      role: "Full-Stack Developer",
      bio: "8 years of experience building inclusive web applications. Dedicated to creating technology that serves everyone.",
      icon: Code2,
    },
    {
      name: "Elena Rodriguez",
      role: "UX/Accessibility Designer",
      bio: "Specialist in accessible design with lived experience of visual impairment. Ensuring every pixel serves a purpose.",
      icon: Palette,
    },
    {
      name: "James Kim",
      role: "Backend Engineer",
      bio: "Expert in scalable systems and voice technology integration. Building the infrastructure for accessible education.",
      icon: Database,
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend", description: "Modern, accessible UI components" },
    { name: "TypeScript", category: "Frontend", description: "Type-safe development" },
    { name: "OpenAI GPT", category: "AI", description: "Flashcard generation" },
    { name: "Web Speech API", category: "Voice", description: "Speech recognition & synthesis" },
    { name: "Node.js", category: "Backend", description: "Server-side processing" },
    { name: "Express", category: "Backend", description: "API development" },
    { name: "PostgreSQL", category: "Database", description: "Data persistence" },
    { name: "Twilio", category: "Voice", description: "Phone call integration" },
  ];

  return (
    <div className="min-h-screen py-12">
      <main id="main-content" className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <img
              src="https://img.shields.io/badge/Cal%20Hacks-12.0-blue?style=for-the-badge"
              alt="Built for Cal Hacks 12.0"
              className="h-10"
            />
          </div>
          <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl animate-fade-in-up">
            Meet the Team Behind <span className="text-primary">Brilliance</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We're a team of technologists, educators, and accessibility advocates united by a 
            common goal: making education accessible to everyone, everywhere.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20" aria-labelledby="story-heading">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
                <h2 id="story-heading" className="mb-6 text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-foreground/80">
                  <p>
                    Brilliance was born at <strong className="text-foreground">Cal Hacks 12.0</strong> from 
                    a simple observation: while AI is revolutionizing education, blind and visually impaired 
                    students are often left behind by the very technologies meant to help them learn.
                  </p>
                  <p>
                    We asked ourselves: what if we could use AI not to replace human interaction, but to make 
                    educational content more accessible? What if every PDF, every lecture slide, every textbook 
                    could be instantly transformed into an interactive, voice-guided learning experience?
                  </p>
                  <p>
                    Over 48 hours, our team built the foundation for Brilliance—a platform that combines 
                    artificial intelligence, voice technology, and accessible design to create a seamless 
                    learning experience for blind students. But this is just the beginning of our journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-20" aria-labelledby="team-heading">
          <div className="mb-12 text-center">
            <h2 id="team-heading" className="mb-4 text-4xl font-bold text-foreground">
              The Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Diverse backgrounds, shared passion for accessible technology
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon className="h-12 w-12 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="mb-1 text-xl font-semibold text-foreground">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
                    <div className="flex justify-center gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <a href="#" aria-label={`${member.name} on LinkedIn`}>
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <a href="#" aria-label={`${member.name} on GitHub`}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20" aria-labelledby="tech-heading">
          <div className="mb-12 text-center">
            <h2 id="tech-heading" className="mb-4 text-4xl font-bold text-foreground">
              Technology Stack
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built with modern, accessible technologies
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{tech.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            We'd love to hear your feedback, answer your questions, or discuss collaboration opportunities.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <a href="mailto:team@braillience.ai">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Join our community on Discord or Slack to connect with other users and contributors
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
