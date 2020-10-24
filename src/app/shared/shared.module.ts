import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { GridComponent } from './components/grid/grid.component';



@NgModule({
  declarations: [DatepickerComponent, GridComponent],
  imports: [
    CommonModule
  ],
  exports: [DatepickerComponent, GridComponent],
})
export class SharedModule { }
