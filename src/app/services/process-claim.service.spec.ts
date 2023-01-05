import { TestBed } from '@angular/core/testing';

import { ProcessClaimService } from './process-claim.service';

describe('ProcessClaimService', () => {
  let service: ProcessClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
