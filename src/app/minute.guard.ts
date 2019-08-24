import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MinuteLogicService } from './minute-logic.service';

@Injectable({
  providedIn: 'root'
})
export class MinuteGuard implements CanActivate {
  constructor(private minuteLogicService: MinuteLogicService){
    this.minuteLogicService.minLogic();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !this.minuteLogicService.minBehavSub.value
  }
}
