import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) {
    if (!sessionStorage.getItem("login")) {
      console.log("belom login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe( data => {
        this.employees = data;
        console.log(data)
      });
      
  };

  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };

}