import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CLIENTS } from "../data";

const FIRST_VISIBLE = 9;

export const ClientsSection: React.FC = () => {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const hidden = CLIENTS.length - FIRST_VISIBLE;
  const visible = expanded ? CLIENTS : CLIENTS.slice(0, FIRST_VISIBLE);
  return (
    <section className="rent-clients" id="clients" aria-labelledby="clients-title">
      <div className="rent-container">
        <p className="rent-eyebrow">КЛИЕНТЫ</p>
        <h2 id="clients-title">Наши клиенты.</h2>
        <p className="rent-clients-note">Персонажи и истории вымышлены: это часть демонстрационного проекта.</p>
        <ul className="rent-clients-grid">
          {visible.map((client, i) => (
            <motion.li
              key={client.name}
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <figure>
                <div className="rent-clients-photo"><img src={client.img} alt={`${client.name}, ${client.role}`} width={900} height={1125} loading="lazy" decoding="async" /></div>
                <figcaption>
                  <strong>{client.name}</strong>
                  <span>{client.role}</span>
                  <p>{client.text}</p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
        {hidden > 0 && (
          <button type="button" className="rent-clients-more" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Скрыть" : <>Показать ещё <span>{hidden}</span></>}
          </button>
        )}
      </div>
    </section>
  );
};
