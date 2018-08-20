import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {BlockService} from '../services/block.service';

@Injectable()
export class CanActivateBlockService implements CanActivate {
  constructor(private blockService: BlockService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.blockService.currentBlock.map(result => {
      if (Boolean(result)) {
        return true;
      } else {
        this.router.navigateByUrl('/search-empty');
        return false;
      }
    });
  }
}
