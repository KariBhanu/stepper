import {CdkStepper} from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-step',
  templateUrl: './custom-step.component.html',
  styleUrls: ['./custom-step.component.css'],
  providers: [{provide: CdkStepper,useExisting: CustomStepComponent}]
})

export class CustomStepComponent extends CdkStepper {

  customSteps:any=["General","Training data","Evaluation Data","Mobile Metrics","Finish","General","Training data","Evaluation Data","Mobile Metrics","Finish"];

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}