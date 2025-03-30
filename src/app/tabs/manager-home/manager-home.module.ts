import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ManagerHomePage } from './manager-home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ManagerHomePage }]),
    ManagerHomePage  // Import standalone component instead of declaring it
  ]
})
export class ManagerHomePageModule {}