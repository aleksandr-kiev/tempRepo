import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Location } from '@angular/common';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search-result-item-box',
  templateUrl: './search-result-item-box.component.html',
  styleUrls: ['./search-result-item-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultItemBoxComponent implements OnInit {
  search_target: string;

  constructor(private searchService: SearchService, private location: Location) { }
  back() {
    this.location.back();
  }

  ngOnInit() {
    this.search_target = this.searchService.current_query;
  }

}
