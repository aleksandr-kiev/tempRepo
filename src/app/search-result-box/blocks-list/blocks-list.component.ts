import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {BlockService} from '../../services/block.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit {
  blocks: Array<any>;

  constructor(public el: ElementRef, private searchService: SearchService, private blockService: BlockService, private router: Router) {
    this.blocks = [];
  }
  goToBlolck(id) {
    this.blockService.getBlock(id).subscribe(response => {
      this.router.navigateByUrl('search-result-item-box/block');
    });
  }

  ngOnInit() {
    this.searchService.currentQuery.subscribe(query => {
      this.blocks = query.blocks;
    });
  }

}
