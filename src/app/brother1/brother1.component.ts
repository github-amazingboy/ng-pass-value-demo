import { Component, OnInit } from '@angular/core';
import { BrotherPassValueService } from '../brother-pass-value.service';

@Component({
  selector: 'app-brother1',
  templateUrl: './brother1.component.html',
  styleUrls: ['./brother1.component.css']
})
export class Brother1Component implements OnInit {

  name:string = ""

  constructor(private bpvs:BrotherPassValueService) { }

  ngOnInit(): void {
  }

  b1Click(){
    console.log(this.name);
    this.bpvs.emit(this.name)
  }

}
