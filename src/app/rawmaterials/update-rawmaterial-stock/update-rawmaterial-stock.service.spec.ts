import { TestBed } from '@angular/core/testing';

import { UpdateRawmaterialStockService } from './update-rawmaterial-stock.service';

describe('UpdateRawmaterialStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateRawmaterialStockService = TestBed.get(UpdateRawmaterialStockService);
    expect(service).toBeTruthy();
  });
});
