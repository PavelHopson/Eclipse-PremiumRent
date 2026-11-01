import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Fuel, Gauge, Users } from "lucide-react";
import { CARS } from "../data";

const byId = (id: string) => CARS.find((car) => car.id === id) ?? CARS[0];
const price = (value: number) => value.toLocaleString("ru-RU");

const Phone: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`rent-phone ${className}`} aria-hidden="true">
    <div className="rent-phone-screen">
      <div className="rent-phone-status">
        <span>20:12</span>
        <i />
        <span>5G</span>
      </div>
      {children}
    </div>
  </div>
);

export const AppSection: React.FC = () => {
  const reduced = useReducedMotion();
  const hero = byId("mercedes-s");
  const list = ["g63-amg", "rolls-ghost", "porsche-911", "bentley-fs"].map(byId);
  return (
    <section className="rent-app" id="app" aria-labelledby="app-title">
      <div className="rent-container rent-app-inner">
        <div className="rent-app-copy">
          <p className="rent-eyebrow">ПРИЛОЖЕНИЕ</p>
          <h2 id="app-title">
            Автопарк
            <br />
            <em>в кармане.</em>
          </h2>
          <p>Выбор машины, свободные даты и договор на одном экране. От каталога до ключей три касания.</p>
          <ul>
            <li>Живой календарь по каждому автомобилю</li>
            <li>Фото снаружи, салона и вида сзади</li>
            <li>Чат с менеджером без звонков</li>
          </ul>
          <div className="rent-app-stores">
            <span>
              <small>Скоро в</small>App Store
            </span>
            <span>
              <small>Скоро в</small>Google Play
            </span>
          </div>
          <p className="rent-app-note">Концепт приложения для портфолио: в магазинах оно пока не опубликовано.</p>
        </div>
        <motion.div
          className="rent-app-phones"
          initial={reduced ? false : { opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Phone className="rent-phone-back">
            <p className="rent-phone-title">Автопарк</p>
            <div className="rent-phone-tabs">
              <b>Все</b>
              <span>Премиум</span>
              <span>Спорт</span>
            </div>
            {list.map((car) => (
              <div className="rent-phone-row" key={car.id}>
                <img src={car.images[0]} alt="" loading="lazy" />
                <div>
                  <strong>{car.name}</strong>
                  <small>{price(car.pricePerDay)} ₽ / сутки</small>
                </div>
              </div>
            ))}
          </Phone>
          <Phone className="rent-phone-front">
            <p className="rent-phone-title">{hero.name}</p>
            <div className="rent-phone-photo">
              <img src={hero.images[0]} alt="" loading="lazy" />
              <span>1 / {hero.images.length}</span>
            </div>
            <div className="rent-phone-specs">
              <span><Calendar size={13} />{hero.year}</span>
              <span><Gauge size={13} />{hero.transmission}</span>
              <span><Fuel size={13} />{hero.fuel}</span>
              <span><Users size={13} />{hero.seats}</span>
            </div>
            <div className="rent-phone-prices">
              <div><small>до 1 суток</small><b>{price(hero.pricePerDay)} ₽</b></div>
              <div><small>2–3 суток</small><b>{price(Math.round(hero.pricePerDay * 0.93))} ₽</b></div>
            </div>
            <small className="rent-phone-label">ДАТЫ БРОНИРОВАНИЯ</small>
            <div className="rent-phone-date">Проверить свободные даты<Calendar size={13} /></div>
            <div className="rent-phone-cta">Забронировать</div>
          </Phone>
        </motion.div>
      </div>
    </section>
  );
};
