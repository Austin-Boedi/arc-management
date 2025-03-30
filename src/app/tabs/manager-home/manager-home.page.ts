import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-home',
  standalone: true,
  templateUrl: './manager-home.page.html',
  styleUrls: ['./manager-home.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ManagerHomePage {}
