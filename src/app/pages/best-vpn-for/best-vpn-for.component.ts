import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BestVpnFor } from '@core/interface';

import { forEach } from 'lodash';

import { BestVpnsFor } from '@DB/bestVpnForDB';
@Component({
  selector: 'best-vpn-for',
  templateUrl: './best-vpn-for.component.html',
  styleUrls: ['./best-vpn-for.component.css']
})
export class BestVpnForComponent implements OnInit {
  content: any;
  constructor(
    private _router: Router) { }

  ngOnInit() {
    this.initContent();
  }

  initContent() {
    const currentBestVpnFor: BestVpnFor = this.getBestVpnFor(this._router.url.replace(/\//g, ''));
    if (currentBestVpnFor) {
      if (currentBestVpnFor) {
        currentBestVpnFor.main = currentBestVpnFor.main
          .replace('{{mainTitle}}', currentBestVpnFor.title)
          .replace('{{mainDate}}', currentBestVpnFor.date)
          .replace('{{mainImage}}', currentBestVpnFor.mainImage);

        this.content = currentBestVpnFor.main;
      }
    }
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
