import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-debug-logs',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './debug-logs.page.html',
})
export class DebugLogsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}