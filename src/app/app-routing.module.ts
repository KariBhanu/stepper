import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { StepperComponent } from './stepper/stepper.component';
import { TestComponent } from './test/test.component';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';
import { PageComponent } from './page/page.component';
const routes: Routes = [
  { path: 'horizontal', component: StepperComponent },
  { path: 'vertical', component: VerticalStepperComponent },
  { path: 'custom',component: CustomStepperComponent},
  { path:'test',component:TestComponent} ,
  {path:'page',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
