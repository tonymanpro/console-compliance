import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-client-form',
  templateUrl: './know-client-form.component.html',
  styleUrls: ['./know-client-form.component.scss']
})
export class KnowClientFormComponent implements OnInit {

  form_data = {
    name: '23',
    age: 12,
    address: '',
    description: ''
  }

  step_form = [
    {
      title: 'step 1',
      data: {
        name: this.form_data.name,
        age: this.form_data.age
      }
    },
    {
      title: 'step 2',
      data: {
        address: this.form_data.address
      }
    },
    {
      title: 'step 3',
      data: {
        description: this.form_data.description
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
