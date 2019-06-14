import { Component, OnInit } from '@angular/core';

import { TopTenVpnService, ReadMoreVPNService } from '@core/interface';

import { orderBy } from 'lodash';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AdvertisingDisclosureComponent } from '@core/advertising-disclosure/advertising-disclosure.component';

import { topTenVpns } from 'app/resources';
import { ReadMoreVPNServices } from '@pages/top-ten-vpn/db/resources';

import { CommonService } from '@services/common.service';
@Component({
  selector: 'top-ten-vpn',
  templateUrl: './top-ten-vpn.component.html',
  styleUrls: ['./top-ten-vpn.component.css']
})
export class TopTenVpnComponent implements OnInit {
  topTenVpns: TopTenVpnService[] = [];
  ReadMoreVPNServices: ReadMoreVPNService[] = [];

  constructor(
    private _ngbModal: NgbModal,
    private _commonService: CommonService) { }

  ngOnInit() {
    this.initTopTenVpns();
    this.initReadMoreVPNServices();
  }

  initTopTenVpns() {
    this.topTenVpns = orderBy(topTenVpns, ['score'], ['desc']);
  }

  initReadMoreVPNServices() {
    this.ReadMoreVPNServices = ReadMoreVPNServices;
  }

  openAdvertisingDisclosure() {
    const modalRef = this._ngbModal.open(AdvertisingDisclosureComponent);
  }

  getTopTenVpnDesktopImage(topTenVpn: TopTenVpnService) {
    return 'url(/assets/images/vpn-services/desktop/' + topTenVpn.name + '.png)';
  }

  getTopTenVpnMobileImage(topTenVpn: TopTenVpnService) {
    return 'url(/assets/images/vpn-services/mobile/' + topTenVpn.name + '.png)';
  }

  initScroeClassArray(score: number): string[] {
    return this._commonService.initScroeClassArray(score);
  }

  getNumberOfStars(topTenVpn: TopTenVpnService) {
    if (topTenVpn.score) {
      //
      const score = Math.floor(topTenVpn.score) % 2 !== 0 ?
        Math.ceil(topTenVpn.score / 2) : Math.floor(topTenVpn.score / 2) + 0.5;

      const numberOfStars: string = score + '/' + 5;

      return numberOfStars;
    }
  }

  getUpdateDate() {
    return 'May 4, 2019';
  }
}
