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
                    path: 'best-vpns-for-windows',
                    template: {
                        title: 'The Best VPNs for Windows of 2019',
                        date: 'July 1, 2019',
                        main: windowsHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/windows/best-vpns-for-windows.jpg'
                    }
                },
                {
                    name: 'Mac',
                    path: 'best-vpns-for-mac',
                    template: {
                        title: 'The 4 Best VPNs for Mac Users of 2019',
                        date: 'July 1, 2019',
                        main: macHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/mac/best-vpns-for-mac.jpg'
                    }
                },
                {
                    name: 'Chrome',
                    path: 'best-vpns-for-google-chrome',
                    template: {
                        title: 'The Best VPNs for Google Chrome of 2019',
                        date: 'July 1, 2019',
                        main: chromeHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/google-chrome/best-vpns-for-google-chrome.png'
                    }
                },
                {
                    name: 'Firefox',
                    path: 'best-vpns-for-firefox',
                    template: {
                        title: 'The Best VPNs for Mozilla Firefox of 2019',
                        date: 'March 18, 2018',
                        main: firefoxHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/firefox/best-vpns-for-firefox.png'
                    }
                },
                {
                    name: 'Android',
                    path: 'best-vpns-for-android',
                    template: {
                        title: 'The Best VPNs for Android of 2019',
                        date: 'May 8, 2019',
                        main: androidHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/android/best-vpns-for-android.jpg'
                    }
                },
                {
                    name: 'IPhone',
                    path: 'best-vpns-for-iphone',
                    template: {
                        title: 'The Best VPNs for Your iPhone of 2019',
                        date: 'March 4, 2019',
                        main: iphoneHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/iphone/best-vpns-for-iphone.jpg'
                    }
                },
                {
                    name: 'Ipad / Tablet',
                    path: 'best-vpns-for-iPad-or-tablet',
                    template: {
                        title: 'The Best VPNs for iPad of 2019',
                        date: 'March 5, 2018',
                        main: ipadOrTabletHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/iPad-or-tablet/best-vpns-for-iPad-or-tablet.jpg'
                    }
                },
                {
                    name: 'Apple TV',
                    path: 'best-vpns-for-apple-tv',
                    template: {
                        title: 'The Best VPNs for Streaming with Apple TV of 2019',
                        date: 'April 12, 2019',
                        main: appletvHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/apple-tv/best-vpns-for-apple-tv.jpg'
                    }
                },
                {
                    name: 'Smart TV',
                    path: 'best-vpns-for-smart-tv',
                    template: {
                        title: 'The Best VPNs for Smart TV of 2019',
                        date: 'March 10, 2019',
                        main: smarttvHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/smart-tv/best-vpns-for-smart-tv.jpg'
                    }
                },
                {
                    name: 'Router',
                    path: 'best-vpns-for-router',
                    template: {
                        title: 'The 5 Best VPNs for Routers',
                        date: 'July 13, 2019',
                        main: routerHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/router/best-vpns-for-router.jpg'
                    }
                }
            ]
        },
        {
            name: 'Countries',
            pages: [
                {
                    name: 'China',
                    path: 'best-vpns-for-china',
                    template: {
                        title: 'The Best VPNs for China of 2019',
                        date: 'February 21, 2019',
                        main: chinaHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/china/best-vpns-for-china.jpg'
                    }
                },
                {
                    name: 'Russia',
                    path: 'best-vpns-for-russia',
                    template: {
                        title: 'The Best VPNs for Russia of 2019',
                        date: 'April 16, 2019',
                        main: russiaHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/russia/best-vpns-for-russia.jpg'
                    }
                },
                {
                    name: 'UK',
                    path: 'best-vpns-for-uk',
                    template: {
                        title: 'The Best VPNs for UK of 2019',
                        date: 'July 1, 2019',
                        main: ukHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/uk/best-vpns-for-uk.jpg'
                    }
                },
                {
                    name: 'Australia',
                    path: 'best-vpns-for-australia',
                    template: {
                        title: 'The Best VPNs for Australia of 2019',
                        date: 'May 17, 2019',
                        main: australiaHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/australia/best-vpns-for-australia.jpg'
                    }
                },
                {
                    name: 'France',
                    path: 'best-vpns-for-france',
                    template: {
                        title: 'The Best VPNs for France of 2019',
                        date: 'June 12, 2019',
                        main: franceHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/france/best-vpns-for-france.jpg'
                    }
                },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                {
                    name: 'Netflix',
                    path: 'best-vpns-for-netflix',
                    template: {
                        title: 'The Best VPNs for Netflix of 2019',
                        date: 'January 18, 2019',
                        main: netflixHtml
                    }
                },
                {
                    name: 'Kodi',
                    path: 'best-vpns-for-kodi',
                    template: {
                        title: 'The Best VPNs for Kodi of 2019',
                        date: 'August 1, 2019',
                        main: kodiHtml
                    }
                },
                {
                    name: 'Amazon Prime',
                    path: 'best-vpns-for-amazon-prime',
                    template: {
                        title: 'The Best VPNs for Amazon Prime Video of 2019',
                        date: 'July 1, 2019',
                        main: amazonPrimeHtml
                    }
                },
                {
                    name: 'Hulu',
                    path: 'best-vpns-for-hulu',
                    template: {
                        title: 'The Best VPNs for Hulu of 2019',
                        date: 'April 23, 2019',
                        main: huluHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/hulu/best-vpns-for-hulu.jpg'
                    }
                },
                {
                    name: 'BBC IPlayer',
                    path: 'best-vpns-for-bbc-iplayer',
                    template: {
                        title: 'The Best VPNs for BBC iPlayer of 2019',
                        date: 'May 1, 2019',
                        main: bbcIPlayerHtml
                    }
                },
                {
                    name: 'Fubo TV',
                    path: 'best-vpns-for-fubotv',
                    template: {
                        title: 'The Best VPNs for fuboTV of 2019',
                        date: 'June 6, 2019',
                        main: fubotvHtml
                    }
                },
                {
                    name: 'Direct TV Now',
                    path: 'best-vpns-for-directtv-now',
                    template: {
                        title: 'The Best VPNs for DirecTV Now of 2019',
                        date: 'May 25, 2019',
                        main: directTvNowHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/directtv-now/best-vpns-for-directtv-now.jpg'
                    }
                },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                {
                    name: 'Online Gaming',
                    path: 'best-vpns-for-online-gaming',
                    template: {
                        title: 'The Best VPNs for Online Gaming of 2019',
                        date: 'March 8, 2019',
                        main: onlineGamingHtml
                    }
                },
                {
                    name: 'Streaming',
                    path: 'best-vpns-for-streaming',
                    template: {
                        title: 'The Best VPNs for Streaming of 2019',
                        date: 'April 3, 2019',
                        main: streamingHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/streaming/best-vpns-for-streaming.jpg'
                    }
                },
                {
                    name: 'Torrenting',
                    path: 'best-vpns-for-torrenting',
                    template: {
                        title: 'The Best VPNs for Torrenting of 2019',
                        date: 'January 1, 2019',
                        main: torrentingHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/torrenting/best-vpns-for-torrenting.jpg'
                    }
                },
                {
                    name: 'Sports',
                    path: 'best-vpns-for-sports',
                    template: {
                        title: 'Unblock Sporting Events With a VPN',
                        date: 'April 24, 2019',
                        main: sportsHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/sports/best-vpns-for-sports.jpg'
                    }
                },
                {
                    name: 'Facebook',
                    path: 'best-vpns-for-facebook',
                    template: {
                        title: 'The Best VPNs for Facebook of 2019',
                        date: 'April 12, 2019',
                        main: facebookHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/facebook/best-vpns-for-fb.jpg'
                    }
                },
                {
                    name: 'Twitter',
                    path: 'best-vpns-for-twitter',
                    template: {
                        title: 'The Best VPNs for Twitter of 2019',
                        date: 'April 23, 2019',
                        main: twitterHtml
                    }
                },
                {
                    name: 'Youtube',
                    path: 'best-vpns-for-youtube',
                    template: {
                        title: 'The Best VPNs for YouTube of 2019',
                        date: 'April 16, 2019',
                        main: youtubeHtml
                    }
                },
                {
                    name: 'Telegram',
                    path: 'best-vpns-for-telegram',
                    template: {
                        title: 'The Best VPNs for Telegram of 2019',
                        date: 'July 1, 2019',
                        main: telegramHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/telegram/best-vpns-for-telegram.jpg'
                    }
                },
                {
                    name: 'Businesses',
                    path: 'best-vpns-for-businesses',
                    template: {
                        title: 'The Best Business VPNs of 2019',
                        date: 'July 1, 2019',
                        main: businessesHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/businesses/best-vpns-for-businesses.jpg'
                    }
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
                { name: 'CyberGhost', path: 'cyberghost', score: 9.9 },
                { name: 'NordVPN', path: 'nordvpn', score: 9.5 },
                { name: 'PrivateVPN', path: 'privatevpn', score: 9.1 },
                { name: 'ZenMate', path: 'zenmate', score: 9.0 },
                { name: 'SurfShark', path: 'surfshark', score: 8.8 },
                { name: 'PureVPN', path: 'purevpn', score: 8.5 },
                { name: 'BullGuard', path: 'bullguard', score: 8.3 },
                { name: 'Panda', path: 'panda', score: 8.2 },
                { name: 'HideMyAss', path: 'hidemyass', score: 8.0 },
                { name: 'SaferVPN', path: 'safervpn', score: 7.9 },
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
