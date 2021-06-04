import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html'
})
export class EligibilityCalculatorComponent implements OnInit {

  monthlyIncome: any=100000;
  monthlyIncomeMin = 100000;
  monthlyIncomeMax = 300000;
  monthlyIncomeStep = 5000;

  monthlyExpense: any;
  monthlyExpenseMin = 0;
  monthlyExpenseMax = 300000;
  monthlyExpenseStep = 5000;


  tenures = [{ value: 6, viewValue: "6 Months" }, { value: 12, viewValue: "1 Year" }, { value: 24, viewValue: "2 Year" }]


  selectedTenureValue = 6;

  existingLoans: any;
  existingEMI: number = 0;
  loanAmount: number = 100000;
  monthlyEMI: number = 15000;
  ngOnInit(): void {
  }

}
