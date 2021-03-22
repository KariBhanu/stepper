import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class VerticalStepperComponent implements OnInit {

  formGroup1!: FormGroup;
  formGroup2!:FormGroup;
  temp:boolean = false;

  models:any = [];
  reports:any = [];

  //error:boolean = false;
  date1 = new Date();
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      reports:[''],
      models:[''],
      modelVersion:['v1.0'],
      reportVersion:['v1.0'],
      reportDate:[this.date1],
      modelDeveloper:['',Validators.required],
      modelName:[''],
      modelType:[''],
      modelDescription:[''],
      gitLink:[''],
      comment:['']
    });
    this.formGroup2 = this._formBuilder.group({
      reports:[''],
      models:[''],
      modelVersion:['v1.0'],
      reportVersion:['v1.0'],
      reportDate:[this.date1],
      modelDeveloper:['',Validators.required],
      modelName:[''],
      modelType:[''],
      modelDescription:[''],
      gitLink:[''],
      comment:['']
    });
    this.models = this.getModels();
    this.reports = this.getReports();
  }

get modelDeveloper(){
  return this.formGroup1.get('modelDeveloper');
}
get modelName(){
  return this.formGroup1.get('modelName');
}
get modelVersion(){
  return this.formGroup1.get('modelVersion');
}
getModels(){
  return [
    {id:1,name:"model1"},
    {id:2,name:"model2"},
    {id:3,name:"model3"}
  ]
}
getReports(){
 return [
    {id:1,name:"Audit Report"},
    {id:2,name:"Model Checklist Report"},
    {id:3,name:"report3"}
  ]
}
toggleClicked(){
  this.temp = !this.temp;
}
}
