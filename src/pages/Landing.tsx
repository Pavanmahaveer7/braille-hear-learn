import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Mic,
  Brain,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base:utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 120\"><path d=\"M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z\" fill=\"rgba(255,255,255,0.1)\"/></svg>')] bg-bottom bg-no-repeat opacity-20"
            aria-hidden="true"
          />
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-white/20 text-white hover:bg-white/30"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Powered by AI for Cal Hacks 12.0
            </Badge>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl animate-fade-in-up">
              <span className="text-balance">Accessible Flashcard Learning</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              An AI-powered flashcard learning application designed specifically for blind college students, 
              featuring voice navigation, automated content conversion, and screen reader compatibility.
            </p>
            
            <div className="mx-auto mb-12 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/signup?role=professor">
                  <Users className="mr-2 h-5 w-5" />
                  Professor Login
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/signup?role=student">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Student Login
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90">4.9/5 from students and educators</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 id="features-heading" className="mb-4 text-4xl font-bold text-foreground">
                Powerful Features for Accessible Learning
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Everything you need to create, learn, and succeed with accessible educational content.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">AI-Powered Generation</h3>
                  <p className="text-muted-foreground">
                    Upload any document and let AI automatically generate accessible flashcards in seconds.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Mic className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Voice-Guided Learning</h3>
                  <p className="text-muted-foreground">
                    Learn through natural voice interactions with full speech recognition and text-to-speech support.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Scheduled Phone Calls</h3>
                  <p className="text-muted-foreground">
                    Receive learning sessions and tests via scheduled phone calls at your preferred times.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <Trophy className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Adaptive Testing</h3>
                  <p className="text-muted-foreground">
                    Voice-based tests that adapt to your learning progress with real-time feedback.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="bg-muted/30 py-20" aria-labelledby="demo-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 id="demo-heading" className="mb-12 text-center text-4xl font-bold text-foreground">
                How It Works
              </h2>

              <div className="space-y-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold">Upload Your Materials</h3>
                    <p className="text-lg text-muted-foreground">
                      Professors upload PDFs, Word documents, presentations, or images of educational content.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold">AI Generates Flashcards</h3>
                    <p className="text-lg text-muted-foreground">
                      Our AI processes the content and creates accessible flashcard sets with audio support.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold">Students Learn via Voice</h3>
                    <p className="text-lg text-muted-foreground">
                      Students receive scheduled calls for interactive voice-guided learning sessions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold">Track Progress & Test</h3>
                    <p className="text-lg text-muted-foreground">
                      Adaptive testing and detailed analytics help monitor learning progress and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="mb-12 text-center text-4xl font-bold text-foreground">
              Why Choose Braillience AI?
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "WCAG 2.1 AAA Accessibility Compliance",
                "Supports PDF, DOC, DOCX, TXT, Images, PPTX",
                "Real-time Voice Recognition",
                "Scheduled Phone Call Delivery",
                "AI-Powered Content Analysis",
                "Progress Tracking & Analytics",
                "Screen Reader Optimized",
                "Adaptive Learning Algorithms",
                "Multi-Format Support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Ready to Transform Education?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Join educators and students who are making learning accessible for everyone.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/signup">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
