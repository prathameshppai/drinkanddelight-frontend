import { TestBed } from '@angular/core/testing';

import { PlaceProductOrderService } from './place-product-order.service';

describe('PlaceProductOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceProductOrderService = TestBed.get(PlaceProductOrderService);
    expect(service).toBeTruthy();
  });
});
