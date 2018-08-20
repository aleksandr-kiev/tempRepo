import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BlockService} from '../../services/block.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockComponent implements OnInit {
  block: any;

  constructor(private blockService: BlockService) {
    this.block = {};
    }

  ngOnInit() {
    this.blockService.currentBlock.subscribe(block => this.block = block);
  }

}
