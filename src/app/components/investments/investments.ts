import { Component, inject } from '@angular/core';
import { InvestHeader } from "./invest-header/invest-header";
import { InvestUserInput } from "./invest-user-input/invest-user-input";
import { InvestmentService } from './investment-service';
import { InvestimentParams } from './investment-model';
import { InvestResult } from "./invest-result/invest-result";

@Component({
  selector: 'app-investments',
  imports: [InvestHeader, InvestUserInput, InvestResult],
  templateUrl: './investments.html',
  styleUrl: './investments.css',
})
export class Investments {

  isCalculated = false;

  private investmentService = inject(InvestmentService);

  onCalculated(params: InvestimentParams) {
    this.investmentService.calculateInvestment(params);
    this.isCalculated = true;
  }
}
