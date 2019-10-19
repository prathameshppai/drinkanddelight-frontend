import { TestBed } from '@angular/core/testing';

import { DisplayRawmaterialOrdersService } from './display-rawmaterial-orders.service';

describe('DisplayRawmaterialOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayRawmaterialOrdersService = TestBed.get(DisplayRawmaterialOrdersService);
    expect(service).toBeTruthy();
  });
});
