import { Component, OnInit, Inject,Input, Output } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  @Input() recibidodePadre:string = "";
  @Output() enviadodeHijo= new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA) public message:string
  ) { }

  ngOnInit(): void {
    console.log(this.recibidodePadre)
  }

  onClickNO():  void{
    this.dialogRef.close();
  }

}
