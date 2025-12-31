import { Component, input, output, signal } from '@angular/core';
import { TicketModel } from '../ticket-model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {

  // input
  ticket = input.required<TicketModel>();

  // output
  closed = output<string>();

  detailsVisible = signal(true);

  onCloseTicket() {
    this.closed.emit(this.ticket().id);
  }

  toggleTicket() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
