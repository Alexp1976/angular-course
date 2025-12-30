import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button } from "../../shared/button/button";
import { Control } from "../../shared/control/control";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {

  //@ViewChild('requestForm') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('requestForm');

  onSubmitNewRequest(title: string, request: string) {        
    this.form().nativeElement.reset();
  }
}
