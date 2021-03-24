import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  length = 10;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  hide = true;
  disabled = true;
  // MatPaginator Output
 // pageEvent: PageEvent;

  pageChangeEvent($event: PageEvent) {
    this.hide = !this.hide;
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map(str => +str);
    }
  }
  public test($event?: StepperSelectionEvent): void {
       
    if($event!.selectedIndex == 4){
      this.disabled = false; 
    }
    else{
      //this.disabled = false;
    }
  }
}
