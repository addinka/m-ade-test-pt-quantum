import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../models/employee.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) {}

  private employeeUrl = 'http://corenet.usadi.co.id/BaseAPI';

  public getEmployees() {
    return this.http.get<Employee[]>(this.employeeUrl + "/Pegawai");
  }

  public getEmployee(id) {
    return this.http.get(this.employeeUrl + "/Pegawai/"+ id);
  }

  public deleteEmployee(employee) {
    return this.http.delete(this.employeeUrl + "/delete-employee/"+ employee.id);
  }

  public createEmployee(employee) {
    return this.http.post<Employee>(this.employeeUrl + "/Pegawai", employee);
  }

  public updateEmployee(employee) {
    return this.http.put<Employee>(this.employeeUrl + "/update-employee", employee);
  }

  public cekUser(user,pass) {
    return this.http.get(this.employeeUrl + "/User?user="+user+"&password="+pass);
  }
}
