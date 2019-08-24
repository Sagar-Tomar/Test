import { Component, OnInit } from '@angular/core';
import { MinuteLogicService } from '../minute-logic.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

  htmlStr = "You are allowed to access because time minutes are not divided by 2. Cheers"
  constructor() { 
  }

  ngOnInit() {
  }

}
