import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataTableResource} from 'angular5-data-table';
// import {CommerceService} from '../_services/commerce.service';
import {PacienteService} from '../_services/paciente.service';
import {ProfesionalService} from '../_services/profesional.service';
import {StructureService} from '../_services/structure.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DynamicFormComponent} from '../dynamic-form/containers/dynamic-form/dynamic-form.component';
import {ConfirmBoxComponent} from '../confirm-box/confirm-box.component';
import {ModalGenericComponent} from '../modal-generic/modal-generic.component';


@Component({
  selector: 'data-table-view',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableViewComponent implements OnInit{

  itemResource = null;
  items = [];
  itemCount = 0;
  limits = [10, 20, 40, 80];

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  @Input() type = ``;
  constructor(private pacienteService: PacienteService,
              private structureService: StructureService,
              private modalService: NgbModal,
              // private form: DynamicFormComponent,
              private profesionalService: ProfesionalService) {
    if(this.type === 'patients') {
      this.pacienteService.getAll().subscribe(
        data => {

          this.itemResource = new DataTableResource(data);
          this.itemResource.count().then(count => this.itemCount = count);
          this.reloadItems({offset: 0, limit:10});


          // this.items = data.content;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.type === 'profesional'){
      this.profesionalService.getAll().subscribe(
        data => {

          this.itemResource = new DataTableResource(data);
          this.itemResource.count().then(count => this.itemCount = count);
          this.reloadItems({offset: 0, limit:10});


          // this.items = data.content;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  ngOnInit() {
    if (this.type === 'patients'){
      this.pacienteService.reload.subscribe(data => {
        this.reloadItems({offset: 0, limit:10});
      });
    } else if (this.type === 'profesional'){
      this.profesionalService.reload.subscribe(data => {
        this.reloadItems({offset: 0, limit:10});
      });
    }
  }

  reloadItems(params) {

    if (this.type === 'patients'){
      this.pacienteService.getAll().subscribe(
        data => {

          const arrayToShow = [];
          for (const key in data) {
            if (key === 'length' || !data.hasOwnProperty(key)) continue;
            data[key]['id'] = key;
            arrayToShow.push(data[key]);
          }
          this.items = arrayToShow;
          console.log(this.items);
        },
        error => {
          console.log(error);
        }
      );
    }else if(this.type === 'profesional'){
      this.profesionalService.getAll().subscribe(
        data => {

          const arrayToShow = [];
          for (const key in data) {
            if (key === 'length' || !data.hasOwnProperty(key)) continue;
            data[key]['id'] = key;
            arrayToShow.push(data[key]);
          }
          this.items = arrayToShow;
          console.log(this.items);

        },
        error => {
          console.log(error);
        }
      );
    }


  }

  // special properties:

  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item);
  }

  rowDoubleClick(rowEvent) {
    console.log(rowEvent.row.item);
    this.structureService.setData(rowEvent.row.item, this.type);

    const modalRef = this.modalService.open(ModalGenericComponent);
    modalRef.componentInstance.title = 'About';
    // this.commerceService.setCommerceToUpdate(rowEvent.row.item);
  }

  delete(item){
    const modalRef = this.modalService.open(ConfirmBoxComponent, { backdrop: 'static' });
    modalRef.componentInstance.confirmationBoxTitle = 'Confirmacion';
    modalRef.componentInstance.confirmationMessage = 'Seguro quiere borrar el registro?';

    modalRef.result.then((userResponse) => {
      if(userResponse === 'accept'){
        if (this.type === 'patients'){
          this.pacienteService.delete(item).subscribe(
            data => {
              console.log(data);
              this.reloadItems({offset: 0, limit:10});
            },
            error => {
              console.log(error);
            }
          );
        }else if(this.type === 'profesional'){
          this.profesionalService.delete(item).subscribe(
            data => {
              console.log(data);
              this.reloadItems({offset: 0, limit:10});
            },
            error => {
              console.log(error);
            }
          );
        }
      }
      console.log(`User's choice: ${userResponse}`);
    });

    console.log(item);
  }

  viewReference(items) {
    const modalRef = this.modalService.open(ConfirmBoxComponent, { backdrop: 'static' });
    modalRef.componentInstance.confirmationBoxTitle = this.type === 'patients' ? 'Acompañante' : 'Referencia';

    let data = [];
    // console.log(JSON.parse(items[0]));
    Object.keys(items).forEach(item => {

      data.push(items[item]);
    });

    console.log(data);

    modalRef.componentInstance.confirmationMessage = data;
  }

  rowTooltip(item) { return item.jobTitle; }
}
