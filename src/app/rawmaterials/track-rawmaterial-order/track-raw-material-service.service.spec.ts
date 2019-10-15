import { TestBed } from '@angular/core/testing';

import { TrackRawMaterialServiceService } from './track-raw-material-service.service';

describe('TrackRawMaterialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackRawMaterialServiceService = TestBed.get(TrackRawMaterialServiceService);
    expect(service).toBeTruthy();
  });
});
