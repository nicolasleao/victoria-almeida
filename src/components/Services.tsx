'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Users, Sparkles, Smile, Sun } from 'lucide-react';

const services = [
  {
    title: "Ansiedade",
    icon: Brain,
    description: "Aprenda a lidar com a ansiedade de forma funcional, sem lutar contra ela."
  },
  {
    title: "Depressão",
    icon: Sun, // Changed icon for variety
    description: "Reencontre o sentido e a vitalidade através de ativação comportamental e acolhimento."
  },
  {
    title: "Habilidades Sociais",
    icon: Users,
    description: "Desenvolva assertividade e melhore a qualidade das suas relações interpessoais."
  },
  {
    title: "Autoimagem",
    icon: Smile,
    description: "Construa uma relação mais gentil e compassiva consigo mesmo."
  },
  {
    title: "Produtividade",
    icon: Sparkles,
    description: "Organize sua rotina respeitando seus limites e valores pessoais."
  },
  {
    title: "Relacionamentos",
    icon: Heart,
    description: "Entenda padrões de comportamento e fortaleça seus vínculos afetivos."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-medium tracking-widest text-sm uppercase"
          >
            Áreas de Atuação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-3 mb-6"
          >
            Como posso te ajudar?
          </motion.h2>
          <p className="text-stone-600 text-lg">
            A psicoterapia é um espaço seguro para desenvolver estratégias eficazes para lidar com suas emoções e desafios da vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-primary/20 hover:shadow-xl shadow-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light/50 text-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon strokeWidth={1.5} size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

