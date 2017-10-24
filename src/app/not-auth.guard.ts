import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
/**
 * Created by Ron on 03/10/2016.
 */
@Injectable()

export class NotAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private localStorage: LocalStorageService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    if (!this.auth.isAuthenticated()) { return true; }
    console.log('authenticated navigating to home');

    const session = JSON.parse(this.localStorage.get('session'));

    this.router.navigateByUrl('pages/inicio/actividades');

    return false;
  }
}
