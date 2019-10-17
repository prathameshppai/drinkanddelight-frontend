import { TestBed } from '@angular/core/testing';

import { UpdateRawmaterialOrderService } from './update-rawmaterial-order.service';

describe('UpdateRawmaterialOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateRawmaterialOrderService = TestBed.get(UpdateRawmaterialOrderService);
    expect(service).toBeTruthy();
  });
});
