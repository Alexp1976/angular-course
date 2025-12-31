import { Injectable, signal } from '@angular/core';
import { TicketModel } from './ticket-model';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  
  tickets = signal<TicketModel[]>([]);

  addTicket(newTicket: {title: string, request: string}) {
    const ticket: TicketModel = {
      title: newTicket.title,
      request: newTicket.request,
      id: Math.random().toString(),
      status: 'open'
    };

    this.tickets.update((current) => [
      ...current,
      ticket
    ]);

    console.log(this.tickets().length);
  }

  getTickets() {
    return this.tickets;
  }

  closeTicket(ticketId: string) {
    this.tickets.update((current) => {
      const newValues = current.map((ticket) => {
        if (ticket.id === ticketId) {
          ticket.status = 'closed';          
        }
        return ticket;
      })
      return newValues;
    })
  }

}
