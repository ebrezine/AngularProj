import { TestBed } from '@angular/core/testing';

import { FileClaimService } from './file-claim.service';

describe('FileClaimService', () => {
  let service: FileClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
