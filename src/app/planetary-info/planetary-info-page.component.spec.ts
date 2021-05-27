import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  describe('On page load', () => {
    it('displays a loading message', () => {
      const loadingMessage = fixture.debugElement.query(By.css('#loading'));
      expect(loadingMessage.nativeElement.innerHTML).toBe('Retrieving planetary information...');
    });
  });


  describe('When planetary info is successfully retrieved', () => {
    beforeEach(() => {
      // mock successful API response
    });

    it('displays a table with planetary data', () => {
      const headerElements = fixture.debugElement.queryAll(By.css('th.mc-table-cell'));
      expect(headerElements.length).toBe(6);

      const expectedHeaders = ['Name', 'Climate', '# of Residents', 'Terrain(s)', 'Population', 'Surface Area Cover By Water (sq. km)'];
      headerElements.forEach((element, index) => {
        expect(element.nativeElement.innerHTML).toBe(expectedHeaders[index]);
      });
      // TODO: more assertions on expected data presentation using actual pipes instead of mocked pipes
    });
  });

  describe('When planetary info is fails to be retrieved', () => {
    beforeEach(() => {
      // mock failed API response
    });

    it('displays an error message', () => {
      const loadingMessage = fixture.debugElement.query(By.css('#errorMessage'));
      expect(loadingMessage.nativeElement.innerHTML).toBe('Moff Gideon has intercepted your request!');
    });
  });
});
