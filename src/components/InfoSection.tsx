import React from 'react';
import { ShieldCheck, Clock, Eye, MapPin, UserCheck, Repeat, Building2, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const InfoSection: React.FC = () => {
  const advantages = [
    { icon: <ShieldCheck size={20} />, title: 'Полное КАСКО', text: 'Весь автопарк застрахован. Без франшизы.' },
    { icon: <Clock size={20} />, title: 'Поддержка 24/7', text: 'Персональный менеджер на связи.' },
    { icon: <Eye size={20} />, title: 'Конфиденциальность', text: 'Без средств аудио- видеофиксации.' },
    { icon: <UserCheck size={20} />, title: 'Персональный водитель', text: 'Профессиональный водитель по запросу.' },
    { icon: <MapPin size={20} />, title: 'Доставка к терминалу', text: 'Встретим у выхода из Храброво.' },
    { icon: <Repeat size={20} />, title: 'Аренда с выкупом', text: 'Возможность выкупа после аренды.' },
  ];

  return (
    <section id="conditions" className="py-16 sm:py-24 lg:py-28 bg-dark relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* SEO */}
        <div className="mb-14 sm:mb-24">
          <h2 className="ornament text-white/25 text-base sm:text-xl font-extralight italic tracking-[0.1em] sm:tracking-[0.15em] mb-8 sm:mb-12">
            Прокат автомобилей в Калининграде
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 text-white/30 text-sm sm:text-[15px] leading-[1.8] sm:leading-[1.9]">
            <div className="space-y-4 sm:space-y-5">
              <p><span className="text-brand-gold/60">Eclipse Premium</span> оказывает услуги аренды автомобилей в Калининграде и области. В автопарке 170+ автомобилей.</p>
              <p>Предлагаем автомобили на любой бюджет — от комфортных седанов до элитных суперкаров.</p>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <p>Пункты выдачи: <span className="text-white/50">Калининград</span>, <span className="text-white/50">Храброво</span>, <span className="text-white/50">Зеленоградск</span>, <span className="text-white/50">Светлогорск</span>.</p>
              <p>Для оформления — паспорт РФ и права. Оформление 15 минут. Доставим к отелю или терминалу.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-14 sm:mb-24 bg-white/[0.03]">
          {[
            { value: '170+', label: 'автомобилей' },
            { value: '15', label: 'мин оформление' },
            { value: '24/7', label: 'поддержка' },
            { value: '4', label: 'пункта выдачи' },
          ].map((stat, i) => (
            <motion.div key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-dark p-5 sm:p-8 text-center">
              <p className="text-brand-gold/50 text-2xl sm:text-3xl font-extralight tracking-tight mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-white/20 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mb-14 sm:mb-24">
          <h3 className="ornament text-white/25 text-base sm:text-lg font-extralight italic tracking-[0.1em] sm:tracking-[0.15em] mb-8 sm:mb-12">
            Больше, чем просто прокат
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03]">
            {advantages.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group bg-dark p-5 sm:p-8 hover:bg-dark-card transition-colors duration-500">
                <div className="text-brand-gold/30 mb-4 sm:mb-5 group-hover:text-brand-gold/60 transition-colors duration-500">{item.icon}</div>
                <h4 className="text-white/60 text-sm font-medium mb-1.5 sm:mb-2 tracking-tight">{item.title}</h4>
                <p className="text-white/20 text-xs sm:text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* App */}
        <div className="border border-white/[0.04] p-6 sm:p-10 lg:p-14 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 relative overflow-hidden grain">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/[0.02] rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="text-brand-gold/30"><Smartphone size={40} strokeWidth={1} /></div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-white/60 text-base sm:text-lg font-light mb-1.5 sm:mb-2 tracking-tight">Eclipse App</h4>
            <p className="text-white/25 text-xs sm:text-sm leading-relaxed max-w-lg">
              Бронирование за 3 клика и чат с поддержкой. App Store и Google Play.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="border border-white/[0.08] text-white/40 px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:border-brand-gold/30 hover:text-brand-gold/60 transition-all duration-500">App Store</button>
            <button className="border border-white/[0.08] text-white/40 px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:border-brand-gold/30 hover:text-brand-gold/60 transition-all duration-500">Google Play</button>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 sm:mt-16 border border-white/[0.04] p-5 sm:p-8 lg:p-10 flex items-start gap-4 sm:gap-5">
          <Building2 size={20} className="text-brand-gold/25 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white/45 text-sm font-medium mb-2 sm:mb-3">Аренда для юридических лиц</h4>
            <p className="text-white/20 text-xs sm:text-sm leading-relaxed">
              Работаем с НДС и без. Закрывающие документы. ЭДО для прозрачной отчётности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
