import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NgForm} from '@angular/forms';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthenticationService, private searchService: SearchService, private router: Router) { }

  onSubmit(form: NgForm) {
    // this.router.navigateByUrl('/search-empty');
    this.auth.signIn(form.value)
      .subscribe(result => {
        this.router.navigateByUrl('/search-empty');
      });
    }
  ngOnInit() {
  }

}
