import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Device } from './devices/Device';
@Injectable()
export class CompositeTestConnectionService {
  apiRoot = 'http://127.0.0.1:3100/';
  constructor(private http: HttpClient) { }


  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiRoot + 'get-info');
  }

  getDevice(id: String): Observable<Device> {
    return this.http.get<Device>(this.apiRoot + 'get-device/' + id);
  }
}

