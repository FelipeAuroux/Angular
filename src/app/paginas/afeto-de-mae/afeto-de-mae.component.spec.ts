import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfetoDeMaeComponent } from './afeto-de-mae.component';

describe('AfetoDeMaeComponent', () => {
  let component: AfetoDeMaeComponent;
  let fixture: ComponentFixture<AfetoDeMaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfetoDeMaeComponent]
    });
    fixture = TestBed.createComponent(AfetoDeMaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
