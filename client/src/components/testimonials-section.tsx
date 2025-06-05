import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Dr. Smith and the team made my dental anxiety disappear. The atmosphere is so welcoming and the treatment was completely painless. I actually look forward to my appointments now!",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
  },
  {
    rating: 5,
    text: "I've been coming here for 5 years and the service is consistently excellent. The dental implants look and feel completely natural. Best investment I've ever made!",
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
  },
  {
    rating: 5,
    text: "The teeth whitening results exceeded my expectations. The staff explained everything clearly and made sure I was comfortable throughout the entire process.",
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
  },
  {
    rating: 5,
    text: "My family has been patients here for years. They're amazing with kids and adults alike. Professional, friendly, and always on time for appointments.",
    name: "David Thompson",
    role: "Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Patients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read genuine reviews from our satisfied patients who love their new smiles
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-6 shadow-lg ${index >= 3 ? 'lg:block hidden xl:block' : ''}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - satisfied dental patient`} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
