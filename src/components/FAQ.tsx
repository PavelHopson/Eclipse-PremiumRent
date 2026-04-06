import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    q: 'Какие документы нужны для аренды?',
    a: 'Паспорт гражданина РФ и водительское удостоверение. Для иностранных граждан — заграничный паспорт, миграционная карта или виза, водительское удостоверение международного образца.'
  },
  {
    q: 'Есть ли залог при аренде?',
    a: 'Залог зависит от класса автомобиля. При подключении опции «100% защита» залог не требуется. Подробности уточняйте у менеджера.'
  },
  {
    q: 'Сколько времени занимает оформление?',
    a: 'Первое оформление — 15 минут. Повторная аренда — мгновенно через приложение Eclipse в один клик.'
  },
  {
    q: 'Можно ли получить авто в аэропорту Храброво?',
    a: 'Да, мы встретим вас у выхода из терминала с ключами и документами. Доставка в аэропорт Храброво — бесплатно.'
  },
  {
    q: 'Какая страховка включена?',
    a: 'Полное КАСКО и ОСАГО включены в стоимость аренды для всех автомобилей. Дополнительно доступна опция «100% защита» с нулевой франшизой.'
  },
  {
    q: 'Можно ли арендовать авто с водителем?',
    a: 'Да, предоставляем профессионального водителя по запросу. Стоимость — от 1 500 ₽/час, минимум 4 часа.'
  },
  {
    q: 'Какой пробег включён в аренду?',
    a: 'В зависимости от автомобиля — от 150 до 300 км в сутки. Превышение оплачивается дополнительно. Для длительной аренды — безлимитный пробег.'
  },
  {
    q: 'Доставляете ли в Зеленоградск и Светлогорск?',
    a: 'Да, доставляем автомобиль в любую точку Калининградской области: Зеленоградск, Светлогорск, Балтийск, Янтарный, Куршскую косу.'
  },
  {
    q: 'Как работает долгосрочная аренда?',
    a: 'При аренде от 7 дней — скидка до 15%, от 15 дней — до 20%, от 22 дней — до 50%. Индивидуальные условия для аренды от 1 месяца.'
  },
  {
    q: 'Работаете ли вы с юридическими лицами?',
    a: 'Да, оказываем услуги аренды для компаний и ИП. Работаем с НДС и без, предоставляем полный пакет закрывающих документов.'
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-dark-card border-y border-white/[0.03]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <h2 className="ornament text-white/25 text-xl font-extralight italic tracking-[0.15em] mb-14 text-center">
          Частые вопросы
        </h2>

        <div className="space-y-px bg-white/[0.02]">
          {QUESTIONS.map((item, i) => (
            <div key={i} className="bg-dark-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group hover:bg-white/[0.01] transition-colors"
              >
                <span className={`text-[14px] pr-8 transition-colors duration-300 ${
                  openIndex === i ? 'text-brand-gold/70' : 'text-white/50 group-hover:text-white/70'
                }`}>
                  {item.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-white/20 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-brand-gold/40' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-white/25 text-[13px] leading-relaxed">
                      {item.a}
                    </p>
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
