import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Validators} from '@angular/forms';
import {DynamicFormComponent} from '../dynamic-form/containers/dynamic-form/dynamic-form.component';

@Injectable()
export class StructureService {

  dataUpdate = [];
  idToUpdate = null;
  type = '';

  config = [];

  constructor(private http: HttpClient) {
  }
  @Output() change: EventEmitter<any> = new EventEmitter();

  @Output() reload: EventEmitter<any> = new EventEmitter();

  setData(data: any[], type: string) {
    this.type = type;
    if (typeof data['id'] !== 'undefined') {
      this.idToUpdate = data['id'];
      this.dataUpdate = data;
    } else {
      this.dataUpdate = data;
    }
  }
  getData() {

    const typeReference = this.type === 'patients' ? 'acompañante' : 'referencia';

    this.config = [
      {
        type: 'input',
        label: 'Nombres',
        name: 'firstName',
        placeholder: 'Nombres',
        validation: [Validators.required, Validators.minLength(0), Validators.maxLength(20)]
      },
      {
        type: 'input',
        label: 'Apellidos',
        name: 'lastName',
        placeholder: 'Apellidos',
        validation: [Validators.required, Validators.minLength(0), Validators.maxLength(20)]
      },
      {
        type: 'inputArray',
        label: '',
        name: 'documentType',
        array: [
          {
            type: 'select',
            label: 'Tipo de documento',
            name: 'description',
            options: ['C.C.', 'C.E.', 'NIT'],
            placeholder: 'Selecccione un documento',
            validation: [Validators.required]
          },
          {
            type: 'input',
            label: '',
            name: 'id',
            placeholder: 'Ingrese su documento',
            validation: [Validators.required, Validators.minLength(0), Validators.maxLength(20)]
          }
        ]
      },
      {
        type: 'datepicker',
        label: 'Fecha de nacimiento',
        name: 'birthDate',
        placeholder: 'birth',
        maxValue: new Date(),
        validation: [Validators.required, Validators.minLength(0)]
      },
      {
        type: 'input',
        label: 'Correo',
        name: 'email',
        placeholder: 'Correo',
        validation: [Validators.email]
      },
      {
        type: 'input',
        label: 'Telefono',
        name: 'phone',
        placeholder: 'Telefono',
        validation: [Validators.required, Validators.minLength(7), Validators.maxLength(10)]
      },
      {
        type: 'checkbox',
        function: 'addReference()',
        label: this.type === 'patients' ? 'Acompañante' : 'Referencia',
        name: this.type === 'patients' ? 'companionOption' : 'referenceOption',
        placeholder: this.type === 'patients' ? 'Acompañante' : 'Referencia',
        validation: [Validators.required]
      },

      {
        hidden: true,
        type: 'inputArray',
        label: '',
        title: typeReference,
        name: this.type === 'patients' ? 'companion' : 'reference',
        array: [
          {
            type: 'input',
            label: 'Nombres' + typeReference,
            name: 'firstNameReference',
            placeholder: 'Nombres ' + typeReference,
            validation: [Validators.minLength(0), Validators.maxLength(20)]
          },
          {
            type: 'input',
            label: 'Apellidos' + typeReference,
            name: 'lastNameReference',
            placeholder: 'Apellidos ' + typeReference,
            validation: [Validators.minLength(0), Validators.maxLength(20)]
          },
          {
            type: 'select',
            options: ['Padre', 'Madre', 'Primo', 'Tio'],
            label: 'Parentesco',
            name: 'relationReference',
            placeholder: 'Parentesco',
            validation: [Validators.minLength(0), Validators.maxLength(20)]
          },
          {
            type: 'input',
            label: 'Telefono contacto',
            name: 'phoneReference',
            placeholder: 'Telefono contacto',
            validation: [Validators.minLength(7), Validators.maxLength(10)]
          },
          {
            type: 'input',
            label: 'Correo',
            name: 'emailReference',
            placeholder: 'Correo',
            validation: [Validators.email]
          }
        ]
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button',
        // disabled: true
      }

    ];
    console.log(this.config);
    return this.config;
  }
  getDataToUpdate() {
    return this.dataUpdate;
  }
  getType() {
    return this.type;
  }
}

