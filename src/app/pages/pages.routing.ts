import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { NotAuthGuard } from '../not-auth.guard';
import { ContactoComponent } from './contacto/contacto.component';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/inicio',
    pathMatch: 'full',
  },
  // {
  //   path: 'login',
  //   loadChildren: 'app/pages/login/login.module#LoginModule',
  //   canActivate: [NotAuthGuard],
  // },
  {
    path: 'pages',
    component: Pages,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadChildren: './inicio/inicio.module#InicioModule',
      },
      {
        path: 'ministerios',
        loadChildren: './ministerios/ministerios.module#MinisteriosModule',
      },
      {
        path: 'servicios',
        loadChildren: './servicios/servicios.module#ServiciosModule',
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
