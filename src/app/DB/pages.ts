import { Page } from '@core/interface';

export const topTenVpn: Page = { name: 'Top 10 VPN', path: '/' };
export const bestVpnFor: Page = {
    name: 'Best VPN for...',
    childGroupPages: [
        {
            name: 'Devices/OS',
            pages: [
                { name: 'Windows', path: 'best-vpns-for-windows' },
                { name: 'Mac', path: 'best-vpns-for-mac' },
                {
                    name: 'Chrome', path: 'best-vpns-for-google-chrome'
                },
                {
                    name: 'Firefox', path: 'best-vpns-for-firefox'
                },
                {
                    name: 'Android', path: 'best-vpns-for-android'
                },
                {
                    name: 'IPhone', path: 'best-vpns-for-iphone'
                },
                {
                    name: 'Ipad / Tablet', path: 'best-vpns-for-iPad-or-tablet'
                },
                {
                    name: 'Apple TV', path: 'best-vpns-for-apple-tv'
                },
                {
                    name: 'Smart TV', path: 'best-vpns-for-smart-tv'
                },
                {
                    name: 'Router', path: 'best-vpns-for-router'
                }
            ]
        },
        {
            name: 'Countries',
            pages: [
                {
                    name: 'China', path: 'best-vpns-for-china'
                },
                {
                    name: 'Russia', path: 'best-vpns-for-russia'
                },
                {
                    name: 'UK', path: 'best-vpns-for-uk'
                },
                {
                    name: 'Australia', path: 'best-vpns-for-australia'
                },
                {
                    name: 'France', path: 'best-vpns-for-france'
                },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                {
                    name: 'Netflix', path: 'best-vpns-for-netflix'
                },
                {
                    name: 'Kodi', path: 'best-vpns-for-kodi'
                },
                {
                    name: 'Amazon Prime', path: 'best-vpns-for-amazon-prime'
                },
                {
                    name: 'Hulu', path: 'best-vpns-for-hulu'
                },
                {
                    name: 'BBC IPlayer', path: 'best-vpns-for-bbc-iplayer'
                },
                {
                    name: 'Fubo TV', path: 'best-vpns-for-fubotv'
                },
                {
                    name: 'Direct TV Now', path: 'best-vpns-for-directtv-now'
                },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                {
                    name: 'Online Gaming', path: 'best-vpns-for-online-gaming'
                },
                {
                    name: 'Streaming', path: 'best-vpns-for-streaming'
                },
                {
                    name: 'Torrenting', path: 'best-vpns-for-torrenting'
                },
                {
                    name: 'Sports', path: 'best-vpns-for-sports'
                },
                {
                    name: 'Facebook', path: 'best-vpns-for-facebook'
                },
                {
                    name: 'Twitter', path: 'best-vpns-for-twitter'
                },
                {
                    name: 'Youtube', path: 'best-vpns-for-youtube'
                },
                {
                    name: 'Telegram', path: 'best-vpns-for-telegram'
                },
                {
                    name: 'Businesses', path: 'best-vpns-for-businesses'
                }
            ]
        }
    ]
};
export const vpnReviews: Page = {
    name: 'VPN Reviews',
    path: 'vpn-reviews',
    childGroupPages: [
        {
            name: null,
            pages: [
                { name: 'Cyber Ghost', path: 'cyberghost', score: 9.9, offer: 'https://www.cyberghostvpn.com' },
                { name: 'NordVPN', path: 'nordvpn', score: 9.5, offer: 'https://www.nordvpn.com' },
                { name: 'PrivateVPN', path: 'privatevpn', score: 9.1, offer: 'https://www.privatevpn.com' },
                { name: 'ZenMate', path: 'zenmate', score: 9.0, offer: 'https://www.zenmate.com' },
                { name: 'SurfShark', path: 'surfshark', score: 8.8, offer: 'https://www.surfshark.com' },
                { name: 'Pure VPN', path: 'purevpn', score: 8.5, offer: 'https://www.purevpn.com' },
                { name: 'BullGuard', path: 'bullguard', score: 8.3, offer: 'https://www.bullguard.com' },
                { name: 'Panda', path: 'panda', score: 8.2, offer: 'https://www.pandasecurity.com' },
                { name: 'HideMyAss', path: 'hidemyass', score: 8.0, offer: 'https://www.hidemyass.com' },
                { name: 'SaferVPN', path: 'safervpn', score: 7.9, offer: 'https://www.safervpn.com' },
                { name: 'UltraVPN', path: 'ultravpn', score: 8.6, offer: 'https://www.ultravpn.com' },
                { name: 'TunnelBear', path: 'tunnelbear', score: 8.0, offer: 'https://www.tunnelbear.com' },
                { name: 'Perimeter 81', path: 'perimeter81', score: 7.0, offer: 'https://www.perimeter81.com' },
                { name: 'Avira Phantom VPN', path: 'aviraphantomvpn', score: 6.9, offer: 'https://www.avira.com' },
                { name: 'Hotspot Shield Elite', path: 'hotspotshieldelite', score: 6.7, offer: 'https://www.gethotspotshield.com' },
                { name: 'ExpressVPN', path: 'expressvpn', score: 6.6, offer: 'https://www.expressvpn.com' },
                { name: 'McAfee Safe Connect', path: 'mcafeesafeconnect', score: 6.4, offer: 'https://www.mcafee.hsselite.com' },
                { name: 'SpyOFF', path: 'spyoff', score: 6.4, offer: 'https://www.shop.spyoff.com' },
                { name: 'AvastVPN', path: 'avastvpn', score: 6.3, offer: 'https://www.avast.com' },
                {
                    name: 'NortonWiFiPrivacyVPN', path: 'nortonwifiprivacyvpn', score: 6.1,
                    offer: 'http://buy-static.norton.com/norton/ps/bb/wifi/tabs_nwp_us_en_nbnf.html'
                },
                { name: 'VyprVPN', path: 'vyprvpn', score: 6.1, offer: 'https://www.vyprvpn.com' },
                { name: 'TigerVPN', path: 'tigervpn', score: 6.0, offer: 'https://www.tigervpn.com' },
                { name: 'SurfEasy', path: 'surfeasy', score: 5.9, offer: 'https://www.surfeasy.com' },
                { name: 'HideMe', path: 'hideme', score: 5.7, offer: 'https://www.hide.me' },
                { name: 'IPVanish', path: 'ipvanish', score: 5.7, offer: 'https://www.ipvanish.me' },
                { name: 'Strong VPN', path: 'strongvpn', score: 5.6, offer: 'https://www.strongvpn.com' },
                { name: 'OverPlay', path: 'overplay', score: 5.5, offer: 'https://www.overplay.net' },
                {
                    name: 'Private Internet Access', path: 'privateinternetaccess', score: 5.4,
                    offer: 'https://www.privateinternetaccess.com'
                },
                {
                    name: 'Invisible Browsing VPN', path: 'invisiblebrowsingvpn', score: 5.3,
                    offer: 'https://www.ibvpn.com'
                },
                { name: 'GhostPath', path: 'ghostpath', score: 5.1, offer: 'https://www.ghostpath.com' },
                { name: 'VPN One Click', path: 'vpnoneclick', score: 5.0, offer: 'https://www.vpnoneclick.com' },
                { name: 'WiTopia', path: 'witopia', score: 5.0, offer: 'https://www.witopia.com' },
                { name: 'Barracuda', path: 'barracuda', score: 5.0, offer: 'https://www.barracuda.com' },
                { name: 'ProXPN', path: 'proxpn', score: 5.0, offer: 'https://www.secure.proxpn.com' },
                { name: 'VPN4All', path: 'vpn4all', score: 5.0, offer: 'https://www.vpn4all.com' },
                { name: 'BoxPN', path: 'boxpn', score: 5.0, offer: 'https://www.boxpn.com' },
                { name: 'TorGuard', path: 'torguard', score: 5.0, offer: 'https://www.torguard.net' },
                { name: 'IronSocket', path: 'ironsocket', score: 5.0, offer: 'https://www.hmn.ironsocket.com' },
                { name: 'VPNJack', path: 'vpnjack', score: 5.0, offer: 'https://www.vpnjack.com' },
                { name: 'VPN Tunnel', path: 'vpntunnel', score: 5.0, offer: 'https://www.vpntunnel.com' },
                { name: 'Juniper Networks', path: 'juniper', score: 5.0, offer: 'https://www.juniper.net' },
                { name: 'Unblock US', path: 'unblockus', score: 5.0, offer: 'https://www.unblock-us.com' },
                { name: 'Go Trusted', path: 'gotrusted', score: 5.0, offer: 'https://www.gotrusted.com' },
                { name: 'AirVPN', path: 'airvpn', score: 5.0, offer: 'https://www.airvpn.org' },
                { name: 'My Private Network', path: 'myprivatenetwork', score: 5.0, offer: 'https://www.my-private-network.co.uk' },
                { name: 'Boleh VPN', path: 'bolehvpn', score: 5.0, offer: 'https://www.bolehvpn.net' },
                { name: 'LimeVPN', path: 'limevpn', score: 5.0, offer: 'https://www.limevpn.com' },
                { name: 'SaferWeb', path: 'saferweb', score: 5.0, offer: 'https://www.saferweb.com' },
                { name: 'SecureVPN', path: 'securevpn', score: 5.0, offer: 'https://www.securevpn.com' },
                { name: 'OneVPN', path: 'onevpn', score: 5.0, offer: 'https://www.onevpn.com' },
                { name: 'GeoSurf', path: 'geosurf', score: 5.0, offer: 'https://www.geosurf.com' },
                { name: 'BetterNet', path: 'betternet', score: 5.0, offer: 'https://www.betternet.co' },
            ]
        }
    ]
};
// export const guides: Page = {
//     name: 'Guides',
//     path: 'guides',
//     ChildGroupPages: [
//         {
//             pages: [
//                 { name: 'How to Choose a VPN', path: 'how-to-choose-a-vpn' },
//                 { name: 'How to Surf the Web Anonymously', path: 'how-to-surf-the-web-anonymously' },
//                 { name: 'How to Unblock Minecraft', path: 'how-to-unblock-minecraft' },
//                 { name: 'How to Bypass VPN Blocks', path: 'how-to-bypass-vpn-blocks' },
//                 { name: 'Guide to Geo Spoofing', path: 'guide-to-geo-spoofing' }
//             ]
//         }
//     ]
// };
// export const learn: Page = { name: 'Learn' };
