import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createDevice(device: Device): Observable<Device> {
    //let headers = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
    return this.http.post<Device>(this.apiRoot + 'create-device/',
    device);
  }

  updateDevice(device: Device): Observable<Device> {
    return this.http.put<Device>(this.apiRoot + 'update-device/' + device._id, device);
  }

  deleteDevice(device: Device): Observable<Device> {
    return this.http.delete<Device>(this.apiRoot + 'delete-device/' + device._id);
  }


}

