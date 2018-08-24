import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {
  confirmationBoxTitle: string;
  confirmationMessage: string;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }
}
