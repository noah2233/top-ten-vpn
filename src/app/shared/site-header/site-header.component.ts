import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as pages from '@core/consts/pages';

// import { NavGroup, NavItem } from '@core/interface';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;

  menuItems = {
    NavItems: [
      { title: pages.topTenVpn.title, href: pages.topTenVpn.href },
      {
        title: pages.bestVpnFor.title,
        NavItemGroups: [{
          title: pages.bestVpnFor.devicesOrOs.title,
          SubNavItems: [
            { title: pages.bestVpnFor.devicesOrOs.windows.title, href: pages.bestVpnFor.devicesOrOs.windows.href },
            { title: pages.bestVpnFor.devicesOrOs.mac.title, href: pages.bestVpnFor.devicesOrOs.mac.href },
            { title: pages.bestVpnFor.devicesOrOs.chrome.title, href: pages.bestVpnFor.devicesOrOs.chrome.href },
            { title: pages.bestVpnFor.devicesOrOs.firefox.title, href: pages.bestVpnFor.devicesOrOs.firefox.href },
            { title: pages.bestVpnFor.devicesOrOs.android.title, href: pages.bestVpnFor.devicesOrOs.android.href },
            { title: pages.bestVpnFor.devicesOrOs.iphone.title, href: pages.bestVpnFor.devicesOrOs.iphone.href },
            { title: pages.bestVpnFor.devicesOrOs.ipadOrTabled.title, href: pages.bestVpnFor.devicesOrOs.ipadOrTabled.href },
            { title: pages.bestVpnFor.devicesOrOs.appleTV.title, href: pages.bestVpnFor.devicesOrOs.appleTV.href },
            { title: pages.bestVpnFor.devicesOrOs.smartTV.title, href: pages.bestVpnFor.devicesOrOs.smartTV.href },
            { title: pages.bestVpnFor.devicesOrOs.router.title, href: pages.bestVpnFor.devicesOrOs.router.href }
          ],
        },
        { title: pages.bestVpnFor.countries.title, SubNavItems: [] },
        { title: pages.bestVpnFor.popularServices.title, SubNavItems: [] },
        { title: pages.bestVpnFor.popularUsage.title, SubNavItems: [] }
        ]
      },
      { title: pages.vpnReviews.title },
      { title: pages.guides.title },
      { title: pages.learn.title, href: pages.learn.href }
    ]
  };

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigate(href: string) {
    this._router.navigateByUrl(href);
  }

  // isActive(href: string) {
  //   return this._router.url && href && this._router.url.toLowerCase() === href.toLowerCase() ? true : false;
  // }
}
