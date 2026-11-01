import React, { useEffect, useState } from "react";
import { ArrowUp, MessagesSquare, X } from "lucide-react";
import { CONTACTS } from "../data";
import { MaxIcon, TelegramIcon, WhatsAppIcon } from "./ContactIcons";

export const FloatingContacts: React.FC = () => {
  const [open, setOpen] = useState(() => window.matchMedia("(min-width: 1500px)").matches);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <aside className={scrolled ? "rent-float" : "rent-float is-top"} aria-label="Связаться с нами">
      {open && (
        <>
          <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp" title="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram" title="Telegram">
            <TelegramIcon />
          </a>
          <a href={CONTACTS.max} target="_blank" rel="noopener noreferrer" aria-label="Написать в Max" title="Max">
            <MaxIcon />
          </a>
          <a href="#help" aria-label="Все способы связи" title="Все способы связи">
            <MessagesSquare size={21} strokeWidth={1.7} />
          </a>
        </>
      )}
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Скрыть кнопки связи" : "Показать кнопки связи"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={21} strokeWidth={1.6} /> : <MessagesSquare size={21} strokeWidth={1.7} />}
      </button>
      {scrolled && (
        <a className="rent-float-top" href="#main" aria-label="Наверх">
          <ArrowUp size={20} strokeWidth={1.7} />
        </a>
      )}
    </aside>
  );
};
