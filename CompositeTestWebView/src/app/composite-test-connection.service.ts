import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Device } from './Device';
@Injectable()
export class CompositeTestConnectionService {
  apiRoot = 'http://127.0.0.1:3100/get-info';
  constructor(private http: HttpClient) { }


  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiRoot);
  }
  search(): void {
    this.http.get(this.apiRoot).subscribe(data => {
      const test = data as any[];
      test.forEach(device => {
        console.log('Name: ' + device.name + 'Type: ' + device.type + 'Desc: ' + device.desc);
      });
    });
  }
}

