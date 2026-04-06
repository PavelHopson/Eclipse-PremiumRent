import React, { useState } from 'react';
import { useStore } from '../store';
import { CARS } from '../data';
import { Button } from './Button';
import { CarCard } from './CarCard';
import { CheckCircle2, ChevronLeft, CreditCard, ShieldCheck, User, Info, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingWizard: React.FC = () => {
  const { booking, nextStep, prevStep, setBooking, resetBooking } = useStore();
  const [formError, setFormError] = useState('');

  const currentCar = CARS.find(c => c.id === booking.selectedCarId);

  const calculateDays = () => {
    const start = new Date(booking.pickupDate);
    const end = new Date(booking.returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  };

  const days = calculateDays();
  const basePrice = currentCar ? currentCar.pricePerDay * days : 0;
  const extrasPrice = booking.extras.length * 500 * days;
  const totalPrice = basePrice + extrasPrice;

  const steps = [
    { title: 'Поиск', icon: <MapPin size={16} /> },
    { title: 'Авто', icon: <CheckCircle2 size={16} /> },
    { title: 'Опции', icon: <ShieldCheck size={16} /> },
    { title: 'Данные', icon: <User size={16} /> },
    { title: 'Оплата', icon: <CreditCard size={16} /> }
  ];

  const handleSelectCar = (id: string) => {
    setBooking({ selectedCarId: id });
    nextStep();
  };

  const toggleExtra = (id: string) => {
    const newExtras = booking.extras.includes(id)
      ? booking.extras.filter(e => e !== id)
      : [...booking.extras, id];
    setBooking({ extras: newExtras });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.customer.name || !booking.customer.phone) {
      setFormError('Пожалуйста, заполните основные поля');
      return;
    }
    nextStep();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-28 min-h-[80vh]">
      {/* Progress */}
      <div className="flex justify-between items-center mb-16 max-w-3xl mx-auto overflow-x-auto hide-scrollbar py-4">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-center flex-1 min-w-[80px] relative">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all z-10 ${
              booking.step > i + 1 ? 'bg-brand-primary text-white' :
              booking.step === i + 1 ? 'bg-white text-dark' :
              'bg-dark-card border border-dark-border text-white/30'
            }`}>
              {booking.step > i + 1 ? <CheckCircle2 size={20} /> : s.icon}
            </div>
            <span className={`text-[10px] mt-3 uppercase tracking-[0.2em] whitespace-nowrap ${
              booking.step === i + 1 ? 'text-white' : 'text-white/30'
            }`}>
              {s.title}
            </span>
            {i < steps.length - 1 && (
              <div className={`absolute top-5 left-[50%] w-full h-px -z-0 ${
                booking.step > i + 1 ? 'bg-brand-primary' : 'bg-dark-border'
              }`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {booking.step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-dark-card border border-dark-border p-6 rounded-sm">
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Место</p>
                  <p className="text-white/80 flex items-center gap-2"><MapPin size={14} className="text-brand-gold/60" /> {booking.pickupLocation}</p>
                </div>
                <div className="border-l border-dark-border pl-8">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Даты</p>
                  <p className="text-white/80 flex items-center gap-2"><CalendarIcon size={14} className="text-brand-gold/60" /> {booking.pickupDate} — {booking.returnDate}</p>
                </div>
              </div>
              <button onClick={resetBooking} className="border border-dark-border px-6 py-3 text-white/50 text-xs uppercase tracking-widest hover:text-white hover:border-white/20 transition-colors flex items-center gap-2">
                <ChevronLeft size={14} /> Изменить
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CARS.map(car => (
                <div key={car.id} className="w-full">
                  <div className="w-full [&>div]:w-full [&>div]:min-w-0">
                    <CarCard car={car} onSelect={handleSelectCar} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {booking.step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-white/90 text-2xl font-light">Дополнительные услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'seat', name: 'Детское кресло', price: 500, desc: 'ISOFIX крепления, до 36кг' },
                  { id: 'ins', name: 'Полная страховка', price: 1500, desc: 'Нулевая франшиза при ДТП' },
                  { id: 'nav', name: 'Premium Навигатор', price: 300, desc: 'Карты области offline' },
                  { id: 'sec', name: 'Второй водитель', price: 500, desc: 'Право управления для друга' }
                ].map(opt => (
                  <div
                    key={opt.id}
                    onClick={() => toggleExtra(opt.id)}
                    className={`p-6 border rounded-sm cursor-pointer transition-all ${
                      booking.extras.includes(opt.id)
                        ? 'border-brand-primary bg-brand-primary/5'
                        : 'border-dark-border bg-dark-card hover:border-white/15'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
                        booking.extras.includes(opt.id) ? 'bg-brand-primary text-white' : 'bg-dark border border-dark-border text-white/30'
                      }`}>
                        {booking.extras.includes(opt.id) ? <CheckCircle2 size={18} /> : <Info size={18} />}
                      </div>
                      <span className="text-white/70 text-lg font-medium">{opt.price} ₽<span className="text-white/30 text-xs ml-1">/день</span></span>
                    </div>
                    <h4 className="text-white/80 text-sm font-medium mb-1">{opt.name}</h4>
                    <p className="text-white/30 text-xs">{opt.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-6">
                <Button variant="outline" onClick={prevStep}>Назад</Button>
                <Button onClick={nextStep} className="flex-1">Продолжить</Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-dark-card border border-dark-border p-8 rounded-sm sticky top-28">
                <h3 className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-8">Итого</h3>
                {currentCar && (
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-20 h-16 rounded-sm overflow-hidden shrink-0">
                        <img src={currentCar.images[0]} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-medium">{currentCar.name}</p>
                        <p className="text-white/30 text-xs">{currentCar.class}</p>
                      </div>
                    </div>
                    <div className="space-y-3 pt-6 border-t border-dark-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/30">Аренда ({days} дн.)</span>
                        <span className="text-white/70">{basePrice.toLocaleString()} ₽</span>
                      </div>
                      {extrasPrice > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-white/30">Опции</span>
                          <span className="text-brand-primary">+{extrasPrice.toLocaleString()} ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-white/30">Доставка</span>
                        <span className="text-brand-gold/60 text-xs uppercase tracking-wider">Бесплатно</span>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-dark-border">
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">К оплате</p>
                      <p className="text-white text-3xl font-light">{totalPrice.toLocaleString()} ₽</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {booking.step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-dark-card border border-dark-border p-12 rounded-sm">
              <h2 className="text-white/90 text-2xl font-light mb-10">Ваши данные</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 block">ФИО</label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Иванович Иванов"
                      value={booking.customer.name}
                      onChange={(e) => setBooking({ customer: { ...booking.customer, name: e.target.value } })}
                      className="w-full h-14 bg-dark border border-dark-border px-5 text-white/90 text-sm transition-all rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 block">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (900) 000-00-00"
                      value={booking.customer.phone}
                      onChange={(e) => setBooking({ customer: { ...booking.customer, phone: e.target.value } })}
                      className="w-full h-14 bg-dark border border-dark-border px-5 text-white/90 text-sm transition-all rounded-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 block">E-mail</label>
                  <input
                    type="email"
                    placeholder="example@mail.ru"
                    value={booking.customer.email}
                    onChange={(e) => setBooking({ customer: { ...booking.customer, email: e.target.value } })}
                    className="w-full h-14 bg-dark border border-dark-border px-5 text-white/90 text-sm transition-all rounded-sm"
                  />
                </div>

                {formError && <p className="text-brand-secondary text-xs bg-brand-secondary/10 p-3 rounded-sm">{formError}</p>}

                <div className="p-5 bg-dark border border-dark-border rounded-sm flex items-center gap-4">
                  <input type="checkbox" required className="w-5 h-5 accent-brand-primary cursor-pointer shrink-0" />
                  <p className="text-xs text-white/40 leading-relaxed">
                    Я согласен с <a href="#" className="text-brand-gold/70 underline underline-offset-4">правилами аренды</a> и даю согласие на обработку персональных данных.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1">Подтвердить</Button>
                  <button type="button" onClick={prevStep} className="px-8 py-4 text-white/40 text-xs uppercase tracking-widest hover:text-white/60 transition-colors">Назад</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {booking.step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center space-y-10"
          >
            <div className="w-20 h-20 mx-auto bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <CreditCard size={40} />
            </div>

            <div className="space-y-3">
              <h2 className="text-white/90 text-3xl font-light">Почти готово!</h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Для бронирования {currentCar?.name} необходимо внести предоплату 30%.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border p-10 rounded-sm text-left space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-dark-border">
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Предоплата</p>
                  <p className="text-white text-3xl font-light">{(totalPrice * 0.3).toLocaleString()} ₽</p>
                </div>
                <div className="text-right">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Всего</p>
                  <p className="text-white/50 text-lg">{totalPrice.toLocaleString()} ₽</p>
                </div>
              </div>

              <Button fullWidth className="h-16 text-base">
                <CreditCard size={22} />
                Оплатить сейчас
              </Button>

              <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em]">
                Безопасная оплата через Tinkoff Checkout
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
