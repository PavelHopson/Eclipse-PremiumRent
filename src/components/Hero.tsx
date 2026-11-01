import React from "react";
import { ArrowDownRight } from "lucide-react";

interface HeroProps {
  onActionClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => (
  <section className="rent-hero" aria-labelledby="rent-title">
    <div className="rent-hero-image" aria-hidden="true" />
    <div className="rent-hero-shade" aria-hidden="true" />
    <div className="rent-hero-content">
      <p className="rent-eyebrow">
        КАЛИНИНГРАДСКАЯ ОБЛАСТЬ <span> / </span> КОНЦЕПТ
      </p>
      <h1 id="rent-title">
        Путешествие
        <br />
        <em>начинается здесь.</em>
      </h1>
      <p className="rent-hero-copy">
        Выберите автомобиль под свой маршрут. От городских поездок до выходных
        на побережье.
      </p>
      <button type="button" className="rent-primary" onClick={onActionClick}>
        Выбрать автомобиль <ArrowDownRight size={18} aria-hidden="true" />
      </button>
      <p className="rent-disclaimer">
        Демонстрационный проект. Цены и автомобили приведены для примера.
      </p>
    </div>
    <div className="rent-hero-index" aria-hidden="true">
      <span>01 / 03</span>
      <span>СВОБОДА ДВИЖЕНИЯ</span>
    </div>
  </section>
);
