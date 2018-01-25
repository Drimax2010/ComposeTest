import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-device-confirm-dialog',
  templateUrl: './delete-device-confirm-dialog.component.html',
  styleUrls: ['./delete-device-confirm-dialog.component.css']
})
export class DeleteDeviceConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteDeviceConfirmDialogComponent>) { }

  ngOnInit() {
  }

  deleteDevice(deleteDevice: Boolean) {
    this.dialogRef.close(deleteDevice);
  }
}
