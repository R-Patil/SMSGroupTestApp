import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sg-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() gridData;

  columns = [];



  constructor() {
   
  }

  ngOnInit() {    
    this.columns = [ 
      { 'field' : 'city', 'header' : 'City'},
      { 'field' : 'start_date', 'header' : 'Start Date'},
      { 'field' : 'end_date', 'header' : 'End Date'},
      { 'field' : 'price', 'header' : 'Price'},
      { 'field' : 'status', 'header' : 'Status'},
      { 'field' : 'color', 'header' : 'Color'},
    ];
   
  }

}