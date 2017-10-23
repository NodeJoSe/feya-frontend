import { Component, OnInit } from '@angular/core';
import { BaThemeSpinner } from '../../../theme/services';
import { fadeInAnimation } from '../../../app.animations';
import { ToastrService } from "ngx-toastr";
import { ActividadesService } from './actividades.service';
import { PublicacionesService } from '../publicaciones/publicaciones.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
  providers: [ActividadesService, PublicacionesService],
  animations: [fadeInAnimation],
})
export class ActividadesComponent implements OnInit {
  publicaciones: any = {};
  actividades: any = {};
  pageDisabled = true;
  page = 1;

  constructor(
    private actividadesService: ActividadesService,
    private publicacionesService: PublicacionesService,
    private _spinner: BaThemeSpinner,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this._spinner.show();

    this.reloadActividades(this.page);
    this.reloadPublicaciones();
  }

  expandMessage (message) {
    message.expanded = !message.expanded;
  }

  reloadActividades(page: number) {
    this.pageDisabled = true;

    this.actividadesService.actividades(page).subscribe(
      (data) => {
        this.actividades = data;
        this.pageDisabled = false;
        this._spinner.hide();
      },
      (error) => {
        if (error.detail === 'Invalid page.') {
          this.page = 1;
          this.reloadActividades(this.page);
        } else {
          this.toastrService.error(error.detail || 'An error has ocurred');
          this.pageDisabled = false;
          this._spinner.hide();
        }
      });
  }

  reloadPublicaciones() {
    this.publicacionesService.ultimasPublicaciones().subscribe(
      (data) => {
        this.publicaciones = data;
      },
      (error) => {
          this.toastrService.error(error.detail || 'An error has ocurred');
      });
  }
}
