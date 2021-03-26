import { TestBed } from '@angular/core/testing';

import { HcocoService } from './hcoco.service';

describe('HcocoService', () => {
  let service: HcocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HcocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
