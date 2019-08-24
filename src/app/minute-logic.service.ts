import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinuteLogicService {
  minBehavSub = new BehaviorSubject<any>(true)
  evenMin: boolean;
  counter = 0;
  interValId: any;
  timeOutId: any;
  emitChange() {
    this.minBehavSub.next(this.evenMin);
  }
  constructor() { }
  minLogic() {

    if (this.counter > 0) {
      clearTimeout(this.timeOutId);
      clearInterval(this.interValId);
    }
    let currMin = new Date().getMinutes();

    let currSec = new Date().getSeconds() * 1000;


    if (currMin % 2 === 0) {
      this.evenMin = true;
    } else {
      this.evenMin = false;
    }
    this.emitChange()
    this.interValId = setTimeout(() => {
      this.evenMin = !this.evenMin;
      this.emitChange();
      this.timeOutId = setInterval(() => {
        this.evenMin = !this.evenMin;
        this.emitChange();
      }, 60000);
    }, 60000 - currSec)
    this.counter++;

  }

}
