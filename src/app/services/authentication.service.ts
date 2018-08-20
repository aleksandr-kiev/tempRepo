import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  api: string;
  constructor(private http: HttpClient) {
    this.api = 'api/authentication';
  }
  signIn(credentials)  {
    const data = 'j_username=' + encodeURIComponent(credentials.username) +
      '&j_password=' + encodeURIComponent(credentials.password) +
      '&remember-me=true' + '&submit=Login';
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post(this.api, data, httpOptions )
      .map(query_result =>  {
        window.localStorage.setItem('isAuthenticated', 'true');
      });
  }
  singOut(calback): void {
    window.localStorage.setItem('isAuthenticated', 'false');
    calback();
  }
  public isAuthenticated (): boolean {
    return Boolean(JSON.parse(window.localStorage.getItem('isAuthenticated')));
  }


}
