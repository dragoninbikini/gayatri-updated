import { TestBed } from '@angular/core/testing';

import { authInterceptorFn } from './auth-intercepter';

describe('AuthIntercepter', () => {
  let service: authInterceptorFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authInterceptorFn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
