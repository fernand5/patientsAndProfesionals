import { Component } from '@angular/core';
import {AlertService} from '../_services/alert.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent {

  message: any;

  constructor(private alertService: AlertService) { }

  isArray(obj : any ) {
    return Array.isArray(obj)
  }

}
