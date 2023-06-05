import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsalgadosComponent } from './cardsalgados.component';

describe('CardsalgadosComponent', () => {
  let component: CardsalgadosComponent;
  let fixture: ComponentFixture<CardsalgadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsalgadosComponent]
    });
    fixture = TestBed.createComponent(CardsalgadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
