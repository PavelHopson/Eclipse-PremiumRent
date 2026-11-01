import React from "react";
import { CAR_CLASSES } from "../types";
import type { CarClass } from "../types";

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

const CATEGORY_IMAGES: Record<CarClass, string> = {
  Внедорожники: "https://carloson.ru/uploads/images/1305c8bd676f3da9d1d81a28396bd81c-179x139.png",
  Премиум: "https://carloson.ru/uploads/images/bf92c039ee2d828b9e71c0dc1d468ce4-179x139.png",
  Бизнес: "https://carloson.ru/uploads/images/5655e0f3747fc23ca85fdd54bf157662-179x139.png",
  Спорткары: "https://carloson.ru/uploads/images/3d1c7e44c67672183b3e716fa56e32e7-179x139.png",
  Минивэны: "https://carloson.ru/uploads/images/1305c8bd676f3da9d1d81a28396bd81c-179x139.png",
  Комфорт: "https://carloson.ru/uploads/images/61a41967152d358192bb2c3a8009770f-179x139.png",
  Электромобили: "https://carloson.ru/uploads/images/5655e0f3747fc23ca85fdd54bf157662-179x139.png",
};

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
        {CAR_CLASSES.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onSelect?.(category)}
          >
            <span className="rent-category-art" aria-hidden="true">
              <img src={CATEGORY_IMAGES[category]} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
            </span>
            <span className="rent-category-name">{category} <span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
    </div>
  </section>
);
