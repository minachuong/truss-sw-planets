import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  static UNKNOWN = 'unknown'; 
  
  // TODO: support pagination
  async getPlanets(): Promise<PlanetResponse> {
    const response = await fetch('https://swapi.dev/api/planets/');
    return response.json();
  }
}

export interface PlanetResponse {
  count: string;
  next: string;
  previous: string;
  results: Planet[]
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[]; // defensive approach
  films: string[];
  created: string;
  edited: string;
  url: string;
}