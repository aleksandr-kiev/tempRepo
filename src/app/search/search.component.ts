import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutocompleteService} from '../services/autocomplete.service';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {CookieService} from '../services/cookie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AutocompleteService]
})
export class SearchComponent implements OnInit {

  searchTerm: FormControl = new FormControl();

  searchResult: Array<string>;
  value: string;
  public showRecent: boolean;

  @ViewChild('searchInput', { read: MatAutocompleteTrigger }) autoComplete: MatAutocompleteTrigger;

  constructor(private autocompleteService: AutocompleteService, private searchService: SearchService, private router: Router,
               private cookiesService: CookieService) {
    this.showRecent = true;
    this.searchTerm.valueChanges
      .debounceTime(400)
      .subscribe(data => {
        if (data) {
          this.showRecent = false;
          this.autocompleteService.autocomplete(this.autocompleteParams(data))
            .subscribe(response => {
              this.searchResult = response;
          });
        }
      });
    this.value = this.searchService.current_query;
  }
  ngOnInit () {
    this.searchResult = this.cookiesService.getrecentQueries();
  }

  autocompleteParams(query) {
    let param;
    switch (this.router.url) {
      case '/search-result/all' :
        param = new HttpParams()
          .set('text', query)
          .set('isMap', 'true')
          .set('isDocument', 'true')
          .set('isBlock', 'true');
        break;
      case '/search-result/blocks' :
        param = new HttpParams()
          .set('text', query)
          .set('isMap', 'false')
          .set('isDocument', 'false')
          .set('isBlock', 'true');
        break;
      case '/search-result/maps' :
        param = new HttpParams()
          .set('text', query)
          .set('isMap', 'true')
          .set('isDocument', 'false')
          .set('isBlock', 'false');
        break;
      case '/search-result/documents' :
        param = new HttpParams()
          .set('text', query)
          .set('isMap', 'false')
          .set('isDocument', 'true')
          .set('isBlock', 'false');
        break;
        default :
          param = new HttpParams()
            .set('text', query)
            .set('isMap', 'true')
            .set('isDocument', 'true')
            .set('isBlock', 'true');
        break;
    }
    return param;
  }

  clearResults(): void {
    this.searchResult = this.cookiesService.getrecentQueries();
    this.searchService.clearQuery();
    this.value = '';
    this.router.navigateByUrl('/search-empty');
  }

  optionSearch(event: MatAutocompleteSelectedEvent): void {
    this.autoComplete.closePanel();
    this.searchService.changeQuery(this.searchTerm.value).subscribe(response => {
      if (!this.router.isActive('/search-result', false)) {
        this.router.navigateByUrl('/search-result');
      }
    });
  }
}
