import { Page } from '@core/interface';

export const topTenVpn: Page = { name: 'Top 10 VPN', path: '/' };
export const bestVpnFor: Page = {
    name: 'Best VPN for...',
    ChildGroupPages: [
        {
            name: 'Devices/OS',
            pages: [
                { name: 'Windows', path: 'best-vpns-for-windows' },
                { name: 'Mac', path: 'best-vpns-for-mac' },
                { name: 'Chrome', path: 'best-vpns-for-google-chrome' },
                { name: 'Firefox', path: 'best-vpns-for-firefox' },
                { name: 'Android', path: 'best-vpns-for-android' },
                { name: 'iPhone', path: 'best-vpns-for-iphone' },
                { name: 'iPad / Tablet', path: 'best-vpns-for-iPad-or-tablet' },
                { name: 'Apple TV', path: 'best-vpns-for-apple-tv' },
                { name: 'Smart TV', path: 'best-vpns-for-smart-tv' },
                { name: 'Router', path: 'the-best-router-vpns' }
            ]
        },
        {
            name: 'Countries',
            pages: [
                { name: 'China', path: 'best-vpns-for-china' },
                { name: 'Russia', path: 'best-vpns-for-russia' },
                { name: 'UK', path: 'best-vpns-for-uk' },
                { name: 'Australia', path: 'best-vpns-for-australia' },
                { name: 'France', path: 'best-vpns-for-france' },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                { name: 'Netflix', path: 'best-vpns-for-netflix' },
                { name: 'Kodi', path: 'best-vpns-for-kodi' },
                { name: 'Amazon Prime', path: 'best-vpns-for-amazon-prime' },
                { name: 'Hulu', path: 'best-vpns-for-hulu' },
                { name: 'BBC iPlayer', path: 'best-vpns-for-bbc-iplayer' },
                { name: 'FuboTV', path: 'best-vpns-for-fubotv' },
                { name: 'DirectTV Now', path: 'best-vpns-for-directtv-now' },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                { name: 'Online Gaming', path: 'best-vpns-for-online-gaming' },
                { name: 'Streaming', path: 'best-vpns-for-streaming' },
                { name: 'Torrenting', path: 'best-vpns-for-torrenting' },
                { name: 'Sports', path: 'best-vpns-for-sports' },
                { name: 'Facebook', path: 'best-vpns-for-facebook' },
                { name: 'Twitter', path: 'best-vpns-for-twitter' },
                { name: 'YouTube', path: 'best-vpns-for-youtube' },
                { name: 'Telegram', path: 'best-vpns-for-telegram' },
                { name: 'Businesses', path: 'best-vpns-for-businesses' }
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
