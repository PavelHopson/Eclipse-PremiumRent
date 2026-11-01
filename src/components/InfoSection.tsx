import React from "react";

export const InfoSection: React.FC = () => (
  <section id="conditions" className="rent-info">
    <div className="rent-container rent-info-inner">
      <div>
        <p className="rent-eyebrow">КАК ЭТО РАБОТАЕТ / 03</p>
        <h2>
          Маршрут начинается
          <br />с выбора.
        </h2>
      </div>
      <div className="rent-info-list">
        <p>
          <span>01</span>
          <strong>Выберите автомобиль</strong>Сравните классы и примеры
          стоимости.
        </p>
        <p>
          <span>02</span>
          <strong>Укажите детали</strong>Выберите даты и дополнительные опции.
        </p>
        <p>
          <span>03</span>
          <strong>Посмотрите расчёт</strong>Это демонстрация: данные не
          отправляются, бронирование и оплата не выполняются.
        </p>
      </div>
    </div>
  </section>
);
