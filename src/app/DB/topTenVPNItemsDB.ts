import { TopTenVPN } from '@core/interface';
import { CommonService } from '@services/common.service';

export let topTenVpns: TopTenVPN[] = [
    {
        name: CommonService.getPage('cyber-ghost') ? CommonService.getPage('cyber-ghost').path : '',
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
        score: CommonService.getPage('cyber-ghost') ? CommonService.getPage('cyber-ghost').score : 0,
        offer: CommonService.getPage('cyber-ghost') ? CommonService.getPage('cyber-ghost').offer : ''
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
        offer: CommonService.getPage('nordvpn') ? CommonService.getPage('nordvpn').offer : ''
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
        offer: CommonService.getPage('privatevpn') ? CommonService.getPage('privatevpn').offer : ''
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
        offer: CommonService.getPage('surfshark') ? CommonService.getPage('surfshark').offer : ''
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
        offer: CommonService.getPage('zenmate') ? CommonService.getPage('zenmate').offer : ''
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
        offer: CommonService.getPage('purevpn') ? CommonService.getPage('purevpn').offer : ''
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
        offer: CommonService.getPage('bullguard') ? CommonService.getPage('bullguard').offer : ''
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
        offer: CommonService.getPage('panda') ? CommonService.getPage('panda').offer : ''
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
        offer: CommonService.getPage('hidemyass') ? CommonService.getPage('hidemyass').offer : ''
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
        offer: CommonService.getPage('safervpn') ? CommonService.getPage('safervpn').offer : ''
    }, {
        name: CommonService.getPage('ultravpn') ? CommonService.getPage('ultravpn').path : '',
        mainFeatures: {
            title: 'Access anything on the web, privately and securely',
            mainFeaturesList: [
                'Unlimited bandwidth',
                '100+ worldwide servers',
                '30-day money-back guarantee'
            ]
        },
        score: CommonService.getPage('ultravpn') ? CommonService.getPage('ultravpn').score : 0,
        offer: CommonService.getPage('ultravpn') ? CommonService.getPage('ultravpn').offer : ''
    }, {
        name: CommonService.getPage('tunnelbear') ? CommonService.getPage('tunnelbear').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Servers in 22 countries'
            ]
        },
        score: CommonService.getPage('tunnelbear') ? CommonService.getPage('tunnelbear').score : 0,
        offer: CommonService.getPage('tunnelbear') ? CommonService.getPage('tunnelbear').offer : ''
    }, {
        name: CommonService.getPage('perimeter81') ? CommonService.getPage('perimeter81').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('perimeter81') ? CommonService.getPage('perimeter81').score : 0,
        offer: CommonService.getPage('perimeter81') ? CommonService.getPage('perimeter81').offer : ''
    }, {
        name: CommonService.getPage('avira-phantom-vpn') ? CommonService.getPage('avira-phantom-vpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('avira-phantom-vpn') ? CommonService.getPage('avira-phantom-vpn').score : 0,
        offer: CommonService.getPage('avira-phantom-vpn') ? CommonService.getPage('avira-phantom-vpn').offer : ''
    }, {
        name: CommonService.getPage('hotspotshield') ? CommonService.getPage('hotspotshield').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('hotspotshield') ? CommonService.getPage('hotspotshield').score : 0,
        offer: CommonService.getPage('hotspotshield') ? CommonService.getPage('hotspotshield').offer : ''
    }, {
        name: CommonService.getPage('expressvpn') ? CommonService.getPage('expressvpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('expressvpn') ? CommonService.getPage('expressvpn').score : 0,
        offer: CommonService.getPage('expressvpn') ? CommonService.getPage('expressvpn').offer : ''
    }, {
        name: CommonService.getPage('mcafee-safe-connect') ? CommonService.getPage('mcafee-safe-connect').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('mcafee-safe-connect') ? CommonService.getPage('mcafee-safe-connect').score : 0,
        offer: CommonService.getPage('mcafee-safe-connect') ? CommonService.getPage('mcafee-safe-connect').offer : ''
    }, {
        name: CommonService.getPage('spyoff') ? CommonService.getPage('spyoff').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('spyoff') ? CommonService.getPage('spyoff').score : 0,
        offer: CommonService.getPage('spyoff') ? CommonService.getPage('spyoff').offer : ''
    }, {
        name: CommonService.getPage('avast') ? CommonService.getPage('avast').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('avast') ? CommonService.getPage('avast').score : 0,
        offer: CommonService.getPage('avast') ? CommonService.getPage('avast').offer : ''
    }, {
        name: CommonService.getPage('nortonwifiprivacy') ? CommonService.getPage('nortonwifiprivacy').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('nortonwifiprivacy') ? CommonService.getPage('nortonwifiprivacy').score : 0,
        offer: CommonService.getPage('nortonwifiprivacy') ? CommonService.getPage('nortonwifiprivacy').offer : ''
    }, {
        name: CommonService.getPage('vyprvpn') ? CommonService.getPage('vyprvpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('vyprvpn') ? CommonService.getPage('vyprvpn').score : 0,
        offer: CommonService.getPage('vyprvpn') ? CommonService.getPage('vyprvpn').offer : ''
    }, {
        name: CommonService.getPage('tigervpn') ? CommonService.getPage('tigervpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('tigervpn') ? CommonService.getPage('tigervpn').score : 0,
        offer: CommonService.getPage('tigervpn') ? CommonService.getPage('tigervpn').offer : ''
    }, {
        name: CommonService.getPage('surfeasy') ? CommonService.getPage('surfeasy').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('surfeasy') ? CommonService.getPage('surfeasy').score : 0,
        offer: CommonService.getPage('surfeasy') ? CommonService.getPage('surfeasy').offer : ''
    }, {
        name: CommonService.getPage('private-internet-access') ? CommonService.getPage('private-internet-access').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('private-internet-access') ? CommonService.getPage('private-internet-access').score : 0,
        offer: CommonService.getPage('private-internet-access') ? CommonService.getPage('private-internet-access').offer : ''
    }, {
        name: CommonService.getPage('ibvpn') ? CommonService.getPage('ibvpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('ibvpn') ? CommonService.getPage('ibvpn').score : 0,
        offer: CommonService.getPage('ibvpn') ? CommonService.getPage('ibvpn').offer : ''
    }, {
        name: CommonService.getPage('ghostpath') ? CommonService.getPage('ghostpath').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('ghostpath') ? CommonService.getPage('ghostpath').score : 0,
        offer: CommonService.getPage('ghostpath') ? CommonService.getPage('ghostpath').offer : ''
    }, {
        name: CommonService.getPage('vpn-one-click') ? CommonService.getPage('vpn-one-click').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('vpn-one-click') ? CommonService.getPage('vpn-one-click').score : 0,
        offer: CommonService.getPage('vpn-one-click') ? CommonService.getPage('vpn-one-click').offer : ''
    }, {
        name: CommonService.getPage('witopia') ? CommonService.getPage('witopia').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('witopia') ? CommonService.getPage('witopia').score : 0,
        offer: CommonService.getPage('witopia') ? CommonService.getPage('witopia').offer : ''
    }, {
        name: CommonService.getPage('barracuda') ? CommonService.getPage('barracuda').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('barracuda') ? CommonService.getPage('barracuda').score : 0,
        offer: CommonService.getPage('barracuda') ? CommonService.getPage('barracuda').offer : ''
    }, {
        name: CommonService.getPage('proxpn') ? CommonService.getPage('proxpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('proxpn') ? CommonService.getPage('proxpn').score : 0,
        offer: CommonService.getPage('proxpn') ? CommonService.getPage('proxpn').offer : ''
    }, {
        name: CommonService.getPage('vpnforall') ? CommonService.getPage('vpnforall').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('vpnforall') ? CommonService.getPage('vpnforall').score : 0,
        offer: CommonService.getPage('vpnforall') ? CommonService.getPage('vpnforall').offer : ''
    }, {
        name: CommonService.getPage('boxpn') ? CommonService.getPage('boxpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('boxpn') ? CommonService.getPage('boxpn').score : 0,
        offer: CommonService.getPage('boxpn') ? CommonService.getPage('boxpn').offer : ''
    }, {
        name: CommonService.getPage('torguard') ? CommonService.getPage('torguard').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('torguard') ? CommonService.getPage('torguard').score : 0,
        offer: CommonService.getPage('torguard') ? CommonService.getPage('torguard').offer : ''
    }, {
        name: CommonService.getPage('ironsocket') ? CommonService.getPage('ironsocket').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('ironsocket') ? CommonService.getPage('ironsocket').score : 0,
        offer: CommonService.getPage('ironsocket') ? CommonService.getPage('ironsocket').offer : ''
    }, {
        name: CommonService.getPage('vpn-jack') ? CommonService.getPage('vpn-jack').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('vpn-jack') ? CommonService.getPage('vpn-jack').score : 0,
        offer: CommonService.getPage('vpn-jack') ? CommonService.getPage('vpn-jack').offer : ''
    }, {
        name: CommonService.getPage('vpntunnel') ? CommonService.getPage('vpntunnel').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('vpntunnel') ? CommonService.getPage('vpntunnel').score : 0,
        offer: CommonService.getPage('vpntunnel') ? CommonService.getPage('vpntunnel').offer : ''
    }, {
        name: CommonService.getPage('junipernetworks') ? CommonService.getPage('junipernetworks').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('junipernetworks') ? CommonService.getPage('junipernetworks').score : 0,
        offer: CommonService.getPage('junipernetworks') ? CommonService.getPage('junipernetworks').offer : ''
    }, {
        name: CommonService.getPage('unblockus') ? CommonService.getPage('unblockus').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('unblockus') ? CommonService.getPage('unblockus').score : 0,
        offer: CommonService.getPage('unblockus') ? CommonService.getPage('unblockus').offer : ''
    }, {
        name: CommonService.getPage('gotrusted') ? CommonService.getPage('gotrusted').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('gotrusted') ? CommonService.getPage('gotrusted').score : 0,
        offer: CommonService.getPage('gotrusted') ? CommonService.getPage('gotrusted').offer : ''
    }, {
        name: CommonService.getPage('airvpn') ? CommonService.getPage('airvpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('airvpn') ? CommonService.getPage('airvpn').score : 0,
        offer: CommonService.getPage('airvpn') ? CommonService.getPage('airvpn').offer : ''
    }, {
        name: CommonService.getPage('my-private-network') ? CommonService.getPage('my-private-network').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('my-private-network') ? CommonService.getPage('my-private-network').score : 0,
        offer: CommonService.getPage('my-private-network') ? CommonService.getPage('my-private-network').offer : ''
    }, {
        name: CommonService.getPage('boleh-vpn') ? CommonService.getPage('boleh-vpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('boleh-vpn') ? CommonService.getPage('boleh-vpn').score : 0,
        offer: CommonService.getPage('boleh-vpn') ? CommonService.getPage('boleh-vpn').offer : ''
    }, {
        name: CommonService.getPage('limevpn') ? CommonService.getPage('limevpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('limevpn') ? CommonService.getPage('limevpn').score : 0,
        offer: CommonService.getPage('limevpn') ? CommonService.getPage('limevpn').offer : ''
    }, {
        name: CommonService.getPage('saferweb') ? CommonService.getPage('saferweb').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('saferweb') ? CommonService.getPage('saferweb').score : 0,
        offer: CommonService.getPage('saferweb') ? CommonService.getPage('saferweb').offer : ''
    }, {
        name: CommonService.getPage('secure-vpn') ? CommonService.getPage('secure-vpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('secure-vpn') ? CommonService.getPage('secure-vpn').score : 0,
        offer: CommonService.getPage('secure-vpn') ? CommonService.getPage('secure-vpn').offer : ''
    }, {
        name: CommonService.getPage('onevpn') ? CommonService.getPage('onevpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('onevpn') ? CommonService.getPage('onevpn').score : 0,
        offer: CommonService.getPage('onevpn') ? CommonService.getPage('onevpn').offer : ''
    }, {
        name: CommonService.getPage('onevpn') ? CommonService.getPage('onevpn').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('onevpn') ? CommonService.getPage('onevpn').score : 0,
        offer: CommonService.getPage('onevpn') ? CommonService.getPage('onevpn').offer : ''
    }, {
        name: CommonService.getPage('geosurf') ? CommonService.getPage('geosurf').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('geosurf') ? CommonService.getPage('geosurf').score : 0,
        offer: CommonService.getPage('geosurf') ? CommonService.getPage('geosurf').offer : ''
    }, {
        name: CommonService.getPage('betternet') ? CommonService.getPage('betternet').path : '',
        mainFeatures: {
            title: 'A simple way to protect your online privacy',
            mainFeaturesList: [
                'Unlimited data',
                'Straightforward mobile app',
                'Smooth, easy-to-use interface',
                '2,000+ servers in 140 locations'
            ]
        },
        score: CommonService.getPage('betternet') ? CommonService.getPage('betternet').score : 0,
        offer: CommonService.getPage('betternet') ? CommonService.getPage('betternet').offer : ''
    }
];
