import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrotherPassValueService {

  private nameSubject = new Subject<string>();

  constructor() { }

  listener = this.nameSubject.asObservable()

  emit(value: string){
    this.nameSubject.next(value);
  }

}
