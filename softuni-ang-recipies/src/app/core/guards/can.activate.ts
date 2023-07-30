import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from 'src/app/user/auth-user.service';

@Injectable({ providedIn: 'root' })
export class AuthCanActivate implements CanActivate {
  constructor(private authService: AuthUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    if (this.authService.isLogged() == true) {
      return true;
    } else {
      return false;
    }
  }
}
