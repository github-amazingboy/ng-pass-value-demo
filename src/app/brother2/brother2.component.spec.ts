import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brother2Component } from './brother2.component';

describe('Brother2Component', () => {
  let component: Brother2Component;
  let fixture: ComponentFixture<Brother2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Brother2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Brother2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
