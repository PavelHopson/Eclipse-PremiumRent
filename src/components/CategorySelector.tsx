import React, { useState } from "react";
import { CAR_CLASSES } from "../types";
import type { CarClass } from "../types";

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

interface Silhouette {
  start: number;
  roof: string;
  rear: number;
  front: number;
  windows: string[];
  lamp: [number, number];
}

const SILHOUETTES: Record<CarClass, Silhouette> = {
  Внедорожники: {
    start: 22,
    roof: "V22 Q22 10 30 10 H100 Q106 10 109 15 L118 29 L150 32 Q160 33 160 42 V50",
    rear: 52,
    front: 130,
    windows: ["M32 17 H64 V29 H32 Z", "M70 17 H98 L106 29 H70 Z", "M22 25 H17 Q14 25 14 29 V41 Q14 45 17 45 H22"],
    lamp: [155, 39],
  },
  Премиум: {
    start: 8,
    roof: "V40 Q8 34 16 33 L44 30 Q60 14 80 14 H104 Q116 14 128 30 L164 35 Q172 36 172 44 V50",
    rear: 40,
    front: 142,
    windows: ["M54 30 Q66 19 80 19 H90 V30 Z", "M95 19 H104 Q113 19 121 30 H95 Z"],
    lamp: [167, 41],
  },
  Бизнес: {
    start: 12,
    roof: "V41 Q12 35 20 34 L46 31 Q62 17 82 17 H100 Q112 17 124 31 L160 36 Q168 37 168 44 V50",
    rear: 44,
    front: 138,
    windows: ["M56 31 Q68 22 82 22 H90 V31 Z", "M95 22 H100 Q109 22 117 31 H95 Z"],
    lamp: [163, 42],
  },
  Спорткары: {
    start: 6,
    roof: "V42 Q6 38 14 36 L58 27 Q78 18 96 20 Q110 21 126 33 L166 39 Q174 41 174 46 V50",
    rear: 42,
    front: 142,
    windows: ["M68 29 Q80 24 94 25 Q102 26 112 33 H66 Z"],
    lamp: [168, 44],
  },
  Минивэны: {
    start: 16,
    roof: "V26 Q16 12 30 12 H104 Q116 12 126 22 L146 38 Q158 40 162 46 V50",
    rear: 46,
    front: 132,
    windows: ["M26 19 H54 V31 H26 Z", "M60 19 H84 V31 H60 Z", "M90 19 H106 Q112 19 120 31 H90 Z"],
    lamp: [156, 44],
  },
  Комфорт: {
    start: 16,
    roof: "V40 Q16 34 24 33 L50 30 Q62 18 80 18 H96 Q108 18 120 31 L154 36 Q162 38 162 44 V50",
    rear: 46,
    front: 132,
    windows: ["M60 30 Q70 23 80 23 H86 V30 Z", "M91 23 H96 Q105 23 113 31 H91 Z"],
    lamp: [157, 42],
  },
  Электромобили: {
    start: 10,
    roof: "V42 Q10 36 18 34 Q40 16 78 16 H92 Q108 16 126 32 L162 37 Q170 39 170 45 V50",
    rear: 42,
    front: 138,
    windows: ["M44 32 Q58 21 78 21 H86 V32 Z", "M91 21 H92 Q105 21 118 32 H91 Z"],
    lamp: [165, 43],
  },
};

const ARCH = 13;
const WHEEL = 10;

const CarSilhouette: React.FC<{ shape: Silhouette }> = ({ shape }) => {
  const { start, roof, rear, front, windows, lamp } = shape;
  const body =
    `M${start} 50 ${roof} H${front + ARCH} A${ARCH} ${ARCH} 0 0 0 ${front - ARCH} 50 ` +
    `H${rear + ARCH} A${ARCH} ${ARCH} 0 0 0 ${rear - ARCH} 50 Z`;
  return (
    <svg className="rent-category-art" viewBox="0 0 180 64" preserveAspectRatio="xMinYMid meet" aria-hidden="true">
      <path className="rent-car-body" d={body} />
      {windows.map((d) => (
        <path className="rent-car-glass" d={d} key={d} />
      ))}
      {[rear, front].map((x) => (
        <g key={x}>
          <circle className="rent-car-wheel" cx={x} cy={50} r={WHEEL} />
          <circle className="rent-car-hub" cx={x} cy={50} r={3} />
        </g>
      ))}
      <circle className="rent-car-lamp" cx={lamp[0]} cy={lamp[1]} r={2.5} />
    </svg>
  );
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
              <CarSilhouette shape={SILHOUETTES[category]} />
              <span className="rent-category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
