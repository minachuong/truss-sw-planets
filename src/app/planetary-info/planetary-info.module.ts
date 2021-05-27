import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetaryInfoPageComponent } from './planetary-info-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PlanetaryInfoPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    SharedModule
  ]
})
export class PlanetaryInfoModule { }
