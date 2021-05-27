import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnknownPipe } from './unknown.pipe';
import { SurfaceWaterPipe } from './surface-water.pipe';
import { ThousandsPipe } from './thousands.pipe';



@NgModule({
  declarations: [
    UnknownPipe,
    SurfaceWaterPipe,
    ThousandsPipe
  ],
  exports: [
    UnknownPipe,
    SurfaceWaterPipe,
    ThousandsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
