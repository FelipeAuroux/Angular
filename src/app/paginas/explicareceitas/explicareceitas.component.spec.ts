import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicareceitasComponent } from './explicareceitas.component';

describe('ExplicareceitasComponent', () => {
  let component: ExplicareceitasComponent;
  let fixture: ComponentFixture<ExplicareceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplicareceitasComponent]
    });
    fixture = TestBed.createComponent(ExplicareceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
