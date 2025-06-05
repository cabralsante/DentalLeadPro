import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Comprehensive Care",
    description: "From routine cleanings to complex procedures, we handle all your dental needs",
  },
  {
    title: "Family-Friendly",
    description: "Specialized care for patients of all ages, from children to seniors",
  },
  {
    title: "Insurance Accepted",
    description: "We work with most insurance plans and offer flexible payment options",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern dental clinic interior with advanced equipment" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Our Clinic</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Smile Dental has been the trusted choice for families seeking exceptional dental care. Our state-of-the-art facility combines cutting-edge technology with a warm, welcoming environment.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="text-accent text-xl mr-3 mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button className="dental-btn-primary px-8 py-3 rounded-full font-semibold">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
