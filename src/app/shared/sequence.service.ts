import { Injectable } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import "rxjs/add/observable/range";
import "rxjs/add/observable/never";

import "rxjs/add/operator/delay"
import "rxjs/add/operator/repeat"
import "rxjs/add/operator/share"
import "rxjs/add/operator/takeUntil"

// TODO add proper states management
import { SequenceStates } from "./sequence-states.enum"

@Injectable()
export class SequenceService {
  public sequence:Observable<number>;
  private state;

  private stop:Subject<string> = new Subject();

  constructor() {
    this.setState(SequenceStates.NotInitialized);
  }

  public setState(state) {
    this.state = state
  }

  public initSequence(begin:number = 1, end:number = 100, delay:number = 1000, isRepeatable:boolean = false):void {
    this.sequence = Observable.range(begin, end)
        .delay(delay);

    if(isRepeatable) {
      this.sequence = this.sequence.repeat()
    }

    this.sequence = this.sequence
        .takeUntil(this.stop)
        .share();

    this.setState(SequenceStates.Initialized);
  }

  public stopSequence():void {
    this.stop.next();
    this.setState(SequenceStates.Stopped);
  }
}
