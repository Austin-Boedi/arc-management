import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseMetricsPage } from './firebase-metrics.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseMetricsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseMetricsPageRoutingModule {}
