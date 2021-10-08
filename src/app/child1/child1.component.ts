import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  userInput:string = ""
  


  @Output()
  changeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doClick(){
    console.log(this.userInput)
    this.changeEvent.emit(this.userInput)
  }
}
