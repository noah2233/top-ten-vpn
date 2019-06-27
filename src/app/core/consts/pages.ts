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
                    name: 'windows',
                    path: 'best-vpns-for-windows',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: windowsHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/Windows-4-image.jpg'
                    }
                },
                {
                    name: 'mac',
                    path: 'best-vpns-for-mac',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: macHtml
                    }
                },
                {
                    name: 'chrome',
                    path: 'best-vpns-for-google-chrome',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: chromeHtml
                    }
                },
                {
                    name: 'firefox',
                    path: 'best-vpns-for-firefox',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: firefoxHtml
                    }
                },
                {
                    name: 'android',
                    path: 'best-vpns-for-android',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: androidHtml
                    }
                },
                {
                    name: 'iphone',
                    path: 'best-vpns-for-iphone',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: iphoneHtml
                    }
                },
                {
                    name: 'ipadOrTablet',
                    path: 'best-vpns-for-iPad-or-tablet',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: ipadOrTabletHtml
                    }
                },
                {
                    name: 'appletv',
                    path: 'best-vpns-for-apple-tv',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: appletvHtml
                    }
                },
                {
                    name: 'smarttv',
                    path: 'best-vpns-for-smart-tv',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: smarttvHtml
                    }
                },
                {
                    name: 'router',
                    path: 'the-best-router-vpns',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: routerHtml
                    }
                }
            ]
        },
        {
            name: 'Countries',
            pages: [
                {
                    name: 'china',
                    path: 'best-vpns-for-china',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: chinaHtml
                    }
                },
                {
                    name: 'russia',
                    path: 'best-vpns-for-russia',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: russiaHtml
                    }
                },
                {
                    name: 'uk',
                    path: 'best-vpns-for-uk',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: ukHtml
                    }
                },
                {
                    name: 'australia',
                    path: 'best-vpns-for-australia',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: australiaHtml
                    }
                },
                {
                    name: 'france',
                    path: 'best-vpns-for-france',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: franceHtml
                    }
                },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                {
                    name: 'netflix',
                    path: 'best-vpns-for-netflix',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: netflixHtml
                    }
                },
                {
                    name: 'kodi',
                    path: 'best-vpns-for-kodi',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: kodiHtml
                    }
                },
                {
                    name: 'amazonPrime',
                    path: 'best-vpns-for-amazon-prime',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: amazonPrimeHtml
                    }
                },
                {
                    name: 'hulu',
                    path: 'best-vpns-for-hulu',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: huluHtml
                    }
                },
                {
                    name: 'bbcIPlayer',
                    path: 'best-vpns-for-bbc-iplayer',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: bbcIPlayerHtml
                    }
                },
                {
                    name: 'fubotv',
                    path: 'best-vpns-for-fubotv',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: fubotvHtml
                    }
                },
                {
                    name: 'directTvNow',
                    path: 'best-vpns-for-directtv-now',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: directTvNowHtml
                    }
                },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                {
                    name: 'onlineGaming',
                    path: 'best-vpns-for-online-gaming',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: onlineGamingHtml
                    }
                },
                {
                    name: 'streaming',
                    path: 'best-vpns-for-streaming',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: streamingHtml
                    }
                },
                {
                    name: 'torrenting',
                    path: 'best-vpns-for-torrenting',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: torrentingHtml
                    }
                },
                {
                    name: 'sports',
                    path: 'best-vpns-for-sports',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: sportsHtml
                    }
                },
                {
                    name: 'facebook',
                    path: 'best-vpns-for-facebook',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: facebookHtml
                    }
                },
                {
                    name: 'twitter',
                    path: 'best-vpns-for-twitter',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: twitterHtml
                    }
                },
                {
                    name: 'youtube',
                    path: 'best-vpns-for-youtube',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: youtubeHtml
                    }
                },
                {
                    name: 'telegram',
                    path: 'best-vpns-for-telegram',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: telegramHtml
                    }
                },
                {
                    name: 'businesses',
                    path: 'best-vpns-for-businesses',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: businessesHtml
                    }
                }
            ]
        }
    ]
};
// export const vpnReviews: Page = {
//     name: 'VPN Reviews',
//     path: 'vpn-reviews',
//     ChildGroupPages: [
//         {
//             pages: [
//                 { name: 'Cyber Ghost', path: 'cyber-ghost' },
//                 { name: 'NordVPN', path: 'nord-vpn' },
//                 { name: 'PrivateVPN', path: 'private-vpn' },
//                 { name: 'SurfShark', path: 'surfshark' },
//                 { name: 'ZenMate', path: 'zenmate' }
//             ]
//         }
//     ]
// };
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
