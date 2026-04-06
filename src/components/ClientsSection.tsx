import React from 'react';
import { CELEBRITIES } from '../data';
import { motion } from 'framer-motion';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-dark-card border-y border-white/[0.03] grain relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <h2 className="text-center ornament text-white/25 text-base sm:text-xl font-extralight italic tracking-[0.1em] sm:tracking-[0.15em] mb-10 sm:mb-20">
          Наши клиенты
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {CELEBRITIES.map((client, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group">
              <div className="aspect-[4/3] overflow-hidden mb-3 sm:mb-5 relative">
                <img src={client.img} alt={client.name} className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 border border-white/[0.04] pointer-events-none group-hover:border-brand-gold/10 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              <h4 className="text-white/80 text-sm sm:text-[15px] font-medium mb-0.5 sm:mb-1 tracking-tight">{client.name}</h4>
              <p className="text-white/20 text-[11px] sm:text-xs leading-relaxed line-clamp-2">{client.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
