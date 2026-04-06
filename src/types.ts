
export type CarClass = 'Эконом' | 'Комфорт' | 'Бизнес' | 'Премиум' | 'Внедорожник' | 'Электромобили' | 'Спорткары';
export type Transmission = 'Автомат' | 'Механика';

export interface Car {
  id: string;
  name: string;
  class: CarClass;
  pricePerDay: number;
  oldPrice?: number;
  transmission: Transmission;
  seats: number;
  fuel: string;
  year: number;
  images: string[];
  features: string[];
  isPopular?: boolean;
  isHotDeal?: boolean;
}

export interface BookingState {
  step: number;
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  selectedCarId: string | null;
  extras: string[];
  customer: {
    name: string;
    phone: string;
    email: string;
  };
}

export type Location = 'Аэропорт Храброво' | 'Калининград Центр' | 'Зеленоградск' | 'Светлогорск';

export const LOCATIONS: Location[] = [
  'Аэропорт Храброво',
  'Калининград Центр',
  'Зеленоградск',
  'Светлогорск'
];