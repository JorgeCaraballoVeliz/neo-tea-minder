import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'teas',
    loadComponent: () =>
      import('./pages/home.component').then((c) => c.HomeComponent),
    children: [],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
    // canActivate: [isSignIn],
  },
  {
    path: '**',
    redirectTo: 'teas',
    pathMatch: 'full',
  },
];
