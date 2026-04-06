
import React, { useRef, useEffect } from 'react';
import { useStore } from './store';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchForm } from './components/SearchForm';
import { BookingWizard } from './components/BookingWizard';
import { CategorySelector } from './components/CategorySelector';
import { CARS, CELEBRITIES } from './data';
import { CarCard } from './components/CarCard';
import { MapPin, ShieldCheck, Instagram, Send, ArrowRight, Smartphone, CameraOff, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const { booking, setBooking, nextStep, goToStep } = useStore();
  const fleetRef = useRef<HTMLDivElement>(null);

  const scrollToFleet = () => {
    if (booking.step !== 1) {
      goToStep(1);
      setTimeout(() => {
        fleetRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      fleetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCarSelect = (id: string) => {
    setBooking({ selectedCarId: id, step: 3 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startGeneralBooking = () => {
    setBooking({ step: 2 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/30 antialiased overflow-x-hidden">
      <Navbar onCatalogClick={scrollToFleet} />

      <main className="">
        {booking.step === 1 ? (
          <>
            <Hero onActionClick={scrollToFleet} />
            <SearchForm />
            <CategorySelector onSelect={scrollToFleet} />

            {/* Fleet Section - Carloson Style */}
            <section ref={fleetRef} className="py-40 bg-[#0a0a0a] text-white rounded-[100px] mt-[-100px] relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
              <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                  <div className="space-y-4">
                    <p className="text-brand-primary font-black uppercase tracking-[0.4em] text-xs">Наш автопарк</p>
                    <h2 className="text-6xl lg:text-[6rem] font-black tracking-tighter leading-none">Безупречность <br /> в каждом км.</h2>
                  </div>
                  <div className="flex gap-8">
                    <button 
                      onClick={startGeneralBooking} 
                      className="group flex items-center gap-6 border-2 border-white/10 px-12 py-6 rounded-[32px] font-black text-[13px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:border-brand-primary transition-all duration-500 shadow-2xl"
                    >
                      Полный каталог
                      <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {CARS.map(car => (
                    <CarCard key={car.id} car={car} onSelect={handleCarSelect} />
                  ))}
                </div>
              </div>
            </section>

            {/* Our Clients Section - Celebrities */}
            <section className="py-48 bg-white relative">
              <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-32 space-y-8">
                  <span className="text-brand-primary font-black uppercase tracking-[0.6em] text-[10px]">High Profile Guests</span>
                  <h2 className="text-6xl lg:text-9xl font-black tracking-tighter leading-none">Наши <br className="lg:hidden" /> клиенты.</h2>
                  <p className="text-brand-muted text-2xl font-medium max-w-3xl leading-relaxed">LiteRent выбирают те, кто не идет на компромиссы. Звезды спорта, бизнеса и медиа в Калининграде.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                  {CELEBRITIES.map((client, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-[3/4] rounded-[60px] bg-brand-bg overflow-hidden mb-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
                        <img 
                          src={client.img} 
                          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
                          alt={client.name} 
                        />
                      </div>
                      <div className="px-4">
                        <h4 className="text-3xl font-black mb-2 tracking-tight">{client.name}</h4>
                        <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-6 leading-relaxed">{client.role}</p>
                        <div className="w-12 h-px bg-gray-200 mb-6 group-hover:w-full transition-all duration-1000"></div>
                        <p className="text-brand-muted text-lg font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">"{client.text}"</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* SEO & Service Quality Section */}
            <section className="py-48 bg-brand-bg rounded-[100px] mx-6 lg:mx-16 mb-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none scale-150 rotate-12">
                <ShieldCheck size={400} />
              </div>
              <div className="max-w-[1400px] mx-auto px-6 space-y-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                  <div className="lg:col-span-7 space-y-12">
                    <h2 className="text-5xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-brand-text">Аренда авто <br /> премиум-класса <br /> в Калининграде.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-muted text-xl leading-relaxed font-medium">
                      <p>
                        <strong>LiteRent Premium</strong> — это не просто прокат. Это ваш персональный консьерж в мире мобильности Калининградской области. Мы собрали парк из новых автомобилей 2024 года, чтобы каждая ваша поездка в Светлогорск или на Куршскую косу была идеальной.
                      </p>
                      <p>
                        Подача авто в <strong>Аэропорт Храброво</strong> за 15 минут, отсутствие залогов и полная приватность — мы убрали все барьеры между вами и свободой передвижения.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex items-center">
                    <div className="bg-white p-12 lg:p-16 rounded-[70px] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-white relative group">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                        <Star size={32} fill="currentColor" />
                      </div>
                      <Smartphone size={48} className="text-brand-primary mb-10" />
                      <h3 className="text-3xl font-black mb-6">LiteRent App</h3>
                      <p className="text-brand-muted text-lg leading-relaxed mb-12">Бронирование за 3 клика, управление арендой и моментальный чат с поддержкой. Всё лучшее в одном приложении.</p>
                      <div className="flex gap-4">
                        <button className="flex-1 h-16 bg-brand-text text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all active:scale-95">App Store</button>
                        <button className="flex-1 h-16 bg-brand-text text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all active:scale-95">Play Store</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-gray-200">
                  {[
                    { icon: <ShieldCheck size={32} />, title: 'Полное КАСКО', text: 'Страховка включена во все тарифы. Никакой франшизы.' },
                    { icon: <CameraOff size={32} />, title: 'Private Mode', text: 'Гарантируем отсутствие аудио/видео фиксации в салоне.' },
                    { icon: <Clock size={32} />, title: 'Support 24/7', text: 'Ваш личный менеджер на связи в Telegram круглые сутки.' },
                    { icon: <MapPin size={32} />, title: 'Храброво Direct', text: 'Встретим у выхода из терминала с табличкой и ключами.' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-6 group">
                      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
                      <p className="text-brand-muted text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <BookingWizard />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-brand-text text-white py-40 rounded-t-[100px]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-primary rounded-[20px] flex items-center justify-center text-white font-black text-3xl italic shadow-2xl shadow-brand-primary/20">L</div>
                <span className="text-4xl font-black tracking-tighter uppercase">Lite<span className="text-brand-primary">Rent</span></span>
              </div>
              <p className="text-white/40 text-lg leading-relaxed font-medium max-w-xs">
                Премиальный стандарт аренды авто в Калининградской области. Свобода, которой вы достойны.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-500 border border-white/5"><Instagram size={28} /></a>
                <a href="#" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-500 border border-white/5"><Send size={28} /></a>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Локации в области</h4>
              <ul className="space-y-6 text-xl font-bold">
                <li><a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Аэропорт Храброво</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Зеленоградск</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Светлогорск</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Янтарный</a></li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Клиентам</h4>
              <ul className="space-y-6 text-xl font-bold">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Личный кабинет</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Условия и договор</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Для бизнеса</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Франшиза</a></li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Связь 24/7</h4>
              <div className="space-y-4">
                <a href="tel:+79000000000" className="text-4xl font-black tracking-tighter hover:text-brand-primary transition-colors block leading-none">+7 (900) 000-00-00</a>
                <p className="text-brand-primary font-black uppercase tracking-widest text-xs">hello@literent.ru</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-white/20 text-xs font-bold leading-relaxed italic">Наш офис: <br /> г. Калининград, Площадь Победы, 10</p>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
            <p>© 2024 LITERENT PREMIUM. PROUDLY BORN IN KALININGRAD.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
