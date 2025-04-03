import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-network-analytics',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './network-analytics.page.html',
})
export class NetworkAnalyticsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
