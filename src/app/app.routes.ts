import { Routes } from '@angular/router';
import { isSignInGuard } from './guards/is-sign-in.guard';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'teas',
    loadComponent: () =>
      import('./pages/home.component').then((c) => c.HomeComponent),
    children: [],
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'auth',//:id temporal
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
     canActivate: [isSignInGuard],
  },
  {
    path: 'teas/:id',
    loadComponent: () =>
      import('./pages/home.component').then((c) => c.HomeComponent),
    children: [],
  },
  {
    path: '**',
    redirectTo: 'teas',
    pathMatch: 'full',
  },
];
