import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CompositeTestConnectionService } from '../composite-test-connection.service';
import { Device } from '../Device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  selectedDevice: Device;
  deviceList = [];

  constructor(
    public compositeTestConnectionService: CompositeTestConnectionService
  ) {
    compositeTestConnectionService.getDeviceList().subscribe(
      (devices) => {
        this.deviceList = devices;
      }
    );
  }
  onSelectedDevice($event) {
    this.selectedDevice = $event;
  }

  ngOnInit() {
  }

}
