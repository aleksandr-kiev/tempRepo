import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MapService {
  api: string;
  private mapSource = new BehaviorSubject<any>(null);
  currentMap = this.mapSource.asObservable();

  constructor(private http: HttpClient) {
    this.api = 'api/im-maps/';
  }
  getMap(id) {
    return this.http.get(this.api + id)
      .map(query_result =>  {
        this.mapSource.next(query_result);
      });
  }
  setFirstMap(id) {
    this.http.get(this.api + id)
      .subscribe(query_result =>  {
        this.mapSource.next(query_result);
      });
  }
}
