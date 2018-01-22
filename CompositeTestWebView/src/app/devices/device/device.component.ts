import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from '../Device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  @Input('test') test: Boolean = true;
  @Input() device: Device;
  @Output() selectedDevice = new EventEmitter<Device>();
  constructor() { }

  onItemSelected(device: Device): void {
    this.selectedDevice.emit(device);
  }
  ngOnInit() {
  }
}
