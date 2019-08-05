import { ReadMoreVPNService } from '@core/interface';

import { CommonService } from '@services/common.service';

export let ReadMoreVPNServices: ReadMoreVPNService[] = [
    {
        name: CommonService.getPage('cyber-ghost') ? CommonService.getPage('cyber-ghost').name : '',
        link: CommonService.getPage('cyber-ghost') ? CommonService.getPage('cyber-ghost').path : '',
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
        name: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').name : '',
        link: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').path : '',
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
        name: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').name : '',
        link: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').path : '',
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
