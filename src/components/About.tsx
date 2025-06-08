
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/5 to-light-brown/10"></div>
      <div className="absolute top-20 left-20 w-24 h-24 bg-warm-brown/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-light-brown/15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Electronics enthusiast, tech innovator, and lifelong learner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story with Profile Image */}
          <div className="space-y-6">
            {/* Profile Image Card */}
            <Card className="p-6 hover:shadow-md transition-all duration-300 border-warm-brown/20">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-warm-brown/30 to-light-brown/40 p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <img 
                          src="/lovable-uploads/ad68c0c1-4a3b-4bc6-8871-5fbfbfa56b96.png" 
                          alt="Dipjyoti Kodali" 
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Dipjyoti Kodali</h3>
                    <p className="text-muted-foreground mb-2">Electronics & Instrumentation Engineering</p>
                    <p className="text-sm text-muted-foreground">Heritage Institute of Technology, Kolkata</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-md transition-all duration-300 border-warm-brown/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    I'm Dipjyoti Kodali, an electronics enthusiast, tech innovator, and lifelong learner from India. 
                    I'm currently pursuing my undergraduate degree in Electronics and Instrumentation Engineering at 
                    Heritage Institute of Technology, where my passion for creating meaningful, tech-driven solutions 
                    truly took shape.
                  </p>
                  <p>
                    From sensor-based health devices to IoT systems that think smartly, I enjoy turning complex problems 
                    into real-world prototypes. I believe the right mix of hardware, code, and creativity can spark 
                    genuine change—and I love being part of that process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-md transition-all duration-300 border-warm-brown/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-warm-brown/40 pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-warm-brown/60 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Embedded Systems & IoT R&D Intern</h4>
                    <p className="text-sm text-muted-foreground">Techavo Systems • Current</p>
                    <p className="text-sm mt-1">Developing cutting-edge and low powered solutions using LoRa modules for IoT applications</p>
                  </div>
                  
                  <div className="border-l-4 border-light-brown/50 pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-light-brown/70 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Head of Innovation</h4>
                    <p className="text-sm text-muted-foreground">ISOI • Instructor</p>
                    <p className="text-sm mt-1">Leading innovation initiatives, mentoring fellow students, and driving technological advancement</p>
                  </div>
                  
                  <div className="border-l-4 border-warm-brown/40 pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-warm-brown/60 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Previous Internships</h4>
                    <p className="text-sm text-muted-foreground">Haldia Petrochemicals Limited (HPL) • Hewlett Packard Enterprise India</p>
                    <p className="text-sm mt-1">Gained valuable industry experience in petrochemical industry and completed diploma in finance and accounting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-md transition-all duration-300 border-warm-brown/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Education & Interests</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-light-brown/50 pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-light-brown/70 rounded-full"></div>
                    <h4 className="font-semibold text-lg">B.Tech in Applied Electronics and Instrumentation Engineering</h4>
                    <p className="text-sm text-muted-foreground">Heritage Institute of Technology, Kolkata</p>
                    <p className="text-sm mt-1">GPA: 9.95 • Graduation: 2026</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-warm-brown/5 to-light-brown/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Beyond Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Music lover 🎵 • Sports enthusiast (Cricket) 🏏 • Drama & Theater 🎭 • Event Management 📋
                      <br />
                      <span className="italic">Believing in a well-rounded, fun approach to life!</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
