import { TestBed } from '@angular/core/testing';

import { WarenkorbServiceService } from './warenkorb-service.service';

describe('WarenkorbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarenkorbServiceService = TestBed.get(WarenkorbServiceService);
    expect(service).toBeTruthy();
  });
});
