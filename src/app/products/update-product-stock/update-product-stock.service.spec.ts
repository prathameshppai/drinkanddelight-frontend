import { TestBed } from '@angular/core/testing';

import { UpdateProductStockService } from './update-product-stock.service';

describe('UpdateProductStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateProductStockService = TestBed.get(UpdateProductStockService);
    expect(service).toBeTruthy();
  });
});
