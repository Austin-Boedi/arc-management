import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DevHomePage } from './dev-home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: DevHomePage }]),
    DevHomePage  // ✅ Import standalone component instead of declaring it
  ]
})
export class DevHomePageModule {}