import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services';

@Component({
  selector: 'sg-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent implements OnInit {
  rowData: any;

  cols: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {  
    this.cols = [
      { field: 'client', header: 'Client' },
      { field: 'year', header: 'Year' },
      { field: 'week', header: 'Week' },
      { field: 'updated_by', header: 'Updated By' },
      { field: 'updated_on', header: 'Updated On' }
  ];

   // this.dataService.getLogs().subscribe((res) => {
      this.rowData = [];
  //  });    
  }

}
