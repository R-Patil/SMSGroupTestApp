import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'sg-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sideBarToggle() {
    // Toggle the side navigation   
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };

  }

}
