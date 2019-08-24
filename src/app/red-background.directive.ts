import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MinuteLogicService } from './minute-logic.service';

@Directive({
  selector: '[appRedBackground]'
})
export class RedBackgroundDirective implements OnInit {

  constructor(private el: ElementRef, private minuteLogicService: MinuteLogicService) {
    this.minuteLogicService.minLogic();
  }

  ngOnInit() {
    this.minuteLogicService.minBehavSub.subscribe(evenMin => {
      if (evenMin) {
        this.el.nativeElement.style.backgroundColor = 'red';
      } else {
        this.el.nativeElement.style.backgroundColor = 'white';
      }
    })
  }
}
