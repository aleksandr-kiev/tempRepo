import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../services/account.service';


@Component({
  selector: 'app-search-empty-box',
  templateUrl: './search-empty-box.component.html',
  styleUrls: ['./search-empty-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchEmptyBoxComponent implements OnInit {
  account: any;
  constructor(private authenticationService: AuthenticationService,
              private router: Router, private accountService: AccountService) { }
  signOut () {
    this.authenticationService.singOut(res => {
      this.router.navigateByUrl('/sign-in');
    });
  }
  ngOnInit() {
    this.accountService.currentAccount
      .subscribe(_account => {
        this.account = _account;
      });
  }

}
