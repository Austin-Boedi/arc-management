import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserHomePage } from './user-home.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: UserHomePage }]),
    UserHomePage
  ]
})
export class UserHomePageModule {}