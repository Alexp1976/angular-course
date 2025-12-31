import { Component, computed, effect, inject, signal } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { TicketModel } from './ticket-model';
import { Ticket } from "./ticket/ticket";
import { TicketsService } from './tickets-service';

@Component({
  selector: 'app-support-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './support-tickets.html',
  styleUrl: './support-tickets.css',
})
export class SupportTickets {

  private ticketsService = inject(TicketsService);
  
  tickets = this.ticketsService.getTickets();  

  onAddTicket(newTicket: {title: string, request: string}) {
    this.ticketsService.addTicket(newTicket);
  }

  onCloseTicket(ticketId: string) {
    this.ticketsService.closeTicket(ticketId);
  }
}
