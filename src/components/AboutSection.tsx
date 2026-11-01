import React from "react";
import { CAR_CLASSES } from "../types";

const openClass = (category: string) =>
  document.getElementById(`category-${category}`)?.scrollIntoView({ behavior: "smooth" });

export const AboutSection: React.FC = () => (
  <section className="rent-about" id="guide" aria-labelledby="about-title">
    <div className="rent-container rent-about-inner">
      <div className="rent-about-lead">
        <p className="rent-eyebrow">ИНСТРУКЦИЯ</p>
        <h2 id="about-title">Прокат автомобилей в Калининграде.</h2>
        <p>Посуточная и долгосрочная аренда без водителя: от комфортного седана на выходные до суперкара на особый случай.</p>
        <div className="rent-about-classes">
          {CAR_CLASSES.map((category) => (
            <button type="button" key={category} onClick={() => openClass(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="rent-about-grid">
        <article>
          <h3>Как оформить аренду</h3>
          <ol>
            <li>Выберите автомобиль в каталоге и укажите даты.</li>
            <li>Подготовьте паспорт и водительское удостоверение. Других документов не нужно.</li>
            <li>Подпишите договор в приложении или при встрече с менеджером. На это уходит около 15 минут.</li>
            <li>Получите машину в удобном месте Калининграда или в аэропорту Храброво.</li>
            <li>По окончании аренды верните автомобиль в согласованное место и время.</li>
          </ol>
        </article>
        <article>
          <h3>В приложении быстрее</h3>
          <p>В приложении видно, когда каждая машина свободна, поэтому бронь на сутки или неделю занимает три касания. Там же хранятся договор и чат с менеджером.</p>
        </article>
        <article>
          <h3>Больше, чем прокат</h3>
          <ul>
            <li><strong>Полное КАСКО.</strong> Застрахован весь автопарк.</li>
            <li><strong>Поддержка 24/7.</strong> Менеджер на связи в любое время.</li>
            <li><strong>Конфиденциальность.</strong> В машинах нет аудио- и видеозаписи.</li>
            <li><strong>Водитель.</strong> Персональный водитель по запросу.</li>
            <li><strong>Доставка.</strong> Привезём автомобиль по адресу и в аэропорт.</li>
            <li><strong>Выкуп.</strong> Некоторые машины можно выкупить после аренды.</li>
          </ul>
        </article>
        <article>
          <h3>Для компаний и ИП</h3>
          <p>Аренда от одного дня до нескольких лет. Работа с НДС и без, закрывающие документы и электронный документооборот для бухгалтерии.</p>
        </article>
      </div>
      <p className="rent-about-note">Текст показывает, как может выглядеть раздел: это демонстрационный проект, услуги не оказываются.</p>
    </div>
  </section>
);
