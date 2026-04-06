<div align="center">

<br>

<img src="https://img.shields.io/badge/E-ECLIPSE-C9A96E?style=for-the-badge&labelColor=0a0a0a&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNDOUE5NkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg==&logoColor=C9A96E" height="40" alt="Eclipse"/>

# ECLIPSE PREMIUM RENT

### Премиальная аренда автомобилей в Калининграде

<br>

[![Live Demo](https://img.shields.io/badge/▶_LIVE_DEMO-eclipse--premiumrent.pages.dev-2BB673?style=for-the-badge&labelColor=0a0a0a)](https://eclipse-premiumrent.pages.dev)

<br>

[![React](https://img.shields.io/badge/React_19-0a0a0a?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-0a0a0a?style=flat-square&logo=typescript&logoColor=3178C6)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite_6-0a0a0a?style=flat-square&logo=vite&logoColor=646CFF)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_4-0a0a0a?style=flat-square&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0a0a0a?style=flat-square&logo=framer&logoColor=white)](https://motion.dev)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Pages-0a0a0a?style=flat-square&logo=cloudflarepages&logoColor=F38020)](https://pages.cloudflare.com)

<br>

<img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop" width="100%" alt="Eclipse Premium Rent — Hero" style="border-radius: 4px;"/>

</div>

<br>

---

<br>

## О проекте

**Eclipse Premium Rent** — веб-приложение для сервиса аренды автомобилей премиум-класса, ориентированного исключительно на Калининград и Калининградскую область.

Дизайн вдохновлён лучшими практиками luxury-сегмента автопроката: тёмная цветовая схема, элегантная типографика, продуманные микровзаимодействия и mobile-first подход.

<br>

## Ключевые особенности

<table>
<tr>
<td width="50%">

### 🎨 Дизайн
- Тёмная премиальная тема с золотыми акцентами
- Минималистичная эстетика класса luxury
- Плавные анимации и переходы (Framer Motion)
- Полностью адаптивный интерфейс

</td>
<td width="50%">

### ⚡ Функциональность
- Мега-меню с каталогом классов и марок
- Горизонтальные карусели по 7 категориям
- 5-шаговый визард бронирования
- Форма поиска с датами и локациями

</td>
</tr>
<tr>
<td>

### 🚗 Каталог
- 20+ автомобилей в 7 категориях
- Внедорожники, Премиум, Бизнес, Спорткары
- Минивэны, Комфорт, Электромобили
- Карточки с ценами, бейджами, избранным

</td>
<td>

### 🌍 Региональный фокус
- Калининград, Храброво, Зеленоградск, Светлогорск
- SEO-контент для Калининградской области
- Куршская коса, Балтийское побережье
- Исключительно локальный контекст

</td>
</tr>
</table>

<br>

## Архитектура

```
src/
├── components/
│   ├── Navbar.tsx           # Навигация с мега-меню
│   ├── Hero.tsx             # Главный экран
│   ├── SearchForm.tsx       # Форма поиска
│   ├── CategorySelector.tsx # Категории автомобилей
│   ├── CarCarousel.tsx      # Карусель по категориям
│   ├── CarCard.tsx          # Карточка автомобиля
│   ├── BookingWizard.tsx    # 5-шаговое бронирование
│   ├── ClientsSection.tsx   # Известные клиенты
│   ├── InfoSection.tsx      # SEO + преимущества
│   └── Button.tsx           # UI-компонент
├── App.tsx                  # Корневой компонент
├── store.ts                 # Zustand state management
├── data.ts                  # Каталог авто, клиенты, марки
├── types.ts                 # TypeScript интерфейсы
├── index.css                # Tailwind + кастомные стили
└── main.tsx                 # Точка входа
```

<br>

## Стек технологий

| Технология | Версия | Назначение |
|:-----------|:------:|:-----------|
| **React** | 19 | UI-библиотека |
| **TypeScript** | 5.6 | Типизация |
| **Vite** | 6 | Сборщик |
| **Tailwind CSS** | 4 | Стили |
| **Zustand** | 5 | State management |
| **Framer Motion** | 12 | Анимации |
| **Lucide React** | — | Иконки |
| **Cloudflare Pages** | — | Хостинг и CDN |

<br>

## Дизайн-система

```
Цвета:
  Primary (CTA)     #2BB673    ████  — кнопки, акценты действий
  Gold (Premium)     #C9A96E    ████  — навигация, премиальные элементы
  Secondary          #FF3B30    ████  — скидки, акции
  Background         #0A0A0A    ████  — основной фон
  Card               #141414    ████  — карточки, панели
  Border             #222222    ████  — разделители

Типографика:
  Font               Inter (300, 400, 500, 600, 700)
  Hero               text-7xl / font-light / tracking-[0.15em]
  Section titles     text-2xl / font-light / italic
  Body               text-[15px] / text-white/40–90
```

<br>

## Быстрый старт

```bash
# Клонирование
git clone https://github.com/PavelHopson/Eclipse-PremiumRent.git
cd Eclipse-PremiumRent

# Установка зависимостей
npm install

# Разработка
npm run dev

# Продакшен-сборка
npm run build

# Предпросмотр сборки
npm run preview
```

<br>

## Секции сайта

| # | Секция | Описание |
|:-:|:-------|:---------|
| 1 | **Hero** | Полноэкранный баннер с логотипом, заголовком и CTA |
| 2 | **Поиск** | Форма с локацией, датами получения и возврата |
| 3 | **Категории** | Визуальный ряд из 7 категорий с изображениями |
| 4 | **Каталог** | Карусели автомобилей по каждой категории |
| 5 | **Клиенты** | Известные персоны с фотографиями и описаниями |
| 6 | **О компании** | SEO-текст, 6 преимуществ, блок для юрлиц |
| 7 | **Бронирование** | 5-шаговый визард: поиск → авто → опции → данные → оплата |

<br>

## Производительность

- **Build size:** CSS 36 KB · JS 382 KB (gzipped: 6.7 + 119 KB)
- **Build time:** ~3 секунды
- **First paint:** < 1.5s на Cloudflare CDN
- **Lighthouse:** оптимизировано для Core Web Vitals

<br>

---

<div align="center">

<br>

**Eclipse Premium Rent** — кейс-проект по созданию премиального веб-приложения для автопроката

<br>

[![Portfolio](https://img.shields.io/badge/Разработчик-PavelHopson-C9A96E?style=flat-square&labelColor=0a0a0a)](https://github.com/PavelHopson)

<br>

</div>
