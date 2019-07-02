import { Review } from '@core/interface';

import { CommonService } from '@services/common.service';

export let Reviews: Review[] = [
    {
        name: CommonService.getPage('cyberghost') ? CommonService.getPage('cyberghost').name : '',
        path: CommonService.getPage('cyberghost') ? CommonService.getPage('cyberghost').path : '',
        title: 'Cyber Ghost Review',
        nutshell:
            `CyberGhost is a VPN service trusted by more
             than 30 million users across the world.
             Offering a safe, fast, and customizable
             VPN experience, CyberGhost delivers on
             all the right points for anyone looking
             to surf securely, break geo-restrictions,
             or stream comfortably. Add to that apps
             to fit all devices, Netflix streaming capabilities
             and a strict no logging policy, and this
             industry-award-winning service has plenty to offer.`,
        score: CommonService.getPage('cyberghost') ? CommonService.getPage('cyberghost').score : 0
    }, {
        name: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').name : '',
        path: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').path : '',
        title: 'NordVPN Review',
        nutshell:
            `NordVPN is a familiar name around the VPN
             world, and for good reason. The features
             lineup is out of this world. You've got top-level
             security with CyberSec, double VPN and TOR servers,
             strict no log policy, and up to 6 accounts supported
             with a single plan. Add to that an incredibly affordable
             monthly rate and solid reputation, and it's not hard
             to understand why NordVPN is at the top of our list.`,
        score: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').score : 0
    }, {
        name: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').name : '',
        path: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').path : '',
        title: 'PrivateVPN Review',
        nutshell:
            `Looking for a good VPN? PrivateVPN might
             be your best choice. It’s got great features,
             like 6 simultaneous connections, Mac, Windows,
             and Linux clients, and a range of protocols.
             What’s more, you really feel like PrivateVPN
             has your back, like it was built to serve you
             (unlike so many other VPN services).
             With professional and helpful customer support,
             remote setup, and a money-back guarantee,
             PrivateVPN is making a good case for itself.`,
        score: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').score : 0
    }, {
        name: CommonService.getPage('surfshark') ? CommonService.getPage('surfshark').name : '',
        path: CommonService.getPage('surfshark') ? CommonService.getPage('surfshark').path : '',
        title: 'SurfShark Review',
        nutshell:
            `While Surfshark.com is still relatively
             new on the market, the service has already
             made a name for itself. It provides high
             speeds for gaming, streaming and torrenting,
             unblocks sites such as Hulu and Netflix,
             blocks malware and ads, and protects your
             data. However, since it is still new, the
             service is a work in progress and needs
             further upgrades, such as its availability
             for Windows client, which is still in the
             beta phase of testing.`,
        score: CommonService.getPage('surfshark') ? CommonService.getPage('surfshark').score : 0
    }, {
        name: CommonService.getPage('ultravpn') ? CommonService.getPage('ultravpn').name : '',
        path: CommonService.getPage('ultravpn') ? CommonService.getPage('ultravpn').path : '',
        title: 'Ultravpn Review',
        nutshell:
            `Looking for a good VPN? PrivateVPN might
             be your best choice. It’s got great features,
             like 6 simultaneous connections, Mac, Windows,
             and Linux clients, and a range of protocols.
             What’s more, you really feel like PrivateVPN
             has your back, like it was built to serve you
             (unlike so many other VPN services).
             With professional and helpful customer support,
             remote setup, and a money-back guarantee,
             PrivateVPN is making a good case for itself.`,
        score: CommonService.getPage('ultravpn') ? CommonService.getPage('ultravpn').score : 0
    }
];
