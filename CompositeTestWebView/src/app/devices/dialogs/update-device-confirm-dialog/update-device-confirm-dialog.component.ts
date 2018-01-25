import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-device-confirm-dialog',
  templateUrl: './update-device-confirm-dialog.component.html',
  styleUrls: ['./update-device-confirm-dialog.component.css']
})
export class UpdateDeviceConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UpdateDeviceConfirmDialogComponent>) { }

  ngOnInit() {
  }

  updateDevice(updateDevice: Boolean) {
    this.dialogRef.close(updateDevice);
  }

}
