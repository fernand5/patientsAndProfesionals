import {Component, ViewChild, AfterViewInit} from '@angular/core';

import { FieldConfig } from '../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../dynamic-form/containers/dynamic-form/dynamic-form.component';
import {AlertService} from '../_services/alert.service';
import {PacienteService} from '../_services/paciente.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StructureService} from '../_services/structure.service';
import {ProfesionalService} from '../_services/profesional.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {

  type = '';

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig [];

  constructor(
    private alertService: AlertService,
    private pacienteService: PacienteService,
    private profesionalsService: ProfesionalService,
    private modalService: NgbActiveModal,
    private structureService: StructureService
  ) {
    this.config = this.structureService.getData();
    this.type = this.structureService.getType();
  }

  ngAfterViewInit() {

    const data = this.structureService.getDataToUpdate();
    Object.keys(data).forEach(key => {
      this.form.setValue(key, data[key]);
      // console.log(data[key]);
    });

    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {

      Object.keys(this.form.form.controls).forEach(key => {

        const controlErrors = this.form.form.controls[key].errors;
        if (controlErrors != null) {
          const arrayErrors = [];
          Object.keys(controlErrors).forEach(keyError => {
            arrayErrors.push(key + ' ' + keyError);
          });
          this.alertService.error(JSON.stringify(arrayErrors));
        }
      });
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
        this.alertService.error('error');
      }

      if(this.type === 'patients'){
        if (this.form.value.companionOption) {
          this.form.controls[this.form.controls.length - 1].hidden = false;
        } else {
          this.form.controls[this.form.controls.length - 1].hidden = true;
        }
      } else if (this.type === 'profesionals'){
        console.log(this.form.controls[this.form.controls.length - 1]);
        if (this.form.value.referenceOption) {
          this.form.controls[this.form.controls.length - 1].hidden = false;
        } else {
          this.form.controls[this.form.controls.length - 1].hidden = true;
        }
      }


    });

  }

  submit(value: {[name: string]: any}) {
    if(this.type === 'patients'){
      if(value.companionOption === false){
        delete value.companion;
      }
    } else if (this.type === 'profesionals'){
      if(value.referenceOption === false){
        delete value.reference;
      }
    }

    if(this.type === 'patients'){
      if(this.structureService.idToUpdate !== null){
        this.pacienteService.update(value, this.structureService.idToUpdate).subscribe(
          data => {
            this.modalService.close();
            this.structureService.idToUpdate = null;
            this.pacienteService.reloadTable();
            console.log(data);
          },
          error => {
            console.log(error);
            this.alertService.error(error.error.error);
          }
        );
      } else {
        this.pacienteService.create(value).subscribe(
          data => {
            this.modalService.close();
            this.pacienteService.reloadTable();
            console.log(data);
          },
          error => {
            console.log(error);
            this.alertService.error(error.error.error);
          }
        );
      }

    }else if('profesionals'){
      if(this.structureService.idToUpdate !== null){
        this.profesionalsService.update(value, this.structureService.idToUpdate).subscribe(
          data => {
            this.modalService.close();
            this.structureService.idToUpdate = null;
            this.profesionalsService.reloadTable();
            console.log(data);
          },
          error => {
            console.log(error);
            this.alertService.error(error.error.error);
          }
        );
      } else {
        this.profesionalsService.create(value).subscribe(
          data => {
            this.modalService.close();
            this.profesionalsService.reloadTable();
            console.log(data);
          },
          error => {
            console.log(error);
            this.alertService.error(error.error.error);
          }
        );
      }
    }

    // console.log(value);
  }

  removeNode(name) {

    for (let key in this.config) {
      if (this.config.hasOwnProperty(key) && this.config[key] === name) {
        delete this.config[key];
      }
    }
  }

}
