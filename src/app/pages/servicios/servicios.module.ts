import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../theme/nga.module';


import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    NgbModule,
    NgaModule,
  ],
  declarations: [ServiciosComponent],
})
export class ServiciosModule { }
