import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  { q: 'Какие документы нужны для аренды?', a: 'Паспорт РФ и водительское удостоверение. Для иностранцев — загранпаспорт, миграционная карта, международные права.' },
  { q: 'Есть ли залог при аренде?', a: 'Залог зависит от класса. С опцией «100% защита» залог не требуется.' },
  { q: 'Сколько времени занимает оформление?', a: 'Первое оформление — 15 минут. Повторная аренда — мгновенно через приложение.' },
  { q: 'Можно ли получить авто в аэропорту?', a: 'Да, встретим у выхода из терминала Храброво с ключами. Доставка бесплатно.' },
  { q: 'Какая страховка включена?', a: 'Полное КАСКО и ОСАГО включены. Доступна опция «100% защита» с нулевой франшизой.' },
  { q: 'Можно арендовать с водителем?', a: 'Да, от 1 500 ₽/час, минимум 4 часа.' },
  { q: 'Какой пробег включён?', a: '150-300 км/сутки. Для долгосрочной аренды — безлимит.' },
  { q: 'Доставляете в Зеленоградск?', a: 'Да, доставляем в любую точку области.' },
  { q: 'Как работает долгосрочная аренда?', a: 'От 7 дней — до 15% скидка, от 22 дней — до 50%.' },
  { q: 'Работаете с юрлицами?', a: 'Да, с НДС и без, полный пакет документов.' },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-dark-card border-y border-white/[0.03]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="ornament text-white/25 text-base sm:text-xl font-extralight italic tracking-[0.1em] sm:tracking-[0.15em] mb-8 sm:mb-14 text-center">
          Частые вопросы
        </h2>
        <div className="space-y-px bg-white/[0.02]">
          {QUESTIONS.map((item, i) => (
            <div key={i} className="bg-dark-card">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left group hover:bg-white/[0.01] transition-colors">
                <span className={`text-sm sm:text-[15px] pr-6 sm:pr-8 transition-colors duration-300 ${openIndex === i ? 'text-brand-gold/70' : 'text-white/50 group-hover:text-white/70'}`}>
                  {item.q}
                </span>
                <ChevronDown size={16} className={`shrink-0 text-white/20 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-gold/40' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/25 text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
