import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../Device';
import { DeviceType } from '../DeviceType';
import { CapType } from '../CapType';
import { ActivatedRoute } from '@angular/router';
import { CompositeTestConnectionService } from '../../composite-test-connection.service';
import {Location} from '@angular/common';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DeleteDeviceConfirmDialogComponent } from '../dialogs/delete-device-confirm-dialog/delete-device-confirm-dialog.component';
import { UpdateDeviceConfirmDialogComponent } from '../dialogs/update-device-confirm-dialog/update-device-confirm-dialog.component';
import { MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  selectedDevice: Device;
  deviceTypes: string[] = Object.keys(DeviceType);
  capTypes: string[] = Object.keys(CapType);
  deleteDeviceConfirmDialog: MatDialogRef<DeleteDeviceConfirmDialogComponent>;
  updateDeviceConfirmDialog: MatDialogRef<UpdateDeviceConfirmDialogComponent>;
  updateDeviceFormGroup: FormGroup;


  constructor(private route: ActivatedRoute,
    public compositeTestConnectionService: CompositeTestConnectionService,
    private _location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {
      this.deviceTypes = this.deviceTypes.slice(this.deviceTypes.length / 2);
      this.capTypes = this.capTypes.slice(this.capTypes.length / 2);
      this.updateDeviceFormGroup = formBuilder.group({
        'name' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        'type' : [null, Validators.compose([Validators.required])],
        'brokerUrl' : [null, Validators.compose([Validators.required])],
        'capType' : [null, Validators.compose([Validators.required])],
        'Description' : [null, Validators.compose([Validators.maxLength(500)])],
      });
    }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.compositeTestConnectionService.getDevice(params.get('id')).subscribe(
        (device) => {
          this.selectedDevice = device;
        }
      );
    });
    this.updateDeviceFormGroup.get('type').valueChanges.subscribe((type) => {
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
      this.updateDeviceFormGroup.get('name').setValidators(validators);
      this.updateDeviceFormGroup.get('name').updateValueAndValidity();

  });
  }

  updateDevice() {
    this.updateDeviceConfirmDialog = this.dialog.open(UpdateDeviceConfirmDialogComponent);
    this.updateDeviceConfirmDialog
        .afterClosed()
        .pipe(filter(updateDevice => updateDevice))
        .subscribe(updateDevice => {
          if (updateDevice) {
            this.compositeTestConnectionService.updateDevice(this.selectedDevice).subscribe(
              (device) => {
                this.selectedDevice = device;
                this.snackBar.open('Device has  been updated', 'Close', {
                  duration: 2000,
                });
              }
            );
          }
        });
  }

  deleteDevice() {
    this.deleteDeviceConfirmDialog = this.dialog.open(DeleteDeviceConfirmDialogComponent);
    this.deleteDeviceConfirmDialog
        .afterClosed()
        .pipe(filter(deleteDevice => deleteDevice))
        .subscribe(deleteDevice => {
          if (deleteDevice) {
            this.compositeTestConnectionService.deleteDevice(this.selectedDevice).subscribe(
              (device) => {
                this._location.back();
                this.snackBar.open('Device has  been deleted', 'Close', {
                  duration: 2000,
                });
              }
            );
          }
        });
  }
  backView() {
    this._location.back();
  }

}
