import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import TreatmentsSection from "@/components/treatments-section";
import TestimonialsSection from "@/components/testimonials-section";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5551234567?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.130.332.202c.045.072.045.419-.1.824z"/>
        </svg>
      </a>
    </div>
  );
}
