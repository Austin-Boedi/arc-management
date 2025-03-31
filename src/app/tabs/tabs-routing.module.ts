import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('../pages/inventory/inventory.page').then(m => m.InventoryPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pages/settings/settings.page').then(m => m.SettingsPage),
      },
      {
        path: 'user-home',
        loadComponent: () =>
          import('./user-home/user-home.page').then(m => m.UserHomePage),
      },
      {
        path: 'manager-home',
        loadComponent: () =>
          import('./manager-home/manager-home.page').then(m => m.ManagerHomePage),
      },
      {
        path: 'dev-home',
        loadComponent: () =>
          import('./dev-home/dev-home.page').then(m => m.DevHomePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}