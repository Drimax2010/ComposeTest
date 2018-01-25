import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule
  , MatGridListModule, MatIconModule, MatExpansionModule, MatInputModule, MatSelectModule, MatDialogModule,
  MatSnackBarModule  } from '@angular/material';

  const MODULES = [MatButtonModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatGridListModule,
    MatIconModule, MatExpansionModule, MatInputModule, MatSelectModule, MatDialogModule, MatSnackBarModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }
