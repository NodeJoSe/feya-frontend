import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalConfirmComponent } from './modal-confirm.component';
import { AuthService } from 'ng2-ui-auth';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  canDeactivateTitle: string;
  canDeactivateMessage: string;
  canDeactivateAlert: string;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(
    private modalService: NgbModal,
    private auth: AuthService,
  ) { }

  canDeactivate(component: CanComponentDeactivate) {
    if (!this.auth.isAuthenticated()) return true;

    if (!component.canDeactivate()) {
      const activeModal = this
          .modalService
          .open(ModalConfirmComponent);

        activeModal.componentInstance.title = component.canDeactivateTitle;
        activeModal.componentInstance.message = component.canDeactivateMessage;
        activeModal.componentInstance.alert = component.canDeactivateAlert;

        return activeModal.result.then((result) => {
          return true;
        }, (reason) => {
          return false;
        });
    }

    return true;
  }
}
