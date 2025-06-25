import mongoose from "mongoose";

interface KarakterModel extends mongoose.Document {
    // Tulajdonos
    tulajdonosEmail: string,
    letrehozasDatum: string,
    
    // Karakter adatok
    partik: Array<any>,
    sztorik: Array<any>,
    eletutak: Array<any>,
    verzio: number,

    // Örökség
    szuletesiNev: string,
    szuletesiNem: string,
    szuletesiDatum: string,
    dns: string,
    anyanyelv: string,
    kepessegek: Array<string>,

    // Jellemzők
    becenev:string,
    alnev:string,
    testalkat:string,
    hajstilus:string,
    szakall:string,
    latszolagosNem: string,
    magassag:number,
    testsuly:number,
    szemszin:string,
    hajszin:string,
    szorszin:string,
    borszin:string,
    felelem:string,
    osztonzo:string,
    gyulolet:string,
    kedvencszin:string,
    irtozat:string,
    vonzalom:string,

    //Erőforrások
    karmaAlap:number,
    karmaKapott:number,
    karmaFelhasznalt:number,
    tokeAlap:number,
    tokeKapott:number,
    tokeFelhasznalt:number,
    atvaltas: number

    // Tulajdonságok
    //fizikai
    fizEro: number,
    fizGyo: number,
    fizUgy: number,
    fizAll: number,
    //szellemi
    asztEro: number,
    asztGyo: number,
    asztUgy: number,
    asztAll: number,
    //speciális
    esszencia: number,
    magia: number,
    chi: number,
    kockatartalek: number,

    // Eszközök
    eszkozok: Array<any>
}

const KarakterSchema = new mongoose.Schema<KarakterModel>({
    // Tulajdonos
    tulajdonosEmail: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    letrehozasDatum: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    
    // Karakter adatok
    partik: {
        type : [String] , "default" : []
    },
    sztorik: {
        type : [String] , "default" : []
    },
    eletutak: {
        type : [String] , "default" : []
    },
    verzio: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },

    // Örökség
    szuletesiNev: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    szuletesiNem: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    szuletesiDatum: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    dns: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    anyanyelv: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    kepessegek: Array<string>,

    // Jellemzők
    becenev: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    alnev: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    testalkat: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    hajstilus: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    szakall: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    latszolagosNem: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    magassag: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    testsuly: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    szemszin: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    hajszin: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    szorszin: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    borszin: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    felelem: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    osztonzo: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    gyulolet: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    kedvencszin: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    irtozat: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },
    vonzalom: {
        type: String,
        required: [true, 'Kötelező kitölteni'],
    },

    //Erőforrások
    karmaAlap: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    karmaKapott: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    karmaFelhasznalt: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    tokeAlap: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    tokeKapott: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    tokeFelhasznalt: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    atvaltas: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },

    // Tulajdonságok
    //fizikai
    fizEro: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    fizGyo: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    fizUgy: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    fizAll: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    //szellemi
    asztEro: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    asztGyo: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    asztUgy: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    asztAll: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    //speciális
    esszencia: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    magia: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    chi: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },
    kockatartalek: {
        type: Number,
        required: [true, 'Kötelező kitölteni'],
    },

    // Eszközök
    eszkozok: {
        type : [String] , "default" : []
    },

});

const Karakter = mongoose.models?.Karakter || mongoose.model<KarakterModel>("Karakter", KarakterSchema);
export default Karakter;