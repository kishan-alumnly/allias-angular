import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';



const appRoutes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/view/:id', component: EmployeeViewComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'employees' }
];

export const routing = RouterModule.forRoot(appRoutes, {
  useHash: false,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
  scrollOffset: [0, 100]
});
