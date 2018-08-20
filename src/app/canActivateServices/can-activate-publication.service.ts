import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {MapService} from '../services/map.service';

@Injectable()
export class CanActivatePublicationService implements CanActivate {
  constructor(private publicationService: MapService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.publicationService.currentMap.map(result => {
      if (Boolean(result)) {
        return true;
      } else {
        this.router.navigateByUrl('/search-empty');
        return false;
      }
    });
  }
}

