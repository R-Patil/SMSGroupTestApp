import { Component, Input } from "@angular/core";
import { AccordionService } from "src/app/_services";

@Component({
  selector: "sg-accordion",
  template: `
    <dl class="accordion">
      <sg-accordion-item
        *ngFor="let item of entries"
        [entry]="item"
      ></sg-accordion-item>
    </dl>
  `,
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent {
  entries: any[];
  constructor(private service: AccordionService) {}

  ngOnInit() {
    this.entries = [
      {
        title: "Client",
        description_1: "Technology : Angular",
        description_2: "CLI Version : 9.0.1",
        description_3: "External Dependencies : bootstrap, popper, jquery, primeng, ngbdatepicker"
      },
      {
        title: "Server",
        description_1: "Technology : Node",
        description_2: "Server Version : 10.15.3",
        description_3: "Dependencies : mongoose, body-parser, express, cors"
      
      },
      {
        title: "Database",
        description_1: "Technology : MongoDB",
        description_2: "Version : 3.4.10",
        description_3: "DB Server : localhost, Port : 27017, Database : sg-testdb, Collection : city_info"
      
      }
    ];
  }

  onBtnClick() {
    this.service.collapseAllEntries();
  }
}
