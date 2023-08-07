import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RecipiesService } from 'src/app/recipies.service';

@Injectable({ providedIn: 'root' })
export class AuthCanActivateOwner implements CanActivate {
  constructor(private recipiesService: RecipiesService ,private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    if (this.recipiesService.isOwner() == true) {
      console.log(this.recipiesService.isOwner());
      
      return true;
    } else {
      this.router.navigate(['/404']);
      return false
    }
  }
}
