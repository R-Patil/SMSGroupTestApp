import { Component } from '@angular/core';
import { SpinnerService } from '../_services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: '<div class="loading" *ngIf="isLoading" style="display:block;">Loading&#8230;</div>',
  styleUrls: ['spinner.component.scss']  
})
export class SpinnerComponent {
  isLoading: boolean = false;
  constructor(private spinnerService: SpinnerService) {    
    this.spinnerService.getSpinnerState().subscribe(res => { this.isLoading = res;});
  }
}
