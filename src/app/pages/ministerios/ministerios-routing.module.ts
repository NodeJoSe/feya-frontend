import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinisteriosComponent } from './ministerios.component';

const routes: Routes = [
  {
    path: '',
    component: MinisteriosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinisteriosRoutingModule { }
