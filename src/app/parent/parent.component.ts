import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userName:string = "hello hoho"

  @ViewChild('c2',{static:true})
  ccc2!:Child2Component
  getByID(){
    console.log(this.ccc2.uName)
    this.ccc2.uName = "张三"
  }
  constructor() { }

  ngOnInit(): void {
  }

  modifyUserName($event:any): void {
    console.log($event)
    this.userName = $event
  }


}
