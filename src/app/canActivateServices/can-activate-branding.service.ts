import { Injectable } from '@angular/core';
import {BrandingService} from '../services/branding.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class CanActivateBrandingService {

  constructor(private brandingService: BrandingService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.brandingService.currentBranding
      .map(res => {
        if (Boolean(res)) {
          return true;
        } else {
          this.brandingService.initBranding();
          return true;
        }
      });
  }
}
