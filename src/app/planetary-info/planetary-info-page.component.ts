import { Component, OnInit } from '@angular/core';
import { Planet, StarWarsService } from '../core/starwars.service';

// TODO: consider changeDetection: OnPush
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
      this.planets = planetsResponse.results.sort(this.sortAlphabeticallyByName);
    } catch {
      this.displayError = true;
    } finally {
      this.isLoading = false;
    }
  }

  private sortAlphabeticallyByName = (first: Planet, second: Planet): number => {
    if (first.name > second.name) {
      return 1;
    }
    
    if (first.name < second.name) {
      return -1;
    }

    return 0;
  }
}
