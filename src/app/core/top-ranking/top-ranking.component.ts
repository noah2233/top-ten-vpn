import { Component, OnInit } from '@angular/core';

import { TopTenVpnService } from '@core/interface';

import { topTenVpns } from '@generalDB/resources';
@Component({
  selector: 'top-ranking',
  templateUrl: './top-ranking.component.html',
  styleUrls: ['./top-ranking.component.css']
})
export class TopRankingComponent implements OnInit {
  topReankingItems: TopTenVpnService[] = [];

  constructor() { }

  ngOnInit() {
    this.initTopReankingItems();
  }

  initTopReankingItems() {
    this.topReankingItems = topTenVpns.slice(0, 3);
  }

  getTopReankingItemImage(topReankingItem: TopTenVpnService) {
    return 'url(/assets/images/vpn-services/mobile/' + topReankingItem.name + '.png)';
  }
}
