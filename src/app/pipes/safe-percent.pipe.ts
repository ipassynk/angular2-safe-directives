import {Pipe, PipeTransform} from '@angular/core';
import {PercentPipe} from '@angular/common';
import * as _ from 'lodash';

@Pipe({
  name: 'safePercent'
})
export class SafePercentPipe implements PipeTransform {
  constructor(private percentPipe: PercentPipe) {
  }

  transform(value: any, args?: any): any {
    return _.isNumber(value) ? this.percentPipe.transform(value, args) : '';
  }
}
