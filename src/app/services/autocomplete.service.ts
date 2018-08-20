import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class Resp {
  results: Array<string>;
}

@Injectable()
export class AutocompleteService {
  host: string;
  auto: string;
  search: string;
  constructor(private http: HttpClient) {
    this.auto = 'api/_search/autocompletion';
  }

  autocomplete(param: HttpParams): Observable<any> {
    return this.http.get(this.auto, {params: param}).map(result => {
      return this.clearResult(result);
    });
  }

  clearResult (array) {
    let result = [];
    array.forEach(function(element, index){
      let i = 0;
      let str = element;
      do {
        str = str.replace('<em>', '');
        str = str.replace('</em>', '');
        i++;
      } while (i <= 3);
      result[index] = str;
    });
    return result;
  }
}
