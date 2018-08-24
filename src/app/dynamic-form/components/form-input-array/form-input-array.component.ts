import { Component} from '@angular/core';
import { FormGroup} from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input-array',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div [hidden]="config.hidden"
      class="dynamic-field form-input"
      >
      <h4>{{config.title}}</h4>
      <ng-container
        *ngFor="let field of config.array"
        dynamicField
        [config]="field"
        [group]="group.controls[config.name]">
      </ng-container>
    </div>
  `
})
export class FormInputArrayComponent implements Field {
  config: FieldConfig;
  group: FormGroup;


}
