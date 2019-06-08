import { Page } from '@core/interface';

export const topTenVpn: Page = { name: 'Top 10 VPN', path: 'top-ten-vpn' };
export const bestVpnFor: Page = {
    name: 'Best VPN for...',
    ChildGroupPages: [
        {
            name: 'Devices/OS',
            pages: [
                { name: 'Windows', path: 'windows' },
                { name: 'Mac', path: 'mac' },
                { name: 'Chrome', path: 'chrome' },
                { name: 'Firefox', path: 'firefox' },
                { name: 'Android', path: 'android' },
                { name: 'iPhone', path: 'iphone' },
                { name: 'iPad / Tablet', path: 'iPad-or-tablet' },
                { name: 'Apple TV', path: 'apple-tv' },
                { name: 'Smart TV', path: 'smart-tv' },
                { name: 'Router', path: 'router' }
            ]
        },
        {
            name: 'Countries',
            pages: [
                { name: 'China', path: 'china' },
                { name: 'Russia', path: 'russia' },
                { name: 'UK', path: 'uk' },
                { name: 'Australia', path: 'australia' },
                { name: 'France', path: 'france' },
            ]
        },
        {
            name: 'Popular Services',
            pages: [
                { name: 'Netflix', path: 'netflix' },
                { name: 'Kodi', path: 'kodi' },
                { name: 'Amazon Prime', path: 'amazon-prime' },
                { name: 'Hulu', path: 'hulu' },
                { name: 'BBC iPlayer', path: 'bbc-iplayer' },
                { name: 'FuboTV', path: 'fubotv' },
                { name: 'DirectTV Now', path: 'directtv-now' },
            ]
        },
        {
            name: 'Popular Usage',
            pages: [
                { name: 'Online Gaming', path: 'online-gaming' },
                { name: 'Streaming', path: 'streaming' },
                { name: 'Torrenting', path: 'torrenting' },
                { name: 'Sports', path: 'sports' },
                { name: 'Facebook', path: 'facebook' },
                { name: 'Twitter', path: 'twitter' },
                { name: 'YouTube', path: 'youtube' },
                { name: 'Telegram', path: 'telegram' },
                { name: 'Businesses', path: 'businesses' }
            ]
        }
    ]
};
export const vpnReviews: Page = { name: 'VPN Reviews', path: 'vpn-reviews' };
export const guides: Page = { name: 'Guides', path: 'guides' };
export const learn: Page = { name: 'Learn' };
