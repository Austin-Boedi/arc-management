import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserHomePage } from './user-home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: UserHomePage }])  // Ensure UserHomePage is the right component
  ],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}