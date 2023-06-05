import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagmaeComponent } from './pagmae.component';

describe('PagmaeComponent', () => {
  let component: PagmaeComponent;
  let fixture: ComponentFixture<PagmaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagmaeComponent]
    });
    fixture = TestBed.createComponent(PagmaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
