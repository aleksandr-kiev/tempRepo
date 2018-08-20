import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search-result-box',
  templateUrl: './search-result-box.component.html',
  styleUrls: ['./search-result-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultBoxComponent implements OnInit {
  constructor(private searchService: SearchService) { }

  nextQuery(e) {
    this.searchService.nextQuery();
  }

  ngOnInit() {
  }

}
