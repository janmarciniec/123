import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {SecurityService} from "./SecurityService";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class isAuthGuard implements CanActivate{

  constructor(private securityService:SecurityService, private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return of(this.securityService.getIsAuth() ? true: this.router.parseUrl("/login"));
  }

}
