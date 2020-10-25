import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportModule } from './report/report.module';
import { ReadmeModule } from './readme/readme.module'

@NgModule({
  imports: [
    CommonModule,
    ReportModule,
    ReadmeModule
  ],
  declarations: []
})
export class PagesModule { }
