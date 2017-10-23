import { Component, OnInit } from '@angular/core';
import { BaThemeSpinner } from '../../../theme/services';
import { fadeInAnimation } from '../../../app.animations';
import { ToastrService } from "ngx-toastr";
import { PublicacionesService } from './publicaciones.service';
import { CategoriasService } from '../categorias/categorias.service';

import './ckeditor/ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  providers: [PublicacionesService, CategoriasService],
  animations: [fadeInAnimation],
})
export class PublicacionesComponent implements OnInit {
  ckeditorConfig = {
    toolbarCanCollapse: true,
    toolbarStartupExpanded: false,
    uiColor: '#F0F3F4',
    height: '600',
  };
  filters = {
    categories: '',
    search: '',
  };
  publicaciones: any = {};
  categorias: any[] = [];
  pageDisabled = true;
  page = 1;

  constructor(
    private publicacionesService: PublicacionesService,
    private categoriasService: CategoriasService,
    private _spinner: BaThemeSpinner,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this._spinner.show();

    this.reloadPublicaciones(this.page);
    this.reloadCategorias();
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }

  reloadCategorias() {
    this.categoriasService.categorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) => {
        this.toastrService.error(error.detail || 'An error has ocurred');
      });
  }

  reloadPublicaciones(page: number) {
    this.pageDisabled = true;

    this.publicacionesService.publicaciones(
      page, 
      this.filters.categories,
      this.filters.search,
    ).subscribe(
      (data) => {
        this.publicaciones = data;
        this.pageDisabled = false;
        this._spinner.hide();
      },
      (error) => {
        if (error.detail === 'Invalid page.') {
          this.page = 1;
          this.reloadPublicaciones(this.page);
        } else {
          this.toastrService.error(error.detail || 'An error has ocurred');
          this.pageDisabled = false;
          this._spinner.hide();
        }
      });
  }
}
