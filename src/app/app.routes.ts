import { Routes } from '@angular/router'

import { privateAuthGuard } from './guards/private-auth.guard'
import { publicAuthGuard } from './guards/public-auth.guard'

export const routes: Routes = [
  {
    path: '',
    canActivate: [privateAuthGuard],
    loadComponent: async () =>
      await import('./pages/home/home.component').then(
        component => component.HomeComponent,
      ),
  },
  {
    path: 'sign-in',
    canActivate: [publicAuthGuard],
    loadComponent: async () =>
      await import('./pages/sign-in/sign-in.component').then(
        component => component.SignInComponent,
      ),
  },
  {
    path: 'sign-up',
    canActivate: [publicAuthGuard],
    loadComponent: async () =>
      await import('./pages/sign-up/sign-up.component').then(
        component => component.SignUpComponent,
      ),
  },
  {
    path: '**',
    loadComponent: async () =>
      await import('./pages/not-found/not-found.component').then(
        component => component.NotFoundComponent,
      ),
  },
]
