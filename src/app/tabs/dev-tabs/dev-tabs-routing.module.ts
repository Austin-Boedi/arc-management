// src/app/tabs/dev-tabs/dev-tabs-routing.module.ts

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
          loadComponent: () =>
            import('../../pages/analytics/analytics.page').then(m => m.AnalyticsPage),
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