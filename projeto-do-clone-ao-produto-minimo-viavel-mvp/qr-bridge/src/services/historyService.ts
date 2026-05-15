import { collection, addDoc, query, where, getDocs, deleteDoc, doc, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface SavedConfig {
  id?: string;
  userId: string;
  name: string;
  options: any;
  createdAt: string;
}

export async function saveConfiguration(userId: string, options: any, name: string = 'Configuração Salva') {
  try {
    const docRef = await addDoc(collection(db, 'qr_history'), {
      userId,
      name,
      options,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Erro ao salvar configuração: ", error);
    return { success: false, error };
  }
}

export async function getUserHistory(userId: string): Promise<SavedConfig[]> {
  try {
    const q = query(
      collection(db, 'qr_history'), 
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    const history: SavedConfig[] = [];
    querySnapshot.forEach((doc) => {
      history.push({ id: doc.id, ...doc.data() } as SavedConfig);
    });
    // Sort descending by date
    return history.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error("Erro ao buscar histórico: ", error);
    return [];
  }
}

export async function deleteConfiguration(configId: string) {
  try {
    await deleteDoc(doc(db, 'qr_history', configId));
    return { success: true };
  } catch (error) {
    console.error("Erro ao deletar configuração: ", error);
    return { success: false, error };
  }
}
