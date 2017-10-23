import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})

export class BaContentTop {
  activePageTitle: string = '';
  isAdmin = false;
  isUser = false;

  constructor(
    private _state: GlobalState,
    private localStorage: LocalStorageService,
  ) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        console.log('activelink: ', activeLink);
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
