import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from './starwars.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StarWarsService
  ]
})
export class CoreModule { }
