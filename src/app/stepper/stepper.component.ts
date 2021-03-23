import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class StepperComponent implements OnInit {
  formGroup1!: FormGroup;
  formGroup2!:FormGroup;
  @ViewChild('stepper') stepper: any;
  models:any = [];
  reports:any = [];
  page:boolean = false;
  isEditable:boolean = false;
  isHidden:boolean=true;
  
  //error:boolean = false;
  date = new Date();
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
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
    this.formGroup2 = this._formBuilder.group({
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
public test($event?: StepperSelectionEvent): void {
  console.log(' $event.selectedIndex: ' + $event!.selectedIndex + "; Stepper.selectedIndex" + this.stepper.selectedIndex);
  
  if($event!.selectedIndex >= 4){
    this.page = true; 
  }
  else{
    this.page = false;
  }
}
/*nextOpen(){
  this.page=true;
  console.log("hello")
}
previousClose(){
  this.page=false;
}*/
}
