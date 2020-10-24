import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'sg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      console.log(response);
    });
  }

}
