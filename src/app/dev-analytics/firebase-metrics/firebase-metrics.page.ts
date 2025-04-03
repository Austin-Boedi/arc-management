import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-firebase-metrics',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './firebase-metrics.page.html',
})
export class FirebaseMetricsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}