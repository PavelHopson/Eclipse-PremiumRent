import React, { useState } from 'react';
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl border-b border-dark-border"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={resetBooking}>
          <span className="text-2xl font-light tracking-[0.35em] uppercase text-white/90 group-hover:text-brand-gold transition-colors">
            Eclipse
          </span>
        </div>

        {/* Main Links */}
        <div className="hidden lg:flex items-center gap-10 h-full">
          <div
            className="h-full flex items-center gap-2 cursor-pointer hover:text-brand-gold transition-colors text-[15px] tracking-wide text-white/80"
            onMouseEnter={() => setActiveMenu('fleet')}
            onClick={onCatalogClick}
          >
            Автопарк <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'fleet' ? 'rotate-180' : ''}`} />
          </div>
          <div
            className="h-full flex items-center gap-2 cursor-pointer hover:text-brand-gold transition-colors text-[15px] tracking-wide text-white/80"
            onMouseEnter={() => setActiveMenu('services')}
          >
            Услуги <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
          </div>
          <a href="#conditions" className="hover:text-brand-gold transition-colors text-[15px] tracking-wide text-white/80">Условия</a>
          <a href="#contacts" className="hover:text-brand-gold transition-colors text-[15px] tracking-wide text-white/80">Контакты</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-5 border-r border-white/10 pr-6 mr-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white">Я</div>
              <span className="text-sm font-semibold text-white/80">5.0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <Globe size={16} className="text-brand-gold/70 group-hover:text-brand-gold transition-colors" />
              <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">Калининград</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 cursor-pointer group">
            <Heart size={18} className="text-white/40 group-hover:text-brand-gold transition-colors" />
          </div>

          <div className="hidden md:flex flex-col items-end">
            <a href="tel:+79000000000" className="text-[15px] font-semibold text-white/90 hover:text-brand-gold transition-colors tracking-tight">
              +7 (900) 000-00-00
            </a>
            <span className="text-[10px] text-white/30 tracking-widest uppercase">работаем 24/7</span>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="w-10 h-10 flex items-center justify-center text-white/60">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu — Автопарк */}
      {activeMenu === 'fleet' && (
        <div className="absolute top-20 left-0 right-0 bg-dark border-b border-dark-border animate-slide-down">
          <div className="max-w-[1400px] mx-auto px-10 py-12 grid grid-cols-12 gap-16">
            <div className="col-span-3 border-r border-dark-border pr-10">
              <h3 className="text-xs font-semibold text-brand-gold/60 uppercase tracking-[0.3em] mb-8">Класс</h3>
              <ul className="space-y-1">
                {CAR_CLASSES.map(cls => (
                  <li key={cls} className="flex justify-between items-center group cursor-pointer py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-colors" onClick={onCatalogClick}>
                    <span className="text-[15px] text-white/70 group-hover:text-white transition-colors">{cls}</span>
                    <span className="text-xs text-white/20 group-hover:text-brand-gold/50 transition-colors">({CATEGORY_COUNTS[cls] || 0})</span>
                  </li>
                ))}
              </ul>
              <button onClick={onCatalogClick} className="mt-8 w-full border border-white/15 text-white/70 py-3.5 rounded-lg text-xs uppercase tracking-[0.2em] hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all">
                Весь автопарк
              </button>
            </div>
            <div className="col-span-9">
              <h3 className="text-xs font-semibold text-brand-gold/60 uppercase tracking-[0.3em] mb-8">Марки</h3>
              <div className="grid grid-cols-4 gap-x-10 gap-y-1">
                {BRANDS.map(brand => (
                  <div key={brand} className="flex justify-between items-center group cursor-pointer py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-colors">
                    <span className="text-[15px] text-white/60 group-hover:text-white transition-colors">{brand}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu — Услуги */}
      {activeMenu === 'services' && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-dark border border-dark-border rounded-xl p-2 animate-slide-down min-w-[320px]">
          <ul>
            {['Аренда по подписке', 'Аренда с водителем', 'Для юридических лиц', 'Клубные карты', 'Аренда с выкупом'].map(service => (
              <li key={service}>
                <a href="#" className="flex items-center justify-between px-6 py-4 rounded-lg hover:bg-white/[0.04] transition-colors group">
                  <span className="text-[15px] text-white/70 group-hover:text-white transition-colors">{service}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold/50" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-dark border-b border-dark-border animate-slide-down">
          <div className="px-6 py-8 space-y-6">
            <button onClick={() => { onCatalogClick?.(); setMobileOpen(false); }} className="block text-lg text-white/80 hover:text-brand-gold transition-colors">Автопарк</button>
            <a href="#" className="block text-lg text-white/80 hover:text-brand-gold transition-colors">Услуги</a>
            <a href="#conditions" className="block text-lg text-white/80 hover:text-brand-gold transition-colors">Условия</a>
            <a href="#contacts" className="block text-lg text-white/80 hover:text-brand-gold transition-colors">Контакты</a>
            <div className="pt-6 border-t border-dark-border">
              <a href="tel:+79000000000" className="flex items-center gap-3 text-brand-gold">
                <Phone size={18} />
                <span className="text-lg font-semibold">+7 (900) 000-00-00</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
