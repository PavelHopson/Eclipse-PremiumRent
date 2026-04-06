
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
  const extrasPrice = booking.extras.length * 500 * days; // Simplified extra calculation
  const totalPrice = basePrice + extrasPrice;

  const steps = [
    { title: 'Поиск', icon: <MapPin size={18} /> },
    { title: 'Авто', icon: <CheckCircle2 size={18} /> },
    { title: 'Опции', icon: <ShieldCheck size={18} /> },
    { title: 'Данные', icon: <User size={18} /> },
    { title: 'Оплата', icon: <CreditCard size={18} /> }
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
    <div className="max-w-[1400px] mx-auto px-6 py-24 min-h-[80vh]">
      {/* Progress Stepper */}
      <div className="flex justify-between items-center mb-20 max-w-5xl mx-auto px-4 overflow-x-auto lg:overflow-visible py-4 hide-scrollbar">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-center flex-1 min-w-[100px] relative">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 z-10 ${
              booking.step > i + 1 ? 'bg-brand-primary text-white' : 
              booking.step === i + 1 ? 'bg-brand-text text-white scale-110 shadow-2xl shadow-brand-text/20' : 
              'bg-gray-100 text-gray-400'
            }`}>
              {booking.step > i + 1 ? <CheckCircle2 size={24} /> : s.icon}
            </div>
            <span className={`text-[10px] mt-4 font-black uppercase tracking-[0.2em] whitespace-nowrap ${booking.step === i + 1 ? 'text-brand-text' : 'text-brand-muted'}`}>
              {s.title}
            </span>
            {i < steps.length - 1 && (
              <div className={`absolute top-6 left-[50%] w-full h-[2px] -z-0 ${booking.step > i + 1 ? 'bg-brand-primary' : 'bg-gray-100'}`} />
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
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-bg p-8 rounded-[40px] border border-gray-100">
              <div className="flex gap-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Место получения</p>
                  <p className="text-lg font-bold flex items-center gap-2"><MapPin size={18} className="text-brand-primary" /> {booking.pickupLocation}</p>
                </div>
                <div className="space-y-1 border-l border-gray-200 pl-10">
                  <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Даты аренды</p>
                  <p className="text-lg font-bold flex items-center gap-2"><CalendarIcon size={18} className="text-brand-primary" /> {booking.pickupDate} — {booking.returnDate}</p>
                </div>
              </div>
              <button onClick={resetBooking} className="bg-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border border-gray-100 hover:border-brand-primary transition-all flex items-center gap-2">
                <ChevronLeft size={16} /> Изменить поиск
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {CARS.map(car => (
                <CarCard key={car.id} car={car} onSelect={handleSelectCar} />
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-4xl font-black tracking-tighter">Выберите дополнительные услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'seat', name: 'Детское кресло', price: 500, desc: 'ISOFIX крепления, до 36кг' },
                  { id: 'ins', name: 'Полная страховка', price: 1500, desc: 'Нулевая франшиза при ДТП', badge: 'Must have' },
                  { id: 'nav', name: 'Premium Навигатор', price: 300, desc: 'Актуальные карты области offline' },
                  { id: 'sec', name: 'Второй водитель', price: 500, desc: 'Право управления для друга или супруги' }
                ].map(opt => (
                  <div 
                    key={opt.id} 
                    onClick={() => toggleExtra(opt.id)}
                    className={`flex flex-col p-8 rounded-[40px] border-2 cursor-pointer transition-all duration-500 ${
                      booking.extras.includes(opt.id) 
                        ? 'border-brand-primary bg-brand-primary/5 ring-4 ring-brand-primary/10' 
                        : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        booking.extras.includes(opt.id) ? 'bg-brand-primary text-white' : 'bg-brand-bg text-brand-muted'
                      }`}>
                        {booking.extras.includes(opt.id) ? <CheckCircle2 size={24} /> : <Info size={24} />}
                      </div>
                      <p className="font-black text-2xl text-brand-text">{opt.price} ₽<span className="text-[10px] text-brand-muted font-black uppercase tracking-widest ml-1">/день</span></p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-black text-xl">{opt.name}</h4>
                        {opt.badge && <span className="bg-brand-secondary text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase">{opt.badge}</span>}
                      </div>
                      <p className="text-brand-muted text-sm font-medium leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-10">
                <Button variant="outline" onClick={prevStep} className="px-12 py-6">Назад</Button>
                <Button onClick={nextStep} className="flex-1 py-6 text-xl">Продолжить</Button>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-brand-text text-white p-10 rounded-[50px] sticky top-32 shadow-2xl shadow-black/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-white/40">Итоговый расчет</h3>
                {currentCar && (
                  <div className="space-y-8">
                    <div className="flex gap-6 items-center">
                      <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0 border border-white/10">
                        <img src={currentCar.images[0]} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1">{currentCar.class}</p>
                        <h4 className="text-xl font-black">{currentCar.name}</h4>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-8 border-t border-white/5">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40 font-bold">Аренда ({days} дня)</span>
                        <span className="font-black">{(currentCar.pricePerDay * days).toLocaleString()} ₽</span>
                      </div>
                      {booking.extras.length > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40 font-bold">Опции</span>
                          <span className="font-black text-brand-primary">+{extrasPrice.toLocaleString()} ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40 font-bold">Доставка (Храброво)</span>
                        <span className="text-brand-primary font-black uppercase text-[10px]">Бесплатно</span>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">К оплате</p>
                        <p className="text-4xl font-black tracking-tighter text-white">{totalPrice.toLocaleString()} ₽</p>
                      </div>
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white p-16 rounded-[60px] shadow-[0_60px_100px_-30px_rgba(0,0,0,0.1)] border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <User size={120} />
              </div>
              <h2 className="text-5xl font-black tracking-tighter mb-12">Ваши данные</h2>
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">ФИО</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Иван Иванович Иванов"
                      value={booking.customer.name}
                      onChange={(e) => setBooking({ customer: { ...booking.customer, name: e.target.value } })}
                      className="w-full h-16 bg-brand-bg border-2 border-transparent focus:border-brand-primary rounded-3xl px-8 font-bold transition-all outline-none" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">Номер телефона</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+7 (900) 000-00-00"
                      value={booking.customer.phone}
                      onChange={(e) => setBooking({ customer: { ...booking.customer, phone: e.target.value } })}
                      className="w-full h-16 bg-brand-bg border-2 border-transparent focus:border-brand-primary rounded-3xl px-8 font-bold transition-all outline-none" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">E-mail (для договора)</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.ru"
                    value={booking.customer.email}
                    onChange={(e) => setBooking({ customer: { ...booking.customer, email: e.target.value } })}
                    className="w-full h-16 bg-brand-bg border-2 border-transparent focus:border-brand-primary rounded-3xl px-8 font-bold transition-all outline-none" 
                  />
                </div>
                
                {formError && <p className="text-brand-secondary text-xs font-black uppercase tracking-widest bg-brand-secondary/5 p-4 rounded-2xl">{formError}</p>}

                <div className="p-8 bg-brand-bg rounded-[40px] flex items-center gap-6">
                  <input type="checkbox" required className="w-6 h-6 rounded-lg accent-brand-primary cursor-pointer shrink-0" />
                  <p className="text-xs font-bold text-brand-muted leading-relaxed">
                    Я ознакомлен и согласен с <a href="#" className="text-brand-text underline underline-offset-4 decoration-brand-primary">правилами аренды</a> и даю согласие на обработку моих персональных данных.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button type="submit" className="flex-1 py-6 text-xl">Подтвердить данные</Button>
                  <button type="button" onClick={prevStep} className="px-10 py-6 font-black text-xs uppercase tracking-widest text-brand-muted hover:text-brand-text transition-colors">Вернуться</button>
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
            className="max-w-2xl mx-auto text-center space-y-12"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary animate-pulse">
                <CreditCard size={64} />
              </div>
              <div className="absolute top-0 right-[35%] w-10 h-10 bg-brand-primary rounded-full border-4 border-white flex items-center justify-center text-white">
                <CheckCircle2 size={20} />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl font-black tracking-tighter">Почти готово!</h2>
              <p className="text-brand-muted text-xl font-medium leading-relaxed">
                Для бронирования за вами {currentCar?.name} необходимо внести предоплату 30%. Ссылка на оплату будет также продублирована в Telegram.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-[60px] shadow-2xl shadow-gray-200/50 border border-gray-50 text-left">
              <div className="flex justify-between items-center mb-10 pb-10 border-b border-gray-100">
                <div>
                  <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Сумма предоплаты</p>
                  <p className="text-5xl font-black text-brand-text">{(totalPrice * 0.3).toLocaleString()} ₽</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Всего к оплате</p>
                  <p className="text-xl font-black text-brand-muted">{totalPrice.toLocaleString()} ₽</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Button fullWidth className="h-20 text-xl font-black shadow-[0_20px_40px_-10px_rgba(43,182,115,0.4)]">
                  <CreditCard size={28} />
                  Оплатить сейчас
                </Button>
                <div className="flex justify-center gap-8 opacity-40 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir_logo.svg" className="h-4" />
                </div>
              </div>
            </div>

            <p className="text-[10px] font-black text-brand-muted uppercase tracking-[0.4em]">Безопасная оплата через Tinkoff Checkout</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
