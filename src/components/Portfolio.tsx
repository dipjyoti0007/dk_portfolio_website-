import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
const Portfolio = () => {
  const projects = [{
    title: "GlucoVision",
    description: "A revolutionary tear-guided non-invasive blood glucose monitoring device using optoelectrical sensors and ESP32 microcontroller.",
    image: "/lovable-uploads/f464507e-0209-4f44-b710-76a7d7d4b2fe.png",
    achievements: ["Smart Bengal Hackathon 2024 Winner", "Hardware Track Winner at Status Code 1"],
    technologies: ["ESP32", "Optoelectrical Sensors", "Consentium IoT", "OLED Display", "Cloud Integration"],
    features: ["Non-invasive glucose monitoring through tear analysis", "Real-time alerts and cloud data storage", "Patient-friendly OLED display interface", "IoT connectivity for remote monitoring"],
    githubUrl: "https://github.com/dipjyoti0007/GlucoVision"
  }, {
    title: "TremorTech",
    description: "An innovative device for Parkinson's tremor management using vibrotactile therapy with Arduino Nano control and GSR sensor integration.",
    image: "/lovable-uploads/76cafc6c-b3af-4058-ad1e-82dff1e31d8d.png",
    achievements: ["2nd Prize Winner at DevX 2024"],
    technologies: ["Arduino Nano", "GSR Sensors", "Vibrotactile Therapy", "Patient Calibration"],
    features: ["Personalized tremor detection and therapy", "GSR sensor for stress level monitoring", "Patient-specific calibration algorithms", "Portable and comfortable design"],
    githubUrl: "https://github.com/dipjyoti0007/TremorTech"
  }, {
    title: "Cardiovascular Disease Detection",
    description: "Ongoing research project combining IoT sensors and machine learning algorithms for early cardiovascular disease detection.",
    image: "/lovable-uploads/34944cbf-3a56-4e0b-ad8c-95c9be7b245b.png",
    achievements: ["In Development"],
    technologies: ["IoT Sensors", "Machine Learning", "Data Analytics", "Embedded Systems"],
    features: ["Real-time cardiovascular monitoring", "ML-based risk assessment", "Early warning system", "Comprehensive health analytics"],
    githubUrl: null
  }];
  return <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Innovative projects that showcase my expertise in Biomedical Technology, Embedded systems, IoT, and Data Analysis</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-2 text-accent">🏆 Achievements</h4>
                  <div className="space-y-1">
                    {project.achievements.map((achievement, i) => <Badge key={i} variant="secondary" className="mr-2 mb-1">
                        {achievement}
                      </Badge>)}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2">🔧 Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-2">✨ Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                {/* GitHub Link Button */}
                {project.githubUrl && <div className="pt-2">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    </Button>
                  </div>}
              </CardContent>
            </Card>)}
        </div>

        {/* Certificates and Awards Section */}
        <div className="text-center">
          <Card className="max-w-md mx-auto hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">🏅 Certificates & Awards</CardTitle>
              <p className="text-muted-foreground">
                View all my achievements, certifications, and competition awards
              </p>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href="https://github.com/dipjyoti0007/certificates-and-awards" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View All Certificates
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Portfolio;