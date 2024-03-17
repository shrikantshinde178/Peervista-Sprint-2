import { TestBed } from '@angular/core/testing';

import { PolicyDecisionsService } from './policy-decisions.service';

describe('PolicyDecisionsService', () => {
  let service: PolicyDecisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyDecisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
