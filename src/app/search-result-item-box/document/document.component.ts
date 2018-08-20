import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {PublicationService} from '../../services/publication.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DocumentComponent implements OnInit {
  publication: any;

  constructor(private publicationService: PublicationService, private el: ElementRef) {
    this.publication = {};
  }

  ngOnInit() {
    this.publicationService.currentPublication.subscribe(publication => {
      this.publication = publication;
      const doc = this.el.nativeElement.children[0].getElementsByClassName('document-standalone-image-box')[0];
      doc.appendChild(publication.htmlContent);
    });
  }

}
