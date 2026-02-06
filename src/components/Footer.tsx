'use client';

import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contato" className="bg-stone-900 text-stone-300 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white">Victória Almeida</h3>
            <p className="text-stone-400 leading-relaxed">
              Psicóloga Clínica especialista em terapias comportamentais contextuais.
              CRP 15/7630
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://instagram.com/victoriaalmeidapsi" 
                target="_blank"
                className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre mim</Link></li>
              <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>(82) 99619-0338</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">contato@victoriaalmeidapsi.com.br</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Consultório</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Empresarial Comendador Palmeira, 239<br />
		  Farol, Maceió-AL<br />
                  CEP 57051-150
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Victória Almeida. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️</p>
        </div>
      </div>
    </footer>
  );
}
