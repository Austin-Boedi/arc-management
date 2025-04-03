import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPerformancePage } from './app-performance.page';

const routes: Routes = [
  {
    path: '',
    component: AppPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPerformancePageRoutingModule {}
