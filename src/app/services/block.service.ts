import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SearchService} from './search.service';

@Injectable()
export class BlockService {
  host: string;
  api: string;
  private blockSource = new BehaviorSubject<any>(null);
  currentBlock = this.blockSource.asObservable();

  constructor(private http: HttpClient) {
    this.api = 'api/im-blocks/';
  }
  getBlock(id) {
    const param = new HttpParams()
      .set('id', id);
    return this.http.get(this.api + id)
      .map(query_result =>  {
        this.blockSource.next(query_result);
      });
  }
  setFirstBlock(id) {
    const param = new HttpParams()
      .set('id', id);
    this.http.get(this.api + id)
      .subscribe(query_result =>  {
        this.blockSource.next(query_result);
      });
  }
}
