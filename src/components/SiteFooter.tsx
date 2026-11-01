import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACTS } from "../data";
import { MaxIcon, TelegramIcon, WhatsAppIcon } from "./ContactIcons";

const SECTIONS = [
  { label: "Автопарк", href: "#fleet" },
  { label: "Маршруты", href: "#routes" },
  { label: "Клиенты", href: "#clients" },
  { label: "Инструкция", href: "#guide" },
  { label: "Приложение", href: "#app" },
];

export const SiteFooter: React.FC = () => (
  <footer className="rent-footer">
    <div className="rent-container">
      <p className="rent-footer-mark" aria-hidden="true">ECLIPSE</p>
      <div className="rent-footer-grid">
        <div className="rent-footer-brand">
          <img src="/eclipse-mark.svg" alt="" width={56} height={56} />
          <strong>ECLIPSE</strong>
          <span>PREMIUM RENT</span>
          <p>Аренда премиальных автомобилей на побережье Балтики.</p>
        </div>
        <nav aria-label="Разделы сайта">
          <h3>Разделы</h3>
          {SECTIONS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div>
          <h3>Контакты</h3>
          <p className="rent-footer-line"><MapPin size={17} strokeWidth={1.5} />Калининград</p>
          <p className="rent-footer-line"><Clock size={17} strokeWidth={1.5} />Без выходных, круглосуточно</p>
          <a className="rent-footer-line" href={CONTACTS.tel}><Phone size={17} strokeWidth={1.5} />{CONTACTS.phone}</a>
          <p className="rent-footer-line"><Mail size={17} strokeWidth={1.5} />hello@eclipse-rent.example</p>
        </div>
        <div id="help">
          <h3>Нужна помощь?</h3>
          <a className="rent-footer-line" href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Написать в WhatsApp</a>
          <a className="rent-footer-line" href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer"><TelegramIcon />Написать в Telegram</a>
          <a className="rent-footer-line" href={CONTACTS.max} target="_blank" rel="noopener noreferrer"><MaxIcon />Написать в Max</a>
        </div>
      </div>
      <div className="rent-footer-legal">
        <span>© 2026 Eclipse Premium Rent</span>
        <span>Демонстрационный проект для портфолио. Контакты примерные, заявки и оплата не подключены.</span>
        <a href="#main">Наверх ↑</a>
      </div>
    </div>
  </footer>
);
