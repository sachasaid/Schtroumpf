import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddBoxComponent } from './box/add-box/add-box.component';

@Injectable({
  providedIn: 'root'
})
export class AddrowService {

  constructor(private dialog: MatDialog, public snackbar: MatSnackBar) { }
  message: any
  openSnackBar(message: string, panelClass: string) {
    this.snackbar.openFromComponent(AddBoxComponent, {
      data: message,
      panelClass: 'add',
      duration: 1500
    });
  }
}
