import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StructureService} from '../_services/structure.service';
import {ModalGenericComponent} from '../modal-generic/modal-generic.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private structureService: StructureService) { }

  ngOnInit() {
  }
  openModalProfesionals() {
    this.structureService.setData([], 'profesionals');

    const modalRef = this.modalService.open(ModalGenericComponent);
    modalRef.componentInstance.title = 'About';
  }
  openModalPatients() {

    this.structureService.setData([], 'patients');
    const modalRef = this.modalService.open(ModalGenericComponent);
    modalRef.componentInstance.title = 'About';
  }
}
