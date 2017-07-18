import { Component, DoCheck, AfterContentInit, AfterContentChecked, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterContentChecked {
  title = 'app works!';
  private currentRank: number = 10;
  private inputValue: string;
  private showChild: boolean = false;
  @ViewChild(ChildComponent) child: ChildComponent;
  ngOnInit() {
    setTimeout(() => {
      this.showChild = true;
    },3000);
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called ",this.inputValue);
  }
  siblingEvent(event) {
    this.child.interaction();
  }
}
