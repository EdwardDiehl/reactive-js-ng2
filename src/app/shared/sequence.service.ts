import { Injectable } from '@angular/core';
import { Observable } from  "rxjs/Observable";

import "rxjs/add/observable/range";
import "rxjs/add/observable/never";
import "rxjs/add/operator/delay"
import "rxjs/add/operator/repeat"
import "rxjs/add/operator/share"
import "rxjs/add/operator/takeUntil"

import { SequenceStates } from "./sequence-states.enum"

@Injectable()
export class SequenceService {
  public sequence:Observable<number>;
  public controlObservable;  //observable:Observable<any>
  public state;

  constructor() {
    this.sequence = Observable.never().share();
    this.state = SequenceStates.Pending;
  }

  public initSequence(begin:number = 1, end:number = 100, delay:number = 1000, isRepeatable:boolean = false):void {
    this.sequence = Observable.range(begin, end)
        .delay(delay);

    if(isRepeatable) {
      this.sequence = this.sequence.repeat()
    }

    this.sequence = this.sequence
        .takeUntil(this.controlObservable)
        .share();
  }
}
