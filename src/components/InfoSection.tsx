import React from 'react';
import { ShieldCheck, Clock, Eye, MapPin, UserCheck, Repeat, Building2, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const InfoSection: React.FC = () => {
  const advantages = [
    { icon: <ShieldCheck size={20} />, title: 'Полное КАСКО', text: 'Весь автопарк полностью застрахован. Без франшизы.' },
    { icon: <Clock size={20} />, title: 'Поддержка 24/7', text: 'Персональный менеджер на связи круглосуточно.' },
    { icon: <Eye size={20} />, title: 'Конфиденциальность', text: 'Автомобили не оборудованы средствами аудио- видеофиксации.' },
    { icon: <UserCheck size={20} />, title: 'Персональный водитель', text: 'Предоставим профессионального водителя по запросу.' },
    { icon: <MapPin size={20} />, title: 'Доставка к терминалу', text: 'Встретим у выхода из аэропорта Храброво с ключами.' },
    { icon: <Repeat size={20} />, title: 'Аренда с выкупом', text: 'Возможность выкупа автомобиля после аренды.' },
  ];

  return (
    <section id="conditions" className="py-28 bg-dark relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* SEO text */}
        <div className="mb-24">
          <h2 className="ornament text-white/25 text-xl font-extralight italic tracking-[0.15em] mb-12">
            Прокат автомобилей в Калининграде
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white/30 text-[14px] leading-[1.9]">
            <div className="space-y-5">
              <p>
                Компания <span className="text-brand-gold/60">Eclipse Premium</span> оказывает услуги посуточной и долгосрочной аренды автомобилей без водителя в Калининграде и Калининградской области. В нашем автопарке более 170 автомобилей: внедорожники, спорткары, бизнес и премиум-класс, минивэны и электромобили.
              </p>
              <p>
                Предлагаем автомобили на любой бюджет — от комфортных седанов до элитных суперкаров. Воспользуйтесь каталогом, чтобы подобрать автомобиль для поездки на Куршскую косу, путешествия по Балтийскому побережью или деловой встречи.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Пункты выдачи расположены в <span className="text-white/50">Калининграде</span>, <span className="text-white/50">аэропорту Храброво</span>, <span className="text-white/50">Зеленоградске</span> и <span className="text-white/50">Светлогорске</span>. Возврат автомобиля — в любой удобный для вас пункт.
              </p>
              <p>
                Для оформления аренды понадобятся паспорт РФ и водительские права. Оформление — 15 минут. Договор подписывается удалённо или лично. Доставим автомобиль к отелю, апартаментам или к выходу из терминала.
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-24 bg-white/[0.03]">
          {[
            { value: '170+', label: 'автомобилей' },
            { value: '15', label: 'минут оформление' },
            { value: '24/7', label: 'поддержка' },
            { value: '4', label: 'пункта выдачи' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-dark p-8 text-center"
            >
              <p className="text-brand-gold/50 text-3xl font-extralight tracking-tight mb-2">{stat.value}</p>
              <p className="text-white/20 text-[11px] uppercase tracking-[0.25em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mb-24">
          <h3 className="ornament text-white/25 text-lg font-extralight italic tracking-[0.15em] mb-12">
            Больше, чем просто прокат
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03]">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group bg-dark p-8 hover:bg-dark-card transition-colors duration-500"
              >
                <div className="text-brand-gold/30 mb-5 group-hover:text-brand-gold/60 transition-colors duration-500">{item.icon}</div>
                <h4 className="text-white/60 text-[13px] font-medium mb-2 tracking-tight">{item.title}</h4>
                <p className="text-white/20 text-[13px] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* App banner */}
        <div className="border border-white/[0.04] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden grain">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/[0.02] rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="text-brand-gold/30">
            <Smartphone size={48} strokeWidth={1} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-white/60 text-lg font-light mb-2 tracking-tight">Eclipse App</h4>
            <p className="text-white/25 text-[13px] leading-relaxed max-w-lg">
              Бронирование за 3 клика, управление арендой и моментальный чат с поддержкой. Скачайте в App Store и Google Play.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="border border-white/[0.08] text-white/40 px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:border-brand-gold/30 hover:text-brand-gold/60 transition-all duration-500">App Store</button>
            <button className="border border-white/[0.08] text-white/40 px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:border-brand-gold/30 hover:text-brand-gold/60 transition-all duration-500">Google Play</button>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-16 border border-white/[0.04] p-8 lg:p-10 flex items-start gap-5">
          <Building2 size={20} className="text-brand-gold/25 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white/45 text-[13px] font-medium mb-3">Аренда для юридических лиц</h4>
            <p className="text-white/20 text-[13px] leading-relaxed">
              Оказываем услуги посуточной аренды для компаний и ИП. Работаем с НДС и без. Предоставляем закрывающие документы. Электронный документооборот обеспечивает оперативную и прозрачную отчётность.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
