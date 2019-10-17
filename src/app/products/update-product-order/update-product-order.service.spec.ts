import { TestBed } from '@angular/core/testing';

import { UpdateProductOrderService } from './update-product-order.service';

describe('UpdateProductOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateProductOrderService = TestBed.get(UpdateProductOrderService);
    expect(service).toBeTruthy();
  });
});
