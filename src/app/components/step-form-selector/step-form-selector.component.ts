import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-form-selector',
  templateUrl: './step-form-selector.component.html',
  styleUrls: ['./step-form-selector.component.scss']
})
export class StepFormSelectorComponent implements OnInit {

@Input() steps: any[] = ['Paso 1','Paso 2',' Paso 3'];
@Input() currentStep: string = 'Paso 2';

  constructor() { }

  ngOnInit() {
  }

}
