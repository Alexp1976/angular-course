import { Component, contentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class Control {

  label = input.required<string>();

  private inputEl = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log(this.inputEl().nativeElement.value);
  }
}
