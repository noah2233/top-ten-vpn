export interface ReadMoreVPNService {
    name: string;
    link: string;
    title: string;
    body: string[];
    prosAndCons: { pros: string[], cons: string[] };
}

export interface Page {
    name: string;
    path?: string;
    childGroupPages?: ChildGroupPage[];
    score?: number;
    offer?: string;
}

export interface ChildGroupPage {
    name?: string;
    pages: Page[];
}

export interface TopTenVPN {
    name: string;
    mainFeatures: { title: string, mainFeaturesList: string[] };
    score: number;
    offer: string;
}

export interface BestVpnFor {
    name: string;
    path: string;
    title: string;
    date: string;
    main: string;
    mainImage?: string;
}

