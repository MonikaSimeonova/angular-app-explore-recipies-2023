import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from 'src/app/user/auth-user.service';

@Injectable({ providedIn: 'root' })
export class AuthCanActivate implements CanActivate {
  constructor(private authService: AuthUserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    if (this.authService.loggedInGuard) {
      return true;
    } else {
      this.router.navigate(['/404']);
      return false
    }
  }
}
