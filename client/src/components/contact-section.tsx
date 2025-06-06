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
        title: "Consulta Agendada com Sucesso!",
        description: "Entraremos em contato em breve para confirmar seu agendamento.",
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
        title: "Falha no Agendamento",
        description: error.message || "Tente novamente ou entre em contato diretamente conosco.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Por favor, preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Por favor, digite um endereço de email válido",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate(formData);
  };

  const handleCall = () => {
    window.location.href = "tel:+558130940025";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/558130940025?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20odontológica.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="grid lg:grid-cols-1 gap-6">          
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
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2">Visite Nossa Clínica</h4>
                  <p className="text-muted-foreground mb-2">
                    Av. Bernardo Vieira de Melo, 2418 <br />
                    Piedade, Jaboatão dos Guararapes, PE 54410-010
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-accent p-0 h-auto font-medium"
                  >
                    Como Chegar <ExternalLink className="ml-1 h-4 w-4" />
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
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2">Ligue para Nós</h4>
                  <p className="text-muted-foreground mb-2">(81) 3094-0025</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Seg-Sex: 8h-18h<br />
                    Sáb: 8h-13h
                  </p>
                  <Button 
                    onClick={handleCall}
                    variant="link" 
                    className="text-primary hover:text-accent p-0 h-auto font-medium"
                  >
                    Ligar Agora <Phone className="ml-1 h-4 w-4" />
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
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2">Suporte WhatsApp</h4>
                  <p className="text-muted-foreground mb-2">Perguntas rápidas e agendamento de consultas</p>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="link" 
                    className="text-green-500 hover:text-green-600 p-0 h-auto font-medium"
                  >
                    Fale Conosco <MessageCircle className="ml-1 h-4 w-4" />
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
                  <h4 className="font-['Poppins'] text-lg font-semibold mb-2 text-red-700">Emergência Dentária?</h4>
                  <p className="text-red-600 mb-2">Oferecemos consultas de emergência no mesmo dia</p>
                  <Button 
                    onClick={handleCall}
                    className="bg-red-500 text-white hover:bg-red-600 font-medium"
                  >
                    Contato de Emergência
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
