import { Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const services = [
  "Cuidados Preventivos",
  "Odontologia Cosmética", 
  "Implantes Dentários",
  "Ortodontia",
  "Atendimento de Emergência",
];

const contactInfo = [
  { icon: "location", text: "123 Dental Street, Smile City" },
  { icon: "phone", text: "(555) 123-SMILE" },
  { icon: "email", text: "info@smiledental.com" },
  { icon: "hours", text: "Mon-Sat: 8AM-6PM" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Phone className="text-primary text-2xl mr-2" />
              <span className="font-['Poppins'] font-bold text-xl">Dental Santé</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Seu parceiro confiável para cuidados odontológicos abrangentes. Estamos comprometidos em ajudá-lo a alcançar e manter seu sorriso perfeito através de cuidados especializados e tecnologia avançada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-accent transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Informações de Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">📍</span>
                <span>Av. Bernardo Vieira de Melo, 2418, Piedade</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">📞</span>
                <span>(81) 3094-0025</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✉️</span>
                <span>contato@dentalsante.com.br</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">🕒</span>
                <span>Seg-Sáb: 8h-18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Clínica Dental Santé. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-accent transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Termos de Serviço</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Conformidade LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
