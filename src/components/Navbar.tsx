import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useStore } from "../store";

interface NavbarProps {
  onCatalogClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCatalogClick }) => {
  const { resetBooking } = useStore();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const home = () => {
    resetBooking();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const catalog = () => {
    onCatalogClick?.();
    setOpen(false);
  };
  return (
    <nav className="rent-nav" aria-label="Основная навигация">
      <div className="rent-nav-inner">
        <button
          type="button"
          className="rent-brand"
          onClick={home}
          aria-label="Eclipse Premium Rent — на главную"
        >
          <span>ECLIPSE</span>
          <small>PREMIUM RENT</small>
        </button>
        <span className="rent-nav-location">Калининградская область</span>
        <button type="button" className="rent-nav-action" onClick={catalog}>
          Смотреть автопарк <span aria-hidden="true">↗</span>
        </button>
        <button
          type="button"
          className="rent-menu-toggle"
          aria-expanded={open}
          aria-controls="rent-mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <div className="rent-mobile-menu" id="rent-mobile-menu">
          <button type="button" onClick={home}>
            Главная
          </button>
          <button type="button" onClick={catalog}>
            Автопарк
          </button>
        </div>
      )}
    </nav>
  );
};
