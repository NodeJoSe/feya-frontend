import { Component, OnInit } from '@angular/core';
import { BaThemeSpinner } from '../../theme/services';
import { fadeInAnimation } from '../../app.animations';
import { ToastrService } from "ngx-toastr";
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [ContactoService],
  animations: [fadeInAnimation],
})
export class ContactoComponent implements OnInit {
  contacto: any = {};

  constructor(
    private contactoService: ContactoService,
    private _spinner: BaThemeSpinner,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.reloadContacto();
  }

  reloadContacto() {
    this.contactoService.contacto().subscribe(
      (data) => {
        this.contacto = data;
        this._spinner.hide();
      },
      (error) => {
        this.toastrService.error(error.detail || 'An error has ocurred');
        this._spinner.hide();
      });
  }
}
