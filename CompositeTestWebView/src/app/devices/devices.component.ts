import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CompositeTestConnectionService } from '../composite-test-connection.service';
import { Device } from '../devices/Device';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  selectedDevice: Device;
  deviceList = [];
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'name', 'type', 'desc'];

  constructor(
    public compositeTestConnectionService: CompositeTestConnectionService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.compositeTestConnectionService.getDeviceList().subscribe(
      (devices) => {
        this.dataSource =  new MatTableDataSource(devices);
      }
    );
  }

  selectedRow(row: Device) {
    this.router.navigate(['/device/', row._id]);
  }
}
