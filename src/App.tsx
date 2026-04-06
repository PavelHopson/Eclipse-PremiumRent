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
import { PromoBanner } from './components/PromoBanner';
import { RoutesSection } from './components/RoutesSection';
import { FAQ } from './components/FAQ';
import { FloatingContacts } from './components/FloatingContacts';
import { CAR_CLASSES, CarClass } from './types';
import { Instagram, Send, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const { booking, setBooking, goToStep } = useStore();
  const fleetRef = useRef<HTMLDivElement>(null);

  const scrollToFleet = () => {
    if (booking.step !== 1) {
      goToStep(1);
      setTimeout(() => fleetRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
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
      <FloatingContacts />

      <main>
        {booking.step === 1 ? (
          <>
            <Hero onActionClick={scrollToFleet} />
            <SearchForm />
            <CategorySelector onSelect={handleCategorySelect} />

            {/* Car carousels */}
            <div ref={fleetRef}>
              {CAR_CLASSES.map(category => (
                <div key={category} id={`category-${category}`}>
                  <CarCarousel category={category} onSelectCar={handleCarSelect} />
                </div>
              ))}
            </div>

            <PromoBanner />
            <ClientsSection />
            <RoutesSection />
            <InfoSection />
            <FAQ />
          </>
        ) : (
          <BookingWizard />
        )}
      </main>

      {/* Footer */}
      <footer id="contacts" className="bg-dark-card border-t border-white/[0.03] pt-12 sm:pt-20 lg:pt-24 pb-10 sm:pb-16 relative grain">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-20">
            <div className="space-y-6">
              <span className="text-lg sm:text-[22px] font-extralight tracking-[0.3em] sm:tracking-[0.4em] uppercase text-white/70">Eclipse</span>
              <p className="text-white/15 text-xs sm:text-sm leading-relaxed max-w-xs">
                Премиальный стандарт аренды автомобилей в Калининградской области. Свобода, которой вы достойны.
              </p>
              <div className="flex gap-2">
                <a href="#" className="w-10 h-10 sm:w-9 sm:h-9 border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-brand-gold/50 hover:border-brand-gold/20 transition-all duration-500">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 sm:w-9 sm:h-9 border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-brand-gold/50 hover:border-brand-gold/20 transition-all duration-500">
                  <Send size={16} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] sm:text-[11px] text-white/15 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Локации</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/25">
                {['Аэропорт Храброво', 'Калининград Центр', 'Зеленоградск', 'Светлогорск'].map(loc => (
                  <li key={loc} className="flex items-center gap-2 hover:text-white/40 transition-colors cursor-pointer">
                    <MapPin size={10} className="text-brand-gold/20" /> {loc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] sm:text-[11px] text-white/15 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Клиентам</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/25">
                {['Условия аренды', 'Для бизнеса', 'Клубные карты', 'Франшиза', 'Договор аренды'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white/40 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-[10px] sm:text-[11px] text-white/15 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Связь 24/7</h4>
              <a href="tel:+79000000000" className="text-lg sm:text-xl text-white/60 font-extralight tracking-tight hover:text-brand-gold/70 transition-colors duration-500 block">
                +7 (900) 000-00-00
              </a>
              <div className="flex gap-2">
                <a href="https://wa.me/79000000000" className="text-[11px] text-white/20 border border-white/[0.06] px-3 py-1.5 hover:text-brand-gold/40 hover:border-brand-gold/15 transition-all">WhatsApp</a>
                <a href="https://t.me/eclipse_rent" className="text-[11px] text-white/20 border border-white/[0.06] px-3 py-1.5 hover:text-brand-gold/40 hover:border-brand-gold/15 transition-all">Telegram</a>
              </div>
              <p className="text-brand-gold/30 text-[11px] uppercase tracking-[0.3em]">hello@eclipse-rent.ru</p>
              <div className="pt-4 border-t border-white/[0.03]">
                <p className="text-white/10 text-[12px] leading-relaxed">
                  г. Калининград, Площадь Победы, 10<br />
                  Ежедневно, 10:00 — 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="gold-line mb-8"></div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-5 text-[9px] sm:text-[10px] text-white/10 uppercase tracking-[0.2em] sm:tracking-[0.4em]">
            <p>&copy; 2024 Eclipse Premium. Kaliningrad, Russia.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white/20 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/20 transition-colors">Legal Terms</a>
              <a href="#" className="hover:text-white/20 transition-colors">Договор аренды</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
