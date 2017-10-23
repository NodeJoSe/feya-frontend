import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../theme/nga.module';

import { MinisteriosRoutingModule } from './ministerios-routing.module';
import { MinisteriosComponent } from './ministerios.component';

@NgModule({
  imports: [
    CommonModule,
    MinisteriosRoutingModule,
    NgbModule,
    NgaModule,
  ],
  declarations: [MinisteriosComponent],
})
export class MinisteriosModule { }
