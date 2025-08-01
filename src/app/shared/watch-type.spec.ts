import { TestBed } from '@angular/core/testing';

import { WatchType } from './watch-type';

describe('WatchType', () => {
  let service: WatchType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
