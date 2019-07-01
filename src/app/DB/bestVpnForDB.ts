import { BestVpnFor } from '@core/interface';

import { CommonService } from '@services/common.service';

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

export let BestVpnsFor: BestVpnFor[] = [
    {
        name: CommonService.getPage('best-vpns-for-windows') ? CommonService.getPage('best-vpns-for-windows').name : '',
        path: CommonService.getPage('best-vpns-for-windows') ? CommonService.getPage('best-vpns-for-windows').path : '',
        title: 'The Best VPNs for Windows of 2019',
        date: 'July 1, 2019',
        main: windowsHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/windows/best-vpns-for-windows.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-mac') ? CommonService.getPage('best-vpns-for-mac').name : '',
        path: CommonService.getPage('best-vpns-for-mac') ? CommonService.getPage('best-vpns-for-mac').path : '',
        title: 'The 4 Best VPNs for Mac Users of 2019',
        date: 'July 1, 2019',
        main: macHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/mac/best-vpns-for-mac.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-google-chrome') ? CommonService.getPage('best-vpns-for-google-chrome').name : '',
        path: CommonService.getPage('best-vpns-for-google-chrome') ? CommonService.getPage('best-vpns-for-google-chrome').path : '',
        title: 'The Best VPNs for Google Chrome of 2019',
        date: 'July 1, 2019',
        main: chromeHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/google-chrome/best-vpns-for-google-chrome.png'
    },
    {
        name: CommonService.getPage('best-vpns-for-firefox') ? CommonService.getPage('best-vpns-for-firefox').name : '',
        path: CommonService.getPage('best-vpns-for-firefox') ? CommonService.getPage('best-vpns-for-firefox').path : '',
        title: 'The Best VPNs for Mozilla Firefox of 2019',
        date: 'March 18, 2018',
        main: firefoxHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/firefox/best-vpns-for-firefox.png'
    },
    {
        name: CommonService.getPage('best-vpns-for-android') ? CommonService.getPage('best-vpns-for-android').name : '',
        path: CommonService.getPage('best-vpns-for-android') ? CommonService.getPage('best-vpns-for-android').path : '',
        title: 'The Best VPNs for Android of 2019',
        date: 'May 8, 2019',
        main: androidHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/android/best-vpns-for-android.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-iphone') ? CommonService.getPage('best-vpns-for-iphone').name : '',
        path: CommonService.getPage('best-vpns-for-iphone') ? CommonService.getPage('best-vpns-for-iphone').path : '',
        title: 'The Best VPNs for Your iPhone of 2019',
        date: 'March 4, 2019',
        main: iphoneHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/iphone/best-vpns-for-iphone.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-iPad-or-tablet') ? CommonService.getPage('best-vpns-for-iPad-or-tablet').name : '',
        path: CommonService.getPage('best-vpns-for-iPad-or-tablet') ? CommonService.getPage('best-vpns-for-iPad-or-tablet').path : '',
        title: 'The Best VPNs for iPad of 2019',
        date: 'March 5, 2018',
        main: ipadOrTabletHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/iPad-or-tablet/best-vpns-for-iPad-or-tablet.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-apple-tv') ? CommonService.getPage('best-vpns-for-apple-tv').name : '',
        path: CommonService.getPage('best-vpns-for-apple-tv') ? CommonService.getPage('best-vpns-for-apple-tv').path : '',
        title: 'The Best VPNs for Streaming with Apple TV of 2019',
        date: 'April 12, 2019',
        main: appletvHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/apple-tv/best-vpns-for-apple-tv.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-smart-tv') ? CommonService.getPage('best-vpns-for-smart-tv').name : '',
        path: CommonService.getPage('best-vpns-for-smart-tv') ? CommonService.getPage('best-vpns-for-smart-tv').path : '',
        title: 'The Best VPNs for Smart TV of 2019',
        date: 'March 10, 2019',
        main: smarttvHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/smart-tv/best-vpns-for-smart-tv.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-router') ? CommonService.getPage('best-vpns-for-router').name : '',
        path: CommonService.getPage('best-vpns-for-router') ? CommonService.getPage('best-vpns-for-router').path : '',
        title: 'The 5 Best VPNs for Routers',
        date: 'July 13, 2019',
        main: routerHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/router/best-vpns-for-router.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-china') ? CommonService.getPage('best-vpns-for-china').name : '',
        path: CommonService.getPage('best-vpns-for-china') ? CommonService.getPage('best-vpns-for-china').path : '',
        title: 'The Best VPNs for China of 2019',
        date: 'February 21, 2019',
        main: chinaHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/china/best-vpns-for-china.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-russia') ? CommonService.getPage('best-vpns-for-russia').name : '',
        path: CommonService.getPage('best-vpns-for-russia') ? CommonService.getPage('best-vpns-for-russia').path : '',
        title: 'The Best VPNs for Russia of 2019',
        date: 'April 16, 2019',
        main: russiaHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/russia/best-vpns-for-russia.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-uk') ? CommonService.getPage('best-vpns-for-uk').name : '',
        path: CommonService.getPage('best-vpns-for-uk') ? CommonService.getPage('best-vpns-for-uk').path : '',
        title: 'The Best VPNs for UK of 2019',
        date: 'July 1, 2019',
        main: ukHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/uk/best-vpns-for-uk.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-australia') ? CommonService.getPage('best-vpns-for-australia').name : '',
        path: CommonService.getPage('best-vpns-for-australia') ? CommonService.getPage('best-vpns-for-australia').path : '',
        title: 'The Best VPNs for Australia of 2019',
        date: 'May 17, 2019',
        main: australiaHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/australia/best-vpns-for-australia.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-france') ? CommonService.getPage('best-vpns-for-france').name : '',
        path: CommonService.getPage('best-vpns-for-france') ? CommonService.getPage('best-vpns-for-france').path : '',
        title: 'The Best VPNs for France of 2019',
        date: 'June 12, 2019',
        main: franceHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/france/best-vpns-for-france.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-netflix') ? CommonService.getPage('best-vpns-for-netflix').name : '',
        path: CommonService.getPage('best-vpns-for-netflix') ? CommonService.getPage('best-vpns-for-netflix').path : '',
        title: 'The Best VPNs for Netflix of 2019',
        date: 'January 18, 2019',
        main: netflixHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-kodi') ? CommonService.getPage('best-vpns-for-kodi').name : '',
        path: CommonService.getPage('best-vpns-for-kodi') ? CommonService.getPage('best-vpns-for-kodi').path : '',
        title: 'The Best VPNs for Kodi of 2019',
        date: 'August 1, 2019',
        main: kodiHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-amazon-prime') ? CommonService.getPage('best-vpns-for-amazon-prime').name : '',
        path: CommonService.getPage('best-vpns-for-amazon-prime') ? CommonService.getPage('best-vpns-for-amazon-prime').path : '',
        title: 'The Best VPNs for Amazon Prime Video of 2019',
        date: 'July 1, 2019',
        main: amazonPrimeHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-hulu') ? CommonService.getPage('best-vpns-for-hulu').name : '',
        path: CommonService.getPage('best-vpns-for-hulu') ? CommonService.getPage('best-vpns-for-hulu').path : '',
        title: 'The Best VPNs for Hulu of 2019',
        date: 'April 23, 2019',
        main: huluHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/hulu/best-vpns-for-hulu.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-bbc-iplayer') ? CommonService.getPage('best-vpns-for-bbc-iplayer').name : '',
        path: CommonService.getPage('best-vpns-for-bbc-iplayer') ? CommonService.getPage('best-vpns-for-bbc-iplayer').path : '',
        title: 'The Best VPNs for BBC iPlayer of 2019',
        date: 'May 1, 2019',
        main: bbcIPlayerHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-fubotv') ? CommonService.getPage('best-vpns-for-fubotv').name : '',
        path: CommonService.getPage('best-vpns-for-fubotv') ? CommonService.getPage('best-vpns-for-fubotv').path : '',
        title: 'The Best VPNs for fuboTV of 2019',
        date: 'June 6, 2019',
        main: fubotvHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-directtv-now') ? CommonService.getPage('best-vpns-for-directtv-now').name : '',
        path: CommonService.getPage('best-vpns-for-directtv-now') ? CommonService.getPage('best-vpns-for-directtv-now').path : '',
        title: 'The Best VPNs for DirecTV Now of 2019',
        date: 'May 25, 2019',
        main: directTvNowHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/directtv-now/best-vpns-for-directtv-now.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-online-gaming') ? CommonService.getPage('best-vpns-for-online-gaming').name : '',
        path: CommonService.getPage('best-vpns-for-online-gaming') ? CommonService.getPage('best-vpns-for-online-gaming').path : '',
        title: 'The Best VPNs for Online Gaming of 2019',
        date: 'March 8, 2019',
        main: onlineGamingHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-streaming') ? CommonService.getPage('best-vpns-for-streaming').name : '',
        path: CommonService.getPage('best-vpns-for-streaming') ? CommonService.getPage('best-vpns-for-streaming').path : '',
        title: 'The Best VPNs for Streaming of 2019',
        date: 'April 3, 2019',
        main: streamingHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/streaming/best-vpns-for-streaming.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-torrenting') ? CommonService.getPage('best-vpns-for-torrenting').name : '',
        path: CommonService.getPage('best-vpns-for-torrenting') ? CommonService.getPage('best-vpns-for-torrenting').path : '',
        title: 'The Best VPNs for Torrenting of 2019',
        date: 'January 1, 2019',
        main: torrentingHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/torrenting/best-vpns-for-torrenting.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-sports') ? CommonService.getPage('best-vpns-for-sports').name : '',
        path: CommonService.getPage('best-vpns-for-sports') ? CommonService.getPage('best-vpns-for-sports').path : '',
        title: 'Unblock Sporting Events With a VPN',
        date: 'April 24, 2019',
        main: sportsHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/sports/best-vpns-for-sports.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-facebook') ? CommonService.getPage('best-vpns-for-facebook').name : '',
        path: CommonService.getPage('best-vpns-for-facebook') ? CommonService.getPage('best-vpns-for-facebook').path : '',
        title: 'The Best VPNs for Facebook of 2019',
        date: 'April 12, 2019',
        main: facebookHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/facebook/best-vpns-for-fb.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-twitter') ? CommonService.getPage('best-vpns-for-twitter').name : '',
        path: CommonService.getPage('best-vpns-for-twitter') ? CommonService.getPage('best-vpns-for-twitter').path : '',
        title: 'The Best VPNs for Twitter of 2019',
        date: 'April 23, 2019',
        main: twitterHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-youtube') ? CommonService.getPage('best-vpns-for-youtube').name : '',
        path: CommonService.getPage('best-vpns-for-youtube') ? CommonService.getPage('best-vpns-for-youtube').path : '',
        title: 'The Best VPNs for YouTube of 2019',
        date: 'April 16, 2019',
        main: youtubeHtml
    },
    {
        name: CommonService.getPage('best-vpns-for-telegram') ? CommonService.getPage('best-vpns-for-telegram').name : '',
        path: CommonService.getPage('best-vpns-for-telegram') ? CommonService.getPage('best-vpns-for-telegram').path : '',
        title: 'The Best VPNs for Telegram of 2019',
        date: 'July 1, 2019',
        main: telegramHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/telegram/best-vpns-for-telegram.jpg'
    },
    {
        name: CommonService.getPage('best-vpns-for-businesses') ? CommonService.getPage('best-vpns-for-businesses').name : '',
        path: CommonService.getPage('best-vpns-for-businesses') ? CommonService.getPage('best-vpns-for-businesses').path : '',
        title: 'The Best Business VPNs of 2019',
        date: 'July 1, 2019',
        main: businessesHtml,
        mainImage: '/assets/images/pages/best-vpn-for/templates/businesses/best-vpns-for-businesses.jpg'
    }
];
