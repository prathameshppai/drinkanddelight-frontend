import { TestBed } from '@angular/core/testing';

import { DisplaySupplierDetailsService } from './display-supplier-details.service';

describe('DisplaySupplierDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaySupplierDetailsService = TestBed.get(DisplaySupplierDetailsService);
    expect(service).toBeTruthy();
  });
});
