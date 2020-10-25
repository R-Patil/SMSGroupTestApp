import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmeComponent } from './readme.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReadmeComponent }
];

@NgModule({
  declarations: [ReadmeComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ],
})
export class ReadmeModule { }
