
import React, { useState } from 'react';
import { useStore } from '../store';
import { ChevronDown, Heart, Globe, User, Menu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCatalogClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCatalogClick }) => {
  const { resetBooking } = useStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const categories = [
    { name: 'Внедорожники', count: 12 },
    { name: 'Премиум', count: 8 },
    { name: 'Бизнес', count: 15 },
    { name: 'Комфорт', count: 20 },
    { name: 'Электромобили', count: 5 },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-2xl border-b border-white/5 text-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={resetBooking}>
          <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl italic transition-transform group-hover:scale-105 shadow-lg shadow-brand-primary/20">L</div>
          <span className="text-2xl font-black tracking-tighter uppercase hidden sm:inline">Lite<span className="text-brand-primary">Rent</span></span>
        </div>

        {/* Main Links */}
        <div className="hidden lg:flex items-center gap-10 h-full">
          <div 
            className="h-full flex items-center gap-2 cursor-pointer hover:text-brand-primary transition-colors font-black text-[11px] uppercase tracking-[0.2em] relative"
            onMouseEnter={() => setActiveMenu('fleet')}
            onClick={onCatalogClick}
          >
            Автопарк <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'fleet' ? 'rotate-180' : ''}`} />
          </div>
          <div 
            className="h-full flex items-center gap-2 cursor-pointer hover:text-brand-primary transition-colors font-black text-[11px] uppercase tracking-[0.2em] relative"
            onMouseEnter={() => setActiveMenu('services')}
          >
            Услуги <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
          </div>
          <a href="#" className="hover:text-brand-primary transition-colors font-black text-[11px] uppercase tracking-[0.2em]">Условия</a>
          <a href="#" className="hover:text-brand-primary transition-colors font-black text-[11px] uppercase tracking-[0.2em]">Контакты</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-6 border-r border-white/10 pr-10 mr-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center text-[10px] font-black italic">Я</div>
              <span className="text-[14px] font-black">5.0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <Globe size={18} className="text-brand-primary group-hover:scale-110 transition-transform" />
              <span className="text-[12px] font-black uppercase tracking-widest">Калининград</span>
            </div>
          </div>
          
          <div className="hidden sm:flex flex-col items-end">
            <a href="tel:+79000000000" className="text-xl font-black tracking-tighter">+7 (900) 000-00-00</a>
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">Support 24/7</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-all group">
              <Heart size={20} className="group-hover:text-brand-secondary transition-colors" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center cursor-pointer hover:brightness-110 transition-all shadow-lg shadow-brand-primary/20">
              <User size={20} className="text-white" />
            </div>
            <div className="lg:hidden w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center">
              <Menu size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdowns */}
      {activeMenu === 'fleet' && (
        <div className="absolute top-24 left-0 right-0 bg-[#0a0a0a] border-b border-white/5 py-16 animate-in fade-in slide-in-from-top-2 shadow-2xl">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-20">
            <div className="col-span-3 border-r border-white/5 pr-20">
              <h3 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-10">По классу</h3>
              <ul className="space-y-6">
                {categories.map(cat => (
                  <li key={cat.name} className="flex justify-between items-center group cursor-pointer" onClick={onCatalogClick}>
                    <span className="text-xl font-bold group-hover:text-brand-primary transition-colors tracking-tight">{cat.name}</span>
                    <span className="text-xs font-black text-white/20 group-hover:text-brand-primary/40 transition-colors">{cat.count}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onCatalogClick} className="mt-16 w-full bg-white text-black py-5 rounded-[20px] font-black text-[11px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all shadow-xl">Смотреть все</button>
            </div>
            <div className="col-span-9">
              <h3 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-10">Марки в наличии</h3>
              <div className="grid grid-cols-4 gap-y-10 gap-x-12">
                {['BMW', 'Mercedes-Benz', 'Audi', 'Skoda', 'Kia', 'Hyundai', 'Porsche', 'Land Rover', 'Zeekr', 'Tesla', 'Lamborghini', 'Exeed'].map(brand => (
                  <div key={brand} className="flex justify-between items-center group cursor-pointer pb-4 border-b border-white/5 hover:border-brand-primary/40 transition-all">
                    <span className="text-lg font-bold group-hover:text-brand-primary transition-colors tracking-tight">{brand}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'services' && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-[#151515] border border-white/5 p-2 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-1 min-w-[340px]">
          <ul className="space-y-1">
            {['Аренда по подписке', 'Аренда с водителем', 'Для юридических лиц', 'Клубные карты', 'Аренда с выкупом'].map(service => (
              <li key={service}>
                <a href="#" className="flex items-center justify-between px-8 py-5 rounded-2xl hover:bg-white/5 transition-all group">
                  <span className="font-bold text-sm tracking-tight">{service}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-brand-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};