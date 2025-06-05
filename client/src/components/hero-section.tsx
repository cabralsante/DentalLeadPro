import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Users, Award, ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-muted to-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Perfect <span className="text-primary">Smile</span>{" "}
              Starts <span className="text-accent">Here</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience exceptional dental care with our expert team. We combine advanced technology with gentle care to give you the smile you've always dreamed of.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="dental-btn-primary px-8 py-4 rounded-full font-semibold text-lg"
              >
                Book Your Consultation
              </Button>
              <Button 
                variant="outline"
                className="dental-btn-secondary px-8 py-4 rounded-full font-semibold text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="text-accent mr-1 h-4 w-4 fill-current" />
                <span className="font-semibold">4.9/5</span> Rating
              </div>
              <div className="flex items-center">
                <Users className="text-accent mr-1 h-4 w-4" />
                <span className="font-semibold">2000+</span> Happy Patients
              </div>
              <div className="flex items-center">
                <Award className="text-accent mr-1 h-4 w-4" />
                <span className="font-semibold">15+</span> Years Experience
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Happy patient with perfect smile after dental treatment" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 gentle-bounce">
        <ChevronDown className="text-primary text-2xl" />
      </div>
    </section>
  );
}
