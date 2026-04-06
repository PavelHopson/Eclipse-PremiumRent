
import { create } from 'zustand';
import { BookingState } from './types';

interface AppStore {
  booking: BookingState;
  setBooking: (update: Partial<BookingState>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetBooking: () => void;
  goToStep: (step: number) => void;
}

export const useStore = create<AppStore>((set) => ({
  booking: {
    step: 1,
    pickupLocation: 'Аэропорт Храброво',
    pickupDate: new Date().toISOString().split('T')[0],
    returnDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    selectedCarId: null,
    extras: [],
    customer: { name: '', phone: '', email: '' }
  },
  setBooking: (update) => set((state) => ({ 
    booking: { ...state.booking, ...update } 
  })),
  nextStep: () => set((state) => ({ 
    booking: { ...state.booking, step: state.booking.step + 1 } 
  })),
  prevStep: () => set((state) => ({ 
    booking: { ...state.booking, step: Math.max(1, state.booking.step - 1) } 
  })),
  goToStep: (step) => set((state) => ({
    booking: { ...state.booking, step }
  })),
  resetBooking: () => set({
    booking: {
      step: 1,
      pickupLocation: 'Аэропорт Храброво',
      pickupDate: new Date().toISOString().split('T')[0],
      returnDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      selectedCarId: null,
      extras: [],
      customer: { name: '', phone: '', email: '' }
    }
  })
}));
