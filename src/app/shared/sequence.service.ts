import { Injectable } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import "rxjs/add/observable/range";
import "rxjs/add/observable/never";
import "rxjs/add/operator/delay"
import "rxjs/add/operator/repeat"

@Injectable()
export class SequenceService {
  public sequence:Observable<number>;

  constructor() {
    this.sequence = Observable.never();
  }

  getSequence(begin:number = 1, end:number = 100, delay:number = 1000, isRepeatable:boolean = true):void {

    this.sequence = Observable.range(begin, end)
        .delay(delay);

    if(isRepeatable) {
      this.sequence = this.sequence.repeat()
    }
  }

}
