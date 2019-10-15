import { TestBed } from '@angular/core/testing';

import { TrackProductOrderService } from './track-product-order.service';

describe('TrackProductOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackProductOrderService = TestBed.get(TrackProductOrderService);
    expect(service).toBeTruthy();
  });
});
