import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {MapService} from '../../services/map.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss']
})
export class MapsListComponent implements OnInit {
  maps: Array<any>;
  constructor(private searchService: SearchService, private mapService: MapService, private router: Router) {
    this.maps = [];
  }

  goToMap(id) {
    this.mapService.getMap(id).subscribe(response => {
      this.router.navigateByUrl('search-result-item-box/map');
    });
  }

  ngOnInit() {
    this.searchService.currentQuery
      .subscribe(query => {
        this.maps = query.maps;
      });
  }

}
