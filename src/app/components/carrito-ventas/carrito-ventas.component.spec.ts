import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoVentasComponent } from './carrito-ventas.component';

describe('CarritoVentasComponent', () => {
  let component: CarritoVentasComponent;
  let fixture: ComponentFixture<CarritoVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoVentasComponent]
    });
    fixture = TestBed.createComponent(CarritoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
