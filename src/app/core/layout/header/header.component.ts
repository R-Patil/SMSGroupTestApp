import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: any;

  constructor(private router: Router) {

  }

  ngOnInit() {    
    this.username = localStorage.getItem('empFName') + ' ' + localStorage.getItem('empLName');       
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
