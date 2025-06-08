import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center tech-pattern relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-primary/30 to-accent/30 transform rotate-45 opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-l from-accent/40 to-primary/40 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="fade-in-up">
              <h1 className="text-5xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-left lg:text-6xl font-bold text-sky-600">
                Dipjyoti Kodali
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
                Innovator in Embedded Systems & IoT | Biomedical Prototype Developer
              </h2>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">Hi, I'm Dipjyoti Kodali, a final-year AEIE student and tech innovator passionate about sensor technologies, embedded systems, and IoT.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  View My Work
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-lg px-8 border-2 border-primary/20 hover:border-primary/40">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 floating-animation">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img src="/lovable-uploads/530db522-0c45-4303-b72a-4c63eae466d5.png" alt="Dipjyoti Kodali" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full opacity-50 rotate-slow"></div>
              <div className="absolute bottom-1/3 -right-10 w-10 h-10 bg-gradient-to-l from-accent to-primary transform rotate-45 opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="sm" onClick={scrollToAbout}>
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;