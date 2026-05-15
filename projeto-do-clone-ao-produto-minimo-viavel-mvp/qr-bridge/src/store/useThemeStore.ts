import { create } from 'zustand';

interface ThemeState {
  backgroundImage: string | null;
  isCustomizerOpen: boolean;
  mode: 'light' | 'dark';
  setBackgroundImage: (url: string | null) => void;
  setCustomizerOpen: (isOpen: boolean) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  backgroundImage: null,
  isCustomizerOpen: false,
  mode: 'light',
  setBackgroundImage: (url) => set({ backgroundImage: url }),
  setCustomizerOpen: (isOpen) => set({ isCustomizerOpen: isOpen }),
  toggleMode: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
}));
