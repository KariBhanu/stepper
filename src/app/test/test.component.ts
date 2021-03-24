import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, VERSION, ViewChild, ChangeDetectorRef } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {
  private ngVersion: string = VERSION.full;
  
  // Only required when not passing the id in methods
  // Only required when not passing the id in methods

  MAX_STEP = 4;
  totalSteps = 8;
  minStepAllowed = 0;
  maxStepAllowed = this.MAX_STEP - 1;
  @ViewChild('stepper') private myStepper!: MatStepper;
  page = 0;
  step = 0;
  isHidden:boolean=true;
  array=[1,2,3];
  constructor(private cdr: ChangeDetectorRef) {
  }

  // Event fired when component initializes
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.rerender();
  }
  
  /* goBack(stepper: MatStepper) {
    if(this.page === 4){
      this.page -= 1;
      console.log("si");
      stepper.selectedIndex = 3;
    }else{
      this.page -= 1;
      stepper.previous();
    }
  }

  goForward(stepper: MatStepper) {
    if(this.page === 3){
      this.page += 1;
      stepper.selectedIndex = 0;
    }else{
      this.page += 1;
      stepper.next();
    }
  } */

  /* goBack() {
    if (this.step > 0) {
      this.step--;
      this.myStepper.previous();
    }
    this.page = this.step > 3 ? 1 : 0;
    this.rerender();
  }

  goForward() {
    if(this.step < this.totalSteps) {
      this.step++;
      this.myStepper.next();
    }
    this.page = this.step > 3 ? 1 : 0;
    this.rerender();
  } */

  
  changeMinMaxSteps(isForward = true) {
    if (this.step < this.minStepAllowed || this.step > this.maxStepAllowed) {
      if (isForward) {
        if (this.maxStepAllowed < this.totalSteps - 1) {
          this.maxStepAllowed++;
        }
        this.minStepAllowed = this.maxStepAllowed - this.MAX_STEP + 1;
      } else {
        if (this.minStepAllowed > 0) {
          this.minStepAllowed--;
        }
        this.maxStepAllowed = this.minStepAllowed + this.MAX_STEP - 1;
      }
    }
    console.log(`step: ${this.step + 1}, minStepAllowed: ${this.minStepAllowed + 1}, maxStepAllowed: ${this.maxStepAllowed + 1}`);
  }

  goBack() {
    if (this.step > 0) {
      this.step--;
      this.myStepper.previous();
      this.changeMinMaxSteps(false);
    }
    this.rerender();
  }

  goForward() {
    if (this.step < this.totalSteps - 1) {
      this.step++;
      this.myStepper.next();
      this.changeMinMaxSteps(true);
    }
    this.rerender();
  }

  /* private rerender() {

    let headers = document.getElementsByTagName('mat-step-header') as HTMLCollectionOf<HTMLElement>;
    let lines = document.getElementsByClassName('mat-stepper-horizontal-line') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < headers.length; i++) {
      if (this.page === 0) {
        // Returns the index of the mat-step associated with headers[i]
        let str = headers[i].getAttribute('ng-reflect-index');
        if (str !== null && Number.parseInt(str) > 3) {
          headers[i].style.display = 'none';
        }
        else {
          headers[i].style.display = 'flex';
        }
      }
      else if (this.page === 1) {
        let str = headers[i].getAttribute('ng-reflect-index');
        if (str !== null && Number.parseInt(str) < 4) {
          headers[i].style.display = 'none';
        }
        else {
          headers[i].style.display = 'flex';
        }
      }
    }

    for (let i = 0; i < lines.length; i++) {
      if (this.page === 0) {
        if (i > 2) {
          lines[i].style.display = 'none';
        }
        else {
          lines[i].style.display = 'block';
        }
      }
      else if (this.page === 1) {
        if (i < 4) {
          lines[i].style.display = 'none';
        }
        else {
          lines[i].style.display = 'block';
        }
      }
    }

  } */

  private rerender() {

    let headers = document.getElementsByTagName('mat-step-header') as HTMLCollectionOf<HTMLElement>;
    let lines = document.getElementsByClassName('mat-stepper-horizontal-line') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < headers.length; i++) {
      let str = headers[i].getAttribute('ng-reflect-index');
      if (str !== null && Number.parseInt(str) >= this.minStepAllowed && (Number.parseInt(str) <= this.maxStepAllowed)) {
        headers[i].style.display = 'flex';
      } else {
        headers[i].style.display = 'none';
      }
    }

    for (let i = 0; i < lines.length; i++) {
      if (i >= this.minStepAllowed && i < this.maxStepAllowed) {
        lines[i].style.display = 'block';
      } else {
        lines[i].style.display = 'none';
      }
    }

    this.cdr.detectChanges();
  }

  testFun( stepper: MatStepper){   
    this.isHidden = false;
    stepper.selectedIndex = 0;
  }
  testFun2( stepper: MatStepper){   
    this.isHidden = true;
    stepper.selectedIndex = 3;
  }

  public stepSelectionChange(event: StepperSelectionEvent): void {
    //this.page+=1;
    this.step = event.selectedIndex;
    console.log(' $event.selectedIndex: ' + event.selectedIndex + "; Stepper.selectedIndex: " + this.myStepper.selectedIndex);
    
    // console.log( " page no:" + this.page );
    //this.page+=1;
    /*if($event!.selectedIndex > this.myStepper.selectedIndex){
    this.page+=1;}
    else{
      //this.page -=1;
     }*/
  }
}

