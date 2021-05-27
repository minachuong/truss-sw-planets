import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousands'
})
export class ThousandsPipe implements PipeTransform {
  // formats so that spaces demarcate 1000's
  // ex. 1000 --> 1 000
  // ex. 10000000 --> 10 000 000
  // ex. -100000 --> -100 000 

  transform(value: string): string {
    if (isNaN(+value) || (+value >= -999 && +value <= 999)) {
      // TODO: consider throwing exception for NaN value
      return value;
    }

    const isNegative = +value < -999;

    const characters = value.split('');

    if (isNegative) {
      characters.shift();
    }

    for (let i = characters.length; i > 0; i -= 3) {
      characters.splice(i, 0, ' ');
    }

    if (isNegative) {
      characters.splice(0, 0, '-');
    }

    return characters.join('');
  }
}
