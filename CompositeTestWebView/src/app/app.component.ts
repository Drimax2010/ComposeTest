import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { CompositeTestConnectionService } from './composite-test-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['name', 'type', 'desc'];
  dataSource = new MatTableDataSource();

  constructor(
    public compositeTestConnectionService: CompositeTestConnectionService
  ) {
    compositeTestConnectionService.getDeviceList().subscribe(
      (devices) => {
        this.dataSource.data = devices;
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  name: string;
  type: string;
  desc: string;
}


const ELEMENT_DATA: Element[] = [
  {name: 'Hydrogen', type: 'Test', desc: 'H'},
  {name: 'Hydrogen', type: 'Test', desc: 'H'},
  {name: 'Hydrogen', type: 'Test', desc: 'H'},
  {name: 'Hydrogen', type: 'Test', desc: 'H'},
];
