import React, { useState } from "react";
import { Car } from "../types";
import { ArrowUpRight } from "lucide-react";

interface CarCardProps {
  car: Car;
  onSelect: (id: string) => void;
}

const VIEW_NAMES = ["Снаружи", "Салон", "Сзади"];

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  const [view, setView] = useState(0);
  return (
    <button
      type="button"
      className="rent-car"
      onClick={() => onSelect(car.id)}
      onMouseLeave={() => setView(0)}
      aria-label={`Выбрать ${car.name}, ${car.pricePerDay.toLocaleString("ru-RU")} рублей в сутки, пример`}
    >
      <div className="rent-car-image">
        {car.images.map((src, index) => (
          <img
            key={src}
            className={index === 0 ? undefined : "rent-car-image-extra"}
            data-active={index === view}
            src={src}
            alt=""
            loading="lazy"
          />
        ))}
        {car.images.length > 1 && (
          <>
            <span className="rent-car-zones" aria-hidden="true">
              {car.images.map((src, index) => (
                <span key={src} onMouseEnter={() => setView(index)} />
              ))}
            </span>
            <span className="rent-car-view" aria-hidden="true">
              {VIEW_NAMES[view]}
            </span>
            <span className="rent-car-dots" aria-hidden="true">
              {car.images.map((src, index) => (
                <i key={src} data-active={index === view} />
              ))}
            </span>
          </>
        )}
        <span className="rent-car-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="rent-car-meta">
        <div>
          <h3>{car.name}</h3>
          <p>
            {car.year} · {car.transmission} · {car.seats} мест
          </p>
        </div>
        <strong>
          {car.pricePerDay.toLocaleString("ru-RU")} <small>₽ / сутки</small>
        </strong>
      </div>
    </button>
  );
};
