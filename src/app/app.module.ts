import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {AlertService} from './_services/alert.service';
import {AlertComponent} from './_directives/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PacienteService} from './_services/paciente.service';
import {DataTableModule} from 'angular5-data-table';
import {DataTableViewComponent} from './data-table/data-table.component';
import {ModalComponent} from './modal/modal.component';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfesionalService} from './_services/profesional.service';
import {StructureService} from './_services/structure.service';
import {ConfirmBoxComponent} from './confirm-box/confirm-box.component';
import {ModalGenericComponent} from './modal-generic/modal-generic.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AlertComponent,
    DashboardComponent,
    DataTableViewComponent,
    ModalComponent,
    ConfirmBoxComponent,
    ModalGenericComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    DynamicFormModule,
    DataTableModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AlertService,
    PacienteService,
    ProfesionalService,
    NgbActiveModal,
    StructureService
  ],
  entryComponents: [
    ConfirmBoxComponent,
    ModalGenericComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
