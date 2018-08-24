import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PacienteService {
  baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://angulartest-37df6.firebaseio.com';
  }

  @Output() reload: EventEmitter<any> = new EventEmitter();

  getAll() {
    return this.http.get<any>(this.baseUrl + '/patients.json');
  }

  getById(id: string) {
    return this.http.get(this.baseUrl + '/patients/' + id + '.json');
  }
  update(paciente: any, id: string) {
    return this.http.put(this.baseUrl +  '/patients/' + id + '.json', paciente);
  }

  create(paciente: any) {
    return this.http.post(this.baseUrl + '/patients.json', paciente);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + '/patients/' + id + '.json');
  }
  reloadTable() {
    this.reload.emit();
  }
}
