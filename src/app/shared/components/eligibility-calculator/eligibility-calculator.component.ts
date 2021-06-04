import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html'
})
export class EligibilityCalculatorComponent implements OnInit {

  monthlyIncome = 0;
  monthlyIncomeMin = 100000;
  monthlyIncomeMax = 300000;
  monthlyIncomeStep = 5000;

  ngOnInit(): void {
  }

}
