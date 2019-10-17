import { TestBed } from '@angular/core/testing';

import { SetProcessDateService } from './set-process-date.service';

describe('SetProcessDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetProcessDateService = TestBed.get(SetProcessDateService);
    expect(service).toBeTruthy();
  });
});
