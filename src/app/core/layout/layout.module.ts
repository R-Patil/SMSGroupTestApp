import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,    
    RouterModule,  
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LeftSidebarComponent,
    PageNotFoundComponent],
  providers: []
})
export class LayoutModule { }
