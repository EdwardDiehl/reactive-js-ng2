import { Component, OnInit } from '@angular/core';
import { SequenceService } from "../shared/sequence.service";

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  constructor(private _sequenceService: SequenceService) {
  }

  ngOnInit() {
  }

}
