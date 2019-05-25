export interface TopTenVpnService {
    name: string;
    mainFeatures: { title: string, mainFeaturesList: string[] };
    score: { value: number, scroeClassArray: string[] };
    link: string;
}

export interface ReadMoreVPNService {
    name: string;
    link: string;
    title: string;
    body: string[];
    prosAndCons: { pros: string[], cons: string[] };
}
