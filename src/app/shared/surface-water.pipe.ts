import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surfaceWater'
})
export class SurfaceWaterPipe implements PipeTransform {

  transform(value: string, diameter: string): string {
    if (isNaN(+value) || isNaN(+diameter)) {
      // TODO: consider throwing exception
      return value;
    }
    
    const planetRadius = +diameter / 2;
    
    return Math.round(this.getSurfaceAreaOfSphere(planetRadius) * +value).toString();
  }

  private getSurfaceAreaOfSphere(radius: number): number {
    return 4 * Math.PI * Math.pow(radius, 2);
  }
}
