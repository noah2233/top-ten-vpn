import { Component, OnInit } from '@angular/core';

import { TopTenVpnService, ReadMoreVPNService } from '@core/interface';

import { orderBy } from 'lodash';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AdvertisingDisclosureComponent } from '@core/advertising-disclosure/advertising-disclosure.component';
@Component({
  selector: 'top-ten-vpn',
  templateUrl: './top-ten-vpn.component.html',
  styleUrls: ['./top-ten-vpn.component.css']
})
export class TopTenVpnComponent implements OnInit {
  topTenVpns: TopTenVpnService[] = [];
  ReadMoreVPNServices: ReadMoreVPNService[] = [
    {
      name: 'cyberGhost',
      link: 'https://www.cyberghostvpn.com',
      title: 'CyberGhost - Hide Your IP and Access an Open Internet',
      body: [
        `There’s a lot to say about CyberGhost’s VPN service. For starters, it’s got great speeds
      and performed stupendously on every speed test.In fact, CyberGhost touts an average of
      47 Mbps globally.That’s a great average.What’s more, this company allows you to access
      Netflix and other popular TV and movie streaming sites, so you can enjoy HD streaming
      from anywhere.`,
        `We like CyberGhost’s competitive pricing plans that offer you a single month for $11.99,
        but quickly heaps on the savings for bulk month ordering. For 6 months, you'll save 58%,
        and for 12 months, you'll get a 77% savings! But, that isn't even the most impressive
        part. In addition to low pricing, CyberGhost has a 30-day money-back guarantee, which is
        certainly nice, but it gets better. If you are super commitment-phobic, you can try out
        CyberGhost totally free for 7 days. No questions asked.`,
        `In case privacy is important to you, CyberGhost has you covered. For one thing, it has a
        no logging policy, and when it says no logs, it means it. There is no logging of any of
        your online activity at any time.`
      ],
      prosAndCons: {
        pros: [`Apps are mobile-friendly`, `Anti-fingerprinting system`, `Fast connections and good pricing model`],
        cons: [`No email or phone support; only chat`, `Popular servers can have heavy traffic`]
      }
    },
    {
      name: 'nordVPN',
      link: 'https://www.nordvpn.com',
      title: 'NordVPN - Complete Privacy Plus Advanced Security',
      body: [
        `NordVPN may not have the number one spot, but it is a very close second. In fact, there
      are some areas that it might even pull ahead of its rival ExpressVPN for the coveted
      crown. For starters, it is super easy to use, allows torrenting, and ranks highly on all
      speed tests. That already makes NordVPN an attractive option, but its fabulously low
      monthly pricing plan really seals the deal for most people.`,
        `NordVPN has a lot of excellent feature members love. For example, you get top of the
        line security features from this company including a kill switch that automatically
        shuts down your session when the connection is not secure. You can choose between a
        single app kill switch or a full system kill switch, too. NordVPN also offers IP hiding,
        so your identity is safe with them. Don’t forget the double VPN servers that encrypt
        your data twice for added security.`,
        `NordVPN also gives you up to 6 simultaneous connections, so you don’t have to worry that
        your daughter, roommate, or co-worker is eating up all of your streaming time. Possibly
        the most impressive fact is that NordVPN sports a whopping 3,350 servers across 64
        countries. Wow! Find out how NordVPN can help you stay secure and surf happily today.`],
      prosAndCons: {
        pros: [
          `Double encryption standards with 6 simultaneous devices,`,
          `1-click installation plus live customer support`,
          `Offers dedicated, dynamic, and static IP addresses`,
          `Automatic kill switch`
        ],
        cons: [
          `Android and iOS app speed can be patchy`,
          `Some extensions are not free`
        ]
      }
    },
    {
      name: 'privateVPN',
      link: 'https://www.privatevpn.com',
      title: 'PrivateVPN - Unblock Geo-Restricted Content',
      body: [`PrivateVPN is all about keeping your internet behavior open and easy. It's great for
      anonymous torrenting, being very peer-to-peer friendly. PrivateVPN has strong and simple
      iOS and Android mobile apps that work seamlessly in the background.`],
      prosAndCons: {
        pros: [`Apps available for iOS and Android`, `No data logging plus live customer support`],
        cons: [`Less server locations than some competitors`, `Customer support can be slow`]
      }
    }
  ];

  constructor(private _ngbModal: NgbModal) { }

  ngOnInit() {
    this.initTopTenVpns();
  }

  initTopTenVpns() {
    const topTenVpns: TopTenVpnService[] = [];

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
      score: 9.9,
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
      score: 9.5,
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
      score: 9.1,
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
      score: 8.8,
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
      score: 8.6,
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
      score: 8.3,
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
      score: 8.1,
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
      score: 8.0,
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
      score: 7.8,
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
      score: 7.5,
      link: 'https://www.safervpn.com'
    });

    this.topTenVpns = orderBy(topTenVpns, ['score'], ['desc']);
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
