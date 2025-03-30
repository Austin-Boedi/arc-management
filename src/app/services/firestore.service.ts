import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // READ
  async getUserRole(uid: string): Promise<string | null> {
    const userRef = doc(this.firestore, 'users', uid);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data()['role'] : null;
  }

  async getAllEquipment(): Promise<any[]> {
    const equipRef = collection(this.firestore, 'equipment');
    const snap = await getDocs(equipRef);
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getEquipmentById(id: string): Promise<any | null> {
    const ref = doc(this.firestore, 'equipment', id);
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  // WRITE
  async addEquipment(equipment: any) {
    const equipRef = collection(this.firestore, 'equipment');
    return await addDoc(equipRef, equipment);
  }

  async logTransaction(userId: string, itemId: string, action: string) {
    const ref = collection(this.firestore, 'transactions');
    await addDoc(ref, {
      userId,
      itemId,
      action,
      timestamp: new Date()
    });
  }

  // UPDATE
  async updateEquipmentStatus(id: string, newStatus: string) {
    const ref = doc(this.firestore, 'equipment', id);
    await updateDoc(ref, { status: newStatus });
  }

  // DELETE
  async deleteEquipment(id: string) {
    const ref = doc(this.firestore, 'equipment', id);
    await deleteDoc(ref);
  }
}