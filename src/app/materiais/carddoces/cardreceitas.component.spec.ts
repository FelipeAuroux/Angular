import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardreceitasComponent } from './cardreceitas.component';

describe('CardreceitasComponent', () => {
  let component: CardreceitasComponent;
  let fixture: ComponentFixture<CardreceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardreceitasComponent]
    });
    fixture = TestBed.createComponent(CardreceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
