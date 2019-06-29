import { TopTenVPNItem } from '@core/interface';
import * as pages from '@DB/pages';
import { CommonService } from '@services/common.service';

export let topTenVpns: TopTenVPNItem[] = [
    {
        name: CommonService.getPage('cyberghost') ? CommonService.getPage('cyberghost').path : '',
        mainFeatures: {
            title: 'High-speed streaming, browsing, and gaming with complete security',
            mainFeaturesList: [
                'Access Netflix wherever you are',
                '3,700+ servers worldwide',
                '7 simultaneous connections',
                'Friendly chat and email support',
                '45-day money-back guarantee'
            ]
        },
        score: CommonService.getPage('cyberghost') ? CommonService.getPage('cyberghost').score : 0,
        link: 'https://www.cyberghostvpn.com'
    }, {
        name: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').path : '',
        mainFeatures: {
            title: 'Enjoy online privacy and access without restrictions',
            mainFeaturesList: [
                'Access to Netflix',
                '80+ servers in 56 locations',
                '30-day money-back guarantee'
            ]
        },
        score: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').score : 0,
        link: 'https://www.nordvpn.com'
    }, {
        name: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').path : '',
        mainFeatures: {
            title: 'Get anonymous torrenting and free remote setup',
            mainFeaturesList: [
                'Great for small home networks',
                'No data logs',
                'Access to Netflix',
                '80+ servers in 56 locations',
                '30-day money-back guarantee'
            ]
        },
        score: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').score : 0,
        link: 'https://www.privatevpn.com'
    }, {
        name: CommonService.getPage('surfshark') ? CommonService.getPage('surfshark').path : '',
        mainFeatures: {
            title: 'Affordable VPN for all of your devices',
            mainFeaturesList: [
                'Unlimited streaming access',
                '500+ servers in 50 countries',
                '30-day money-back guarantee'
            ]
        },
        score: CommonService.getPage('surfshark') ? CommonService.getPage('surfshark').score : 0,
        link: 'https://www.surfshark.com'
    }, {
        name: CommonService.getPage('zenmate') ? CommonService.getPage('zenmate').path : '',
        mainFeatures: {
            title: 'Easy access to geo-restricted content and secure browsing',
            mainFeaturesList: [
                'Access to Netflix',
                '2,000+ servers in 140 locations',
                '31-day money back guarantee'
            ]
        },
        score: CommonService.getPage('zenmate') ? CommonService.getPage('zenmate').score : 0,
        link: 'https://www.zenmate.com'
    }, {
        name: CommonService.getPage('purevpn') ? CommonService.getPage('purevpn').path : '',
        mainFeatures: {
            title: 'Great value with unlimited bandwidth for fast downloads and privacy extras',
            mainFeaturesList: [
                'Access to Netflix',
                '2,000+ servers in 140 locations',
                '31-day money back guarantee'
            ]
        },
        score: CommonService.getPage('purevpn') ? CommonService.getPage('purevpn').score : 0,
        link: 'https://www.purevpn.com'
    }, {
        name: CommonService.getPage('bullguard') ? CommonService.getPage('bullguard').path : '',
        mainFeatures: {
            title: 'Enjoy total internet privacy & freedom',
            mainFeaturesList: [
                'Access to Netflix and Hulu',
                'Servers in 16 different countries',
                '100% money-back guarantee'
            ]
        },
        score: CommonService.getPage('bullguard') ? CommonService.getPage('bullguard').score : 0,
        link: 'https://www.bullguard.com'
    }, {
        name: CommonService.getPage('panda') ? CommonService.getPage('panda').path : '',       
        mainFeatures: {
            title: 'Unlimited bandwidth, eal antivirus protection',
            mainFeaturesList: [
                'Access to Netflix',
                '700 servers in 36 locations',
                '30-day money-back guarantee'
            ]
        },
        score: CommonService.getPage('panda') ? CommonService.getPage('panda').score : 0,
        link: 'https://www.pandasecurity.com'
    }, {
        name: CommonService.getPage('hidemyass') ? CommonService.getPage('hidemyass').path : '',
        mainFeatures: {
            title: 'Protect sensitive data. Fight malware and spam. Hide your online identity',
            mainFeaturesList: [
                'Built-in speed testing tool',
                '100,000 IP Adresses',
                'Best for: torrenting',
                '860 servers in 280 locations',
                '30-day money-back guarantee',
                'Access to Netflix'
            ]
        },
        score: CommonService.getPage('hidemyass') ? CommonService.getPage('hidemyass').score : 0,
        link: 'https://www.hidemyass.com'
    }, {
        name: CommonService.getPage('safervpn') ? CommonService.getPage('safervpn').path : '',
        mainFeatures: {
            title: 'Access blocked sites and share information securely at high speeds.',
            mainFeaturesList: [
                'Smooth, easy-to-use interface',
                'Compatible with multiple devices',
                'Best for: personal use',
                '700 servers in 36 locations',
                '30-day money-back guarantee',
                'Access to Netflix'
            ]
        },
        score: CommonService.getPage('safervpn') ? CommonService.getPage('safervpn').score : 0,
        link: 'https://www.safervpn.com'
    }
];
