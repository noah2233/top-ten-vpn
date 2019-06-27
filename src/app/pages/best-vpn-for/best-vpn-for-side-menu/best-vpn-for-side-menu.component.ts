import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { forEach } from 'lodash';

import { Page } from '@core/interface';

import { CommonService } from '@services/common.service';

@Component({
  selector: 'best-vpn-for-side-menu',
  templateUrl: './best-vpn-for-side-menu.component.html',
  styleUrls: ['./best-vpn-for-side-menu.component.css']
})
export class BestVpnForSideMenuComponent implements OnInit {
  bestVPNForItems: Page[] = [];
  private templatesPathAarray = [
    'best-vpns-for-windows',
    'best-vpns-for-android',
    'best-vpns-for-china',
    'best-vpns-for-online-gaming',
    'best-vpns-for-kodi',
    'best-vpns-for-iphone',
    'best-vpns-for-google-chrome',
  ];

  constructor(
    private _router: Router,
    private _commonService: CommonService) { }

  ngOnInit() {
    this.initBestVPNForItems();
  }

  initBestVPNForItems() {
    const currentPage: Page = this._commonService.getPage(this._router.url);

    const that = this;
    forEach(that.templatesPathAarray, function (path) {
      if (currentPage && (path !== currentPage.path)) {
        const page: Page = that._commonService.getPage(path);
        if (page) {
          that.bestVPNForItems.push(page);
        }
      }
    });
  }
}
