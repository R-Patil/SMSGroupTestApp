import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { GridComponent } from './components/grid/grid.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [DatepickerComponent, GridComponent, AccordionComponent, AccordionItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgxDatatableModule
  ],
  exports: [DatepickerComponent, GridComponent, AccordionComponent, AccordionItemComponent],
})
export class SharedModule { }
