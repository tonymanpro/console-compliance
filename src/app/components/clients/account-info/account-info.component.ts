import { Component, OnInit } from '@angular/core';
import { Job, AccountUser } from 'src/shared/models/client.interface';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  account= new AccountUser;
  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AccountInfoComponent>,
    public dialog: MatDialog, ) { }

  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      bornDate: new FormControl('', [Validators.required]),
      bornCountryId: new FormControl('', [Validators.required]),
      professionId: new FormControl('', [Validators.required]),
      addres1: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
