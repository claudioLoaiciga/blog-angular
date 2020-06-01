/**IMPOR NECESARIOS */
//permite cargar las los servicios del router
import { ModuleWithProviders } from '@angular/core';
//librerias y clases del routes
import { Routes, RouterModule  } from '@angular/router';

//IMPORTAR COMPONENTES

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//definimos las routas por medio de una constante de nombre appRoutes y dentro de un arreglo( array [] ) de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: '**', component: ErrorComponent }
];

//aqui exportamos todas las routas y configuraciones para que el framework de angular las pueda interpretar y las haga funcionar

//aqui cargamos el route como servicio para leer nuestras rutas
export const appRoutingProviders: any[] = [];
//aqui definimos el modulo del router para hacer funcionar las rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);