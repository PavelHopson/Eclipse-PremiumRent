import React from "react";
import { Car } from "../types";
import { ArrowUpRight } from "lucide-react";

interface CarCardProps {
  car: Car;
  onSelect: (id: string) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => (
  <button
    type="button"
    className="rent-car"
    onClick={() => onSelect(car.id)}
    aria-label={`Выбрать ${car.name}, ${car.pricePerDay.toLocaleString("ru-RU")} рублей в сутки, пример`}
  >
    <div className="rent-car-image">
      <img src={car.images[0]} alt="" loading="lazy" />
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
