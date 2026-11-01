import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const photos = import.meta.glob<string>("../assets/routes/*.webp", { eager: true, query: "?url", import: "default" });
const photo = (id: string) => photos[`../assets/routes/${id}.webp`];

const ROUTES = [
  { id: "curonian", title: "Куршская коса", desc: "Дюны, сосны и Танцующий лес.", time: "около часа из Калининграда", car: "Внедорожник" },
  { id: "svetlogorsk", title: "Зеленоградск и Светлогорск", desc: "Променады, старые улицы и море.", time: "около 40 минут", car: "Комфорт" },
  { id: "baltiysk", title: "Балтийск", desc: "Маяк, крепость и самый запад страны.", time: "около часа", car: "Внедорожник" },
  { id: "amber", title: "Янтарный", desc: "Широкий пляж и закаты над Балтикой.", time: "около часа", car: "Любой класс" },
];

export const RoutesSection: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <section className="rent-routes" id="routes" aria-labelledby="routes-title">
      <div className="rent-container">
        <p className="rent-eyebrow">МАРШРУТЫ</p>
        <h2 id="routes-title">Куда поехать.</h2>
        <ul className="rent-routes-grid">
          {ROUTES.map((route, i) => (
            <motion.li
              key={route.id}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rent-routes-photo"><img src={photo(route.id)} alt={route.title} width={1200} height={800} loading="lazy" decoding="async" /></div>
              <h3>{route.title}</h3>
              <p>{route.desc}</p>
              <small>{route.time} · {route.car}</small>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
