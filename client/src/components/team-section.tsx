import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dra. Ana Silva",
    title: "Dentista Principal",
    experience: "15 anos de experiência",
    specialization: "Especialista em odontologia cosmética e implantes",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Dr. Carlos Lima",
    title: "Ortodontista",
    experience: "12 anos de experiência",
    specialization: "Especialista em Invisalign e aparelhos tradicionais",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Mariana Santos",
    title: "Higienista Dental",
    experience: "8 anos de experiência",
    specialization: "Especialista em cuidados preventivos e educação do paciente",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
];

export default function TeamSection() {
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
            Conheça Nossa <span className="text-primary">Equipe</span> Especializada
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossos profissionais qualificados se dedicam a fornecer cuidados odontológicos da mais alta qualidade
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <img 
                src={member.image} 
                alt={`${member.name} - ${member.title}`} 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <h3 className="font-['Poppins'] text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.title}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.experience}</p>
              <p className="text-muted-foreground">{member.specialization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
