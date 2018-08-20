import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';
import {BlockService} from '../../services/block.service';
import {MapService} from '../../services/map.service';
import {PublicationService} from '../../services/publication.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {
  items: Array<any>;

  constructor(private searchService: SearchService, private blockService: BlockService, private mapSevice: MapService,
              private publicationService: PublicationService, private router: Router) {
    this.items = [];
  }
  goToItem(id, type) {
    switch (type) {
      case 'publication':
        this.publicationService.getPublication(id).subscribe(response => {
          this.router.navigateByUrl('search-result-item-box/document');
        });
        break;
      case 'map':
        this.mapSevice.getMap(id).subscribe(response => {
          this.router.navigateByUrl('search-result-item-box/map');
        });
        break;
      case 'block':
        this.blockService.getBlock(id).subscribe(response => {
          this.router.navigateByUrl('search-result-item-box/block');
        });
        break;
      default :
        console.log('def');
    }
  }

  ngOnInit() {
    this.searchService.currentQuery
      .subscribe(query => {
        this.items = [];
        const publicationsList = query.documents;
        for (let newPublication of publicationsList) {
          this.items.push(this.markItem(newPublication, 'publication'));
        }

        const mapsList = query.maps;
        for (let newMap of mapsList){
          this.items.push(this.markItem(newMap, 'map'));
        }

        const blocksList = query.blocks;
        for (let newBlock of blocksList){
          this.items.push(this.markItem(newBlock, 'block'));
        }
    });
  }
  private markItem(elem: any, mark: string) {
    elem.type = mark;
    return elem;
  }


}
