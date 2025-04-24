import { Routes } from '@angular/router';

export const devAnalyticsRoutes: Routes = [
  { path: '', redirectTo: 'app-performance', pathMatch: 'full' },
  {
    path: 'app-performance',
    loadComponent: () =>
      import('./app-performance/app-performance.page').then(m => m.AppPerformancePage),
  },
  {
    path: 'error-tracking',
    loadComponent: () =>
      import('./error-tracking/error-tracking.page').then(m => m.ErrorTrackingPage),
  },
  {
    path: 'firebase-metrics',
    loadComponent: () =>
      import('./firebase-metrics/firebase-metrics.page').then(m => m.FirebaseMetricsPage),
  },
  {
    path: 'network-analytics',
    loadComponent: () =>
      import('./network-analytics/network-analytics.page').then(m => m.NetworkAnalyticsPage),
  },
  {
    path: 'debug-logs',
    loadComponent: () =>
      import('./debug-logs/debug-logs.page').then(m => m.DebugLogsPage),
  },
];