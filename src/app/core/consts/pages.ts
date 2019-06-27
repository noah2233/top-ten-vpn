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
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-windows.jpg'
                    }
                },
                {
                    name: 'mac',
                    path: 'best-vpns-for-mac',
                    template: {
                        title: 'The 4 Best VPNs for Mac Users of 2019',
                        date: 'July 1, 2019',
                        main: macHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-mac.jpg'
                    }
                },
                {
                    name: 'chrome',
                    path: 'best-vpns-for-google-chrome',
                    template: {
                        title: 'The Best VPNs for Google Chrome of 2019',
                        date: 'July 1, 2019',
                        main: chromeHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-google-chrome.jpg'
                    }
                },
                {
                    name: 'firefox',
                    path: 'best-vpns-for-firefox',
                    template: {
                        title: 'The Best VPNs for Mozilla Firefox of 2019',
                        date: 'March 18, 2018',
                        main: firefoxHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-firefox.png'
                    }
                },
                {
                    name: 'android',
                    path: 'best-vpns-for-android',
                    template: {
                        title: 'The Best VPNs for Android of 2019',
                        date: 'May 8, 2019',
                        main: androidHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-android.jpg'
                    }
                },
                {
                    name: 'iphone',
                    path: 'best-vpns-for-iphone',
                    template: {
                        title: 'The Best VPNs for Your iPhone of 2019',
                        date: 'March 4, 2019',
                        main: iphoneHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-iphone.jpg'
                    }
                },
                {
                    name: 'ipadOrTablet',
                    path: 'best-vpns-for-iPad-or-tablet',
                    template: {
                        title: 'The Best VPNs for iPad of 2019',
                        date: 'March 5, 2018',
                        main: ipadOrTabletHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-iPad-or-tablet.jpg'
                    }
                },
                {
                    name: 'appletv',
                    path: 'best-vpns-for-apple-tv',
                    template: {
                        title: 'The Best VPNs for Streaming with Apple TV of 2019',
                        date: 'April 12, 2019',
                        main: appletvHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-apple-tv.jpg'
                    }
                },
                {
                    name: 'smarttv',
                    path: 'best-vpns-for-smart-tv',
                    template: {
                        title: 'The Best VPNs for Smart TV of 2019',
                        date: 'March 10, 2019',
                        main: smarttvHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-smart-tv.jpg'
                    }
                },
                {
                    name: 'router',
                    path: 'best-vpns-for-router',
                    template: {
                        title: 'The 5 Best VPNs for Routers',
                        date: 'July 13, 2019',
                        main: routerHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-router.jpg'
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
                        title: 'The Best VPNs for China of 2019',
                        date: 'February 21, 2019',
                        main: chinaHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-china.jpg'
                    }
                },
                {
                    name: 'russia',
                    path: 'best-vpns-for-russia',
                    template: {
                        title: 'The Best VPNs for Russia of 2019',
                        date: 'April 16, 2019',
                        main: russiaHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-russia.jpg'
                    }
                },
                {
                    name: 'uk',
                    path: 'best-vpns-for-uk',
                    template: {
                        title: 'The Best VPNs for UK of 2019',
                        date: 'July 1, 2019',
                        main: ukHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-uk.jpg'
                    }
                },
                {
                    name: 'australia',
                    path: 'best-vpns-for-australia',
                    template: {
                        title: 'The Best VPNs for Australia of 2019',
                        date: 'May 17, 2019',
                        main: australiaHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-australia.jpg'
                    }
                },
                {
                    name: 'france',
                    path: 'best-vpns-for-france',
                    template: {
                        title: 'The Best VPNs for France of 2019',
                        date: 'June 12, 2019',
                        main: franceHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-france.jpg'
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
                        title: 'The Best VPNs for Netflix of 2019',
                        date: 'January 18, 2019',
                        main: netflixHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-netflix.jpg'
                    }
                },
                {
                    name: 'kodi',
                    path: 'best-vpns-for-kodi',
                    template: {
                        title: 'The Best VPNs for Kodi of 2019',
                        date: 'August 1, 2019',
                        main: kodiHtml
                    }
                },
                {
                    name: 'amazonPrime',
                    path: 'best-vpns-for-amazon-prime',
                    template: {
                        title: 'The Best VPNs for Amazon Prime Video of 2019',
                        date: 'July 1, 2019',
                        main: amazonPrimeHtml
                    }
                },
                {
                    name: 'hulu',
                    path: 'best-vpns-for-hulu',
                    template: {
                        title: 'The Best VPNs for Hulu of 2019',
                        date: 'April 23, 2019',
                        main: huluHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-hulu.jpg'
                    }
                },
                {
                    name: 'bbcIPlayer',
                    path: 'best-vpns-for-bbc-iplayer',
                    template: {
                        title: 'The Best VPNs for BBC iPlayer of 2019',
                        date: 'May 1, 2019',
                        main: bbcIPlayerHtml
                    }
                },
                {
                    name: 'fubotv',
                    path: 'best-vpns-for-fubotv',
                    template: {
                        title: 'The Best VPNs for fuboTV of 2019',
                        date: 'June 6, 2019',
                        main: fubotvHtml
                    }
                },
                {
                    name: 'directTvNow',
                    path: 'best-vpns-for-directtv-now',
                    template: {
                        title: 'The Best VPNs for DirecTV Now of 2019',
                        date: 'May 25, 2019',
                        main: directTvNowHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-directtv-now.jpg'
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
                        title: 'The Best VPNs for Online Gaming of 2019',
                        date: 'March 8, 2019',
                        main: onlineGamingHtml
                    }
                },
                {
                    name: 'streaming',
                    path: 'best-vpns-for-streaming',
                    template: {
                        title: 'The Best VPNs for Streaming of 2019',
                        date: 'April 3, 2019',
                        main: streamingHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-streaming.jpg'
                    }
                },
                {
                    name: 'torrenting',
                    path: 'best-vpns-for-torrenting',
                    template: {
                        title: 'The Best VPNs for Torrenting of 2019',
                        date: 'January 1, 2019',
                        main: torrentingHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-torrenting.jpg'
                    }
                },
                {
                    name: 'sports',
                    path: 'best-vpns-for-sports',
                    template: {
                        title: 'Unblock Sporting Events With a VPN',
                        date: 'April 24, 2019',
                        main: sportsHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-sports.jpg'
                    }
                },
                {
                    name: 'facebook',
                    path: 'best-vpns-for-facebook',
                    template: {
                        title: 'The Best VPNs for Facebook of 2019',
                        date: 'April 12, 2019',
                        main: facebookHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-facebook.jpg'
                    }
                },
                {
                    name: 'twitter',
                    path: 'best-vpns-for-twitter',
                    template: {
                        title: 'The Best VPNs for Twitter of 2019',
                        date: 'April 23, 2019',
                        main: twitterHtml
                    }
                },
                {
                    name: 'youtube',
                    path: 'best-vpns-for-youtube',
                    template: {
                        title: 'The Best VPNs for YouTube of 2019',
                        date: 'April 16, 2019',
                        main: youtubeHtml
                    }
                },
                {
                    name: 'telegram',
                    path: 'best-vpns-for-telegram',
                    template: {
                        title: 'The Best VPNs for Telegram of 2019',
                        date: 'July 1, 2019',
                        main: telegramHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-telegram.jpg'
                    }
                },
                {
                    name: 'businesses',
                    path: 'best-vpns-for-businesses',
                    template: {
                        title: 'The Best Business VPNs of 2019',
                        date: 'July 1, 2019',
                        main: businessesHtml,
                        mainImage: '/assets/images/pages/best-vpn-for/templates/best-vpns-for-businesses.jpg'
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
