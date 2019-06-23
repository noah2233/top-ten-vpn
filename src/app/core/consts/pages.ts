import { Page } from '@core/interface';

export const topTenVpn: Page = { name: 'Top 10 VPN', path: '/' };
export const bestVpnFor: Page = {
    name: 'Best VPN for...',
    childGroupPages: [
        {
            name: 'Devices/OS',
            pages: [
                { name: 'windows', path: 'best-vpns-for-windows' },
                { name: 'mac', path: 'best-vpns-for-mac' },
                { name: 'chrome', path: 'best-vpns-for-google-chrome' },
                { name: 'firefox', path: 'best-vpns-for-firefox' },
                { name: 'android', path: 'best-vpns-for-android' },
                { name: 'iphone', path: 'best-vpns-for-iphone' },
                { name: 'ipadOrTablet', path: 'best-vpns-for-iPad-or-tablet' },
                { name: 'appletv', path: 'best-vpns-for-apple-tv' },
                { name: 'smarttv', path: 'best-vpns-for-smart-tv' },
                { name: 'router', path: 'the-best-router-vpns' }
            ]
        },
        {
            name: 'Countries',
            pages: [
                { name: 'china', path: 'best-vpns-for-china' },
                { name: 'russia', path: 'best-vpns-for-russia' },
                { name: 'uk', path: 'best-vpns-for-uk' },
                { name: 'australia', path: 'best-vpns-for-australia' },
                { name: 'france', path: 'best-vpns-for-france' },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                { name: 'netflix', path: 'best-vpns-for-netflix' },
                { name: 'kodi', path: 'best-vpns-for-kodi' },
                { name: 'amazonPrime', path: 'best-vpns-for-amazon-prime' },
                { name: 'hulu', path: 'best-vpns-for-hulu' },
                { name: 'bbcIPlayer', path: 'best-vpns-for-bbc-iplayer' },
                { name: 'fubotv', path: 'best-vpns-for-fubotv' },
                { name: 'directTvNow', path: 'best-vpns-for-directtv-now' },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                { name: 'onlineGaming', path: 'best-vpns-for-online-gaming' },
                { name: 'streaming', path: 'best-vpns-for-streaming' },
                { name: 'torrenting', path: 'best-vpns-for-torrenting' },
                { name: 'sports', path: 'best-vpns-for-sports' },
                { name: 'facebook', path: 'best-vpns-for-facebook' },
                { name: 'twitter', path: 'best-vpns-for-twitter' },
                { name: 'youtube', path: 'best-vpns-for-youtube' },
                { name: 'telegram', path: 'best-vpns-for-telegram' },
                { name: 'businesses', path: 'best-vpns-for-businesses' }
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
