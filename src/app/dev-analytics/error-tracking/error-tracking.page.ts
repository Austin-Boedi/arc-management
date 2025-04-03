import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-tracking',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './error-tracking.page.html',
})
export class ErrorTrackingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}