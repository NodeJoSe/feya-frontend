import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { fadeInAnimation } from '../app.animations';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer [@fadeInAnimation] *ngIf="showFooter" class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a routerLink="/pages/inicio/actividades" translate>{{'Feya'}}</a> 2017</div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `,
    animations: [fadeInAnimation],
})
export class Pages {
  showFooter: boolean = true;

  constructor(
    private _menuService: BaMenuService,
  ) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
