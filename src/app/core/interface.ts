export interface TopTenVpnService {
    name: string;
    mainFeatures: { title: string, mainFeaturesList: string[] };
    score: number;
    link: string;
}

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
    template?: Template;
}

export interface ChildGroupPage {
    name?: string;
    pages: Page[];
}

export interface Template {
    title: string;
    date: string;
    main: string;
    mainImage?: string;
}
