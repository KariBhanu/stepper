import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { StepperComponent } from './stepper/stepper.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';
import { PageComponent } from './page/page.component';
const routes: Routes = [
  { path: 'horizontal', component: StepperComponent },
  { path: 'vertical', component: VerticalStepperComponent },
  { path: 'custom', component: CustomStepperComponent },
  { path:'page',component:PageComponent },
  { path:'test', component: TestComponent },
  { path:'test2', component: Test2Component },
  { path:'test3', component: Test3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
