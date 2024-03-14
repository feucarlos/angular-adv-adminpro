import { Route } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


export default [
    { path: "", component: DashboardComponent},
    { path: "progress", component: ProgressComponent},
    { path: "grafica1", component: Grafica1Component}
] as Route[];    
