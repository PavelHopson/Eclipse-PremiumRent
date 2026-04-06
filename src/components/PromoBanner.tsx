import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Clock, CreditCard, Gift } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const promos = [
    { icon: <Gift size={18} />, discount: '10%', text: 'на первый заказ', sub: 'промокод ECLIPSE' },
    { icon: <Percent size={18} />, discount: 'до 50%', text: 'долгосрочная аренда', sub: 'от 22 дней' },
    { icon: <Clock size={18} />, discount: '5%', text: 'за stories', sub: 'Instagram / Telegram' },
    { icon: <CreditCard size={18} />, discount: 'до 30%', text: 'клубная карта', sub: 'постоянным клиентам' },
  ];

  return (
    <section className="py-10 sm:py-16 bg-dark border-y border-white/[0.03]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-center ornament text-white/25 text-base sm:text-lg font-extralight italic tracking-[0.1em] sm:tracking-[0.15em] mb-8 sm:mb-12">
          Акции и скидки
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.03]">
          {promos.map((promo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-dark p-4 sm:p-8 text-center group hover:bg-dark-card transition-colors duration-500 cursor-pointer">
              <div className="text-brand-gold/30 mb-3 sm:mb-4 flex justify-center group-hover:text-brand-gold/60 transition-colors">{promo.icon}</div>
              <p className="text-brand-gold/70 text-xl sm:text-2xl font-extralight tracking-tight mb-1">{promo.discount}</p>
              <p className="text-white/50 text-xs sm:text-sm mb-0.5 sm:mb-1">{promo.text}</p>
              <p className="text-white/15 text-[10px] sm:text-xs tracking-wide">{promo.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
