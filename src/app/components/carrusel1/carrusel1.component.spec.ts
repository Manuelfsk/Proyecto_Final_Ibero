import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrusel1Component } from './carrusel1.component';

describe('Carrusel1Component', () => {
  let component: Carrusel1Component;
  let fixture: ComponentFixture<Carrusel1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carrusel1Component]
    });
    fixture = TestBed.createComponent(Carrusel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
