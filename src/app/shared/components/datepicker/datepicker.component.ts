import { Component, ElementRef, forwardRef, Input, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sg-datepicker',
  templateUrl: './datepicker.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatepickerComponent), multi: true }
  ],
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent implements ControlValueAccessor {
  @Input() name: string = '';
  model: any;
  @ViewChild('dp') dp;
  private propagateChange: any = () => { };

  constructor(private _eref: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (this._eref.nativeElement.contains(event.target)) return true;
    setTimeout(() => this.dp.close(), 10);
  }

  onModelChange() {
    this.propagateChange(this.model);
  }

  writeValue(value) {
    this.model = value;
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

}