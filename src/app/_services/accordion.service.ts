import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  onEntryClick = new EventEmitter();
 
  constructor() { }

  collapseAllEntries() {
    this.onEntryClick.emit();
  }
}
