/*===========================
; Title: Sign-in Guard
; Author: George Henderson
; Date: 9 July 2021
; Description: Implements canActivate, checking the user's cookies for permission.
;===========================*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router : Router, private cookieService : CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const sessionUser = this.cookieService.get('session_user');

      if (sessionUser) {
        return true;
      }
      else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
