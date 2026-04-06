import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const ROUTES = [
  {
    title: 'Куршская коса',
    desc: 'Танцующий лес, дюна Эфа, орнитологическая станция. Один из красивейших маршрутов в Европе.',
    time: '45 мин',
    img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=600&auto=format&fit=crop',
    recommend: 'Внедорожник'
  },
  {
    title: 'Зеленоградск — Светлогорск',
    desc: 'Курортные города Балтики. Променады, архитектура, морской воздух и рестораны на побережье.',
    time: '30 мин',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    recommend: 'Комфорт / Бизнес'
  },
  {
    title: 'Балтийск и Балтийская коса',
    desc: 'Самый западный город России. Морская крепость, маяк, паромная переправа на косу.',
    time: '50 мин',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop',
    recommend: 'Внедорожник'
  },
  {
    title: 'Янтарный берег',
    desc: 'Лучший пляж России по версии TripAdvisor. Янтарный комбинат, парк Беккера, дикие пляжи.',
    time: '40 мин',
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=600&auto=format&fit=crop',
    recommend: 'Любой класс'
  },
];

export const RoutesSection: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="ornament text-white/25 text-xl font-extralight italic tracking-[0.15em] mb-14 text-center">
          Маршруты по Калининградской области
        </h2>
        <p className="text-center text-white/20 text-[13px] max-w-2xl mx-auto mb-16 leading-relaxed">
          Откройте для себя Балтийское побережье за рулём премиального автомобиля. Мы подберём идеальный класс для каждого маршрута.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03]">
          {ROUTES.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-dark group cursor-pointer overflow-hidden relative"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden relative">
                  <img
                    src={route.img}
                    alt={route.title}
                    className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/80 hidden sm:block"></div>
                </div>
                {/* Content */}
                <div className="p-7 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-white/70 text-[15px] font-medium group-hover:text-brand-gold/70 transition-colors">{route.title}</h3>
                    <ArrowRight size={14} className="text-brand-gold/0 group-hover:text-brand-gold/40 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                  <p className="text-white/20 text-[12px] leading-relaxed mb-4">{route.desc}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-white/15 text-[11px]">
                      <Clock size={11} className="text-brand-gold/30" />
                      {route.time} от Калининграда
                    </span>
                    <span className="text-white/10 text-[10px] border border-white/[0.06] px-2.5 py-0.5">
                      {route.recommend}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
