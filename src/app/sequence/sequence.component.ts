import { Component, OnInit, Input } from '@angular/core';
import { SequenceService } from "../shared/sequence.service";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  @Input() begin:number = 1;
  @Input() end:number = 20;
  @Input() delay:number = 0;
  @Input() isRepeatable:boolean = false;

  private subscription:Subscription;
  private sequence:Observable<number>;
  private error:string = null;
  private isCompleted:boolean = false;
  private items:Array<number> = [];

  constructor(private  sequenceService:SequenceService) {
    this.sequenceService.controlObservable = new Subject();
  }

  private initSequence():void {
    if(this.subscription) {
      this.stopSequence;
      this.error = null;
      this.isCompleted = false;
    }

    this.sequenceService.initSequence(this.begin, this.end, this.delay, this.isRepeatable);
    this.sequence = this.sequenceService.sequence;
  }

  private initSubscription():void {
    this.subscription = this.sequence.subscribe(
        item => this.items.push(item),
        error => this.error = error,
        () => this.isCompleted = true
    );
  }

  public startSequence():void {
    this.items = [];

    this.initSequence();
    this.initSubscription();
  }

  public stopSequence():void {
    debugger;
    this.sequenceService.controlObservable.complete();
  }

  ngOnInit() {
    this.startSequence()
  }
}
