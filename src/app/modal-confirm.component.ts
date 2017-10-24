import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
})

export class ModalConfirmComponent implements OnInit {
  title: string = '';
  message: string = '';
  alert: string = '';

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  confirm() {
    this.activeModal.close(true);
  }
}
