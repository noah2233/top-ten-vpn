import { Component, OnInit, Input } from '@angular/core';

import { forEach } from 'lodash';

import { Page } from '@core/interface';

@Component({
  selector: 'best-vpn-for-side-menu',
  templateUrl: './best-vpn-for-side-menu.component.html',
  styleUrls: ['./best-vpn-for-side-menu.component.css']
})
export class BestVpnForSideMenuComponent implements OnInit {
  @Input() currentPage: Page;
  bestVPNForItems = [];

  constructor() { }

  ngOnInit() {
    this.initBestVPNForItems();
  }

  initBestVPNForItems() {
    const templatesAarrayNames = [
      'android',
      'china',
      'onlineGaming',
      'kodi',
      'iphone',
      'chrome',
    ];

    const that = this;
    forEach(templatesAarrayNames, function (name) {
      if (name !== that.currentPage.name) {
        that.bestVPNForItems.push(that.currentPage);
      }
    });
  }
}
