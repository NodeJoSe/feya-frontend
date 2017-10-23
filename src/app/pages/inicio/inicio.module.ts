import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';


import { InicioRoutingModule } from './inicio-routing.module';
import { NgaModule } from '../../theme/nga.module';
import { InicioComponent } from './inicio.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

@NgModule({
  imports: [
    NgaModule,
    NgbModule,
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    CKEditorModule,
  ],
  declarations: [
    InicioComponent,
    ActividadesComponent,
    PublicacionesComponent,
  ],
})
export class InicioModule { }
