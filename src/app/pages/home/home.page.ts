import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonicModule,
    CommonModule],
})
export class HomePage implements OnInit {
  role: string | null = null;

  constructor() {}

  ngOnInit() {
    this.role = localStorage.getItem('userRole');
  }
}