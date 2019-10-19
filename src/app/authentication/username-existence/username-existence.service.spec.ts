import { TestBed } from '@angular/core/testing';
import { UsernameExistenceService } from './username-existence.service';

describe('UsernameExistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernameExistenceService = TestBed.get(UsernameExistenceService);
    expect(service).toBeTruthy();
  });
});
