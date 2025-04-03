import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebugLogsPage } from './debug-logs.page';

const routes: Routes = [
  {
    path: '',
    component: DebugLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebugLogsPageRoutingModule {}
