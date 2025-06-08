import React from 'react';
import { Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Dipjyoti Kodali</h3>
            
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/dipjyoti-kodali-b9148a248/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/dipjyoti0007" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80">© 2025 Dipjyoti Kodali. Built with passion for innovation and technology.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;