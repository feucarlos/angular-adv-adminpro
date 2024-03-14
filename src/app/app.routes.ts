import { Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: '/dashboard', 
        pathMatch: 'full'
    },
    {
        path: "dashboard",
        loadComponent: ()=> import('./pages/pages.component').then(m=>m.PagesComponent),
        loadChildren: ()=> import('./pages/pages.routing')
    },
    {
        path: "",
        loadComponent: ()=> import('./auth/login/login.component').then(m=>m.LoginComponent),
        loadChildren: ()=> import('./auth/auth.routing')
    },
    {path: "**", component: NopagefoundComponent},

];
