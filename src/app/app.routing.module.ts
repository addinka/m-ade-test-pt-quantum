import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee.component';
import { loginComponent } from './employee/login.component';
import { UpdateEmployeeComponent } from './employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'login', component: loginComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }