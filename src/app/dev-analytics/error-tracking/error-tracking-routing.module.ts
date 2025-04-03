import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorTrackingPage } from './error-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorTrackingPageRoutingModule {}
