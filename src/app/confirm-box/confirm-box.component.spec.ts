import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBoxComponent } from './confirm-box.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

describe('ConfirmBoxComponent', () => {
  let component: ConfirmBoxComponent;
  let fixture: ComponentFixture<ConfirmBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmBoxComponent ], providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//
// describe('ModalUpdateProductComponent', () => {
//   let component: ConfirmBoxComponent;
//   let fixture: ComponentFixture<ConfirmBoxComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ConfirmBoxComponent ], imports: [NgbActiveModal]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ConfirmBoxComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should response with true when click the ok button...', () => {
//     const modalRef = this.modalService.open(ConfirmBoxComponent, { backdrop: 'static' });
//     console.log( 'Click ok button' );
//     let response: boolean;
//     modalRef.componentInstance.message = 'Click Ok button';
//     modalRef.result.then((userResponse) => {
//       this.response = userResponse;
//       console.log(`Button clicked: ${userResponse}`);
//     }, (reason) => {
//       this.response = reason;
//       console.log(`X clicked: ${reason}`);
//     });
//     let ok = (<HTMLElement>document.querySelector('#okButton'));
//     ok.click();
//     setTimeout( () => {
//       expect( this.response ).toEqual( true );
//     }, 10);
//   });
// });




