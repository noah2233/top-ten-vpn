import { Page } from '@core/interface';

declare var require: any;
const windowsHtml = require('@pages/best-vpn-for/templates/windows.html');
const macHtml = require('@pages/best-vpn-for/templates/mac.html');
const chromeHtml = require('@pages/best-vpn-for/templates/chrome.html');
const firefoxHtml = require('@pages/best-vpn-for/templates/firefox.html');
const androidHtml = require('@pages/best-vpn-for/templates/android.html');
const iphoneHtml = require('@pages/best-vpn-for/templates/iphone.html');
const ipadOrTabletHtml = require('@pages/best-vpn-for/templates/ipadOrTablet.html');
const appletvHtml = require('@pages/best-vpn-for/templates/appletv.html');
const smarttvHtml = require('@pages/best-vpn-for/templates/smarttv.html');
const routerHtml = require('@pages/best-vpn-for/templates/router.html');

const chinaHtml = require('@pages/best-vpn-for/templates/china.html');
const russiaHtml = require('@pages/best-vpn-for/templates/russia.html');
const ukHtml = require('@pages/best-vpn-for/templates/uk.html');
const australiaHtml = require('@pages/best-vpn-for/templates/australia.html');
const franceHtml = require('@pages/best-vpn-for/templates/france.html');

const netflixHtml = require('@pages/best-vpn-for/templates/netflix.html');
const kodiHtml = require('@pages/best-vpn-for/templates/kodi.html');
const amazonPrimeHtml = require('@pages/best-vpn-for/templates/amazonPrime.html');
const huluHtml = require('@pages/best-vpn-for/templates/hulu.html');
const bbcIPlayerHtml = require('@pages/best-vpn-for/templates/bbcIPlayer.html');
const fubotvHtml = require('@pages/best-vpn-for/templates/fubotv.html');
const directTvNowHtml = require('@pages/best-vpn-for/templates/directTvNow.html');

const onlineGamingHtml = require('@pages/best-vpn-for/templates/onlineGaming.html');
const streamingHtml = require('@pages/best-vpn-for/templates/streaming.html');
const torrentingHtml = require('@pages/best-vpn-for/templates/torrenting.html');
const sportsHtml = require('@pages/best-vpn-for/templates/sports.html');
const facebookHtml = require('@pages/best-vpn-for/templates/facebook.html');
const twitterHtml = require('@pages/best-vpn-for/templates/twitter.html');
const youtubeHtml = require('@pages/best-vpn-for/templates/youtube.html');
const telegramHtml = require('@pages/best-vpn-for/templates/telegram.html');
const businessesHtml = require('@pages/best-vpn-for/templates/businesses.html');

export const topTenVpn: Page = { name: 'Top 10 VPN', path: '/' };
export const bestVpnFor: Page = {
    name: 'Best VPN for...',
    childGroupPages: [
        {
            name: 'Devices/OS',
            pages: [
                {
                    name: 'Windows',
                    path: 'best-vpns-for-windows'
                },
                {
                    name: 'Mac',
                    path: 'best-vpns-for-mac'
                },
                {
                    name: 'Chrome',
                    path: 'best-vpns-for-google-chrome'
                },
                {
                    name: 'Firefox',
                    path: 'best-vpns-for-firefox'
                },
                {
                    name: 'Android',
                    path: 'best-vpns-for-android'
                },
                {
                    name: 'IPhone',
                    path: 'best-vpns-for-iphone'
                },
                {
                    name: 'Ipad / Tablet',
                    path: 'best-vpns-for-iPad-or-tablet'
                },
                {
                    name: 'Apple TV',
                    path: 'best-vpns-for-apple-tv'
                },
                {
                    name: 'Smart TV',
                    path: 'best-vpns-for-smart-tv'
                },
                {
                    name: 'Router',
                    path: 'best-vpns-for-router'
                }
            ]
        },
        {
            name: 'Countries',
            pages: [
                {
                    name: 'China',
                    path: 'best-vpns-for-china'
                },
                {
                    name: 'Russia',
                    path: 'best-vpns-for-russia'
                },
                {
                    name: 'UK',
                    path: 'best-vpns-for-uk'
                },
                {
                    name: 'Australia',
                    path: 'best-vpns-for-australia'
                },
                {
                    name: 'France',
                    path: 'best-vpns-for-france'
                },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                {
                    name: 'Netflix',
                    path: 'best-vpns-for-netflix'
                },
                {
                    name: 'Kodi',
                    path: 'best-vpns-for-kodi'
                },
                {
                    name: 'Amazon Prime',
                    path: 'best-vpns-for-amazon-prime'
                },
                {
                    name: 'Hulu',
                    path: 'best-vpns-for-hulu'
                },
                {
                    name: 'BBC IPlayer',
                    path: 'best-vpns-for-bbc-iplayer'
                },
                {
                    name: 'Fubo TV',
                    path: 'best-vpns-for-fubotv'
                },
                {
                    name: 'Direct TV Now',
                    path: 'best-vpns-for-directtv-now'
                },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                {
                    name: 'Online Gaming',
                    path: 'best-vpns-for-online-gaming'
                },
                {
                    name: 'Streaming',
                    path: 'best-vpns-for-streaming'
                },
                {
                    name: 'Torrenting',
                    path: 'best-vpns-for-torrenting'
                },
                {
                    name: 'Sports',
                    path: 'best-vpns-for-sports'
                },
                {
                    name: 'Facebook',
                    path: 'best-vpns-for-facebook'
                },
                {
                    name: 'Twitter',
                    path: 'best-vpns-for-twitter'
                },
                {
                    name: 'Youtube',
                    path: 'best-vpns-for-youtube'
                },
                {
                    name: 'Telegram',
                    path: 'best-vpns-for-telegram'
                },
                {
                    name: 'Businesses',
                    path: 'best-vpns-for-businesses'
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
                { name: 'CyberGhost', path: 'cyberghost', score: 9.9, offer: 'https://www.cyberghostvpn.com' },
                { name: 'NordVPN', path: 'nordvpn', score: 9.5, offer: 'https://www.nordvpn.com' },
                { name: 'PrivateVPN', path: 'privatevpn', score: 9.1, offer: 'https://www.privatevpn.com' },
                { name: 'ZenMate', path: 'zenmate', score: 9.0, offer: 'https://www.zenmate.com' },
                { name: 'SurfShark', path: 'surfshark', score: 8.8, offer: 'https://www.surfshark.com' },
                { name: 'PureVPN', path: 'purevpn', score: 8.5, offer: 'https://www.purevpn.com' },
                { name: 'BullGuard', path: 'bullguard', score: 8.3, offer: 'https://www.bullguard.com' },
                { name: 'Panda', path: 'panda', score: 8.2, offer: 'https://www.pandasecurity.com' },
                { name: 'HideMyAss', path: 'hidemyass', score: 8.0, offer: 'https://www.hidemyass.com' },
                { name: 'SaferVPN', path: 'safervpn', score: 7.9, offer: 'https://www.safervpn.com' },
                { name: 'UltraVPN', path: 'ultravpn', score: 8.6, offer: 'https://www.ultravpn.com' },
                { name: 'TunnelBear', path: 'tunnelbear', score: 8.0, offer: 'https://www.tunnelbear.com' },
                { name: 'Perimeter81', path: 'perimeter81', score: 7.0, offer: 'https://www.perimeter81.com' },
                { name: 'AviraPhantomVPN', path: 'aviraphantomvpn', score: 6.9, offer: 'https://www.avira.com' },
                { name: 'ExpressVPN', path: 'expressvpn', score: 6.6, offer: 'https://www.expressvpn.com' },
                { name: 'McAfeeSafeConnect', path: 'mcafeesafeconnect', score: 6.4, offer: 'https://www.mcafee.hsselite.com' },
                { name: 'AvastVPN', path: 'avastvpn', score: 6.3, offer: 'https://www.avast.com' },
                {
                    name: 'NortonWiFiPrivacyVPN', path: 'nortonwifiprivacyvpn', score: 6.1,
                    offer: 'http://buy-static.norton.com/norton/ps/bb/wifi/tabs_nwp_us_en_nbnf.html'
                },
                { name: 'TigerVPN', path: 'tigervpn', score: 6.0, offer: 'https://www.tigervpn.com' },
                { name: 'SurfEasy', path: 'surfeasy', score: 5.9, offer: 'https://www.surfeasy.com' },
                { name: 'HideMe', path: 'hideme', score: 5.7, offer: 'https://www.hide.me' },
                { name: 'StrongVPN', path: 'strongvpn', score: 5.6, offer: 'https://www.strongvpn.com' },
                { name: 'OverPlay', path: 'overplay', score: 5.5, offer: 'https://www.overplay.net' },
                {
                    name: 'PrivateInternetAccess', path: 'privateinternetaccess', score: 5.4,
                    offer: 'https://www.privateinternetaccess.com'
                },
                { name: 'PrivateInternetAccess', path: 'privateinternetaccess', score: 5.4, offer: 'https://www.privateinternetaccess.com' }
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
