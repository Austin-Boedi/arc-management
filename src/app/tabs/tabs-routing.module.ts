import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('../pages/inventory/inventory.module').then(m => m.InventoryPageModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../pages/settings/settings.module').then(m => m.SettingsPageModule),
      },
      {
        path: 'user-home',
        loadChildren: () =>
          import('./user-home/user-home.module').then(m => m.UserHomePageModule),
      },
      {
        path: 'manager-home',
        loadChildren: () =>
          import('./manager-home/manager-home.module').then(m => m.ManagerHomePageModule),
      },
      {
        path: 'dev-home',
        loadChildren: () =>
          import('./dev-home/dev-home.module').then(m => m.DevHomePageModule),
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