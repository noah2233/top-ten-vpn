import { Component, OnInit } from '@angular/core';

import { topTenVpnService } from '@core/interface';

import { orderBy } from 'lodash';

@Component({
  selector: 'top-ten-vpn',
  templateUrl: './top-ten-vpn.component.html',
  styleUrls: ['./top-ten-vpn.component.css']
})
export class TopTenVpnComponent implements OnInit {
  showAdvertisingDisclosure: boolean;
  topTenVpns: topTenVpnService[] = [];
  // scroeClassArray: string[];

  constructor() { }

  ngOnInit() {
    this.initTopTenVpns();
  }

  initTopTenVpns() {
    const topTenVpns: topTenVpnService[] = [];

    topTenVpns.push({
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
      score: { value: 9.9, scroeClassArray: this.initScroeClassArray(9.9) },
      link: 'https://www.cyberghostvpn.com'
    });

    topTenVpns.push({
      name: 'nordVPN',
      mainFeatures:
      {
        title: 'Enjoy online privacy and access without restrictions',
        mainFeaturesList: [
          'Access to Netflix',
          '80+ servers in 56 locations',
          '30-day money-back guarantee'
        ]
      },
      score: { value: 9.5, scroeClassArray: this.initScroeClassArray(9.5) },
      link: 'https://nordvpn.com'
    });

    topTenVpns.push({
      name: 'privateVPN',
      mainFeatures:
      {
        title: 'Get anonymous torrenting and free remote setup',
        mainFeaturesList: [
          'Great for small home networks',
          'No data logs',
          'Access to Netflix',
          '80+ servers in 56 locations',
          '30-day money-back guarantee'
        ]
      },
      score: { value: 9.1, scroeClassArray: this.initScroeClassArray(9.1) },
      link: 'https://privatevpn.com/'
    });

    topTenVpns.push({
      name: 'surfShark',
      mainFeatures:
      {
        title: 'Affordable VPN for all of your devices',
        mainFeaturesList: [
          'Unlimited streaming access',
          '500+ servers in 50 countries',
          '30-day money-back guarantee'
        ]
      },
      score: { value: 8.8, scroeClassArray: this.initScroeClassArray(8.8) },
      link: 'https://surfshark.com/'
    });

    topTenVpns.push({
      name: 'zenMate',
      mainFeatures:
      {
        title: 'Easy access to geo-restricted content and secure browsing',
        mainFeaturesList: [
          'Access to Netflix',
          '2,000+ servers in 140 locations',
          '31-day money back guarantee'
        ]
      },
      score: { value: 8.6, scroeClassArray: this.initScroeClassArray(8.6) },
      link: 'https://zenmate.com'
    });

    topTenVpns.push({
      name: 'pureVPN',
      mainFeatures:
      {
        title: 'Great value with unlimited bandwidth for fast downloads and privacy extras',
        mainFeaturesList: [
          'Access to Netflix',
          '2,000+ servers in 140 locations',
          '31-day money back guarantee'
        ]
      },
      score: { value: 8.3, scroeClassArray: this.initScroeClassArray(8.3) },
      link: 'https://www.purevpn.com'
    });

    topTenVpns.push({
      name: 'bullGuard',
      mainFeatures:
      {
        title: 'Enjoy total internet privacy & freedom',
        mainFeaturesList: [
          'Access to Netflix and Hulu',
          'Servers in 16 different countries',
          '100% money-back guarantee'
        ]
      },
      score: { value: 8.1, scroeClassArray: this.initScroeClassArray(8.1) },
      link: 'https://www.bullguard.com/'
    });

    topTenVpns.push({
      name: 'panda',
      mainFeatures:
      {
        title: 'Unlimited bandwidth, eal antivirus protection',
        mainFeaturesList: [
          'Access to Netflix',
          '700 servers in 36 locations',
          '30-day money-back guarantee'
        ]
      },
      score: { value: 8.0, scroeClassArray: this.initScroeClassArray(8.0) },
      link: 'https://www.pandasecurity.com'
    });

    topTenVpns.push({
      name: 'hideMyAss',
      mainFeatures:
      {
        title: 'Protect sensitive data. Fight malware and spam. Hide your online identity',
        mainFeaturesList: [
          'Built-in speed testing tool',
          '100,000 IP Adresses',
          'Best for: torrenting',
          '860 servers in 280 locations',
          '30-day money-back guarantee',
          'Access to Netflix'
        ]
      },
      score: { value: 7.8, scroeClassArray: this.initScroeClassArray(7.8) },
      link: 'https://www.hidemyass.com/'
    });

    topTenVpns.push({
      name: 'saferVPN',
      mainFeatures:
      {
        title: 'Access blocked sites and share information securely at high speeds.',
        mainFeaturesList: [
          'Smooth, easy-to-use interface',
          'Compatible with multiple devices',
          'Best for: personal use',
          '700 servers in 36 locations',
          '30-day money-back guarantee',
          'Access to Netflix'
        ]
      },
      score: { value: 7.5, scroeClassArray: this.initScroeClassArray(7.5) },
      link: 'https://www.safervpn.com'
    });

    this.topTenVpns = orderBy(topTenVpns, ['score'], ['desc']);
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

  initScroeClassArray(score: number): string[] {
    const scroeClassArray = ['', '', '', '', ''];

    for (let i = 0; i < 5; i++) {
      if (score > (i * 2)) {
        if (score > ((i * 2) + 1)) {
          scroeClassArray[i] = 'full-star';
        } else {
          scroeClassArray[i] = 'half-star';
        }
      }
    }
    return scroeClassArray;
  }

  getNumberOfStars(topTenVpn: topTenVpnService) {
    if (topTenVpn.score) {
      //
      const score = topTenVpn.score.value % 2 > 1 ? Math.ceil(topTenVpn.score.value / 2) : Math.floor(topTenVpn.score.value / 2) + 0.5;
      const numberOfStars: string = score + '/' + 5;

      return numberOfStars;
    }
  }
}
