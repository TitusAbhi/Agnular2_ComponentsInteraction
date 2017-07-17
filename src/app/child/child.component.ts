import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() currentrank: number;
  @Output() changerank = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log("set timeout");
      this.changerank.emit(20);
    },5000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
