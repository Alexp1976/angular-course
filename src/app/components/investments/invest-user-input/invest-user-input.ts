import { Component, inject, output, signal } from '@angular/core';
import { InvestimentParams } from '../investment-model';
import { InvestmentService } from '../investment-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invest-user-input',
  imports: [ FormsModule ],
  templateUrl: './invest-user-input.html',
  styleUrl: './invest-user-input.css',
})
export class InvestUserInput {

  calculated = output<InvestimentParams>();

  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0); 
  
  private investmentService = inject(InvestmentService);

  onCalculate() {
    const params: InvestimentParams = {
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    };    

    this.calculated.emit(params);
    
  }
}
