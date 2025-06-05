import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Preventive Care",
    description: "Regular cleanings, exams, and fluoride treatments to keep your smile healthy",
    price: "From $89",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers for your perfect smile",
    price: "From $299",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel natural",
    price: "From $1,299",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Orthodontics",
    description: "Braces and Invisalign to straighten teeth and improve your bite",
    price: "From $2,899",
  },
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies and urgent care",
    price: "From $149",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    title: "Pediatric Care",
    description: "Gentle, specialized dental care designed specifically for children",
    price: "From $79",
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
            Our <span className="text-primary">Treatment</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental solutions tailored to your unique needs and smile goals
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
              <p className="text-muted-foreground mb-4">{treatment.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-semibold">{treatment.price}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
