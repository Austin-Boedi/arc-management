import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dev-tabs',
  standalone: true,
  templateUrl: './dev-tabs.page.html',
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class DevTabsPage {}