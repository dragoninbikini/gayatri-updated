import { Routes } from '@angular/router';
import { Admin } from './admin/admin/admin';
import { AuthGuard } from './guards/auth-guard';
import { manage } from './admin/manage/manage';
import { Dashboard } from './admin/dashboard/dashboard';

export const routes: Routes = [
{
  path: 'home',
  loadComponent: () => import('./pages/home/home').then(m => m.Home)
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
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
{
  path: 'admin',
  canActivate: [AuthGuard],
  data: { roles: ['Admin'] },
  loadComponent: () => import("./admin/admin/admin").then((m) => m.Admin),
  children: [
    {
      path: '',
      component: Dashboard
    },
    {
      path: 'manage',
      component: manage
    }
  ]
},
{
  path: 'user',
  canActivate: [AuthGuard],
  children: [
    {
      path: 'orders',
      loadComponent: () =>
        import('./pages/user/orders/orders').then((m) => m.Orders),
    },
    {
      path: 'account',
      loadComponent: () =>
        import('./pages/user/account/account').then((m) => m.Account),
    },
    {
      path: 'wishlist',
      loadComponent: () =>
        import('./pages/user/wishlist/wishlist').then((m) => m.Wishlist),
    },
    {
      path: 'payment',
      loadComponent: () =>
        import('./pages/user/payment/payment').then((m) => m.Payment),
    },
    {
      path: 'settings',
      loadComponent: () =>
        import('./pages/user/settings/settings').then((m) => m.Settings),
    },
  ],
},
{
  path: 'checkout',
  loadComponent: () => {
    return import('./pages/checkout/checkout').then((m) => m.Checkout)
  }
}


];
