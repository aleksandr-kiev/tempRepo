import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SearchService} from './search.service';

@Injectable()
export class AccountService {
  api: string;
  private accountSource = new BehaviorSubject<any>(null);
  public currentAccount = this.accountSource.asObservable();

  constructor(private http: HttpClient) {
    this.api = 'api/account';
  }
  getAccount() {
    return this.http.get(this.api)
      .map(query_result =>  {
        this.accountSource.next(query_result);
        return query_result;
      });
  }
}
