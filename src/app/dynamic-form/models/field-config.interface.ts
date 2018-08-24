import {ValidatorFn} from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  function?: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
  hidden?: boolean;
  array?: any[];
  maxValue?: Date;
  title?: string;
}
