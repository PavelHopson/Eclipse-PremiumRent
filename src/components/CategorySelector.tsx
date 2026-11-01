import React, { useState } from "react";
import { CAR_CLASSES } from "../types";
import type { CarClass } from "../types";
import suv from "../assets/categories/suv.webp";
import premium from "../assets/categories/premium.webp";
import business from "../assets/categories/business.webp";
import sport from "../assets/categories/sport.webp";
import minivan from "../assets/categories/minivan.webp";
import comfort from "../assets/categories/comfort.webp";
import ev from "../assets/categories/ev.webp";

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

const CATEGORY_IMAGES: Record<CarClass, string> = {
  Внедорожники: suv,
  Премиум: premium,
  Бизнес: business,
  Спорткары: sport,
  Минивэны: minivan,
  Комфорт: comfort,
  Электромобили: ev,
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  onSelect,
}) => {
  const [active, setActive] = useState<CarClass | null>(null);
  return (
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
              aria-pressed={active === category}
              onClick={() => {
                setActive(category);
                onSelect?.(category);
              }}
            >
              <span className="rent-category-art" aria-hidden="true">
                <img src={CATEGORY_IMAGES[category]} alt="" />
              </span>
              <span className="rent-category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
