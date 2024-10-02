import { create } from 'zustand';
import { Pet } from '../models/Pet';

interface IPetStore {
  pet?: Pet;
  setPet: (pet: Pet) => void;
  clearPet: () => void;
}

export const usePetStore = create<IPetStore>((set) => ({
  setPet: (pet: Pet) => {
    set({ pet: pet });
  },

  clearPet: () => {
    set({ pet: undefined});
  }
  
}));