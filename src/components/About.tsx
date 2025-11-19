'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#FAFAF9] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mr-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform translate-x-4 translate-y-4" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/img/vic-frontal.png" 
                  alt="Victória Almeida" 
                  className="w-full h-full object-cover bg-white"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-8">
              Sobre Mim
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                Olá, me chamo <strong className="text-stone-900">Victória</strong>. Sou psicóloga clínica e especialista em terapias comportamentais contextuais. Minha atuação é pautada estritamente em práticas baseadas em evidências científicas.
              </p>
              <p>
                Acredito que a terapia não é apenas sobre "consertar" o que está errado, mas sobre construir uma vida que valha a pena ser vivida. Em minha prática, os pilares que sustentam cada sessão são:
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                {['Vínculo Terapêutico', 'Acolhimento', 'Ética', 'Efetividade'].map((item) => (
                  <li key={item} className="flex items-center text-stone-800 font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pt-4 border-l-4 border-primary pl-6 italic text-stone-500">
                "Através da flexibilidade psicológica, proporcionamos meios para você realizar escolhas mais conscientes e saudáveis."
              </p>
            </div>
            
            <div className="mt-10">
              <Link 
                href="https://linktr.ee/victoriaalmeidapsi" 
                target="_blank"
                className="text-primary font-bold text-lg hover:text-primary-dark transition-colors group inline-flex items-center"
              >
                Vamos caminhar juntos nesse processo? 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

