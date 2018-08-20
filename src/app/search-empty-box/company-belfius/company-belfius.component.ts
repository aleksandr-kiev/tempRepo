import { Component, OnInit } from '@angular/core';
import {BrandingService} from '../../services/branding.service';


@Component({
  selector: 'app-company-belfius',
  templateUrl: './company-belfius.component.html',
  styleUrls: ['./company-belfius.component.scss']
})
export class CompanyBelfiusComponent implements OnInit {
  public branding;

  constructor(private brandingService: BrandingService) {
    this.branding = {
      logo: undefined,
      splash1 : undefined
    };
  }

  ngOnInit() {
    this.brandingService.getBranding().subscribe(res => {
      if (res) {
        this.branding.logo = res['logoUrl'];
        this.branding.splash1 = res['splash1Url'];
      }
    });
  }
}
