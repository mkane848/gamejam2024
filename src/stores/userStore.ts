import { create } from 'zustand';

interface IUserStore {
  userName?: string;
  setUserName: (name: string) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  setUserName: (name: string) => {
    set({ userName: name });
  }

}));