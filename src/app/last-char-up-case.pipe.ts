import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastCharUpCase'
})
export class LastCharUpCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let strArr = value.trim().split("");
    strArr[strArr.length - 1] = strArr[strArr.length - 1].toUpperCase();
    return strArr.join("");
  }

}
