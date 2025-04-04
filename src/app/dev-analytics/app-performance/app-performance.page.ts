import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-app-performance',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './app-performance.page.html',
})
export class AppPerformancePage implements OnInit {
  appLoadTimes: number[] = [];
  averageLoadTime = 0;
  sessionId = crypto.randomUUID(); // unique ID for current app session

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {}

  async ngOnInit() {
    await this.createSessionMetadata();
  }

  private async createSessionMetadata() {
    const user = this.auth.currentUser;
    if (!user) return;

    const sessionDoc = {
      sessionId: this.sessionId,
      uid: user.uid,
      timestamp: new Date(),
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };

    await addDoc(collection(this.firestore, 'performanceSessions'), sessionDoc);
  }

  async addTestLoadTime() {
    const randomTime = parseFloat((Math.random() * 2 + 1).toFixed(2)); // 1–3s
    this.appLoadTimes.push(randomTime);
    this.calculateAverage();

    const logDoc = {
      sessionId: this.sessionId,
      loadTime: randomTime,
      timestamp: new Date(),
    };

    await addDoc(collection(this.firestore, 'performanceLogs'), logDoc);
  }

  private calculateAverage() {
    const sum = this.appLoadTimes.reduce((a, b) => a + b, 0);
    this.averageLoadTime = sum / this.appLoadTimes.length;
  }
}