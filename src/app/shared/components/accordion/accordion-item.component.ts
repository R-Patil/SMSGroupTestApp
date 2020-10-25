import { Component, Input } from '@angular/core';
import { AccordionService } from "src/app/_services";

@Component({
  selector: 'sg-accordion-item',
  template: `
    <dt (click)="onBtnClick()">{{entry.title}}</dt>
    <dd class="{{uncollapsed ? 
      'uncollapsed' : 
      'uncollapsed collapsed'}}">
      {{entry.description_1}}<br />
      {{entry.description_2}}<br />
      {{entry.description_3}}<br /></dd>
  `,  
  styleUrls: [ './accordion-item.component.scss' ]
})
export class AccordionItemComponent  {
  @Input() entry: any;
  uncollapsed = false;
  constructor(private service: AccordionService ) { }

  ngOnInit() {
    this.service.onEntryClick.subscribe(() => {
      this.uncollapsed = false;
    });
  }

  onBtnClick() {
    this.service.collapseAllEntries();
    this.uncollapsed = true;
  }
}
