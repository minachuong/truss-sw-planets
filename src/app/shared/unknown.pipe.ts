import { Pipe, PipeTransform } from '@angular/core';
import { StarWarsService } from '../core/starwars.service';

@Pipe({
  name: 'unknown'
})
export class UnknownPipe implements PipeTransform {

  transform(value: string): string {
    return value === StarWarsService.UNKNOWN 
      ? '?' 
      : value;
  }

}
