import { TestBed } from '@angular/core/testing';

import { PlaceRawmaterialOrdersService } from './place-rawmaterial-orders.service';

describe('PlaceRawmaterialOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceRawmaterialOrdersService = TestBed.get(PlaceRawmaterialOrdersService);
    expect(service).toBeTruthy();
  });
});
