import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { register } from 'swiper/element/bundle';
import { provideRouter } from '@angular/router';
import { authInterceptorFn } from './app/authservice/auth-intercepter';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

register();

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(
      withInterceptors([authInterceptorFn])
    ),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
