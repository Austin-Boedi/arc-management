import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dev-home',
  standalone: true,
  templateUrl: './dev-home.page.html',
  styleUrls: ['./dev-home.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class DevHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}