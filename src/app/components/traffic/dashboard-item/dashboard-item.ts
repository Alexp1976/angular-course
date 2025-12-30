import { Component, input } from '@angular/core';

export type ImageInfo = {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
})
export class DashboardItem {

  image = input.required<ImageInfo>();  
  title = input.required<string>();

  getImageUrl(): string {
    return `${this.image().url}.png`;
  }
}
