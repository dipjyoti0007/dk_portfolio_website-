import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  return <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 warm-gradient"></div>
      <div className="geometric-shape top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl"></div>
      <div className="geometric-shape bottom-20 right-20 w-40 h-40 bg-gradient-to-bl from-accent to-primary rounded-full blur-3xl"></div>
      <div className="geometric-shape top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 transform rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story with Profile Image */}
          <div className="space-y-6">
            {/* Profile Image Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full transform translate-x-8 -translate-y-8"></div>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <img alt="Dipjyoti Kodali" className="w-full h-full object-cover rounded-full" src="/lovable-uploads/814cc8fc-483e-43ad-9207-e8b4cb1a9a2e.jpg" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full opacity-80"></div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Dipjyoti Kodali</h3>
                    <p className="text-muted-foreground mb-2">Heritage Institute of Technology, Kolkata</p>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full"></div>
              <CardContent className="p-0 relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">I'm Dipjyoti Kodali, an electronics enthusiast, tech innovator, and lifelong learner from India. I'm currently pursuing my undergraduate degree in Electronics and Instrumentation Engineering at Heritage Institute of Technology, where my passion for creating meaningful, tech-driven solutions truly took shape.

From sensor-based health devices to IoT systems that think smartly, I enjoy turning complex problems into real-world prototypes. I believe the right mix of hardware, code, and creativity can spark genuine change—and I love being part of that process.</p>
                
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-accent/10 transform rotate-12"></div>
              <CardContent className="p-0 relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                    <h4 className="font-semibold text-lg">IoT and Embedded Systems R&D Intern</h4>
                    <p className="text-sm text-muted-foreground">Techavo Systems </p>
                    <p className="text-sm mt-1">Developing cutting-edge and low powered solutions using LoRa modules for IoT applications</p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-accent rounded-full"></div>
                    <h4 className="font-semibold text-lg">Head of Innovation</h4>
                    <p className="text-sm text-muted-foreground">ISOI • Instructor</p>
                    <p className="text-sm mt-1">Leading innovation initiatives, mentoring fellow students, and driving technological advancement in academic community</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                    <h4 className="font-semibold text-lg">Intern</h4>
                    <p className="text-sm text-muted-foreground">Haldia Petrochemicals Limited (HPL)</p>
                    <p className="text-sm mt-1">Gained valuable industry experience in one of the leading petrochemical industries</p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-accent rounded-full"></div>
                    <h4 className="font-semibold text-lg">Finance & Accounting Intern</h4>
                    <p className="text-sm text-muted-foreground">Hewlett Packard Enterprise India</p>
                    <p className="text-sm mt-1">Completed diploma in finance and accounting, gaining comprehensive business knowledge</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-full"></div>
              <CardContent className="p-0 relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Education & Interests</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-accent rounded-full"></div>
                    <h4 className="font-semibold text-lg">B.Tech in Applied Electronics and Instrumentation Engineering</h4>
                    <p className="text-sm text-muted-foreground">Heritage Institute of Technology, Kolkata</p>
                    <p className="text-sm mt-1">GPA: 9.95 • Graduation: 2026</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Beyond Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Music lover 🎵 • Sports enthusiast 🏏 • Drama & Theater 🎭 • Event Management 📋
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
    </section>;
};
export default About;
