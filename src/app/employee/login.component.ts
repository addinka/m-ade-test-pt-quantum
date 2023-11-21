import { Component,Inject } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from './employee.service';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class loginComponent {
  loginData={
    user:'',
    password:''
  }
  msg='';
  constructor(private router: Router, private employeeService: EmployeeService,
    @Inject(DOCUMENT) private document: Document) {
    if (sessionStorage.getItem("login")) {
      console.log("belom login");
      this.router.navigate(['employees']);
    }
  }

  findUser(){
    console.log(this.loginData);
    this.employeeService.cekUser(this.loginData.user,this.loginData.password)
      .subscribe( data => {
        console.log(data);
        if(data['code']==1){
          sessionStorage.setItem('login', 'true');
          this.document.location.href = '/employees';
        }else{
          this.msg=data['message'];
        }
      });
  };

}