import React from 'react';
import { CELEBRITIES } from '../data';
import { motion } from 'framer-motion';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <h2 className="text-center text-white/40 text-xl sm:text-2xl font-light italic tracking-wide mb-16">
          Наши клиенты
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CELEBRITIES.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-5">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Info */}
              <h4 className="text-white/90 text-base font-medium mb-1">{client.name}</h4>
              <p className="text-white/35 text-sm leading-relaxed">{client.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
