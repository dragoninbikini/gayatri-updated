import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Services } from './services';

export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  const authService = inject(Services);
  const token = authService.getToken();

  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },

  });
  console.log('Auth Token:', token);

  return next(cloned);
};
