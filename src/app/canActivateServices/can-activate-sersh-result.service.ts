import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SearchService} from '../services/search.service';

@Injectable()
export class CanActivateSearchResultService implements CanActivate {
  constructor(private search: SearchService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.search.currentQuery.map(result => {
      if (Boolean(result)) {
        return true;
      } else {
        this.router.navigateByUrl('/search-empty');
        return false;
      }
    });
  }
}
