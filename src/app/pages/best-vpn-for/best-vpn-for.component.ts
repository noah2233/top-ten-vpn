import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { forEach } from 'lodash';

import * as pages from '@core/consts/pages';
import { Page, ChildGroupPage } from '@core/interface';

import { CommonService } from '@services/common.service';

@Component({
  selector: 'best-vpn-for',
  templateUrl: './best-vpn-for.component.html',
  styleUrls: ['./best-vpn-for.component.css']
})
export class BestVpnForComponent implements OnInit {
  content: any;
  constructor(
    private _router: Router,
    private _commonService: CommonService) { }

  ngOnInit() {
    this.initContent();
  }

  initContent() {
    const currentPage: Page = this.getCurrentPage();
    if (currentPage) {
      this.content = currentPage.template;
    }
  }

  getCurrentPage(): Page {
    let currentPage: Page = null;

    const that = this;
    forEach(pages, function (page: Page) {
      forEach(page.childGroupPages, function (childGroupPage: ChildGroupPage) {
        forEach(childGroupPage.pages, function (childPage: Page) {
          if (childPage.path === that._commonService.removeBackSlashFromUrl(that._router.url)) {
            currentPage = childPage;
            // end loop
            return false;
          }
        });
      });
    });

    return currentPage;
  }
}
