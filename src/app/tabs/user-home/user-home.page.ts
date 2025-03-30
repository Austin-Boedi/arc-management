import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-home',
  standalone: true,
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class UserHomePage implements OnInit {

  constructor() { }

  ngOnInit() {}

}