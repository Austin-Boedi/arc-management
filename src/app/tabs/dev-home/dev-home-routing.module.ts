import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevHomePage } from './dev-home.page';

const routes: Routes = [
  {
    path: '',
    component: DevHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevHomePageRoutingModule {}
