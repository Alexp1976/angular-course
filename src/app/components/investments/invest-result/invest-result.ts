import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invest-result',
  imports: [ CommonModule ],
  templateUrl: './invest-result.html',
  styleUrl: './invest-result.css',
})
export class InvestResult {

  private investmentService = inject(InvestmentService);

  investmentData = computed(() => this.investmentService.investimentResult());

}
