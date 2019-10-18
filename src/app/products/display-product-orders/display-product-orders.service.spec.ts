import { TestBed } from '@angular/core/testing';
import { DisplayProductOrdersService } from './display-product-orders.service';

describe('DisplayProductOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayProductOrdersService = TestBed.get(DisplayProductOrdersService);
    expect(service).toBeTruthy();
  });
});
