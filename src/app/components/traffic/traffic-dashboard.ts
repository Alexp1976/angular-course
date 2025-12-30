import { Component } from '@angular/core';
import { Trafficheader } from "./traffic-header/traffic-header";
import { ServerStatus } from "./server-status/server-status";
import { TrafficInfo } from "./traffic-info/traffic-info";
import { SupportTickets } from "./support-tickets/support-tickets";
import { DashboardItem, ImageInfo } from "./dashboard-item/dashboard-item";

@Component({
  selector: 'app-traffic-dashboard',
  imports: [Trafficheader, ServerStatus, TrafficInfo, SupportTickets, DashboardItem],
  templateUrl: './traffic-dashboard.html',
  styleUrl: './traffic-dashboard.css',
})
export class TrafficDashboard {

  serverStatusImage: ImageInfo = {
    url: 'status.png',
    alt: 'A signal symbol'
  };
  serverStatusTitle: string = 'Server Status';

  trafficStatusImage: ImageInfo = {
    url: 'globe.png',
    alt: 'A globe'
  };
  trafficStatusTitle: string = 'Traffic';

  supportTicketsImage: ImageInfo = {
    url: 'list.png',
    alt: 'A list of items'
  };
  supportTicketsTitle: string = 'Support Tickets';


}
