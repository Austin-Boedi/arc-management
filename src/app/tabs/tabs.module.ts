import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Import the components for each page
import { DevHomePage } from './dev-home/dev-home.page';
import { ManagerHomePage } from './manager-home/manager-home.page';  // Import the ManagerHomePage
import { UserHomePage } from './user-home/user-home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: 'dev-home', component: DevHomePage },
      { path: 'manager-home', component: ManagerHomePage },  // Use imported ManagerHomePage here
      { path: 'user-home', component: UserHomePage }
    ])
  ],
  declarations: [DevHomePage, ManagerHomePage, UserHomePage]  // Declare the components here
})
export class TabsPageModule {}