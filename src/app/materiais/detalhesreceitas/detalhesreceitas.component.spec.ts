import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesreceitasComponent } from './detalhesreceitas.component';

describe('DetalhesreceitasComponent', () => {
  let component: DetalhesreceitasComponent;
  let fixture: ComponentFixture<DetalhesreceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesreceitasComponent]
    });
    fixture = TestBed.createComponent(DetalhesreceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
