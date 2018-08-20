import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {MapService} from '../../services/map.service';
import {PublicationService} from '../../services/publication.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {
  map: any;

  constructor(private mapService: MapService, private pub: PublicationService, private el: ElementRef) {
    this.map = {};
  }

  ngOnInit() {
    this.mapService.currentMap.subscribe(map => this.map = map);
    }
}
