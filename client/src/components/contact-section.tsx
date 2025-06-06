import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, ExternalLink, MessageCircle } from "lucide-react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return await apiRequest("POST", "/api/appointments", data);
    },
    onSuccess: () => {
      toast({
        title: "Appointment Booked Successfully!",
        description: "We will contact you shortly to confirm your booking.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate(formData);
  };

  const handleCall = () => {
    window.location.href = "tel:+15551234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5551234567?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar Seu <span className="text-primary">Sorriso?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta hoje e dê o primeiro passo em direção ao seu sorriso perfeito
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-['Poppins'] text-2xl font-semibold mb-6">Agende Sua Consulta</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nome *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Digite seu nome"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Sobrenome *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Digite seu sobrenome"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Digite seu email"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Digite seu telefone"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="service">Serviço Preferido *</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consulta Geral</SelectItem>
                    <SelectItem value="cleaning">Limpeza e Prevenção</SelectItem>
                    <SelectItem value="cosmetic">Odontologia Cosmética</SelectItem>
                    <SelectItem value="implants">Implantes Dentários</SelectItem>
                    <SelectItem value="orthodontics">Ortodontia</SelectItem>
                    <SelectItem value="emergency">Atendimento de Emergência</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Mensagem Adicional</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre suas preocupações ou perguntas dentárias"
                  className="mt-1"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full dental-btn-primary py-4 text-lg font-semibold"
                disabled={bookingMutation.isPending}
              >
                {bookingMutation.isPending ? "Agendando..." : "Agendar Minha Consulta"}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <MapPin className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2">Visit Our Clinic</h4>
                  <p className="text-muted-foreground mb-2">
                    123 Dental Street<br />
                    Smile City, SC 12345
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-accent p-0 h-auto font-medium"
                  >
                    Get Directions <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <Phone className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2">Call Us Today</h4>
                  <p className="text-muted-foreground mb-2">(555) 123-SMILE</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mon-Fri: 8AM-6PM<br />
                    Sat: 9AM-2PM
                  </p>
                  <Button 
                    onClick={handleCall}
                    variant="link" 
                    className="text-primary hover:text-accent p-0 h-auto font-medium"
                  >
                    Call Now <Phone className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-3 mr-4">
                  <MessageCircle className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2">WhatsApp Support</h4>
                  <p className="text-muted-foreground mb-2">Quick questions and appointment booking</p>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="link" 
                    className="text-green-500 hover:text-green-600 p-0 h-auto font-medium"
                  >
                    Message Us <MessageCircle className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="bg-red-500 rounded-full p-3 mr-4">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2 text-red-700">Dental Emergency?</h4>
                  <p className="text-red-600 mb-2">We provide same-day emergency appointments</p>
                  <Button 
                    onClick={handleCall}
                    className="bg-red-500 text-white hover:bg-red-600 font-medium"
                  >
                    Emergency Contact
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
