import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {PublicationService} from '../../services/publication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent implements OnInit {
  publications: Array<any>;
  constructor(private searchService: SearchService, private publicationService: PublicationService, private router: Router) {
    this.publications = [];
  }
  goToPublication(id) {
    this.publicationService.getPublication(id).subscribe(response => {
      this.router.navigateByUrl('search-result-item-box/document');
    });
  }

  ngOnInit() {
    this.searchService.currentQuery
      .subscribe(query => {
        this.publications = query.documents;
      });
  }

}
