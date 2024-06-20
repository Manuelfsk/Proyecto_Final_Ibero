import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapesComponent } from './scapes.component';

describe('ScapesComponent', () => {
  let component: ScapesComponent;
  let fixture: ComponentFixture<ScapesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScapesComponent]
    });
    fixture = TestBed.createComponent(ScapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
