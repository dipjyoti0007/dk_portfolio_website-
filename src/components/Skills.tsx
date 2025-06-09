

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 75 },
        { name: "C/C++", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Embedded Systems & IoT",
      skills: [
        { name: "Embedded Systems", level: 90 },
        { name: "IoT Development", level: 85 },
        { name: "Microcontrollers", level: 88 },
        { name: "ESP32/Arduino", level: 92 }
      ]
    },
    {
      title: "Hardware & Instrumentation",
      skills: [
        { name: "Sensors & Transducers", level: 80 },
        { name: "Hardware Prototyping", level: 72 },
        { name: "Industrial Automation", level: 68 },
        { name: "Circuit Design", level: 70 }
      ]
    },
    {
      title: "Emerging Technologies",
      skills: [
        { name: "Machine Learning", level: 60 },
        { name: "Artificial Intelligence", level: 58 },
        { name: "Data Science", level: 55 },
        { name: "Cloud Integration", level: 65 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning hardware, software, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-primary to-accent skill-bar ${
                          isVisible ? 'animate-pulse' : ''
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Core Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-primary-foreground">🔬</span>
                  </div>
                  <h3 className="font-semibold mb-2">Research & Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Innovative problem-solving and prototype development
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-primary-foreground">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Project Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Leading technical teams and innovation initiatives
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-primary-foreground">💡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating solutions that bridge technology and healthcare
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

