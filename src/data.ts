import { Car, Celebrity } from './types';

export const CARS: Car[] = [
  // ═══ Внедорожники ═══
  {
    id: 'g63-brabus',
    name: 'Mercedes G63 AMG Brabus',
    class: 'Внедорожники',
    pricePerDay: 69000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1651950519238-15835722f8bb?q=80&w=800&auto=format&fit=crop'],
    features: ['Brabus Widestar', 'V8 Biturbo 800HP', 'Night Package'],
    isNew: true
  },
  {
    id: 'bmw-x5-m',
    name: 'BMW X5 M50d',
    class: 'Внедорожники',
    pricePerDay: 21800,
    oldPrice: 25000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop'],
    features: ['M-Sport Package', 'Shadow Line', 'Harman Kardon'],
    isNew: true
  },
  {
    id: 'range-rover-sv',
    name: 'Range Rover SV Autobiography',
    class: 'Внедорожники',
    pricePerDay: 58000,
    transmission: 'Автомат',
    seats: 4,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1606611013016-969c19ba27e5?q=80&w=800&auto=format&fit=crop'],
    features: ['SV Bespoke', 'Air Suspension', 'Meridian Signature'],
    isNew: true
  },
  {
    id: 'bmw-x7',
    name: 'BMW X7 M60i',
    class: 'Внедорожники',
    pricePerDay: 42000,
    transmission: 'Автомат',
    seats: 7,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop'],
    features: ['7 мест', 'V8 Twin-Turbo', 'Sky Lounge Panorama'],
    isNew: true
  },
  {
    id: 'cayenne-turbo',
    name: 'Porsche Cayenne Turbo GT',
    class: 'Внедорожники',
    pricePerDay: 55000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop'],
    features: ['640 HP', 'Carbon Ceramic', 'Sport Chrono'],
  },

  // ═══ Премиум ═══
  {
    id: 'mercedes-s',
    name: 'Mercedes-Maybach S 680',
    class: 'Премиум',
    pricePerDay: 85000,
    transmission: 'Автомат',
    seats: 4,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop'],
    features: ['V12 Biturbo', 'First Class Rear', 'Burmester 4D'],
    isNew: true
  },
  {
    id: 'bmw-7',
    name: 'BMW 760i xDrive',
    class: 'Премиум',
    pricePerDay: 55000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop'],
    features: ['Executive Lounge', 'Theatre Screen 31"', 'Bowers & Wilkins'],
    isNew: true
  },
  {
    id: 'rolls-ghost',
    name: 'Rolls-Royce Ghost',
    class: 'Премиум',
    pricePerDay: 150000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=800&auto=format&fit=crop'],
    features: ['V12 6.75L', 'Starlight Headliner', 'Bespoke Audio'],
    isNew: true
  },
  {
    id: 'bentley-fs',
    name: 'Bentley Flying Spur',
    class: 'Премиум',
    pricePerDay: 120000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1580274455191-1c62238ce452?q=80&w=800&auto=format&fit=crop'],
    features: ['W12 Speed', 'Naim Audio', 'Mulliner Specification'],
  },

  // ═══ Бизнес ═══
  {
    id: 'bmw-5',
    name: 'BMW 540i M Sport',
    class: 'Бизнес',
    pricePerDay: 15000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'],
    features: ['M Sport Pro', 'Head-Up Display', 'Parking Assistant'],
    isNew: true
  },
  {
    id: 'mercedes-e',
    name: 'Mercedes-Benz E 300 AMG',
    class: 'Бизнес',
    pricePerDay: 16500,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop'],
    features: ['AMG Line', 'Digital Light', 'Burmester 3D'],
    isNew: true
  },
  {
    id: 'genesis-g80',
    name: 'Genesis G80 Sport',
    class: 'Бизнес',
    pricePerDay: 14000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800&auto=format&fit=crop'],
    features: ['3.5T AWD', 'Lexicon Audio', 'Remote Parking'],
    isNew: true
  },

  // ═══ Спорткары ═══
  {
    id: 'porsche-911',
    name: 'Porsche 911 Turbo S',
    class: 'Спорткары',
    pricePerDay: 75000,
    transmission: 'Автомат',
    seats: 2,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800&auto=format&fit=crop'],
    features: ['650 HP', 'Sport Chrono', 'PCCB Ceramic Brakes'],
    isNew: true
  },
  {
    id: 'ferrari-roma',
    name: 'Ferrari Roma',
    class: 'Спорткары',
    pricePerDay: 120000,
    transmission: 'Автомат',
    seats: 2,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop'],
    features: ['V8 Biturbo 620HP', 'Manettino', 'JBL Premium'],
    isNew: true
  },
  {
    id: 'lamborghini-huracan',
    name: 'Lamborghini Huracán EVO',
    class: 'Спорткары',
    pricePerDay: 150000,
    transmission: 'Автомат',
    seats: 2,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1611859266310-a9fd9c57c044?q=80&w=800&auto=format&fit=crop'],
    features: ['V10 640HP', 'LDVI System', 'Lifting System'],
    isNew: true
  },
  {
    id: 'mercedes-amg-gt',
    name: 'Mercedes-AMG GT 63 S',
    class: 'Спорткары',
    pricePerDay: 65000,
    transmission: 'Автомат',
    seats: 4,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1580274455191-1c62238ce452?q=80&w=800&auto=format&fit=crop'],
    features: ['V8 Biturbo 639HP', 'AMG Dynamics', 'Drift Mode'],
  },

  // ═══ Минивэны ═══
  {
    id: 'mercedes-v',
    name: 'Mercedes-Benz V 300d AMG',
    class: 'Минивэны',
    pricePerDay: 22000,
    transmission: 'Автомат',
    seats: 7,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1559038465-e0ca2910b298?q=80&w=800&auto=format&fit=crop'],
    features: ['VIP-салон', 'AMG Line', 'MBUX Entertainment'],
    isNew: true
  },
  {
    id: 'cadillac-esc',
    name: 'Cadillac Escalade ESV',
    class: 'Минивэны',
    pricePerDay: 45000,
    transmission: 'Автомат',
    seats: 7,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop'],
    features: ['6.2L V8', 'Super Cruise', 'AKG Studio 36'],
    isNew: true
  },

  // ═══ Комфорт ═══
  {
    id: 'bmw-3',
    name: 'BMW 320d M Sport',
    class: 'Комфорт',
    pricePerDay: 8500,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop'],
    features: ['M Sport', 'LED Adaptive', 'Live Cockpit'],
    isNew: true
  },
  {
    id: 'mercedes-c',
    name: 'Mercedes-Benz C 200 AMG',
    class: 'Комфорт',
    pricePerDay: 9000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop'],
    features: ['AMG Line', 'Digital Light', 'MBUX'],
    isNew: true
  },
  {
    id: 'audi-a4',
    name: 'Audi A4 45 TFSI S-Line',
    class: 'Комфорт',
    pricePerDay: 7500,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop'],
    features: ['S-Line', 'Virtual Cockpit Plus', 'Quattro'],
  },

  // ═══ Электромобили ═══
  {
    id: 'zeekr-001',
    name: 'Zeekr 001 FR Edition',
    class: 'Электромобили',
    pricePerDay: 45000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop'],
    features: ['1265 HP Quad Motor', '0-100 за 2.0s', 'Air Suspension'],
    isNew: true,
    isHotDeal: true
  },
  {
    id: 'tesla-model-s',
    name: 'Tesla Model S Plaid',
    class: 'Электромобили',
    pricePerDay: 35000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop'],
    features: ['1020 HP', '0-100 за 2.1s', 'Autopilot FSD'],
    isNew: true
  },
  {
    id: 'porsche-taycan',
    name: 'Porsche Taycan Turbo S',
    class: 'Электромобили',
    pricePerDay: 55000,
    transmission: 'Автомат',
    seats: 4,
    fuel: 'Электро',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop'],
    features: ['761 HP', 'Performance Battery+', 'PCCB'],
    isNew: true
  },
];

export const CELEBRITIES: Celebrity[] = [
  {
    name: 'Александр Овечкин',
    role: 'Хоккеист, капитан клуба НХЛ «Вашингтон Кэпиталз».',
    text: 'Eclipse — это уровень. Новые машины и безупречный сервис.',
    img: 'https://img.championat.com/s/735x490/news/big/s/u/u-ovechkina-novyj-rekord-v-nhl-on-obognal-vseh-legend_16159187121689531853.jpg'
  },
  {
    name: 'Wylsacom',
    role: 'Видеоблогер. Создатель YouTube-канала с аудиторией более 10 млн подписчиков.',
    text: 'Протестировал Zeekr на косе. Эмоции и сервис на высоте.',
    img: 'https://v-petuhov.ru/wp-content/uploads/2021/03/wylsacom-valentit-petuhov-foto.jpg'
  },
  {
    name: 'Пётр Ян',
    role: 'Боец MMA. Чемпион UFC в легчайшем весе.',
    text: 'Надежность и скорость. Ребята из Eclipse закрывают все вопросы.',
    img: 'https://mma.metaratings.ru/storage/images/2b/cb/2bcb9129e924d55079a4da9003889608.jpg'
  },
  {
    name: 'Юлия Зиверт',
    role: 'Певица. Лауреат «Russian Music Awards», «Золотой граммофон», «Муз-ТВ».',
    text: 'Люблю комфорт и красивые авто. В Калининграде — только Eclipse.',
    img: 'https://graziamagazine.ru/upload/img_cache/006/006b50b55481ca6984e1b4337a858e98_ce_1080x720x0x0_cropped_666x444.jpg'
  }
];

export const BRANDS = [
  'Audi', 'Bentley', 'BMW', 'Cadillac', 'Ferrari',
  'Genesis', 'Hongqi', 'Hyundai', 'Lamborghini', 'Lexus',
  'Lixiang', 'Mercedes', 'Porsche', 'Range Rover',
  'Rolls Royce', 'Skoda', 'Tesla', 'Toyota',
  'Xiaomi', 'Zeekr'
];

export const CATEGORY_COUNTS: Record<string, number> = {
  'Внедорожники': 65,
  'Премиум': 28,
  'Бизнес': 24,
  'Спорткары': 14,
  'Минивэны': 9,
  'Комфорт': 18,
  'Электромобили': 12,
};
