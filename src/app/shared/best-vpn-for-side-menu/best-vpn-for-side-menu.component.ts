import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { forEach } from 'lodash';

import { BestVpnFor } from '@core/interface';

import { CommonService } from '@services/common.service';

import { BestVpnsFor } from '@DB/bestVpnForDB';
@Component({
  selector: 'best-vpn-for-side-menu',
  templateUrl: './best-vpn-for-side-menu.component.html',
  styleUrls: ['./best-vpn-for-side-menu.component.css']
})
export class BestVpnForSideMenuComponent implements OnInit {
  bestVPNForItems: BestVpnFor[] = [];
  private templatesPathAarray = [
    'best-vpns-for-windows',
    'best-vpns-for-china',
    'best-vpns-for-mac',
    'best-vpns-for-router',
    'best-vpns-for-iphone',
    'best-vpns-for-facebook',
  ];

  constructor(
    private _router: Router,
    private _commonService: CommonService) { }

  ngOnInit() {
    this.initBestVPNForItems();
  }

  initBestVPNForItems() {
    const currentBestVpnFor: BestVpnFor = this.getBestVpnFor(this._router.url.replace(/\//g, ''));

    const that = this;
    forEach(that.templatesPathAarray, function (path) {
      if (currentBestVpnFor && (path !== currentBestVpnFor.path)) {
        const bestVpnFor: BestVpnFor = that.getBestVpnFor(path);
        if (bestVpnFor) {
          that.bestVPNForItems.push(bestVpnFor);
        }
      }
    });
  }

  getBackgroundImageURL(bestVPNForItem: BestVpnFor) {
    return bestVPNForItem ? 'url(' + bestVPNForItem.mainImage + ')' : '';
    return null;
  }

  getBestVpnFor(path: string): BestVpnFor {
    let bestVpnFor: BestVpnFor;
    forEach(BestVpnsFor, function (item: BestVpnFor) {
      if (item.path === path) {
        bestVpnFor = item;
        // stop foreach
        return false;
      }
    });

    return bestVpnFor;
  }
}
