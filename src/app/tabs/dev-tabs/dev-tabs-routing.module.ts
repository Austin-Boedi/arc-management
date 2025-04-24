import { Routes } from '@angular/router';
import { DevTabsPage } from './dev-tabs.page';

export const devTabRoutes: Routes = [
  {
    path: '',
    component: DevTabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'analytics',
        loadChildren: () =>
          import('../../dev-analytics/dev-analytics.routes').then(m => m.devAnalyticsRoutes), // updated
      },
      {
        path: 'tools',
        loadComponent: () =>
          import('../../pages/tools/tools.page').then(m => m.ToolsPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];