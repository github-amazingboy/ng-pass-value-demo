import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brother1Component } from './brother1.component';

describe('Brother1Component', () => {
  let component: Brother1Component;
  let fixture: ComponentFixture<Brother1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Brother1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Brother1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
