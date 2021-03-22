import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.css']
})
export class CustomStepperComponent implements OnInit {

  formGroup1!: FormGroup;
  models:any = [];
  reports:any = [];

  date = new Date();
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup1 = this._formBuilder.group({
      reports:[''],
      models:[''],
      modelVersion:['v1.0'],
      reportVersion:['v1.0'],
      reportDate:[this.date],
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
}
