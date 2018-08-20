import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-share-document',
  templateUrl: './share-document.component.html',
  styleUrls: ['./share-document.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShareDocumentComponent implements OnInit {

  public loading: number;
  public location: Location;

  constructor(private router: Router,  location: Location) {
    this.loading = 0;
    this.location = location;
  }
  pendingSimulation() {
    this.loading = 1;
    setTimeout(() => this.loading = 2, 1500);
    setTimeout(() => this.location.back(), 2500);
  }

  ngOnInit() {
  }

}
