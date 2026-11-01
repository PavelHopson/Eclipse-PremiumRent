import React from "react";
import { CAR_CLASSES } from "../types";
import type { CarClass } from "../types";

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  onSelect,
}) => (
  <section className="rent-categories" aria-labelledby="category-title">
    <div className="rent-container">
      <div className="rent-section-heading">
        <div>
          <p className="rent-eyebrow">АВТОПАРК / КАТЕГОРИИ</p>
          <h2 id="category-title">Для любого маршрута.</h2>
        </div>
        <p>Выберите класс, чтобы перейти к автомобилям.</p>
      </div>
      <div className="rent-category-list">
        {CAR_CLASSES.map((category, index) => (
          <button
            type="button"
            key={category}
            onClick={() => onSelect?.(category)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {category}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);
