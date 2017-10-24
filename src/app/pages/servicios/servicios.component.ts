import { Component, OnInit } from '@angular/core';
import { BaThemeSpinner } from '../../theme/services';
import { fadeInAnimation } from '../../app.animations';
import { ToastrService } from "ngx-toastr";
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  providers: [ServiciosService],
  animations: [fadeInAnimation],
})
export class ServiciosComponent implements OnInit {
  servicios: any = {};
  pageDisabled = true;
  page = 1;

  constructor(
    private serviciosService: ServiciosService,
    private _spinner: BaThemeSpinner,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this._spinner.show();

    this.reloadServicios(this.page);
  }

  expandMessage (message) {
    message.expanded = !message.expanded;
  }

  reloadServicios(page: number) {
    this.pageDisabled = true;

    this.serviciosService.servicios(page).subscribe(
      (data) => {
        this.servicios = data;
        this.pageDisabled = false;
        this._spinner.hide();
      },
      (error) => {
        if (error.detail === 'Invalid page.') {
          this.page = 1;
          this.reloadServicios(this.page);
        } else {
          this.toastrService.error(error.detail || 'An error has ocurred');
          this.pageDisabled = false;
          this._spinner.hide();
        }
      });
  }
}
