import { Component, OnInit, Input } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'sg-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() gridData;
  editing = {};
  rows = [];
  columns = [];

  loadingIndicator: boolean = true;
  reorderable: boolean = true;


  constructor() {
    setTimeout(() => { this.loadingIndicator = false; }, 5000);

  }

  ngOnInit() {
    this.columns = [{
      "prop" : "start_date"
    }
    ]
  }

}