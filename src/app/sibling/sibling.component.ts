import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  @Output() siblingevent : EventEmitter<any> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
     setTimeout(() => {
       this.siblingevent.emit('from sibling')
     }, 5000);
  }

}
