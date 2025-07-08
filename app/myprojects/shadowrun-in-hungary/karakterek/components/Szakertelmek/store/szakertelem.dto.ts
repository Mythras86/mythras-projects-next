export interface SzakertelemDto {
    nev: string;
    key: string;
    csoport: string;
    kategoria: string;
    szint: number;
    specs: Array<Spec>;
}

export interface Spec {
    nev: string;
    szint: string;
}