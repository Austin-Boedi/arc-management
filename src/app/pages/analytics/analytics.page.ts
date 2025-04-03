// analytics.page.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-analytics',
  standalone: true,
  templateUrl: './analytics.page.html',
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class AnalyticsPage {}