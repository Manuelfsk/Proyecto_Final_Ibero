import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesCarComponent } from './notificaciones-car.component';

describe('NotificacionesCarComponent', () => {
  let component: NotificacionesCarComponent;
  let fixture: ComponentFixture<NotificacionesCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacionesCarComponent]
    });
    fixture = TestBed.createComponent(NotificacionesCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
