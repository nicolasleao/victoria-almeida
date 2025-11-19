'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAFAF9]">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary-light/40 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary-dark text-sm font-medium tracking-wide mb-6">
              Psicologia Clínica & Terapias Contextuais
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-800 leading-[1.1] mb-6 text-balance">
              Relacione-se com suas <span className="text-primary italic">emoções</span>.
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Te ajudo a construir uma vida mais significativa através de práticas baseadas em evidências, acolhimento e ética.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="https://linktr.ee/victoriaalmeidapsi" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Agende sua sessão
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-800 border border-stone-200 rounded-full hover:bg-stone-50 transition-all"
              >
                Saiba mais
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
               {/* Using standard img tag to avoid Next.js Image complexity with local assets during refactor */}
              <img 
                src="/assets/img/foto-victoria-frente-inicio-alt.jpg" 
                alt="Victória Almeida Psicóloga"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs"
            >
              <p className="text-stone-800 font-medium italic">
                "Aceitar a realidade não significa concordar com ela, mas sim acolher o desconforto em prol da mudança."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

