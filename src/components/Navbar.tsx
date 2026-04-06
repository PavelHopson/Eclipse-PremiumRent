import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { BRANDS, CATEGORY_COUNTS } from '../data';
import { CAR_CLASSES } from '../types';
import { ChevronDown, Heart, Globe, Menu, ArrowRight, X, Phone } from 'lucide-react';

interface NavbarProps {
  onCatalogClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCatalogClick }) => {
  const { resetBooking } = useStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark/98 backdrop-blur-2xl border-b border-white/[0.04]' : 'bg-transparent border-b border-transparent'
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="h-px gold-line" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={resetBooking}>
          <span className="text-lg sm:text-[22px] font-extralight tracking-[0.3em] sm:tracking-[0.4em] uppercase text-white/80 group-hover:text-brand-gold transition-colors duration-500">
            Eclipse
          </span>
        </div>

        {/* Nav Links — desktop only */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
          {[
            { label: 'Автопарк', key: 'fleet', hasMenu: true },
            { label: 'Услуги', key: 'services', hasMenu: true },
          ].map(item => (
            <div key={item.key}
              className="h-full flex items-center gap-1.5 cursor-pointer hover:text-brand-gold transition-colors duration-300 text-sm text-white/60"
              onMouseEnter={() => setActiveMenu(item.key)}
              onClick={item.key === 'fleet' ? onCatalogClick : undefined}
            >
              {item.label}
              <ChevronDown size={12} className={`transition-transform duration-300 opacity-40 ${activeMenu === item.key ? 'rotate-180' : ''}`} />
            </div>
          ))}
          <a href="#conditions" className="hover:text-brand-gold transition-colors duration-300 text-sm text-white/60">Условия</a>
          <a href="#contacts" className="hover:text-brand-gold transition-colors duration-300 text-sm text-white/60">Контакты</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden xl:flex items-center gap-4 border-r border-white/[0.06] pr-5 mr-1">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-red-600/90 rounded-md flex items-center justify-center text-[9px] font-bold text-white">Я</div>
              <span className="text-sm font-medium text-white/60">5.0</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer group">
              <Globe size={14} className="text-brand-gold/40 group-hover:text-brand-gold/70 transition-colors" />
              <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors tracking-wide">Калининград</span>
            </div>
          </div>

          <button className="hidden sm:flex w-10 h-10 items-center justify-center text-white/25 hover:text-brand-gold/60 transition-colors">
            <Heart size={17} />
          </button>

          <div className="hidden md:flex flex-col items-end">
            <a href="tel:+79000000000" className="text-sm font-medium text-white/75 hover:text-brand-gold transition-colors duration-300 tracking-tight">
              +7 (900) 000-00-00
            </a>
            <span className="text-[9px] text-white/20 tracking-[0.3em] uppercase">24/7</span>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-white/50">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mega Menu — Автопарк (desktop) */}
      {activeMenu === 'fleet' && (
        <div className="hidden lg:block absolute top-[73px] left-0 right-0 bg-dark/[0.98] backdrop-blur-2xl border-b border-white/[0.04] animate-slide-down">
          <div className="gold-line" />
          <div className="max-w-[1400px] mx-auto px-10 py-12 grid grid-cols-12 gap-12 xl:gap-16">
            <div className="col-span-3 border-r border-white/[0.04] pr-8">
              <h3 className="text-[10px] text-brand-gold/40 uppercase tracking-[0.4em] mb-6">Класс</h3>
              <ul className="space-y-0.5">
                {CAR_CLASSES.map(cls => (
                  <li key={cls} className="flex justify-between items-center group cursor-pointer py-2.5 px-3 rounded hover:bg-white/[0.02] transition-colors" onClick={onCatalogClick}>
                    <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">{cls}</span>
                    <span className="text-xs text-white/15 group-hover:text-brand-gold/40 transition-colors">({CATEGORY_COUNTS[cls]})</span>
                  </li>
                ))}
              </ul>
              <button onClick={onCatalogClick} className="mt-6 w-full border border-white/[0.08] text-white/40 py-3 text-[10px] uppercase tracking-[0.25em] hover:border-brand-gold/30 hover:text-brand-gold/70 transition-all duration-500">
                Весь автопарк
              </button>
            </div>
            <div className="col-span-9">
              <h3 className="text-[10px] text-brand-gold/40 uppercase tracking-[0.4em] mb-6">Марки</h3>
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-0.5">
                {BRANDS.map(brand => (
                  <div key={brand} className="flex justify-between items-center group cursor-pointer py-2.5 px-3 rounded hover:bg-white/[0.02] transition-colors">
                    <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors">{brand}</span>
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-brand-gold/30" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu — Услуги (desktop) */}
      {activeMenu === 'services' && (
        <div className="hidden lg:block absolute top-[73px] left-1/2 -translate-x-1/2 bg-dark/[0.98] backdrop-blur-2xl border border-white/[0.04] p-1.5 animate-slide-down min-w-[300px]">
          <ul>
            {['Аренда по подписке', 'Аренда с водителем', 'Для юридических лиц', 'Клубные карты', 'Аренда с выкупом'].map(service => (
              <li key={service}>
                <a href="#" className="flex items-center justify-between px-5 py-3.5 rounded hover:bg-white/[0.03] transition-colors group">
                  <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">{service}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-brand-gold/30" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-16 sm:top-[73px] left-0 right-0 bg-dark/[0.98] backdrop-blur-2xl border-b border-white/[0.04] animate-slide-down">
          <div className="px-4 sm:px-6 py-6 space-y-1">
            <button onClick={() => { onCatalogClick?.(); setMobileOpen(false); }} className="block w-full text-left text-base py-3 px-3 text-white/60 hover:text-brand-gold hover:bg-white/[0.02] rounded transition-colors">Автопарк</button>
            <a href="#" className="block text-base py-3 px-3 text-white/60 hover:text-brand-gold hover:bg-white/[0.02] rounded transition-colors">Услуги</a>
            <a href="#conditions" onClick={() => setMobileOpen(false)} className="block text-base py-3 px-3 text-white/60 hover:text-brand-gold hover:bg-white/[0.02] rounded transition-colors">Условия</a>
            <a href="#contacts" onClick={() => setMobileOpen(false)} className="block text-base py-3 px-3 text-white/60 hover:text-brand-gold hover:bg-white/[0.02] rounded transition-colors">Контакты</a>
            <div className="pt-4 border-t border-white/[0.04]">
              <a href="tel:+79000000000" className="flex items-center gap-3 text-brand-gold/70 py-3 px-3">
                <Phone size={18} />
                <span className="text-base font-medium">+7 (900) 000-00-00</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
