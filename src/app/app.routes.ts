import { Routes } from '@angular/router'

import { authenticationGuard } from './guards/authentication.guard'

export const routes: Routes = [
  {
    path: '',
    canActivate: [authenticationGuard],
    loadComponent: async () =>
      await import('./pages/home/home.component').then(
        component => component.HomeComponent,
      ),
  },
  {
    path: 'sign-in',
    loadComponent: async () =>
      await import('./pages/sign-in/sign-in.component').then(
        component => component.SignInComponent,
      ),
  },
  {
    path: 'sign-up',
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
