import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _pages from '@core/consts/pages';
import { Page } from '@core/interface';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;
  public pages: Page[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.initNavBar();
  }

  navigate(href: string) {
    this._router.navigateByUrl(href);
  }

  initNavBar() {
    this.pages.push(_pages.topTenVpn);
    this.pages.push(_pages.bestVpnFor);
    this.pages.push(_pages.vpnReviews);
    this.pages.push(_pages.guides);
    this.pages.push(_pages.learn);
  }

  closeNavbar() {
    this.toggleNavbar = true;
  }

}
