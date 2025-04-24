import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

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
  sessionInfo: any = null;

  private barChart: Chart | null = null;
  private lineChart: Chart | null = null;

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {}

  async ngOnInit() {
    await this.createSessionMetadata();
    await this.loadLogsFromFirestore();
  }

  private async createSessionMetadata() {
    const user = this.auth.currentUser;
    if (!user) {
      console.warn('No user found at session creation time.');
      return;
    }

    const sessionDoc = {
      sessionId: this.sessionId,
      uid: user.uid,
      timestamp: new Date(),
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };

    this.sessionInfo = sessionDoc; // Save session info for display
    await addDoc(collection(this.firestore, 'performanceSessions'), sessionDoc);
  }

  private async loadLogsFromFirestore() {
    const q = query(
      collection(this.firestore, 'performanceLogs'),
      where('sessionId', '==', this.sessionId)
    );

    const snapshot = await getDocs(q);
    const times: number[] = [];

    snapshot.forEach(doc => {
      const data = doc.data();
      if ('loadTime' in data) {
        times.push(data['loadTime']);
      }
    });

    this.appLoadTimes = times;
    this.calculateAverage();
    this.renderCharts();
  }

  public async addTestLoadTime() {
    console.log('Simulate Load Time button clicked');
    const randomTime = parseFloat((Math.random() * 2 + 1).toFixed(2));
    console.log('New simulated time:', randomTime);

    this.appLoadTimes.push(randomTime);
    this.calculateAverage();

    const user = this.auth.currentUser;
    if (!user) {
      console.warn('No authenticated user found. Skipping Firestore write.');
      return;
    }

    const logDoc = {
      sessionId: this.sessionId,
      loadTime: randomTime,
      timestamp: new Date(),
    };

    await addDoc(collection(this.firestore, 'performanceLogs'), logDoc);
    this.renderCharts(); // update charts
  }

  private calculateAverage() {
    const sum = this.appLoadTimes.reduce((a, b) => a + b, 0);
    this.averageLoadTime = this.appLoadTimes.length ? sum / this.appLoadTimes.length : 0;
  }

  private renderCharts() {
    const labels = this.appLoadTimes.map((_, i) => `Run ${i + 1}`);
    const data = this.appLoadTimes;

    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    const lineCtx = document.getElementById('lineChart') as HTMLCanvasElement;

    // Destroy previous chart instances
    this.barChart?.destroy();
    this.lineChart?.destroy();

    if (barCtx) {
      this.barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Load Time (s)',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    if (lineCtx) {
      this.lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Load Time (s)',
            data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  }
}