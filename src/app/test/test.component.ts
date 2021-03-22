import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, VERSION, ViewChild} from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private ngVersion: string = VERSION.full;
  
  // Only required when not passing the id in methods
  // Only required when not passing the id in methods

  @ViewChild('stepper')
  private myStepper!: MatStepper;
  page!:number;
  isHidden:boolean=true;
  array=[1,2,3];
  constructor() {
  }

  // Event fired when component initializes
  ngOnInit() {
    this.page = 0;
  }

  goBack(stepper: MatStepper) {
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
  }
  testFun( stepper: MatStepper){   
    this.isHidden = false;
    stepper.selectedIndex = 0;
  }
  testFun2( stepper: MatStepper){   
    this.isHidden = true;
    stepper.selectedIndex = 3;
  }
  public test($event: StepperSelectionEvent): void {
    //this.page+=1;
    console.log(' $event.selectedIndex: ' + $event!.selectedIndex + "; Stepper.selectedIndex" + this.myStepper.selectedIndex);
    console.log( " page no:" + this.page );
    //this.page+=1;
    /*if($event!.selectedIndex > this.myStepper.selectedIndex){
    this.page+=1;}
    else{
      //this.page -=1;
     }*/
   }
}

