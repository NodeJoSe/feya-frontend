import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalState } from '../../../../../global.state';
import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'ba-menu-item',
  templateUrl: './baMenuItem.html',
  styleUrls: ['./baMenuItem.scss'],
})

export class BaMenuItem {
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isUser: boolean;

  @Input() menuItem: any;
  @Input() child: boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  constructor(
    private _state: GlobalState,
    private localStorage: LocalStorageService,
  ) {
  }

  onHoverItem($event): void {
    this.itemHover.emit($event);
  }

  toggleSidebar() {
    this._state.notifyDataChanged('menu.isCollapsed', true);
  }

  onToggleSubMenu($event, item): boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
