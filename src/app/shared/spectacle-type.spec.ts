import { TestBed } from '@angular/core/testing';

import { SpectacleType } from './spectacle-type';

describe('SpectacleType', () => {
  let service: SpectacleType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpectacleType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
