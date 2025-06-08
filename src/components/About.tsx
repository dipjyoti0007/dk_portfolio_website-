
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a final-year Applied Electronics and Instrumentation Engineering student at 
                  Heritage Institute of Technology, Kolkata, I've maintained a strong academic record 
                  with a SGPA of 9.95 while pursuing my passion for innovative technology solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond academics, I'm deeply involved in music, sports, drama, and event management, 
                  which has shaped my collaborative spirit and creative problem-solving approach to engineering challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as an Embedded Systems & IoT R&D Intern at Techavo Systems, 
                  where I'm developing cutting-edge solutions in biomedical technology and IoT applications. 
                  My role as Head of Innovation at ISOI allows me to mentor fellow students and 
                  drive technological advancement in our academic community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Embedded Systems & IoT R&D Intern</h4>
                    <p className="text-sm text-muted-foreground">Techavo Systems • Current</p>
                    <p className="text-sm mt-1">Developing innovative IoT solutions and embedded systems</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Head of Innovation</h4>
                    <p className="text-sm text-muted-foreground">ISOI • Leadership Role</p>
                    <p className="text-sm mt-1">Leading innovation initiatives and mentoring students</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Technical Instructor</h4>
                    <p className="text-sm text-muted-foreground">Various Technical Events</p>
                    <p className="text-sm mt-1">Teaching and guiding students in technical competitions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">B.Tech in Applied Electronics and Instrumentation Engineering</h4>
                  <p className="text-sm text-muted-foreground">Heritage Institute of Technology, Kolkata</p>
                  <p className="text-sm mt-1">SGPA: 9.95 • Expected Graduation: 2025</p>
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
