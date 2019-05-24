import { Component, OnInit } from '@angular/core';

import { topTenVpnService } from '@core/interface';

@Component({
  selector: 'top-ten-vpn',
  templateUrl: './top-ten-vpn.component.html',
  styleUrls: ['./top-ten-vpn.component.css']
})
export class TopTenVpnComponent implements OnInit {
  showAdvertisingDisclosure: boolean;
  topTenVpns: topTenVpnService[] =
    [
      {
        name: 'cyberGhost',
        mainFeatures:
        {
          title: 'High-speed streaming, browsing, and gaming with complete security',
          mainFeaturesList: [
            'Access Netflix wherever you are',
            '3,700+ servers worldwide',
            '7 simultaneous connections',
            'Friendly chat and email support',
            '45-day money-back guarantee'
          ]
        },
        score: 9.9,
        link: 'https://www.cyberghostvpn.com'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

  toggleAdvertisingDisclosure() {
    this.showAdvertisingDisclosure = !this.showAdvertisingDisclosure;
  }

  closeToggleAdvertisingDisclosure() {
    this.showAdvertisingDisclosure = false;
  }

  getTopTenVpnDesktopImage(topTenVpn: topTenVpnService) {
    return 'url(/assets/images/vpn-services/desktop/' + topTenVpn.name + '.png)';
  }

  getTopTenVpnMobileImage(topTenVpn: topTenVpnService) {
    return 'url(/assets/images/vpn-services/mobile/' + topTenVpn.name + '.png)';
  }
}
