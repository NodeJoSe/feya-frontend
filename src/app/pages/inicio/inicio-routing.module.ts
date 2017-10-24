import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        redirectTo: 'actividades',
        pathMatch: 'full',
      },
      {
        path: 'actividades',
        component: ActividadesComponent,
      },
      {
        path: 'publicaciones',
        component: PublicacionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // declarations: [ActividadesComponent, PublicacionesComponent],
})
export class InicioRoutingModule { }
