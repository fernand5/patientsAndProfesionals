import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-date',
  styleUrls: ['form-datepicker.component.scss'],
  template: `
    <div [hidden]="config.hidden"
      class="dynamic-field form-input"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="date"
        max="{{config.maxValue | date:'yyyy-MM-dd'}}"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormDateComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
