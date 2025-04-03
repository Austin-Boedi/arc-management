import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-app-performance',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './app-performance.page.html',
})
export class AppPerformancePage implements OnInit {

  appLoadTimes: number[] = [1.2, 1.4, 1.1, 1.8, 1.3];  // Sample data
  averageLoadTime: number = 0;

  constructor() {}

  ngOnInit() {
    this.calculateAverage();
  }

  // 👇 Explicitly defined method
  calculateAverage() {
    const sum = this.appLoadTimes.reduce((a, b) => a + b, 0);
    this.averageLoadTime = sum / this.appLoadTimes.length;
  }

}