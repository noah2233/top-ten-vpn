import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page, Template } from '@core/interface';

import { CommonService } from '@services/common.service';

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
    const currentPage: Page = CommonService.getPage(this._router.url);
    if (currentPage) {
      const template: Template = currentPage.template;
      if (template) {
        template.main = template.main
          .replace('{{mainTitle}}', template.title)
          .replace('{{mainDate}}', template.date)
          .replace('{{mainImage}}', template.mainImage);

        this.content = template.main;
      }
    }
  }
}
