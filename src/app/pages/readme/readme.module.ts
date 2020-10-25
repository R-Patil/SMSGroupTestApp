import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmeComponent } from './readme.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: ReadmeComponent }
];

@NgModule({
  declarations: [ReadmeComponent],
  imports: [
    CommonModule,   
    SharedModule, 
    RouterModule.forChild(routes)
  ],
})
export class ReadmeModule { }
