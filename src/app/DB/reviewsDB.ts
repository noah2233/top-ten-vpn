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
             industry-award-winning service has plenty to offer.`
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
             to understand why NordVPN is at the top of our list.`
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
             PrivateVPN is making a good case for itself.`
    }
];
