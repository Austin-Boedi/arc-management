// analytics.page.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-analytics',
  standalone: true,
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class AnalyticsPage {}
