import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaryInfoPageComponent } from './planetary-info-page.component';

describe('PlanetaryInfoPageComponent', () => {
  let component: PlanetaryInfoPageComponent;
  let fixture: ComponentFixture<PlanetaryInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetaryInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaryInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
