import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Inicializa o app do Firebase com as configurações geradas
const app = initializeApp(firebaseConfig);

// Exporta a instância de autenticação para ser usada pelos serviços
export const auth = getAuth(app);

// Exporta o provedor do Google para o login
export const googleProvider = new GoogleAuthProvider();

// Exporta a instância do Firestore
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
