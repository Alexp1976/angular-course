import { Routes } from '@angular/router';
import { Home } from './components/home/home'; 
import { TrafficDashboard } from './components/traffic/traffic-dashboard'; 
import { TasksControl } from './components/tasks/tasks-control';
import { Investments } from './components/investments/investments';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tasks', component: TasksControl },
    { path: 'traffic', component: TrafficDashboard },
    { path: 'invest', component: Investments}
];
