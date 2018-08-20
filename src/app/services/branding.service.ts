import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class BrandingService {
  api: string;
  private brandingSource = new BehaviorSubject<any>(null);
  public currentBranding = this.brandingSource.asObservable();

  constructor(private http: HttpClient) {
    this.api = 'api/mobile/settings/avatar';
  }
  getBranding () {
    return this.http.get(this.api);
  }
  initBranding() {
    return this.http.get(this.api)
      .map(branding => {
        console.log(branding);
        this.brandingSource.next(branding);
        return branding;
      });
  }
}
