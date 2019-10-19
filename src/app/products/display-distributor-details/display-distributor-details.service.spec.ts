import { TestBed } from '@angular/core/testing';

import { DisplayDistributorDetailsService } from './display-distributor-details.service';

describe('DisplayDistributorDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayDistributorDetailsService = TestBed.get(DisplayDistributorDetailsService);
    expect(service).toBeTruthy();
  });
});
