import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-automotive-blue">Elite Auto Detailing</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-automotive-light hover:text-automotive-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-automotive-light hover:text-automotive-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-automotive-light hover:text-automotive-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-automotive-blue hover:bg-automotive-light text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Book Now
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-automotive-light hover:text-automotive-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-automotive-light hover:text-automotive-blue p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-automotive-light hover:text-automotive-blue text-base font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-automotive-light hover:text-automotive-blue text-base font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-automotive-light hover:text-automotive-blue text-base font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left px-3 py-2 bg-automotive-blue text-white rounded-md text-base font-medium"
            >
              Book Now
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-automotive-light hover:text-automotive-blue text-base font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
