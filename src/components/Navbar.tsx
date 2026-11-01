import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useStore } from "../store";

interface NavbarProps {
  onCatalogClick?: () => void;
}

const LINKS = [
  { label: "Автопарк", id: "fleet" },
  { label: "Маршруты", id: "routes" },
  { label: "Клиенты", id: "clients" },
  { label: "Условия", id: "conditions" },
  { label: "Приложение", id: "app" },
];

export const Navbar: React.FC<NavbarProps> = ({ onCatalogClick }) => {
  const { resetBooking } = useStore();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("keydown", close);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("scroll", update);
    };
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
  const go = (id: string) => {
    resetBooking();
    setOpen(false);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
  };
  return (
    <nav className={scrolled || open ? "rent-nav is-solid" : "rent-nav"} aria-label="Основная навигация">
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
        <div className="rent-nav-links">
          {LINKS.map((link) => (
            <button type="button" key={link.id} onClick={() => go(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
        <span className="rent-nav-location">Калининград</span>
        <button type="button" className="rent-nav-action" onClick={catalog}>
          Выбрать автомобиль <span aria-hidden="true">↗</span>
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
          {LINKS.map((link) => (
            <button type="button" key={link.id} onClick={() => go(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
