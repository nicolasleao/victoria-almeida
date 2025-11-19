'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: "Como saber se você precisa de psicoterapia?",
    answer: "É imprescindível que pessoas diagnosticadas com transtorno mental (ex.: Depressão, Ansiedade Generalizada, TDAH, TEA) estejam em tratamento. Além disso, a terapia é extremamente benéfica para quem tem dificuldades emocionais e interpessoais, proporcionando autoconhecimento e regulação emocional."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "Não é possível determinar um tempo exato, pois cada processo terapêutico é único. O tratamento depende das necessidades específicas de cada paciente, da gravidade das questões e do engajamento no processo."
  },
  {
    question: "Qual a frequência e duração da sessão?",
    answer: "Geralmente, as sessões são semanais e duram cerca de 50 minutos. Esta frequência é ideal para manter a continuidade do trabalho terapêutico e garantir resultados consistentes."
  },
  {
    question: "Você atende por convênio?",
    answer: "Realizo atendimentos apenas na modalidade particular. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, conforme as regras do seu convênio."
  },
  {
    question: "Qual a sua abordagem terapêutica?",
    answer: "Utilizo as Terapias Comportamentais Contextuais, especificamente a ACT (Terapia de Aceitação e Compromisso) e a FAP (Psicoterapia Analítica Funcional). São abordagens modernas, colaborativas e focadas em ajudar o cliente a viver uma vida alinhada com seus valores."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-stone-600">
            Entenda melhor como funciona o processo terapêutico.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-stone-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-stone-50 transition-colors"
              >
                <span className={clsx(
                  "text-lg font-medium transition-colors",
                  openIndex === index ? "text-primary" : "text-stone-800"
                )}>
                  {faq.question}
                </span>
                <span className={clsx(
                  "p-2 rounded-full transition-colors",
                  openIndex === index ? "bg-primary text-white" : "bg-stone-100 text-stone-500"
                )}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

