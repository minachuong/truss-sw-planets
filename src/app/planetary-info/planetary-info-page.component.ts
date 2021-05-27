import { Component, OnInit } from '@angular/core';
import { Planet, StarWarsService } from '../core/starwars.service';

@Component({
  selector: 'planetary-info-page',
  templateUrl: './planetary-info-page.component.html',
  styleUrls: ['./planetary-info-page.component.scss']
})
export class PlanetaryInfoPageComponent implements OnInit {

  isLoading = true;
  displayError = false;
  planets: Planet[] = [];

  constructor(private starWarsService: StarWarsService) { }

  async ngOnInit(): Promise<void> {
    try {
      const planetsResponse = await this.starWarsService.getPlanets();
      this.planets = planetsResponse.results;
    } catch {
      this.displayError = true;
    } finally {
      this.isLoading = false;
    }
  }

}
