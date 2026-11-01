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
      <div className="rent-category-heading">
        <h2 id="category-title">Выберите класс автомобиля</h2>
        <span aria-hidden="true">Листайте →</span>
      </div>
      <div className="rent-category-list">
        {CAR_CLASSES.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onSelect?.(category)}
          >
            <span className="rent-category-name">{category} <span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
    </div>
  </section>
);
