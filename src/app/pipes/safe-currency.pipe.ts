import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import * as _ from 'lodash';

@Pipe({
  name: 'safeCurrency'
})
export class SafeCurrencyPipe implements PipeTransform {
  constructor(private  currencyPipe: CurrencyPipe) {
  }

  transform(value: any, ...args: any[]): any {
    let [currencyCode, symbolDisplay, digits] = args;
    return _.isNumber(value) ? this.currencyPipe.transform(value, currencyCode, symbolDisplay, digits) : '';
  }
}

