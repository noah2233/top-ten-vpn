import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { forEach } from 'lodash';

import * as templates from './templates/templates';
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
    switch (this._commonService.removeBackSlashFromUrl(this._router.url)) {
      case pages.bestVpnFor.ChildGroupPages[0].pages[0].path:
        this.content = templates.windows;
        break;
    }

    this.content = templates[this.getTemplateName()];
  }

  getTemplateName(): string {
    let templateName = '';

    const that = this;
    forEach(pages, function (page: Page) {
      forEach(page.ChildGroupPages, function (childGroupPage: ChildGroupPage) {
        forEach(childGroupPage.pages, function (childPage: Page) {
          if (childPage.path === that._commonService.removeBackSlashFromUrl(that._router.url)) {
            templateName = childPage.name;
            return false;
          }
        });
      });
    });

    return templateName;
  }
}
