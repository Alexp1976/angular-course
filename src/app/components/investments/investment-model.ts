export interface InvestimentParams {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestimentResults {
    year: number;
    investmentValue: number;
    interestEarnedInYear: number;
    totalInterest: number;
    investedCapital: number;
}