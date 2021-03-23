import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StepperPositionDirective } from './stepper-position.directive';
import { AppRoutingModule } from './app-routing.module';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { CustomStepComponent } from './custom-stepper/custom-step/custom-step.component';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepperPositionDirective,
    VerticalStepperComponent,
    CustomStepperComponent,
    CustomStepComponent,
    TestComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
