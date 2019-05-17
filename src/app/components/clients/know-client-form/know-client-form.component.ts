import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-client-form',
  templateUrl: './know-client-form.component.html',
  styleUrls: ['./know-client-form.component.scss']
})
export class KnowClientFormComponent implements OnInit {

  form_data = {
    clientId: '',
    firstName: '',
    email: '',
    status: '',
    createAt: new Date(),
    lastName: '',
    identification: '',
    identificationPeriod: new Date(),
    bornDate: new Date(),
    bornCountryId: 0,
    livingCountryId: '',
    nationality: '',
    province: '',
    canton: '',
    distrito: '',
    primaryPhone: 0,
    civilStatusId: 0,
    genderId: 0,
    addres1: ''
  }

  step_form = [
    {
      title: 'Datos Personales',
      data: {
        createAt: this.form_data.createAt,
        firstName: this.form_data.firstName,
        email: this.form_data.email,
        identification: this.form_data.identification,
        identificationPeriod: this.form_data.identificationPeriod,
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
        address: this.form_data.email
      }
    },
    {
      title: 'Fondos, Autorizaciones y otros',
      data: {
        description: this.form_data.email
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
    console.log('next',this.form_data)
  }
  finishAction(){
    console.log(this.form_data)
  }
}
