import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-device-confirm-dialog',
  templateUrl: './create-device-confirm-dialog.component.html',
  styleUrls: ['./create-device-confirm-dialog.component.css']
})
export class CreateDeviceConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateDeviceConfirmDialogComponent>) { }

  ngOnInit() {
  }

  createDevice(confirmCreation: Boolean) {
    this.dialogRef.close(confirmCreation);
  }

}
