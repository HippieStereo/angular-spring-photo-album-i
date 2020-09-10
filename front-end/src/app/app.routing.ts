import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { Register } from './components/register.component';
import { Login } from './components/login.component';
import { MyAlbum } from './components/my-album.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'my-album',
        component: MyAlbum
    }
];

// - Angular error - Generic type 'ModuleWithProviders<T>' requires 1 type argument(s)
declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);