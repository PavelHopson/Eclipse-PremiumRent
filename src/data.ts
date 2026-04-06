
import { Car } from './types';

export const CARS: Car[] = [
  {
    id: 'g63-brabus',
    name: 'Mercedes G63 Brabus Rocket',
    class: 'Внедорожник',
    pricePerDay: 69000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop'
    ],
    features: ['Brabus Tuning', 'V8 Biturbo', 'Exclusive Interior'],
    isPopular: true
  },
  {
    id: 'zeekr-001',
    name: 'Zeekr 001 FR',
    class: 'Электромобили',
    pricePerDay: 45000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2024,
    images: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070&auto=format&fit=crop'
    ],
    features: ['1265 HP', '0-100 2.0s', 'High Tech'],
    isHotDeal: true
  },
  {
    id: 'bmw-x5-m',
    name: 'BMW X5 M-Sport',
    class: 'Внедорожник',
    pricePerDay: 21800,
    oldPrice: 25000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Дизель',
    year: 2024,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop'
    ],
    features: ['M-Package', 'Shadow Line', 'Harman Kardon'],
    isPopular: true
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera S',
    class: 'Спорткары',
    pricePerDay: 55000,
    transmission: 'Автомат',
    seats: 2,
    fuel: 'Бензин',
    year: 2023,
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
    ],
    features: ['Sport Chrono', 'PASM', 'BOSE'],
    isPopular: true
  }
];

export const CELEBRITIES = [
  {
    name: 'Александр Овечкин',
    role: 'Хоккеист, капитан клуба НХЛ «Вашингтон Кэпиталз»',
    text: 'LiteRent — это уровень. Всегда новые машины и безупречный сервис в Калининграде.',
    img: 'https://img.championat.com/s/735x490/news/big/s/u/u-ovechkina-novyj-rekord-v-nhl-on-obognal-vseh-legend_16159187121689531853.jpg'
  },
  {
    name: 'Wylsacom',
    role: 'Валентин Петухов, крупнейший техноблогер СНГ',
    text: 'Протестировал их Zeekr на косе. Эмоции зашкаливают, сервис работает как часы.',
    img: 'https://v-petuhov.ru/wp-content/uploads/2021/03/wylsacom-valentit-petuhov-foto.jpg'
  },
  {
    name: 'Пётр Ян',
    role: 'Боец смешанных единоборств (MMA), чемпион UFC',
    text: 'Для меня важна надежность и скорость. Ребята из LiteRent закрывают все вопросы.',
    img: 'https://mma.metaratings.ru/storage/images/2b/cb/2bcb9129e924d55079a4da9003889608.jpg'
  },
  {
    name: 'Юлия Зиверт',
    role: 'Zivert, популярная певица, лауреат премий Муз-ТВ',
    text: 'Люблю комфорт и красивые авто. В Калининграде выбираю только LiteRent.',
    img: 'https://graziamagazine.ru/upload/img_cache/006/006b50b55481ca6984e1b4337a858e98_ce_1080x720x0x0_cropped_666x444.jpg'
  }
];

export const ROUTES = [
  {
    id: 'kursh',
    title: 'Куршская коса',
    description: 'Танцующий лес, дюны Эфа и свежий морской бриз.',
    image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=2070&auto=format&fit=crop',
    time: '45 мин от Калининграда'
  }
];
