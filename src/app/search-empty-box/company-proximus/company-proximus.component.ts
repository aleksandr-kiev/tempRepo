import {Component,  OnInit} from '@angular/core';
import {BrandingService} from '../../services/branding.service';

@Component({
  selector: 'app-company-proximus',
  templateUrl: './company-proximus.component.html',
  styleUrls: ['./company-proximus.component.scss']
})
export class CompanyProximusComponent implements OnInit {
  public branding;
  constructor(
    private brandingService: BrandingService) {
    this.branding = {
      logo: undefined,
      splash2 : undefined
    };
  }

  ngOnInit() {
    this.brandingService.getBranding().subscribe(res => {
      if (res) {
        this.branding.logo = res['logoUrl'];
        this.branding.splash2 = res['splash2Url'];
      }
    });
  }
}
