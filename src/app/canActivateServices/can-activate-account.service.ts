import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AccountService} from '../services/account.service';

@Injectable()
export class CanActivateAccountService implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.accountService.getAccount().map(result => {
      if (Boolean(result)) {
        return true;
      } else {
        // this.router.navigateByUrl('/search-empty');
        return false;
      }
    });
  }
}

