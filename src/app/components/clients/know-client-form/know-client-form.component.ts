import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-client-form',
  templateUrl: './know-client-form.component.html',
  styleUrls: ['./know-client-form.component.scss']
})
export class KnowClientFormComponent implements OnInit {

  currentDate = new Date().toISOString().split('T')[0];

  form_data = {
    clientId: '',
    firstName: '',
    email: '',
    status: '',
    createAt: this.currentDate,
    lastName: '',
    identification: '',
    idExpirationDate: this.currentDate,
    bornDate: this.currentDate,
    bornCountryId: 0,
    livingCountryId: 0,
    nationality: '',
    province: '',
    canton: '',
    distrito: '',
    primaryPhone: 0,
    civilStatusId: 0,
    genderId: 0,
    addres1: '',
    profession: '',
    jobPlace: '',
    jobStartDate: this.currentDate,
    marketStall: '',
    jobPhone: '',
    jobEmail: '',
    jobAddres: '',
    monthlyIncome: 0,
    sourceFunds: '',
    monthlyToTransac: 0,
    isPEP: false,
    PEPDate: this.currentDate,
    PEPmarketStall: '',
    accountInfo: {
      fullName: '',
      identification: '',
      nationality: '',
      bornDate: this.currentDate,
      bornCountryId: 0,
      professionId: '',
      addres1: '',
    },
    observations: ''

  };

  step_form = [
    {
      title: 'Datos Personales',
      data: {
        createAt: this.form_data.createAt,
        firstName: this.form_data.firstName,
        email: this.form_data.email,
        identification: this.form_data.identification,
        idExpirationDate: this.form_data.idExpirationDate,
        bornDate: this.form_data.bornDate,
        bornCountryId: this.form_data.bornCountryId,
        nationality: this.form_data.nationality,
        livingCountryId: this.form_data.livingCountryId,
        genderId: this.form_data.genderId,
        addres1: this.form_data.addres1,
        province: this.form_data.province,
        canton: this.form_data.canton,
        distrito: this.form_data.distrito
      }
    },
    {
      title: 'Información Laboral',
      data: {
        profession: this.form_data.profession,
        jobPlace: this.form_data.jobPlace,
        jobStartDate: this.form_data.jobStartDate,
        marketStall: this.form_data.marketStall,
        jobPhone: this.form_data.jobPhone,
        jobEmail: this.form_data.jobEmail,
        jobAddres: this.form_data.jobAddres,
        monthlyIncome: this.form_data.monthlyIncome
      }
    },
    {
      title: 'Fondos, Autorizaciones y otros',
      data: {
        sourceFunds: this.form_data.sourceFunds,
        monthlyToTransac: this.form_data.monthlyToTransac,
        isPEP: this.form_data.isPEP,
        PEPDate: this.form_data.PEPDate,
        PEPmarketStall: this.form_data.PEPmarketStall,
        accountInfo: {
          fullName: this.form_data.accountInfo.fullName,
          identification: this.form_data.accountInfo.identification,
          nationality: this.form_data.accountInfo.nationality,
          bornDate: this.form_data.accountInfo.bornDate,
          bornCountryId: this.form_data.accountInfo.bornCountryId,
          professionId: this.form_data.accountInfo.professionId,
          addres1: this.form_data.accountInfo.addres1,
        },
        observations: this.form_data.observations,
      }
    }
  ]

  start_step = 1

  constructor() { }

  ngOnInit() {
  }

  setFormData(form_data) {
    this.form_data = {
      ...this.form_data,
      ...form_data
    }
    console.log('next', this.form_data)
  }
  finishAction() {
    console.log(this.form_data)
  }
}
