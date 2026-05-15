import { create } from 'zustand';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  initAuthListener: () => () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true, // Começa como true até o Firebase confirmar o estado
  
  // Função para iniciar o listener do Firebase
  initAuthListener: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({ user, isLoading: false });
    });
    
    // Retorna a função de limpeza (unsubscribe)
    return unsubscribe;
  },
}));
