import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from '@core/interface';

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
    const currentPage: Page = this._commonService.getPage(this._router.url);
    if (currentPage) {
      this.content = currentPage.template;
    }
  }
}
