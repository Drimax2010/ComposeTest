import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule
  , MatGridListModule, MatIconModule, MatExpansionModule } from '@angular/material';

  const MODULES = [MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatGridListModule,
    MatIconModule, MatExpansionModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }
