import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Rx';

@Injectable()

export class SpinnerService {
    private subject = new Subject<any>();

    show() {        
        this.subject.next(true);
    }

    hide() {
        this.subject.next(false);
    }

    getSpinnerState(): Observable<any> {
        return this.subject.asObservable();
    }
}