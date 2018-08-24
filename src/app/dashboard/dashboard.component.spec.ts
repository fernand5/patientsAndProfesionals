import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {DataTableViewComponent} from '../data-table/data-table.component';
import {DataTableModule} from 'angular5-data-table';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {PacienteService} from '../_services/paciente.service';
import {ProfesionalService} from '../_services/profesional.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StructureService} from '../_services/structure.service';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent , DataTableViewComponent],
      imports: [DataTableModule, AngularFontAwesomeModule, HttpClientModule, NgbModule.forRoot(), DynamicFormModule],
      providers: [PacienteService, ProfesionalService, StructureService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixtureDataTable = TestBed.createComponent(DataTableViewComponent);
    // componentDataTable = fixtureDataTable.componentInstance;

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    // componentDataTable.items = [];
    // componentDataTable.type = 'profesional';
    expect(component).toBeTruthy();
  });
});
