import { Component, OnInit } from '@angular/core';

import { TopTenVPN } from '@core/interface';

import { topTenVpns } from '@DB/topTenVPNItemsDB';

import { CommonService } from '@services/common.service';
@Component({
  selector: 'top-ranking',
  templateUrl: './top-ranking.component.html',
  styleUrls: ['./top-ranking.component.css']
})
export class TopRankingComponent implements OnInit {
  topReankingItems: TopTenVPN[] = [];

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.initTopReankingItems();
  }

  initTopReankingItems() {
    this.topReankingItems = topTenVpns.slice(0, 3);
  }

  getTopReankingItemImage(topReankingItem: TopTenVPN) {
    return 'url(/assets/images/vpn-services/mobile/' + topReankingItem.name + '.png)';
  }

  initScroeClassArray(score: number): string[] {
    return this._commonService.initScroeClassArray(score);
  }
}
