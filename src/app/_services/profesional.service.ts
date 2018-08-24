import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfesionalService {
  baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://angulartest-37df6.firebaseio.com';
  }

  @Output() reload: EventEmitter<any> = new EventEmitter();

  getAll() {
    return this.http.get<any>(this.baseUrl + '/proffessionals.json');
  }

  getById(id: string) {
    return this.http.get(this.baseUrl + '/proffessionals' + id + '.json');
  }

  update(profesional: any, id: string) {
    return this.http.put(this.baseUrl +  '/proffessionals/' + id + '.json', profesional);
  }

  create(profesional: any) {
    return this.http.post(this.baseUrl + '/proffessionals.json', profesional);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + '/proffessionals/' + id + '.json');
  }
  reloadTable() {
    this.reload.emit();
  }
}
