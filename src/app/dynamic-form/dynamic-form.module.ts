import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {FormDateComponent} from './components/form-datepicker/form-datepicker.component';
import {FormCheckboxComponent} from './components/form-checkbox/form-checkbox.component';
import {FormInputArrayComponent} from './components/form-input-array/form-input-array.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DlDateTimePickerDateModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDateComponent,
    FormCheckboxComponent,
    FormInputArrayComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDateComponent,
    FormCheckboxComponent,
    FormInputArrayComponent
  ]
})
export class DynamicFormModule {}
