import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule
  , MatGridListModule, MatIconModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatGridListModule,
    MatIconModule, MatExpansionModule],
  exports: [MatButtonModule, MatTableModule , MatFormFieldModule, MatToolbarModule, MatCardModule, MatGridListModule,
    MatIconModule, MatExpansionModule],
})
export class MaterialModule { }
