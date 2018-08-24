import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
