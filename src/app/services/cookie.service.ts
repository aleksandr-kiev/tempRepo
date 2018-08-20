import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }
  public getUser (): boolean {
    return false;
  }
  public pushToRecentQuery(query) {
    this.updateCookie(query);
  }
  public getrecentQueries (): Array<string> {
    const cookieString = this.getCookie();
    return this.recentQueriesArray(cookieString);
  }
  private getCookie() {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + 'recentQueries'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  private recentQueriesArray(string): Array<string> {
    if (string) {
      return string.split('-');
    } else {
      return [];
    }
  }
  private updateCookie(newItem) {
    const cookieString = this.getCookie();
    const cookiesArray = this.recentQueriesArray(cookieString);
    if (cookiesArray.length < 5) {
      if (cookiesArray.indexOf(newItem) === -1) {
        cookiesArray.unshift(newItem);
      }
    } else {
      if (cookiesArray.indexOf(newItem) === -1) {
        cookiesArray.unshift(newItem);
        cookiesArray.pop();
      }
    }
    this.cookieArrToString(cookiesArray) ;
  }
  private cookieArrToString (arr) {
    let result = 'recentQueries=';
    for (let i = 0; i < arr.length; i++) {
      if (i !== (arr.length - 1)) {
        result = result + arr[i] + '-';
      } else {
        result = result + arr[i];
      }
    }
    this.saveCookie(result) ;
  }
  private saveCookie(newCookie) {
    const expire = new Date;
    expire.setDate(expire.getDate() + 7);
    document.cookie = newCookie + ';' + 'expires=' + expire;
  }

}
