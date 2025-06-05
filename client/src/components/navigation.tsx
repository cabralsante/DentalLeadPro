import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Phone className="text-primary text-2xl mr-2" />
            <span className="font-bold text-xl text-primary font-['Poppins']">Smile Dental</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium focus-visible"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium focus-visible"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("treatments")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium focus-visible"
              >
                Treatments
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium focus-visible"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="dental-btn-primary rounded-full px-6 py-2 font-medium"
              >
                Book Now
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("treatments")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Treatments
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="dental-btn-primary w-full mx-3 my-2 rounded-lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
