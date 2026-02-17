import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'register-page', pathMatch: 'full' },
    { path: 'login-page', loadComponent: () => import('./component/login-pages/login-pages').then((c) => c.LoginPages) },
    { path: 'register-page', loadComponent: () => import('./component/register-pages/register-pages').then((c) => c.RegisterPages) },
    { path: 'dashboard-page', loadComponent: () => import('./component/dashboard-page/dashboard-page').then((c) => c.DashboardPage) },
];
