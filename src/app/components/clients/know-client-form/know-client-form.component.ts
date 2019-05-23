import { Component, OnInit } from '@angular/core';
import { Client, Job, PEP, AccountUser } from '../../../../shared/models/client.interface';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AccountInfoComponent } from '../account-info/account-info.component';

@Component({
  selector: 'app-know-client-form',
  templateUrl: './know-client-form.component.html',
  styleUrls: ['./know-client-form.component.scss']
})
export class KnowClientFormComponent implements OnInit {

  currentDate = new Date().toISOString().split('T')[0];

  client = new Client();
  job = new Job();
  PEP = new PEP();
  accounts = new Array<AccountUser>();

  step_form = [
    {
      title: 'Datos Personales',
      data: {
        createAt: this.client.createAt,
        firstName: this.client.firstName,
        email: this.client.email,
        identification: this.client.identification,
        idExpirationDate: this.client.idExpirationDate,
        bornDate: this.client.bornDate,
        bornCountryId: this.client.bornCountryId,
        nationality: this.client.nationality,
        livingCountryId: this.client.livingCountryId,
        genderId: this.client.genderId,
        addres1: this.client.addres1,
        province: this.client.provinceId,
        canton: this.client.cantonId,
        distrito: this.client.distritoId
      }
    },
    {
      title: 'Información Laboral',
      data: {
        professionId: 0,
        jobPlace: this.job.professionId,
        jobStartDate: this.job.jobStartDate,
        marketStall: this.job.marketStall,
        jobPhone: this.job.jobPhone,
        jobEmail: this.job.jobEmail,
        jobAddres: this.job.jobAddres,
        monthlyIncome: this.job.monthlyIncome
      }
    },
    {
      title: 'Fondos, Autorizaciones y otros',
      data: {
        sourceFunds: this.PEP.sourceFunds,
        monthlyToTransac: this.PEP.monthlyToTransac,
        isPEP: this.PEP.isPEP,
        PEPDate: this.PEP.PEPDate,
        PEPmarketStall: this.PEP.PEPmarketStall,
        accountInfo: this.client.accounts,
        observations: this.client.observations,
      }
    }
  ]

  start_step = 1

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  setFormData(form_data) {
    this.client = {
      ...this.client,
      ...form_data
    }
    console.log('next', this.client)
  }

  finishAction() {
    console.log(this.client)
  }


  openAddAccount() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = "800px";
    const dialogRef = this.dialog.open(AccountInfoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data)
        var position = this.accounts != null ? this.accounts.length : 0
        console.log(position);
        this.accounts.push(data);
        this.client.accounts = this.accounts;
      }
    );
  }
}
