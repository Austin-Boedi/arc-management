// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { devTabRoutes } from './tabs/dev-tabs/dev-tabs-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'debug-button',
    loadComponent: () =>
      import('./pages/debug-button.page').then(m => m.DebugButtonPage)
  },
  {
    path: 'tabs',
    canActivate: [authGuard],
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage)
  },
  {
    path: 'dev-tabs',
    canActivate: [authGuard],
    children: devTabRoutes
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'inventory',
    loadComponent: () => import('./pages/inventory/inventory.page').then(m => m.InventoryPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];