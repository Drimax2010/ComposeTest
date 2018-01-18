import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatFormFieldModule],
  exports: [MatButtonModule, MatTableModule , MatFormFieldModule],
})
export class MaterialModule { }
