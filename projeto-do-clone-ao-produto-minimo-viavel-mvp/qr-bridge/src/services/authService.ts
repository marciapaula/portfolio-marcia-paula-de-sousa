import { signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

/**
 * Inicia o fluxo de login com o Google via Popup.
 * @returns {Promise<User>} O usuário autenticado
 */
export const signInWithGoogle = async (): Promise<User> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Erro ao fazer login com o Google:", error);
    throw error;
  }
};

/**
 * Desloga o usuário atual.
 */
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    throw error;
  }
};
