import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CompositeTestConnectionService } from '../composite-test-connection.service';
import { Device } from '../devices/Device';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { DeviceType } from './DeviceType';
import { CapType } from './CapType';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { CreateDeviceConfirmDialogComponent } from './dialogs/create-device-confirm-dialog/create-device-confirm-dialog.component';
import { MatSnackBar } from '@angular/material';
import {  } from '@angular/forms/src/model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {
  selectedDevice: Device = new Device(undefined, '', '', '', '', '', '');
  newDevice: Device;
  deviceList = [];
  dataSource = new MatTableDataSource();
  deviceTypes: string[] = Object.keys(DeviceType);
  capTypes: string[] = Object.keys(CapType);
  displayedColumns = ['id', 'name', 'type', 'desc'];
  createDeviceFormGroup: FormGroup;
  createDeviceConfirmDialog: MatDialogRef<CreateDeviceConfirmDialogComponent>;

  constructor(
    public compositeTestConnectionService: CompositeTestConnectionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.newDevice = new Device(undefined, '', '', '', '', '', '');
    this.deviceTypes = this.deviceTypes.slice(this.deviceTypes.length / 2);
    this.capTypes = this.capTypes.slice(this.capTypes.length / 2);
    this.createDeviceFormGroup = formBuilder.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'type' : [null, Validators.compose([Validators.required])],
      'brokerUrl' : [null, Validators.compose([Validators.required, urlValidator()])],
      'capType' : [null, Validators.compose([Validators.required])],
      'Description' : [null, Validators.compose([Validators.maxLength(500)])],
    });
    this.createDeviceFormGroup.get('type').valueChanges.subscribe((type) => {
      const validators = [Validators.required, Validators.minLength(3), Validators.maxLength(50)];
      switch (type) {
        case 'MRA':
        validators.push(Validators.pattern('^(MRA)-[a-zA-Z0-9_.-]+$'));
        break;
        case 'LSR':
        validators.push(Validators.pattern('^(LSR)-[a-zA-Z0-9_.-]+$'));
        break;
        case 'VOC':
        validators.push(Validators.pattern('^(VOC)-[a-zA-Z0-9_.-]+$'));
        break;
      }
      this.createDeviceFormGroup.get('name').setValidators(validators);
      this.createDeviceFormGroup.get('name').updateValueAndValidity();

  });
  }

  ngOnInit() {
      this.compositeTestConnectionService.getDeviceList().subscribe(devices => {
      this.dataSource = new MatTableDataSource(devices);
    });
  }

  selectedRow(row: Device) {
    this.router.navigate(['/device/', row._id]);
  }

  createDevice() {
    this.createDeviceConfirmDialog = this.dialog.open(CreateDeviceConfirmDialogComponent);
    this.createDeviceConfirmDialog
        .afterClosed()
        .pipe(filter(confirmCreation => confirmCreation))
        .subscribe(confirmCreation => {
          if (confirmCreation) {
            this.compositeTestConnectionService.createDevice(this.newDevice).subscribe(
              (deviceCreated) => {
                if (deviceCreated) {
                  this.snackBar.open('Device has ' + deviceCreated.name + ' been created', 'Close', {
                    duration: 2000,
                  });

                  this.dataSource.data.push(deviceCreated);
                  this.dataSource._updateChangeSubscription();
                }
              }
            );
          }
        });
  }
}

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (control.value) {
      const validationUrlString = '.com';
      const forbidden = !control.value.includes(validationUrlString);
      return forbidden ? {'urlValidator': {value: control.value}} : null;
    }
    return null;
  };
}
