import { Routes } from '@angular/router';
import { Home } from './components/home/home'; 
import { TrafficDashboard } from './components/traffic/traffic-dashboard'; 
import { TasksControl } from './components/tasks/tasks-control';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tasks', component: TasksControl },
    { path: 'traffic', component: TrafficDashboard }
];
