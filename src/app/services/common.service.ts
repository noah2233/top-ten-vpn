import { Injectable } from '@angular/core';

import * as pages from '@DB/pages';
import { Page, ChildGroupPage } from '@core/interface';

import { forEach } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  static getPage(pagePath: string): Page {
    let page: Page = null;

    const that = this;
    forEach(pages, function (pageItem: Page) {
      forEach(pageItem.childGroupPages, function (childGroupPage: ChildGroupPage) {
        forEach(childGroupPage.pages, function (childPage: Page) {
          if (childPage.path === pagePath.replace(/\//g, '')) {
            page = childPage;
            // end loop
            return false;
          }
        });
      });
    });

    return page;
  }

  // static removeBackSlashFromUrl(url: string) {
  //   return url.replace(/\//g, '');
  // }

  initScroeClassArray(score: number): string[] {
    const scroeClassArray = ['', '', '', '', ''];

    for (let i = 0; i < 5; i++) {
      if (score >= (i * 2)) {
        if (score >= ((i * 2) + 1)) {
          scroeClassArray[i] = 'full-star';
        } else {
          scroeClassArray[i] = 'half-star';
        }
      }
    }
    return scroeClassArray;
  }
}
