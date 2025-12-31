import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TaskManager } from './components/task-manager/task-manager'; 
import { TrafficDashboard } from './components/traffic/traffic-dashboard'; 

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tasks', component: TaskManager },
    { path: 'traffic', component: TrafficDashboard }
];
