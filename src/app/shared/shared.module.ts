import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent, GridComponent, AccordionComponent, AccordionItemComponent, LoaderComponent } from './components/';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [DatepickerComponent, GridComponent, AccordionComponent, AccordionItemComponent, LoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TableModule
  ],
  exports: [DatepickerComponent, GridComponent, AccordionComponent, AccordionItemComponent, LoaderComponent],
})
export class SharedModule { }
