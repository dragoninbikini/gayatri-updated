import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Services } from '../authservice/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private services: Services, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const user = this.services.getCurrentUser();
    const expectedRoles: string[] | undefined = route.data['roles'];


    if (!user) {
      return this.router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },
      });
    }


    if (!expectedRoles || expectedRoles.length === 0) {
      return true;
    }


    if (expectedRoles.includes(user.role)) {
      return true;
    }


    return this.router.createUrlTree(['/unauthorized']); // You can create this route/page
  }
}
