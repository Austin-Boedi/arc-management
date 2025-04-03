import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkAnalyticsPage } from './network-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkAnalyticsPageRoutingModule {}
