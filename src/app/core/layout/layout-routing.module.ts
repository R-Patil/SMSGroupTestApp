import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ReportModule } from '../../pages/report/report.module';
import { ReadmeModule } from '../../pages/readme/readme.module';

const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,    
    children: [
      { path: 'report', loadChildren: () => ReportModule, pathMatch: 'full' },
      { path: 'readme', loadChildren: () => ReadmeModule, pathMatch: 'full' },
    ]
  },    
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes)
  ],
  declarations: []
})
export class LayoutRoutingModule { }
