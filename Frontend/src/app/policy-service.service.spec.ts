import { TestBed } from '@angular/core/testing';

import { PolicyService } from './policy-service.service';

describe('PolicyServiceService', () => {
  let service: PolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
