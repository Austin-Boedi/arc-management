import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class InventoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
