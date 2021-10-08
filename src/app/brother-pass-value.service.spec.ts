import { TestBed } from '@angular/core/testing';

import { BrotherPassValueService } from './brother-pass-value.service';

describe('BrotherPassValueService', () => {
  let service: BrotherPassValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrotherPassValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
