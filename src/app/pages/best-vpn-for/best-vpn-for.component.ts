import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as templates from './templates/templates';

import * as pages from '@core/consts/pages';

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
  }
}
