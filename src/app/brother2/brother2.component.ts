import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrotherPassValueService } from '../brother-pass-value.service';

@Component({
  selector: 'app-brother2',
  templateUrl: './brother2.component.html',
  styleUrls: ['./brother2.component.css']
})
export class Brother2Component implements OnInit , OnDestroy {

  psv:string = ""
  private subscription:Subscription = new Subscription();
  constructor(private bpvs:BrotherPassValueService) { }

  ngOnInit(): void {
    this.subscription = this.bpvs.listener.subscribe(value=>{
      console.log("传的值是",value);
      this.psv = value;
    })
  }

  ngOnDestroy(): void {
    if(this.bpvs){
      this.subscription.unsubscribe()
    }
  }

}
