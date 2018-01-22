import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../Device';
import { ActivatedRoute } from '@angular/router';
import { CompositeTestConnectionService } from '../../composite-test-connection.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  selectedDevice: Device;
  constructor(private route: ActivatedRoute,
    public compositeTestConnectionService: CompositeTestConnectionService,
    private _location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.compositeTestConnectionService.getDevice(params.get('id')).subscribe(
        (device) => {
          this.selectedDevice = device;
        }
      );
    });
  }

  backView() {
    this._location.back();
  }

}
