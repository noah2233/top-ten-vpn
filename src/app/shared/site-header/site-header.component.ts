import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import * as _pages from '@DB/pages';
import { Page, ChildGroupPage } from '@core/interface';

import { orderBy } from 'lodash';
@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;
  public pages: Page[] = [];

  constructor(
    private _router: Router,
    private _renderer: Renderer2) { }

  ngOnInit() {
    this.initNavBar();
  }

  navigate(href: string) {
    this._router.navigateByUrl(href);
  }

  initNavBar() {
    this.pages.push(_pages.topTenVpn);
    this.pages.push(_pages.bestVpnFor);
    this.pages.push(this.filterTopVpnReviews(_pages.vpnReviews));
    // this.pages.push(_pages.guides);
    // this.pages.push(_pages.learn);
  }

  openNavbar() {
    this.toggleNavbar = false;
    // add overflow hidden to body
    this._renderer.addClass(document.body, 'modal-open');
  }

  closeNavbar() {
    this.toggleNavbar = true;
    // remove overflow hidden to body
    this._renderer.removeClass(document.body, 'modal-open');
  }

  filterTopVpnReviews(vpnReviews: Page) {
    const childGroupPages = vpnReviews.childGroupPages;
    const filteredVpnReviews = vpnReviews;

    if (childGroupPages && childGroupPages.length > 0) {
      filteredVpnReviews.childGroupPages[0].pages = orderBy(childGroupPages[0].pages, 'score', 'desc').slice(0, 5);
    }

    return filteredVpnReviews;
  }

}
