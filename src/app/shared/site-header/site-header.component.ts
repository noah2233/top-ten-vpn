import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as pages from '@core/consts/pages';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;

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
