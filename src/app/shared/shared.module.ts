import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EligibilityCalculatorComponent } from './components/eligibility-calculator/eligibility-calculator.component';



@NgModule({
  declarations: [
    EligibilityCalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EligibilityCalculatorComponent]
})
export class SharedModule { }
