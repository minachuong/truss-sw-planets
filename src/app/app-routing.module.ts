import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetaryInfoPageComponent } from './planetary-info/planetary-info-page.component';

const routes: Routes = [
  { path: '**', component: PlanetaryInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
