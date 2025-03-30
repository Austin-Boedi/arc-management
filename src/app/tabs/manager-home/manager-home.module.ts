import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ManagerHomePage } from './manager-home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ManagerHomePage }])  // Ensure ManagerHomePage is the right component
  ],
  declarations: [ManagerHomePage]
})
export class ManagerHomePageModule {}