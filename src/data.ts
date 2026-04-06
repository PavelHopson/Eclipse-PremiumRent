import { Car, Celebrity } from './types';

export const CARS: Car[] = [
  // Внедорожники
  {
    id: 'g63-brabus',
    name: 'Mercedes G63 Brabus Rocket',
    class: 'Внедорожники',
    pricePerDay: 69000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop'],
    features: ['Brabus Tuning', 'V8 Biturbo', 'Exclusive Interior'],
    isNew: true
  },
  {
    id: 'bmw-x5-m',
    name: 'BMW X5 30d',
    class: 'Внедорожники',
    pricePerDay: 21800,
    oldPrice: 25000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop'],
    features: ['M-Package', 'Shadow Line', 'Harman Kardon'],
    isNew: true
  },
  {
    id: 'zeekr-9x',
    name: 'Zeekr 9X Max',
    class: 'Внедорожники',
    pricePerDay: 75000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop'],
    features: ['Полный привод', 'Панорама', 'Premium Audio'],
    isNew: true
  },
  {
    id: 'bmw-x7',
    name: 'BMW X7 40d',
    class: 'Внедорожники',
    pricePerDay: 35000,
    transmission: 'Автомат',
    seats: 7,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop'],
    features: ['7 мест', 'xDrive', 'Sky Lounge'],
    isNew: true
  },
  {
    id: 'range-rover',
    name: 'Range Rover Vogue',
    class: 'Внедорожники',
    pricePerDay: 45000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Дизель',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1606611013016-969c19ba27e5?q=80&w=800&auto=format&fit=crop'],
    features: ['Air Suspension', 'Meridian', 'Pixel LED'],
  },
  // Премиум
  {
    id: 'mercedes-s',
    name: 'Mercedes-Benz S-Class W223',
    class: 'Премиум',
    pricePerDay: 55000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop'],
    features: ['AMG Line', 'Burmester 4D', 'MBUX'],
    isNew: true
  },
  {
    id: 'bmw-7',
    name: 'BMW 7 Series',
    class: 'Премиум',
    pricePerDay: 48000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop'],
    features: ['Executive Lounge', 'Theatre Screen', 'Sky Lounge'],
    isNew: true
  },
  {
    id: 'audi-a8',
    name: 'Audi A8 L',
    class: 'Премиум',
    pricePerDay: 42000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop'],
    features: ['Quattro', 'Matrix LED', 'Bang & Olufsen'],
  },
  // Бизнес
  {
    id: 'bmw-5',
    name: 'BMW 5 Series',
    class: 'Бизнес',
    pricePerDay: 15000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'],
    features: ['M-Sport', 'HUD', 'Parking Plus'],
    isNew: true
  },
  {
    id: 'mercedes-e',
    name: 'Mercedes-Benz E-Class',
    class: 'Бизнес',
    pricePerDay: 16500,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop'],
    features: ['AMG Line', 'Multibeam LED', 'MBUX'],
    isNew: true
  },
  {
    id: 'audi-a6',
    name: 'Audi A6',
    class: 'Бизнес',
    pricePerDay: 14000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop'],
    features: ['S-Line', 'Virtual Cockpit', 'Quattro'],
  },
  // Спорткары
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera S',
    class: 'Спорткары',
    pricePerDay: 55000,
    transmission: 'Автомат',
    seats: 2,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop'],
    features: ['Sport Chrono', 'PASM', 'BOSE'],
    isNew: true
  },
  {
    id: 'bmw-m4',
    name: 'BMW M4 Competition',
    class: 'Спорткары',
    pricePerDay: 35000,
    transmission: 'Автомат',
    seats: 4,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800&auto=format&fit=crop'],
    features: ['510 HP', 'M xDrive', 'Carbon Package'],
    isNew: true
  },
  {
    id: 'mercedes-amg-gt',
    name: 'Mercedes-AMG GT 63',
    class: 'Спорткары',
    pricePerDay: 65000,
    transmission: 'Автомат',
    seats: 4,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1611859266310-a9fd9c57c044?q=80&w=800&auto=format&fit=crop'],
    features: ['V8 Biturbo', 'AMG Ride Control', 'Drift Mode'],
  },
  // Минивэны
  {
    id: 'mercedes-v',
    name: 'Mercedes-Benz V-Class',
    class: 'Минивэны',
    pricePerDay: 22000,
    transmission: 'Автомат',
    seats: 7,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1517672685839-01c907727376?q=80&w=800&auto=format&fit=crop'],
    features: ['VIP-салон', '7 мест', 'MBUX'],
    isNew: true
  },
  {
    id: 'hyundai-staria',
    name: 'Hyundai Staria',
    class: 'Минивэны',
    pricePerDay: 12000,
    transmission: 'Автомат',
    seats: 9,
    fuel: 'Дизель',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1559038465-e0ca2910b298?q=80&w=800&auto=format&fit=crop'],
    features: ['9 мест', 'Smart Sense', 'Панорама'],
  },
  // Комфорт
  {
    id: 'kia-k5',
    name: 'Kia K5',
    class: 'Комфорт',
    pricePerDay: 6500,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800&auto=format&fit=crop'],
    features: ['2.5 MPI', 'LED', 'Smart Key'],
    isNew: true
  },
  {
    id: 'skoda-octavia',
    name: 'Skoda Octavia',
    class: 'Комфорт',
    pricePerDay: 5500,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop'],
    features: ['1.4 TSI', 'Canton Sound', 'Virtual Cockpit'],
  },
  {
    id: 'hyundai-sonata',
    name: 'Hyundai Sonata',
    class: 'Комфорт',
    pricePerDay: 6000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Бензин',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop'],
    features: ['Smart Sense', 'BOSE', 'Ventilated Seats'],
    isNew: true
  },
  // Электромобили
  {
    id: 'zeekr-001',
    name: 'Zeekr 001 FR',
    class: 'Электромобили',
    pricePerDay: 45000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop'],
    features: ['1265 HP', '0-100 за 2.0s', 'High Tech'],
    isNew: true,
    isHotDeal: true
  },
  {
    id: 'tesla-model-y',
    name: 'Tesla Model Y',
    class: 'Электромобили',
    pricePerDay: 18000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop'],
    features: ['Autopilot', 'Long Range', 'Premium Interior'],
    isNew: true
  },
  {
    id: 'xiaomi-su7',
    name: 'Xiaomi SU7 Ultra',
    class: 'Электромобили',
    pricePerDay: 38000,
    transmission: 'Автомат',
    seats: 5,
    fuel: 'Электро',
    year: 2025,
    images: ['https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop'],
    features: ['1548 HP', '0-100 за 1.98s', 'Hyper Engine'],
    isNew: true
  },
];

export const CELEBRITIES: Celebrity[] = [
  {
    name: 'Александр Овечкин',
    role: 'Хоккеист, капитан клуба НХЛ «Вашингтон Кэпиталз».',
    text: 'Eclipse — это уровень. Всегда новые машины и безупречный сервис в Калининграде.',
    img: 'https://img.championat.com/s/735x490/news/big/s/u/u-ovechkina-novyj-rekord-v-nhl-on-obognal-vseh-legend_16159187121689531853.jpg'
  },
  {
    name: 'Wylsacom',
    role: 'Видеоблогер. Создатель и владелец одноимённого YouTube-канала «Wylsacom», с аудиторией более 10 миллионов подписчиков.',
    text: 'Протестировал их Zeekr на косе. Эмоции зашкаливают, сервис работает как часы.',
    img: 'https://v-petuhov.ru/wp-content/uploads/2021/03/wylsacom-valentit-petuhov-foto.jpg'
  },
  {
    name: 'Пётр Ян',
    role: 'Боец смешанных единоборств (MMA). Чемпион UFC, занимающий пятое место в официальном рейтинге UFC в легчайшем весе.',
    text: 'Для меня важна надежность и скорость. Ребята из Eclipse закрывают все вопросы.',
    img: 'https://mma.metaratings.ru/storage/images/2b/cb/2bcb9129e924d55079a4da9003889608.jpg'
  },
  {
    name: 'Юлия Зиверт',
    role: 'Российская певица. Дважды лауреат музыкальных премий «Russian Music Awards», «Золотой граммофон» и «Муз-ТВ», трижды премии «RU.TV».',
    text: 'Люблю комфорт и красивые авто. В Калининграде выбираю только Eclipse.',
    img: 'https://graziamagazine.ru/upload/img_cache/006/006b50b55481ca6984e1b4337a858e98_ce_1080x720x0x0_cropped_666x444.jpg'
  }
];

export const BRANDS = [
  'Audi', 'Bentley', 'BMW', 'Cadillac', 'Chevrolet',
  'Genesis', 'Hongqi', 'Hyundai', 'KIA', 'Lexus',
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
  'Комфорт': 8,
  'Электромобили': 6,
};
