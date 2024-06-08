import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagesComponent } from './collages.component';

describe('CollagesComponent', () => {
  let component: CollagesComponent;
  let fixture: ComponentFixture<CollagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollagesComponent]
    });
    fixture = TestBed.createComponent(CollagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
