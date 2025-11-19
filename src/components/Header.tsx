'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mim', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed w-full z-50 top-0 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#" className="relative z-50">
          <img 
            src="/assets/img/header-logo.png" 
            alt="Victória Almeida" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-stone-600">
          <Link href="#sobre" className="hover:text-primary transition-colors">Sobre mim</Link>
          
          {/* Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors py-2">
              Serviços
              <ChevronDown className={clsx("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden p-2"
                >
                  {[
                    { label: "Psicoterapia Presencial", href: "https://linktr.ee/victoriaalmeidapsi" },
                    { label: "Psicoterapia Online", href: "https://linktr.ee/victoriaalmeidapsi" },
                    { label: "Treino de Habilidades Sociais", href: "https://linktr.ee/victoriaalmeidapsi" }
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      target="_blank"
                      className="block px-4 py-3 text-sm text-stone-600 hover:bg-primary-light hover:text-primary-dark rounded-xl transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#contato" className="hover:text-primary transition-colors">Contato</Link>
          
          <Link 
            href="https://linktr.ee/victoriaalmeidapsi" 
            target="_blank"
            className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5"
          >
            Agendar
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 p-2 text-stone-600"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif font-medium text-stone-800"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://linktr.ee/victoriaalmeidapsi"
              className="text-2xl font-serif font-medium text-primary"
            >
              Agendar Sessão
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

