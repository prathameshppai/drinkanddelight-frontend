import { TestBed } from '@angular/core/testing';

import { SetExitDateService } from './set-exit-date.service';

describe('SetExitDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetExitDateService = TestBed.get(SetExitDateService);
    expect(service).toBeTruthy();
  });
});
