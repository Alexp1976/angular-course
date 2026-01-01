import { Injectable, signal } from '@angular/core';
import { InvestimentParams, InvestimentResults } from './investment-model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService { 

  investimentResult = signal<InvestimentResults[]>([]);

  calculateInvestment(params: InvestimentParams) {
    
    const annualData: InvestimentResults[] = [];
    let investmentValue = params.initialInvestment;

    for (let i = 0; i < params.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (params.expectedReturn / 100);
      investmentValue += interestEarnedInYear + params.annualInvestment;
      const totalInterest = investmentValue - params.annualInvestment * year - params.initialInvestment;
      annualData.push({
        year: year,
        investmentValue: investmentValue,
        interestEarnedInYear: interestEarnedInYear,
        totalInterest: totalInterest,
        investedCapital: params.initialInvestment + params.annualInvestment * year,
      });
    }  
    
    this.investimentResult.set(annualData);

  }
}
