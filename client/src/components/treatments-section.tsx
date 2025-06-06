import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Cuidados Preventivos",
    description: "Limpezas regulares, exames e tratamentos com flúor para manter seu sorriso saudável",
    price: "A partir de R$ 180",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Odontologia Cosmética",
    description: "Clareamento dental, facetas e transformações do sorriso para seu sorriso perfeito",
    price: "A partir de R$ 600",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Implantes Dentários",
    description: "Soluções permanentes de substituição de dentes que parecem e funcionam naturalmente",
    price: "A partir de R$ 2.600",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Ortodontia",
    description: "Aparelhos e Invisalign para alinhar os dentes e melhorar sua mordida",
    price: "A partir de R$ 5.800",
  },
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Atendimento de Emergência",
    description: "Consultas no mesmo dia para emergências dentárias e cuidados urgentes",
    price: "A partir de R$ 300",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Odontopediatria",
    description: "Cuidados dentários gentis e especializados projetados especificamente para crianças",
    price: "A partir de R$ 160",
  },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços de <span className="text-primary">Tratamento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções odontológicas abrangentes adaptadas às suas necessidades únicas e objetivos do sorriso
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="treatment-card-hover bg-white rounded-2xl shadow-lg p-6 border border-border"
            >
              <img 
                src={treatment.image} 
                alt={`${treatment.title} procedure`} 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="font-['Poppins'] text-xl font-semibold mb-3">{treatment.title}</h3>
              <p className="text-muted-foreground">{treatment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
