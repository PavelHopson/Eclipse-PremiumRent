import React from 'react';
import { ShieldCheck, Clock, Eye, Car, MapPin, UserCheck, Repeat, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const InfoSection: React.FC = () => {
  const advantages = [
    { icon: <ShieldCheck size={22} />, title: 'Полное КАСКО', text: 'Весь автопарк компании полностью застрахован.' },
    { icon: <Clock size={22} />, title: 'Поддержка 24/7', text: 'Мы всегда рядом, если вам потребуется помощь или консультация.' },
    { icon: <Eye size={22} />, title: 'Конфиденциальность', text: 'Ни один прокатный автомобиль не оборудован средствами аудио- видеофиксации.' },
    { icon: <UserCheck size={22} />, title: 'С водителем', text: 'Если вам нужен персональный водитель, компания предоставит его.' },
    { icon: <MapPin size={22} />, title: 'Доставка по адресу', text: 'Доставим автомобиль по указанному адресу, в том числе в аэропорт Храброво.' },
    { icon: <Repeat size={22} />, title: 'Аренда с выкупом', text: 'Некоторые автомобили можно выкупить после аренды.' },
  ];

  return (
    <section id="conditions" className="py-24 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Main text */}
        <div className="mb-20">
          <h2 className="text-white/50 text-xl sm:text-2xl font-light italic tracking-wide mb-10">
            Прокат автомобилей в Калининграде
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white/40 text-[15px] leading-relaxed">
            <div className="space-y-5">
              <p>
                Компания <span className="text-brand-gold/80">Eclipse Premium</span> оказывает услуги посуточной и долгосрочной аренды автомобилей без водителя в Калининграде и Калининградской области. В нашем парке — внедорожники, спорткары, бизнес и премиум-класс, минивэны и электромобили.
              </p>
              <p>
                Предлагаем автомобили на любой бюджет — от комфортных седанов до элитных суперкаров. Воспользуйтесь удобным каталогом, чтобы подобрать именно тот автомобиль, который подходит для ваших целей: поездка на Куршскую косу, путешествие по побережью или деловая встреча.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Пункты выдачи расположены в <span className="text-white/60">Калининграде</span>, <span className="text-white/60">аэропорту Храброво</span>, <span className="text-white/60">Зеленоградске</span> и <span className="text-white/60">Светлогорске</span>. Возврат автомобиля возможен в любой удобный для вас пункт.
              </p>
              <p>
                Для оформления аренды понадобятся только паспорт РФ и водительские права. Оформление — 15 минут. Доставим автомобиль к отелю, апартаментам или прямо к выходу из терминала аэропорта.
              </p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div>
          <h3 className="text-white/50 text-lg font-light italic tracking-wide mb-10">
            Больше, чем просто прокат
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group p-6 border border-dark-border rounded-sm hover:border-brand-gold/20 transition-colors"
              >
                <div className="text-brand-gold/50 mb-4 group-hover:text-brand-gold transition-colors">{item.icon}</div>
                <h4 className="text-white/80 text-sm font-medium mb-2">{item.title}</h4>
                <p className="text-white/30 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-20 p-8 border border-dark-border rounded-sm">
          <div className="flex items-start gap-4">
            <Building2 size={22} className="text-brand-gold/40 shrink-0 mt-1" />
            <div>
              <h4 className="text-white/60 text-sm font-medium mb-3">Аренда для юридических лиц</h4>
              <p className="text-white/30 text-sm leading-relaxed">
                Оказываем услуги посуточной аренды для компаний и ИП. Работаем с НДС и без НДС, предоставляем закрывающие документы. Электронный документооборот обеспечивает прозрачную отчётность для вашей бухгалтерии.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
