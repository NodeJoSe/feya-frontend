import { Component, OnInit } from '@angular/core';
import { BaThemeSpinner } from '../../theme/services';
import { fadeInAnimation } from '../../app.animations';
import { ToastrService } from "ngx-toastr";
import { MinisteriosService } from './ministerios.service';

@Component({
  selector: 'app-ministerios',
  templateUrl: './ministerios.component.html',
  styleUrls: ['./ministerios.component.scss'],
  providers: [MinisteriosService],
  animations: [fadeInAnimation],
})
export class MinisteriosComponent implements OnInit {
  ministerios: any = {};
  pageDisabled = true;
  page = 1;

  constructor(
    private ministeriosService: MinisteriosService,
    private _spinner: BaThemeSpinner,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this._spinner.show();

    this.reloadMinisterios(this.page);
  }

  expandMessage (message) {
    message.expanded = !message.expanded;
  }

  reloadMinisterios(page: number) {
    this.pageDisabled = true;

    this.ministeriosService.ministerios(page).subscribe(
      (data) => {
        this.ministerios = data;
        this.pageDisabled = false;
        this._spinner.hide();
      },
      (error) => {
        if (error.detail === 'Invalid page.') {
          this.page = 1;
          this.reloadMinisterios(this.page);
        } else {
          this.toastrService.error(error.detail || 'An error has ocurred');
          this.pageDisabled = false;
          this._spinner.hide();
        }
      });
  }
}
