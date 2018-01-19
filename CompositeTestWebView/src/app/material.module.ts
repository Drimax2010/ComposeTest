import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule
  , MatGridListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatGridListModule,
    MatIconModule],
  exports: [MatButtonModule, MatTableModule , MatFormFieldModule, MatToolbarModule, MatCardModule, MatGridListModule,
    MatIconModule],
})
export class MaterialModule { }
