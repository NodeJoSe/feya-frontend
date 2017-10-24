import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

import { Router } from '@angular/router';
import { AuthService } from "ng2-ui-auth";
import { LocalStorageService } from 'ngx-localstorage';


@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
})
export class BaPageTop {

  isScrolled: boolean = false;
  isMenuCollapsed: boolean = false;
  facebookPhotoUrl = '';
  isAdmin = false;
  isUser = false;

  constructor(
    private _state: GlobalState,
    private router: Router,
    private auth: AuthService,
    private localStorage: LocalStorageService,
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this._state.subscribe('logout', (error) => {
      console.log('logoutEvent: ', error);
      this.logout();
    });
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  logout() {
    const session = JSON.parse(this.localStorage.get('session'));

    this.auth.logout()
      .subscribe({
        next: (res: any) => {
          this._state.notifyDataChanged('token', null);
        },
        error: (err: any) => console.log('logoutError: ', err),
        complete: () => {
          this.router.navigate(['login']);
        },
      });
  }

}
