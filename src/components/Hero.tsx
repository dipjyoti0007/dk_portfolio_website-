
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-warm-brown/5 to-light-brown/10">
      {/* Minimalistic Decorative Elements */}
      <div className="absolute top-32 left-20 w-20 h-20 bg-warm-brown/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-24 w-24 h-24 bg-light-brown/15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-warm-brown to-light-brown bg-clip-text text-transparent">
                Dipjyoti Kodali
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
                Electronics Enthusiast | Tech Innovator | Lifelong Learner
              </h2>
              <div className="bg-gradient-to-r from-warm-brown/5 to-light-brown/10 p-6 rounded-lg mb-8 border border-warm-brown/20">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about creating meaningful, tech-driven solutions through sensor technologies, 
                  embedded systems, and IoT innovations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-lg px-8 bg-gradient-to-r from-warm-brown to-light-brown hover:from-warm-brown/90 hover:to-light-brown/90"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-lg px-8 border-2 border-warm-brown/30 hover:border-warm-brown/50"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-warm-brown/30 via-light-brown/40 to-warm-brown/30 p-1 floating-animation">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/ad68c0c1-4a3b-4bc6-8871-5fbfbfa56b96.png" 
                    alt="Dipjyoti Kodali" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                </div>
              </div>
              {/* Subtle Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-warm-brown/40 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-light-brown/50 rounded-full animate-pulse"></div>
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
    </section>
  );
};

export default Hero;
