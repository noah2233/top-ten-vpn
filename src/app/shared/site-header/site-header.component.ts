import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as pages from '@core/consts/pages';

import { NavItem } from '@core/interface';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;

  navItems: NavItem[] = [
    { name: pages.topTenVpn.name, href: pages.topTenVpn.href },
    { name: pages.bestVpnFor.name },
    { name: pages.vpnReviews.name, href: pages.vpnReviews.href },
    { name: pages.guides.name },
    { name: pages.learn.name, href: pages.learn.href }
  ];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigate(href: string) {
    this._router.navigateByUrl(href);
   }

  isActive(navItem: NavItem) {
    return this._router.url && navItem.href && this._router.url.toLowerCase() === navItem.href.toLowerCase() ? true : false;
  }
}
