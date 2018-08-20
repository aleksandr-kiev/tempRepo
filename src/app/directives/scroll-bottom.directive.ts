import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {SearchService} from '../services/search.service';

@Directive({
  selector: '[appScrollBottom]'
})
export class ScrollBottomDirective implements OnDestroy {
  @Output() scrollPosition: EventEmitter<number> = new EventEmitter<number>
  ();

  private scrollEvent$;
  private canEmit: boolean;

  constructor(private el: ElementRef, private searchService: SearchService) {
    this.canEmit = true;
    this.scrollEvent$ = Observable.fromEvent(this.el.nativeElement,
      'scroll').subscribe((e: any) => {
        const listBody: any = document.getElementsByClassName('result-box-container')[0];
        const itemsBox: any = document.getElementsByClassName('search-result-box')[0];
      if ((window.innerHeight) >= ((listBody.offsetHeight + 79) - itemsBox.scrollTop) && this.canEmit) {
        this.canEmit = false;
        this.searchService.nextQuery().subscribe(res => this.canEmit = true);
      }
    });
  }

  ngOnDestroy() {
    this.scrollEvent$.unsubscribe();
  }
}
