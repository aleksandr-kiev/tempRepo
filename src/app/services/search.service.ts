import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {BlockService} from './block.service';
import {MapService} from './map.service';
import {PublicationService} from './publication.service';
import {SearchObject} from '../const/search-object';
@Injectable()

export class SearchService {
  public searchResults: any;
  public search: string;
  public current_page: number;
  public current_query: string;
  private querySource = new BehaviorSubject<any>(null);
  currentQuery = this.querySource.asObservable();
  constructor(private http: HttpClient, private cookieService: CookieService, private blockService: BlockService,
              private mapService: MapService, private publicationService: PublicationService) {
    this.search = 'api/_search/all';
    this.current_page = 1;
    this.current_query = null;
    this.searchResults = {
      blocks: [],
      maps: [],
      documents: []
    };
  }
  changeQuery(query_String: string) {
    const param = new HttpParams()
      .set('text', query_String)
      .set('page', '1');
    return this.http.get(this.search, {params: param})
      .map((query_result: SearchObject) =>  {
        this.querySource.next(query_result);
        this.searchResults = query_result;
        this.current_query = query_String;
        this.current_page = 1;
        this.cookieService.pushToRecentQuery(query_String);
        if (query_result.blocks.length) {
          this.blockService.setFirstBlock(this.setStartBlock(query_result));
        }
        if (query_result.maps.length) {
          this.mapService.setFirstMap(this.setStartMap(query_result));
        }
        if (query_result.documents.length) {
          this.publicationService.setFirstPublication(this.setStartPublication(query_result));
        }
        });
  }
  clearQuery(): void {
    this.current_query = null;
    this.querySource.next({
      blocks: [],
      maps: [],
      documents: []
    });
  }
  setStartBlock(observ) {
    return observ.blocks[0].id;
  }
  setStartMap(observ) {
    return observ.maps[0].id;
  }
  setStartPublication(observ) {
    return observ.documents[0].id;
  }

  nextQuery() {
    const param = new HttpParams()
      .set('text', this.current_query)
      .set('page', (this.current_page + 1).toString());
    return this.http.get(this.search, {params: param})
      .map(query_result =>  {
        this.changeSearch(query_result);
        this.current_page++;
      });
  }
  changeSearch (newResults) {
    this.searchResults.blocks = this.searchResults.blocks.concat(newResults.blocks);
    this.searchResults.maps = this.searchResults.maps.concat(newResults.maps);
    this.searchResults.documents = this.searchResults.documents.concat(newResults.documents);
    this.querySource.next(this.searchResults);
  }
}

