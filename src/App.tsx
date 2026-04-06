import React, { useRef } from 'react';
import { useStore } from './store';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchForm } from './components/SearchForm';
import { BookingWizard } from './components/BookingWizard';
import { CategorySelector } from './components/CategorySelector';
import { CarCarousel } from './components/CarCarousel';
import { ClientsSection } from './components/ClientsSection';
import { InfoSection } from './components/InfoSection';
import { CAR_CLASSES, CarClass } from './types';
import { Instagram, Send, Phone, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const { booking, setBooking, goToStep } = useStore();
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

  const handleCategorySelect = (category: CarClass) => {
    const el = document.getElementById(`category-${category}`);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCarSelect = (id: string) => {
    setBooking({ selectedCarId: id, step: 3 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navbar onCatalogClick={scrollToFleet} />

      <main>
        {booking.step === 1 ? (
          <>
            <Hero onActionClick={scrollToFleet} />
            <SearchForm />
            <CategorySelector onSelect={handleCategorySelect} />

            {/* Car carousels by category */}
            <div ref={fleetRef}>
              {CAR_CLASSES.map(category => (
                <div key={category} id={`category-${category}`}>
                  <CarCarousel category={category} onSelectCar={handleCarSelect} />
                </div>
              ))}
            </div>

            <ClientsSection />
            <InfoSection />
          </>
        ) : (
          <BookingWizard />
        )}
      </main>

      {/* Footer */}
      <footer id="contacts" className="bg-dark-card border-t border-dark-border py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <span className="text-2xl font-light tracking-[0.35em] uppercase text-white/90">Eclipse</span>
              <p className="text-white/25 text-sm leading-relaxed max-w-xs">
                Премиальный стандарт аренды автомобилей в Калининградской области.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-brand-gold hover:border-brand-gold/30 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-brand-gold hover:border-brand-gold/30 transition-colors">
                  <Send size={18} />
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-6">
              <h4 className="text-[10px] text-white/20 uppercase tracking-[0.4em]">Локации</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="flex items-center gap-2 hover:text-white/60 transition-colors cursor-pointer"><MapPin size={12} className="text-brand-gold/40" /> Аэропорт Храброво</li>
                <li className="flex items-center gap-2 hover:text-white/60 transition-colors cursor-pointer"><MapPin size={12} className="text-brand-gold/40" /> Калининград Центр</li>
                <li className="flex items-center gap-2 hover:text-white/60 transition-colors cursor-pointer"><MapPin size={12} className="text-brand-gold/40" /> Зеленоградск</li>
                <li className="flex items-center gap-2 hover:text-white/60 transition-colors cursor-pointer"><MapPin size={12} className="text-brand-gold/40" /> Светлогорск</li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h4 className="text-[10px] text-white/20 uppercase tracking-[0.4em]">Клиентам</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#" className="hover:text-white/60 transition-colors">Условия аренды</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Для бизнеса</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Клубные карты</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Франшиза</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-[10px] text-white/20 uppercase tracking-[0.4em]">Связь 24/7</h4>
              <a href="tel:+79000000000" className="text-2xl text-white/80 font-light tracking-tight hover:text-brand-gold transition-colors block">
                +7 (900) 000-00-00
              </a>
              <p className="text-brand-gold/50 text-xs uppercase tracking-widest">hello@eclipse-rent.ru</p>
              <div className="pt-4 border-t border-dark-border">
                <p className="text-white/15 text-xs leading-relaxed">
                  г. Калининград, Площадь Победы, 10
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-10 border-t border-dark-border flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] text-white/15 uppercase tracking-[0.4em]">
            <p>&copy; 2024 Eclipse Premium. Kaliningrad.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white/30 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/30 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
