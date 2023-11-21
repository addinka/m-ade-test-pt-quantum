import { Component,Inject } from '@angular/core';
import { Router } from '@angular/router';

import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Programming PT Quantum Sistem Intermatika ';
  showMenu:boolean=true;
  constructor(private router: Router,@Inject(DOCUMENT) private document: Document) {
    if (!sessionStorage.getItem("login")) {
      this.showMenu=false;
    }
  }
  logout(){
    sessionStorage.removeItem('login');
    this.document.location.href = '/employees';
  }
}
