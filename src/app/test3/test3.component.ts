import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, VERSION, ViewChild, ChangeDetectorRef } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, AfterViewInit {

  MAX_STEP = 4;
  totalSteps = 8;
  @ViewChild('stepper') private myStepper!: MatStepper;
  page = 0;
  step = 0;
  minStepAllowed = 0;
  maxStepAllowed = this.MAX_STEP - 1;
  totalPages = Math.ceil(this.totalSteps / this.MAX_STEP);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.rerender();
  }

  pageChangeLogic(isForward = true) {
    if (this.step < this.minStepAllowed || this.step > this.maxStepAllowed) {
      if (isForward) {
        this.page++;
      } else {
        this.page--;
      }
      this.changeMinMaxSteps();
    }
  }

  changeMinMaxSteps() {
    const pageMultiple = this.page * this.MAX_STEP;

    // maxStepAllowed will be lesser value between minStep + MAX_STEP and total steps
    // minStepAllowed will be lesser value between pageMultiple and maxStep - MAX_STEP
    if (pageMultiple + this.MAX_STEP - 1 <= this.totalSteps - 1) {
      this.maxStepAllowed = pageMultiple + this.MAX_STEP - 1;
      this.minStepAllowed = pageMultiple;
    } else {
      this.maxStepAllowed = this.totalSteps - 1;
      this.minStepAllowed = this.maxStepAllowed - this.MAX_STEP + 1;
    }
    console.log(`step: ${this.step + 1}, minStepAllowed: ${this.minStepAllowed + 1}, maxStepAllowed: ${this.maxStepAllowed + 1}`);
    this.rerender();
  }

  goBack() {
    if (this.step > 0) {
      this.step--;
      this.myStepper.previous();
      this.pageChangeLogic(false);
    }
  }

  goForward() {
    if(this.step < this.totalSteps - 1) {
      this.step++;
      this.myStepper.next();
      this.pageChangeLogic(true);
    }
  }

  paginatorNext() {
    this.page++;
    this.changeMinMaxSteps();
  }

  paginatorBack() {
    this.page--;
    this.changeMinMaxSteps();
  }

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

  }

  stepSelectionChange(event: StepperSelectionEvent) {
    this.step = event.selectedIndex;
    console.log(' $event.selectedIndex: ' + event.selectedIndex + "; Stepper.selectedIndex: " + this.myStepper.selectedIndex);
  }

}
