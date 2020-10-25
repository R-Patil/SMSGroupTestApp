import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [DatepickerComponent, GridComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [DatepickerComponent, GridComponent],
})
export class SharedModule { }
