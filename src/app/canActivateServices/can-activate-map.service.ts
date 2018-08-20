import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {MapService} from '../services/map.service';

@Injectable()
export class CanActivateMapService implements CanActivate {
  constructor(private mapService: MapService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.mapService.currentMap.map(result => {
      if (Boolean(result)) {
        return true;
      } else {
        this.router.navigateByUrl('/search-empty');
        return false;
      }
    });
  }
}

