import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">DK</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                {item}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current h-0.5 w-6 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`bg-current h-0.5 w-6 my-1 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`bg-current h-0.5 w-6 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-sm rounded-lg">
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors duration-200">
                {item}
              </button>)}
          </div>}
      </nav>
    </header>;
};
export default Header;