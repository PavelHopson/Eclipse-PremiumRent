import React from "react";

export const AboutSection: React.FC = () => (
  <section className="rent-about" aria-labelledby="about-title">
    <div className="rent-container rent-about-inner">
      <div className="rent-about-lead">
        <p className="rent-eyebrow">О СЕРВИСЕ</p>
        <h2 id="about-title">Прокат автомобилей в Калининграде.</h2>
        <p>Посуточная и долгосрочная аренда без водителя: от комфортного седана на выходные до суперкара на особый случай.</p>
      </div>
      <div className="rent-about-grid">
        <article>
          <h3>Как оформить аренду</h3>
          <p>Нужны паспорт и водительское удостоверение. Договор подписывается в приложении или при встрече, машину привезут в удобное место.</p>
        </article>
        <article>
          <h3>Больше, чем прокат</h3>
          <ul>
            <li>Полное КАСКО на весь автопарк</li>
            <li>Поддержка на связи 24/7</li>
            <li>Доставка по адресу и в аэропорт Храброво</li>
            <li>Аренда с водителем по запросу</li>
          </ul>
        </article>
        <article>
          <h3>Для компаний</h3>
          <p>Аренда от одного дня до нескольких лет, работа с НДС и без, закрывающие документы и электронный документооборот.</p>
        </article>
      </div>
      <p className="rent-about-note">Текст показывает, как может выглядеть раздел: это демонстрационный проект, услуги не оказываются.</p>
    </div>
  </section>
);
