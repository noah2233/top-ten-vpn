export interface TopTenVpnService {
    name: string;
    mainFeatures: { title: string, mainFeaturesList: string[] };
    score: { value: number, scroeClassArray: string[] };
    link: string;
}
