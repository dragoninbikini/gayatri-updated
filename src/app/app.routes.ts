import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home').then((m) => m.Home);
    },
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home').then((m) => m.Home);
    },
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./pages/login/login').then((m) => m.Login);
    },
  },
  {
    path: 'signup',
    loadComponent: () => {
      return import('./pages/signup/signup').then((m) => m.Signup);
    },
  },
  {
    path: 'watches',
    loadComponent: () =>
      import('./pages/watches/watches').then((m) => m.Watches),
  },

  {
    path: 'watches/shop',
    loadComponent: () =>
      import('./pages/watches/shop/shop').then((m) => m.Shop),
  },
  
  {
    path: 'watches/:id',
    loadComponent: () =>
      import('./pages/watches/watch-detail/watch-detail').then(
        (m) => m.WatchDetail
      ),
  },

  {
    path: 'spectacles',
    loadComponent: () => {
      return import('./pages/spectacles/spectacles').then((m) => m.Spectacles);
    },
  },
    {
    path: 'watches/shop',
    loadComponent: () =>
      import('./pages/watches/shop/shop').then((m) => m.Shop),
  },
  
  {
    path: 'watches/:id',
    loadComponent: () =>
      import('./pages/watches/watch-detail/watch-detail').then(
        (m) => m.WatchDetail
      ),
  },
    {
    path: 'spectacles/shop',
    loadComponent: () =>
      import('./pages/spectacles/shop/shop').then((m) => m.Shop),
  },
  {
   path: 'spectacles/booking',
   loadComponent: () => 
     import('./pages/spectacles/booking/booking').then((m) => m.Booking),
  },
  
  {
    path: 'spectacles/:id',
    loadComponent: () =>
      import('./pages/spectacles/specs-detail/specs-detail').then(
        (m) => m.SpecsDetail
      ),
  },
  {
    path: 'about',
    loadComponent: () => {
      return import('./pages/about/about').then((m) => m.About);
    },
  },
];
