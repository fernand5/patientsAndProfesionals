import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {AlertComponent} from '../_directives/alert.component';
import {DynamicFormComponent} from '../dynamic-form/containers/dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';
import {DynamicFieldDirective} from '../dynamic-form/components/dynamic-field/dynamic-field.directive';
import {FormButtonComponent} from '../dynamic-form/components/form-button/form-button.component';
import {FormInputComponent} from '../dynamic-form/components/form-input/form-input.component';
import {FormSelectComponent} from '../dynamic-form/components/form-select/form-select.component';
import {FormDateComponent} from '../dynamic-form/components/form-datepicker/form-datepicker.component';
import {FormCheckboxComponent} from '../dynamic-form/components/form-checkbox/form-checkbox.component';
import {FormInputArrayComponent} from '../dynamic-form/components/form-input-array/form-input-array.component';
import {AlertService} from '../_services/alert.service';
import {Router} from '@angular/router';
import {Directive, ViewContainerRef} from '@angular/core';
import {routing} from '../app.routing';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {DataTableModule} from 'angular5-data-table';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';
import {DataTableViewComponent} from '../data-table/data-table.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PacienteService} from '../_services/paciente.service';
import {ProfesionalService} from '../_services/profesional.service';
import {StructureService} from '../_services/structure.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent,
        AlertComponent,
        DynamicFormComponent,
        DynamicFieldDirective,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormDateComponent,
        FormCheckboxComponent,
        DataTableViewComponent,
        DashboardComponent,
        FormInputArrayComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        DataTableModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        NgbModule.forRoot(),
        DlDateTimePickerDateModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        AlertService,
        PacienteService,
        ProfesionalService,
        NgbActiveModal,
        StructureService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
