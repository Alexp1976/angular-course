import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Tasks } from './components/tasks/tasks';
import { TrafficDashboard } from './components/traffic/traffic-dashboard'; 

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tasks', component: Tasks },
    { path: 'traffic', component: TrafficDashboard }
];
