import { motion } from "framer-motion";
import { UserCheck, Settings, Heart, Clock } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Expert Dentists",
    description: "Board-certified professionals with years of specialized experience",
  },
  {
    icon: Settings,
    title: "Advanced Technology",
    description: "State-of-the-art equipment for precise and comfortable treatments",
  },
  {
    icon: Heart,
    title: "Gentle Care",
    description: "Pain-free procedures with a focus on patient comfort and relaxation",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Evening and weekend appointments to fit your busy schedule",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Smile Dental?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional dental care that goes beyond your expectations
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-muted rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <benefit.icon className="text-3xl text-primary group-hover:text-primary-foreground h-8 w-8" />
              </div>
              <h3 className="font-['Poppins'] text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
